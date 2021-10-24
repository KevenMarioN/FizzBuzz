const fizzBuzz = require('../src/index');

describe('app',() => {
  it('should process integer',() =>{
    expect(fizzBuzz.processInteger(1)).toBe(1);
    expect(fizzBuzz.processInteger(2)).toBe(2);
    expect(fizzBuzz.processInteger(3)).toBe('Fizz');
    expect(fizzBuzz.processInteger(4)).toBe(4);
    expect(fizzBuzz.processInteger(5)).toBe('Buzz');
    expect(fizzBuzz.processInteger(6)).toBe('Fizz');
    expect(fizzBuzz.processInteger(9)).toBe('Fizz');
    expect(fizzBuzz.processInteger(10)).toBe('Buzz');
    expect(fizzBuzz.processInteger(12)).toBe('Fizz');
    expect(fizzBuzz.processInteger(15)).toBe('FizzBuzz');
    expect(fizzBuzz.processInteger(18)).toBe('Fizz');
    expect(fizzBuzz.processInteger(20)).toBe('Buzz');
    expect(fizzBuzz.processInteger(24)).toBe('Fizz');
    expect(fizzBuzz.processInteger(25)).toBe('Buzz');
    expect(fizzBuzz.processInteger(27)).toBe('Fizz');
    expect(fizzBuzz.processInteger(30)).toBe('FizzBuzz');
    expect(fizzBuzz.processInteger(33)).toBe('Fizz');
    expect(fizzBuzz.processInteger(35)).toBe('Buzz');
    expect(fizzBuzz.processInteger(45)).toBe('FizzBuzz');

  });
});