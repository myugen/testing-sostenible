import {fizzbuzz} from "./fizzbuzz";

describe('FizzBuzz', () => {
  it('should return 1 as string when given number 1', () => {
    expect(fizzbuzz(1)).toEqual('1');
  })
  it('should return 2 as string when given number 2', () => {
    expect(fizzbuzz(2)).toEqual('2');
  })
    it('should return fizz when given number 3', () => {
        expect(fizzbuzz(3)).toEqual('fizz');
    })
})