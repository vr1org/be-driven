import { RunnerOptions, TestResult } from "../types";
import { splitInGroups } from "./splitInGroups";
import { withTimeout } from "./withTimeout";
import { runWorker } from "./workerThreadExecute";

export async function splitExecute(files: string[], options: RunnerOptions): Promise<TestResult[]> {
  if (files.length === 0) return [];
  return withTimeout(options.globalTimeout, async token => {
    const groups = splitInGroups(files, options.threads);
    const allTests = await Promise.all(groups.map(grp => runWorker(grp, token)));
    const results = allTests.reduce((acc, val) => [...acc, ...val], []);
    return results;
  });
}

