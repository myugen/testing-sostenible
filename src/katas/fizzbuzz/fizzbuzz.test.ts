import {fizzbuzz} from "./fizzbuzz";

describe('FizzBuzz', () => {
  it('should return 1 as string when given 1 number', () => {
    expect(fizzbuzz(1)).toEqual('1');
  })
})