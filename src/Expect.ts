
export interface Expect<T> {
  equal(val: any): void;
  deepEqual<T>(value1: T, value2: T, customText?: string): void;
  exception(code: () => void | Promise<void>, customText?: string): void | Promise<void>;
  unequal(val: any): void;
  true(): void;
  false(): void;

  равно(val: any): void;
  полностьюРавно(val: T): void;
  неРавно(val: any): void;
  правда(): void;
  ложь(): void;
  исключение(code: () => void | Promise<void>, customText?: string): void | Promise<void>;
}
