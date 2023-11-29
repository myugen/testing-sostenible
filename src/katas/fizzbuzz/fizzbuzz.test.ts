import {fizzbuzz} from "./fizzbuzz";

describe('FizzBuzz', () => {
  it('should return 1 as string for given number 1', () => {
    expect(fizzbuzz(1)).toEqual('1');
  })
  it('should return 2 as string for given number 2', () => {
    expect(fizzbuzz(2)).toEqual('2');
  })
  it('should return fizz for given number 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz');
  })
  it('should return buzz for given number 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz');
  })
})