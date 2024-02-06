import { RunnerOptions, TestResult } from "../types";
import { runScenarios } from "./test/runScenarios";

export async function execute(files: string[], options: RunnerOptions): Promise<TestResult[]> {
  if (files.length > 0) await Promise.all(files.map(file => import(file)));
  var results = await runScenarios(options);
  files.forEach(file => {
    delete require.cache[require.resolve(file)];
  });
  return results;
}
