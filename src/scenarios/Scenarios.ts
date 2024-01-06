import { Scenario } from "../types/Scenario";
import { TestCase } from "./TestCase";

export class Scenarios {
  private currentFile: string = "";
  private index: number = 1;
  public testcases: TestCase[] = [];

  public setFile(name: string): void {
    this.currentFile = name;
    this.index = 1;
  }

  public addScenario(name: string = null): Scenario {
    var testcase = new TestCase(name ?? `${this.currentFile}_${this.index}`);
    this.testcases.push(testcase);
    this.index++;
    return testcase;
  }
}

export const scenarios = new Scenarios();
