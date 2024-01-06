export interface Assertion {
  text: string;
  expected?: any;
  actual?: any;
  passed: boolean;
}
