import { Scenario } from "./types/Scenario";
import { scenarios } from "./scenarios/Scenarios";

export function given<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
  return scenarios.addScenario().given(func, ...args);
}

export function when<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
  return scenarios.addScenario().when(func, ...args);
}

export function then<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario {
  return scenarios.addScenario().then(func, ...args);
}

export function scenario(name: string): Scenario {
  return scenarios.addScenario(name);
}

export const сценарий = scenario;
export const дано = given;
export const когда = when;
export const тогда = then;
