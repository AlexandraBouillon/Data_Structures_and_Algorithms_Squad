
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
// const is_palindrome_linked_list = (head) => {
//     let head_copy = [];
//     let front_index = 0;
//     let back_index = head.length-1;

//     while(){

//     };
//     while(front_index < back_index){
//         if (){
//             return false;
//         }
//         front_index++;
//         back_index--;

//     }
//     return true;

// };

console.log(is_palindrome_linked_list([1,2,2,1]));
console.log(is_palindrome_linked_list([1,2]));
