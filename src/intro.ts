import { Scenario } from "./Scenario";

export function given<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
export function given<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario {

}

export function when<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
export function when<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario {

}

export function then<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
export function then<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario {

}

export function scenario(name: string): Scenario {

}

export const сценарий = scenario;
export const дано = given;
export const когда = when;
export const тогда = then;

// if (typeof text !== "string") {
//     args = [func, ...args] as TP;
// }
