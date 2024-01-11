import { scenarios } from "../../scenarios/Scenarios";
import { TestResult } from "../../types";

export async function runScenarios(): Promise<TestResult[]> {
  const results: TestResult[] = [];
  for (const testcase of scenarios.testcases)
    results.push(await runScenario(testcase));
}
