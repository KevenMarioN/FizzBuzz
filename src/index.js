const FIZZ = "Fizz";
const BUZZ = "Buzz";

module.exports = {
  processInteger : function (integer) {
    if(integer % 3 === 0)
      return FIZZ;
    if(integer % 5 === 0)
      return BUZZ;
    return integer;
  }
}