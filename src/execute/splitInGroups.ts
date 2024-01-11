export function splitBy<T>(items: T[], by: number): T[][] {
  if (!items) return [];
  const result: T[][] = [];
  let i = 0;
  while (i < items.length) {
    const next = i + by;
    result.push(items.slice(i, next));
    i = next;
  }
  return result;
}

export function splitInGroups<T>(items: T[], count: number): T[][] {
  if (count < 1) return [];
  return splitBy(items, Math.ceil(items.length / count));
}
