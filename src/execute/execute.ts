import { RunnerOptions, TestResult } from "../types";
import { runScenarios } from "./test/runScenarios";

export async function execute(files: string[], options: RunnerOptions): Promise<TestResult[]> {
  let rejecter: (err: any) => void = (err: any) => null;
  let rejected = false;
  const timer = setTimeout(() => {
    rejecter(new Error("Tests failed with timeout."));
    rejected = true;
  }, options.testRunTimeout);
  if (files.length > 0) await Promise.all(files.map(file => import(file)));

  const tests = await new Promise<TestResult[]>(async (resolve, reject) => {
    rejecter = reject;
    var results = await runScenarios();
    if (rejected) return;
    clearTimeout(timer);
    resolve(results);
  });

  files.forEach(file => {
    delete require.cache[require.resolve(file)];
  });

  return tests;
}
