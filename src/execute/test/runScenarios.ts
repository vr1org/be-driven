import { scenarios } from "../../scenarios/Scenarios";
import { TestResult } from "../../types";
import { runScenario } from "./runScenario";

export async function runScenarios(options: RunnerOptions): Promise<TestResult[]> {
  const results: TestResult[] = [];
  for (const testcase of scenarios.testcases)
    results.push(await runScenario(testcase, options));
  return results;
}
