export interface Context {
    store<T>(val: T, ...path: string[]): void;
    get<T = string>(...path: string[]): T;
    getNum(...path: string[]): number;
    expect<T>(val: T): Expect<T>;

    задаю<T>(val: T, ...path: string[]): void;
    беру<T = string>(...path: string[]): T;    
    беруЧисло(...path: string[]): number;
    ожидаю<T>(val: T): Expect<T>;
}

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

export type Контекст = Context;
