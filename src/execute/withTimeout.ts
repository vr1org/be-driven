export interface TimeoutToken {
  timedOut: boolean;
  onTimeout: ((err: Error) => void)[];
}

export async function withTimeout<T>(timeout: number, action: (token: TimeoutToken) => Promise<T>): Promise<T> {
  let token: TimeoutToken = { timedOut: false, onTimeout: [] };

  const timer = setTimeout(() => {
    token.timedOut = true;
    for (const onReject of token.onTimeout) onReject(new Error("Timeout"));
  }, timeout);

  return await new Promise<T>(async (resolve, reject) => {
    token.onTimeout.push(reject);
    const result = await action(token);
    if (!token.timedOut) {
      clearTimeout(timer);
      resolve(result);
    }
  });
}
