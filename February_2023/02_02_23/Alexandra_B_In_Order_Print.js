// import {Tree_Node} from '/Users/alexandrabouillon/Dropbox/Data_Structures_and_Algorithms_Squad/02_02_23/Alexandra_B_Tree_Node';
// console.log(Tree_Node)

class Tree_Node {
    constructor(root_value){
        this.node_value = root_value;
        this.left_node = null;
        this.right_node = null;
    }
};;


let a  = new Tree_Node('a');
let b  = new Tree_Node('b');
let c  = new Tree_Node('c');
let d  = new Tree_Node('d');
let e  = new Tree_Node('e');
let f  = new Tree_Node('f');

a.left_node = b;
a.right_node = c;
b.left_node = d;
b.right_node = e;
c.right_node = f;

// const test_0 = new Tree_Node(['a'])
// console.log(test_0)
// console.log(a)

const in_order_print = (root_value) => {
    if (!root_value === null) return;
    in_order_print(root_value.left_node);
    console.log(root_value.node_value);
    in_order_print(root_value.right_node)
};
