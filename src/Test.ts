import { Expect } from "./Expect";

export type Test<TData extends {} = {}> = {
  store<T>(val: T, ...path: string[]): void;
  get<T = string>(...path: string[]): T;
  getNum(...path: string[]): number;
  expect<T>(val: T): Expect<T>;

  задаю<T>(val: T, ...path: string[]): void;
  беру<T = string>(...path: string[]): T;
  беруЧисло(...path: string[]): number;
  ожидаю<T>(val: T): Expect<T>;
} & {
  [P in keyof TData]: TData[P];
};

export type Тест<TData extends {} = {}> = Test<TData>;
