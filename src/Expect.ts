
export interface Expect<T> {
  equal(val: any): void;
  strictEqual(val: T): void;
  unequal(val: any): void;
  strictUnequal(val: T): void;
  true(): void;
  false(): void;

  равно(val: any): void;
  строгоРавно(val: T): void;
  неРавно(val: any): void;
  строгоНеРавно(val: T): void;
  правда(): void;
  ложь(): void;
}
