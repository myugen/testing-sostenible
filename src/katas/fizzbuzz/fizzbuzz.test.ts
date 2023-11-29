import {fizzbuzz} from "./fizzbuzz";

describe('FizzBuzz', () => {
  it('should return 1 as string when given 1 number', () => {
    expect(fizzbuzz(1)).toEqual('1');
  })
  it('should return 2 as string when given 2 number', () => {
    expect(fizzbuzz(2)).toEqual('2');
  })
})