export interface Scenario {
  given<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  given<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
  when<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  when<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
  then<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  then<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
  and<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  and<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;

  дано<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  дано<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
  когда<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  когда<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
  тогда<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  тогда<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
  и<TP extends any[], TF extends (...a: TP) => void>(func: TF, ...args: TP): Scenario;
  и<TP extends any[], TF extends (...a: TP) => void>(text: string, func: TF, ...args: TP): Scenario;
}
