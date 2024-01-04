export enum TestStepType {
  given = "given",
  when = "when",
  then = "then"
}

export interface TestStep {
  type: TestStepType;
  action: Function;
  parameters: any[];
};
