const add = function( a, b ) {
	return a + b;
};

const subtract = function ( a, b ) {
	return a - b;
};

const sum = function( array ) {
	
  var mySum = 0;

  for ( i = 0; i < array.length; i++ ) {
    mySum += array[i];
  }
  return mySum;
};

const multiply = function( numbers ) {

  var total = 1;

  for (var i = 0; i < numbers.length; i++) {
    total = total * Number(numbers[i]);
  }

  return total;

};

const power = function( a, b ) {
	return Math.pow(a, b);
};

const factorial = function( num ) {
	if ( num < 0 )
    return 0;
  else if (num == 0)
    return 1;
  else {
      return (num * factorial(num-1) );
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
