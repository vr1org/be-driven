import { TestStep, TestStepType } from "../../scenarios/TestStep";
import { Assertion, RunnerOptions, StepResult, StepResultStatus, TestInfo, TestResult } from "../../types";
import { TestContext } from "./TestContext";

export async function runScenario(testcase: TestInfo, options: RunnerOptions): Promise<TestResult> {
  const testContext = new TestContext();
  const result: TestResult = {
    testName: testcase.name,
    steps: [],
    passed: true
  };

  for (const step of testcase.steps) {
    if (!shouldContinueTest(result, step)) {
      continue;
    }
    await runStep(step, testContext, result);
  }

  result.passed = result.steps.every(s => s.status === StepResultStatus.passed);
  return result;
}

async function runStep(step: TestStep, testContext: TestContext, result: TestResult): Promise<void> {
  testContext.currentStep = { step, status: StepResultStatus.notExecuted, assertions: [] }
  try {
    await step.action.call(testContext, ...step.parameters);
  } catch (er) {
    const assertion: Assertion = {
      passed: false,
      text: er.message ?? `Test step failed with exception: ${er}`
    };
    testContext.currentStep.assertions.push(assertion);
  }
  testContext.currentStep.status = testContext.currentStep.assertions.find(a => a.passed === false)
    ? StepResultStatus.failed
    : StepResultStatus.passed;
  result.steps.push(testContext.currentStep);

}

function shouldContinueTest(result: TestResult, step: TestStep): boolean {
  if (result.steps.every(s => s.status === StepResultStatus.passed)) return true;

  return step.type === TestStepType.then
    && stepsSinceFailure(result).every(s => s.step.type === TestStepType.then);
}

function stepsSinceFailure(result: TestResult): StepResult[] {
  const index = result.steps.findIndex(s => s.status !== StepResultStatus.passed);
  return result.steps.slice(index);
}
