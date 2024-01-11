import { TestResult } from "./TestResult";


export type Reporter = "verbose" | "brief" | "red" | "summary" | "silent";

export interface IReporter {
  report(results: TestResult[]): string;
}

export type ReporterOption = Reporter | IReporter;

export interface RunnerOptions {
  files?: string | string[];
  globalTimeout?: number;
  stepTimeout?: number;
  threads?: number;
  reporter?: ReporterOption | ReporterOption[];
}
