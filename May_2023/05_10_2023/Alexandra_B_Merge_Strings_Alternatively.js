var mergeAlternately = function(word1, word2) {
    let i = 0;
    let j = 0;
    let merged_word = "" ;
    while( word1.length > i || word2.length > j){
        if( word1.length > i) {
            merged_word += word1[i];
        }
        if( word2.length > j) {
            merged_word +=word2[j];
        }
        i++;
        j++;
    }
    return merged_word;
};
