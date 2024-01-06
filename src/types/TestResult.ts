import { TestStep } from "../scenarios/TestStep";
import { Assertion } from "./Assertion";

export interface TestResult {
  testName: string;
  passed: boolean;
  steps: StepResult[];
}

export interface StepResult {
  step: TestStep;
  passed: boolean;
  assertions: Assertion[];
}


