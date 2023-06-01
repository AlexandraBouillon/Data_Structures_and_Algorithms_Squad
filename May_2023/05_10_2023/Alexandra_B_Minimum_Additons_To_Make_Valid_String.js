const addMinimum = function(word) {
    let i = 0;
    let min_num_of_char  = 0;
    let abc = 'abc';
    while (i < word.length) {
        for(let j = 0; j < abc.length; j++) {
            if (word[i] !== abc[j]) {
                min_num_of_char ++;
            } else {
                i++;
            }
        }
    }
    return min_num_of_char ;
};
