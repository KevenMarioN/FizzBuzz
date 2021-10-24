const FIZZ = "Fizz";
const BUZZ = "Buzz";

module.exports = {
  processInteger : function (integer) {
    if(integer == 3)
      return FIZZ;
    return integer;
  }
}