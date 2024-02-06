import { TestStep } from "../scenarios/TestStep";

export interface TestInfo {
  steps: TestStep[];
  name: string;
}
