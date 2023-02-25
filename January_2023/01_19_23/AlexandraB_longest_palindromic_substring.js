const expand_around_center = function(str, left_index, right_index){
    while((left_index >= 0 && right_index < str.length) && (str[left_index] === str[right_index])) {
        left_index--;
        right_index++;
    }
    return (right_index - left_index) - 1;
}

const longest_palindromic_substring = function(str) {
    if (str === null || str.length < 1) return "";
    let start = 0
    let end  = 0;

    for (let i = 0; i < str.length; i++){
        let len_0 = expand_around_center(str, i, i);
        let len_1 = expand_around_center(str, i, i + 1);
        let len_2 = Math.max(len_0, len_1);
        if (len_2 > (end - start)){
            start = (i - (len_2 - 1)) / 2;
            end = (i + len_2) / 2;
        }
        return str.substring(start, end + 1);
    }
};

const test_0 = 'babad';
const test_1 = 'cbbd';

console.log(longest_palindromic_substring(test_0));
console.log(longest_palindromic_substring(test_1));
