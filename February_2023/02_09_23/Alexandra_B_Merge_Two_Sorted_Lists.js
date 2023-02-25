/*
merge two sorted lists into one sorted list
compare the head of each list
new_list = [];
while (list1.length && list_2.length)
if the head1 is < head2
    new_list.push(head1)
    list1= list1.slice(1)
else if the head2 is < head1
    new_list.push(head2)
    list2= list2.slice(1)
*/
const merge_sorted_lists = (list_1, list_2) => {
    let new_list = [];
    if (list_1.length === 0 && list_2.length)new_list.push(list_2[0]);
    if (list_2.length === 0 && list_1.length)new_list.push(list_1[0]);
    while (list_1.length && list_2.length) {
        let head_1 = list_1[0];
        let head_2 = list_2[0];
        if ( head_1 < head_2) {
            list_1 = list_1.slice(1)
            new_list.push(head_1)
        }
        else if( head_2 <= head_1 || head_1 === []) {
            new_list.push(head_2)
            list_2= list_2.slice(1)
        }
    }
    return new_list;
};


console.log(merge_sorted_lists([1,2,4],[1,3,4])); //[1,1,2,3,4,4]
console.log(merge_sorted_lists([], [])); // []
console.log(merge_sorted_lists([], [0])); // [0]
