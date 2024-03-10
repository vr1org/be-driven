
export interface Expect<T> {
  equal(expected: T): void;
  deepEqual<T>(expected: T): void;
  exception(code: () => void | Promise<void>, customText?: string):  Promise<void>;
  unequal(expected: any): void;
  true(): void;
  false(): void;

  равно(expected: T): void;
  полностьюРавно(expected: T): void;
  неРавно(expected: any): void;
  правда(): void;
  ложь(): void;
  исключение(code: () => void | Promise<void>, customText?: string): Promise<void>;
}
