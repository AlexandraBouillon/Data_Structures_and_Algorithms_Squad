const palindrome_checker = function(str, start_index, end_index){
    while(start_index < end_index) {
        if (str[start_index] !== str[end_index]) {
            return false;
        }
        start_index += 1;
        end_index -= 1;
    }
    return false;
}
const validPalindrome = function(str) {
    let start_index = 0;
    let end_index = str.length - 1;
    while (start_index < end_index) {
        if (str[start_index] !== str[end_index]){
            return palindrome_checker(str, start_index, end_index-1) || palindrome_checker(str, start_index + 1, end_index)
        }
        start_index += 1;
        end_index -= 1;
        return true;
    }
};

const test_0 = 'anna'

const test_1 = 'dog'

validPalindrome(test_0)
validPalindrome(test_1)
console.log(validPalindrome(test_0));
console.log(validPalindrome(test_1));
