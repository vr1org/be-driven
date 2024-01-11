import { parentPort, workerData, Worker, isMainThread } from "worker_threads";
import { execute } from "./execute";
import { TestResult } from "../types";
import { TimeoutToken } from "./withTimeout";

export function runWorker(files: string[], token: TimeoutToken): Promise<TestResult[]> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData: { files } });
    worker.on("message", result => {
      if (Array.isArray(result)) resolve(result); else reject(result);
    });
    worker.on("error", err => {
      reject(err);
      worker.terminate();
    });
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
    token.onTimeout.push(() => worker.terminate());
  });
}

if (!isMainThread) {
  const { files, options } = workerData;
  execute(files, options)
    .then(tests => parentPort.postMessage(tests))
    .catch(err => parentPort.postMessage(err));
}
