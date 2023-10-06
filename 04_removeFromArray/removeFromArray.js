const removeFromArray = function( elements,  ) {

    let i = 0;
    let j = 0;
    let x = 0;
    let bFound = false;
    var result = [];
    var argCount = arguments.length;

    console.log ("argCount: " + argCount );

    for ( i = 0; i < elements.length; i++ ) {
        bFound = false;
        for ( j = 1; j < argCount; j++ ) {
            if ( elements[i] === arguments[j]  ) {
                bFound = true;
                break;
            }
        }
        if ( !bFound ) {
            result[x] = elements[i];
            x++
        }
    }

    console.log ( result );
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
