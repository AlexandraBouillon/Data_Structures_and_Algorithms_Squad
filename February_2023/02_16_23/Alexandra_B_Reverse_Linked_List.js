function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const reverseList = (head)=> {
    let current = head
    let prev = null
    let next = null

    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
};

// const reverseList = function(head) {
//     if (head === null) return null;
//     if (head === []) return [];
//     let body = head.slice(1)

// };

// console.log(reverseList([1,2,3,4,5])); //[5,4,3,2,1]
console.log(reverseList([5,4,3,2,1])); //[5,4,3,2,1]
// console.log(reverseList([1,2])); // [2,1]
// console.log(reverseList([])); // []
