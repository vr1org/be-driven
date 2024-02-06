import { Expect } from "../../Expect";

export class Expecter<T = any> implements Expect<T> {
  public equal(val: any): void {
    throw new Error("Method not implemented.");
  }

  public deepEqual<T>(val: T, customText?: string): void {
    throw new Error("Method not implemented.");
  }

  public exception(code: () => void | Promise<void>, customText?: string): void | Promise<void> {
    throw new Error("Method not implemented.");
  }

  public unequal(val: any): void {
    throw new Error("Method not implemented.");
  }

  public true(): void {
    throw new Error("Method not implemented.");
  }

  public false(): void {
    throw new Error("Method not implemented.");
  }

  public равно(val: any): void {
    this.equal(val);
  }

  public полностьюРавно(val: T): void {
    this.deepEqual(val);
  }

  public неРавно(val: any): void {
    this.unequal(val);
  }

  public правда(): void {
    this.true();
  }

  public ложь(): void {
    this.false();
  }

  public исключение(code: () => void | Promise<void>, customText?: string): void | Promise<void> {
    this.exception(code, customText);
  }

}
