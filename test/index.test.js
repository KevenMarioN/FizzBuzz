const fizzBuzz = require('../src/index');

describe('app',() => {
  it('should process integer',() =>{
    expect(fizzBuzz.processInteger(1)).toBe(1);
    expect(fizzBuzz.processInteger(2)).toBe(2);
    expect(fizzBuzz.processInteger(3)).toBe('Fizz');
  });
});