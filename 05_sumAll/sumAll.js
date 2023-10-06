const sumAll = function( min, max ) {

let i = 0;
let result = 0;

if ( min < 0 || max < 0  || typeof(min) != "number" || typeof(max) != "number" )
    return 'ERROR';




let start = Math.min(min , max);
let stop = Math.max(min, max);


for ( i = start; i <= stop; i++ ){
    result += i;
}

return result;

};

// Do not edit below this line
module.exports = sumAll;
