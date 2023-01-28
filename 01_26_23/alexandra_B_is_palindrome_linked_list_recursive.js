
// ## Option_1
// const is_palindrome_linked_list = (head) => {
//     for (let i = 0; i < head.length-1; i++){
//         let pointer = head[i]
//         let pointer_next_right_index = head[i+1];
//         let pointer_tail = head[head.length-1];
//         let pointer_tail_next_left_index = head[head.length-2];
//         if ((pointer !== pointer_tail) || (pointer_next_right_index !== pointer_tail_next_left_index)){
//             return false;
//         }
//         return true;
//     };
// };


// ## Option_2
const is_palindrome_linked_list = (head) => { // [[1,2,2,2,1]]
    if (!head) return null;
    if (head.length < 0) return false;
    if (head.length === 0) return true;

    let rest_of_nodes = head.slice(1, head.length-1); // [2,2,2] -> copy of body minus nodes at first and last index
    let first_node = head[0]; // [1]
    let last_node = head.pop(); // [1]

    if (first_node !== last_node) return false; // check for falsey nodes

    else if(head.length >=1) return is_palindrome_linked_list(rest_of_nodes); // recurse

    return true; //
};

console.log(is_palindrome_linked_list(null)); // null
console.log(is_palindrome_linked_list([1,2,2,1])); // true
console.log(is_palindrome_linked_list([1,2])); // false
console.log(is_palindrome_linked_list([1,2,2,2,1])); // true
