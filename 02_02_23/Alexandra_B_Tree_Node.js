class Tree_Node {
    constructor(value){
        this.node_value = value;
        this.left_node = null;
        this.right_node = null;
    }
}

let = a = new Tree_Node('a');
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

console.dir(a)
