const fizzBuzz = require('../src/index');

describe('app',() => {
  it('should process integer',() =>{
    expect(fizzBuzz.processInteger(1)).toBe(1);
  });
});