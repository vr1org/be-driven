import { Scenario } from "../Scenario";
import { TestStep, TestStepType } from "./TestStep";

export class TestCase implements Scenario {
  public steps: TestStep[];
  public constructor(public name: string) { }

  private addStep(type: TestStepType, action: Function, parameters: any[]): Scenario {
    this.steps.push({ type, action, parameters });
    return this;
  }

  private addAndStep(action: Function, parameters: any[]): Scenario {
    if (this.steps.length === 0) throw new Error("Can't start scenario with 'and'");
    return this.addStep(this.steps[this.steps.length - 1].type, action, parameters);
  }

  public given<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addStep(TestStepType.given, func, args);
  }

  public when<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addStep(TestStepType.when, func, args);
  }

  public then<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addStep(TestStepType.then, func, args);
  }

  public and<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addAndStep(func, args);
  }

  public дано<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addStep(TestStepType.given, func, args);
  }

  public когда<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addStep(TestStepType.when, func, args);
  }

  public тогда<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addStep(TestStepType.then, func, args);
  }

  public и<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
    return this.addAndStep(func, args);
  }
}
