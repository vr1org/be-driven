
export interface Expect<T> {
  equal(val: T): void;
  deepEqual<T>(val: T): void;
  exception(code: () => void | Promise<void>, customText?: string): void | Promise<void>;
  unequal(val: any): void;
  true(): void;
  false(): void;

  равно(val: T): void;
  полностьюРавно(val: T): void;
  неРавно(val: any): void;
  правда(): void;
  ложь(): void;
  исключение(code: () => void | Promise<void>, customText?: string): void | Promise<void>;
}
