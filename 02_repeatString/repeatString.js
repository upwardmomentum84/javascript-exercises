const repeatString = function ( string , num ) {
    var i = 0;
    var result="";

    if ( num < 0 )
        return "ERROR";

    for ( i = 0; i < num; i++ ) {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
