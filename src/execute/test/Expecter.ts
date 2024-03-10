import { Expect } from "../../Expect";

export class Expecter<T = any> implements Expect<T> {

  constructor(private value) {
    
    
  }
  public equal(expected: any): void {
    if()
  }

  public deepEqual<T>(expected: T, customText?: string): void {
    throw new Error("Method not implemented.");
  }

  public async exception(code: () => void | Promise<void>, customText?: string): Promise<void> {
    try {
      await code();
    } catch(ex: Error) {
      return;
    }

  }

  public unequal(expected: any): void {
    throw new Error("Method not implemented.");
  }

  public true(): void {
    this.equal(true);
  }

  public false(): void {
    this.equal(false);
  }

  public равно(expected: any): void {
    this.equal(expected);
  }

  public полностьюРавно(expected: T): void {
    this.deepEqual(expected);
  }

  public неРавно(expected: any): void {
    this.unequal(expected);
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
