import { globby } from "globby";
import { getReporters } from "./reporting/getReporters";
import { splitExecute } from "./execute/splitExecute";
import { RunnerOptions, TestRunResult } from "./types";
import * as os from "os";

const defaultOptions: RunnerOptions = {
  files: ["./**/*.spec.js", "!./node_modules/**/*"],
  reporter: ["verbose", "summary"],
  testTimeout: 2000,
  timeout: 30000
};

export async function runTests(options: RunnerOptions = {}): Promise<TestRunResult> {
  options = { ...defaultOptions, ...options };
  const files = await globby(options.files, { absolute: true });
  options.threads = determineThreadCount(options.threads, files.length);
  const tests = await splitExecute(files, options);
  const reporters = getReporters(options.reporter);
  const output = reporters.map(r => r.report(tests)).join("");
  return {
    output,
    passed: !tests.some(t => !t.passed)
  };
}

function determineThreadCount(threads: number, filesCount: number): number {
  if (threads <= 0) threads = Math.ceil((filesCount - 9) / 10); //  1-19 => 1 thread,  20-29 => 2 thread and so on
  const maximum = os.cpus().length; // no more threads than logical cpus;
  const minimum = 1; // can't be less than 1 thread
  const topCap = Math.min(threads, maximum);
  const bottomCap = Math.max(topCap, minimum);
  return bottomCap;
}
