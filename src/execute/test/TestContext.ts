import { Expect } from "../../Expect";
import { StepResult, Test } from "../../types";

export class TestContext implements Test {
  private storage: Record<string, any> = {};
 
  public currentStep: StepResult;  

  public store<T>(val: T, ...path: string[]): void {
    var s = this.storage;
    var errorPath = [];
    while (path.length > 1) {
      var segment = path[0];
      path = path.slice(1);
      errorPath.push(segment);
      if (s[segment] == null)
        s = s[segment] = {};
      else if (Array.isArray(s[segment]) || typeof s[segment] !== "object")
        throw new Error(`Can't store value at path ${path.join(".")}, unexpected value at ${errorPath.join(".")}`);
      else
        s = s[segment];
    }

    s[path[0]] = val;
  }

  public get<T = string>(...path: string[]): T {
    var s = this.storage;
    var errorPath = [];
    while (path.length > 1) {
      var segment = path[0];
      path = path.slice(1);
      errorPath.push(segment);
      if (s[segment] == null)
        return null;
      else if (Array.isArray(s[segment]) || typeof s[segment] !== "object")
        throw new Error(`Can't get value at path ${path.join(".")}, unexpected value at ${errorPath.join(".")}`);
      else
        s = s[segment];
    }

    return s[path[0]];
  }

  public getNum(...path: string[]): number {
    return this.get(...path);
  }
  public expect<T>(val: T): Expect<T> {
    throw new Error("Method not implemented.");
  }

  public задаю<T>(val: T, ...path: string[]): void {
    return this.store<T>(val, ...path);
  }

  public беру<T = string>(...path: string[]): T {
    return this.get<T>(...path);
  }

  public беруЧисло(...path: string[]): number {
    return this.getNum(...path);
  }

  public ожидаю<T>(val: T): Expect<T> {
    return this.expect<T>(val);
  }
}
