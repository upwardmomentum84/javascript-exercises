const fibonacci = function( whichOne ) {
    var runningTotal = 1;
    var previousTotal = 0;
    var previousValue = 0;

    if ( Number(whichOne < 0) )
        return "OOPS";

    for ( var i = 1; i < Number(whichOne); i++ ) {
        previousValue = runningTotal;
        runningTotal += previousTotal;
        previousTotal = previousValue;
 
        console.log(previousTotal + " " + runningTotal);

    }
    return runningTotal;
};

// Do not edit below this line
module.exports = fibonacci;
