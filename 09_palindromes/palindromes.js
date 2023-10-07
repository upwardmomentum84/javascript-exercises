const palindromes = function ( word ) {

    word = word.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // strip punctuation
    word = word.toLowerCase();

    var forward = word.split("");
    var reversed = word.split("");
    reversed = reversed.reverse();



    //console.log(forward);
    //console.log(reversed);

    for (i = 0; i < forward.length; i++ ) {
        if ( forward[i] != reversed[i]  )
            return false;
    }

   return true;

};

// Do not edit below this line
module.exports = palindromes;
