// *** WIP ***

/*

a tree:

                a
        b             c
    d       e              f


*/
class Tree_Node {
    constructor(root_value){
        this.node_value = root_value;
        this.left_node = null;
        this.right_node = null;
    }

    depth_first_Search(root_value){
       if (root_value){
            this.stack = [root_value];
            while(this.stack) {
                console.log('this.root_value',this.root_value)
                this.node_value = this.stack.pop();
                if (!this.right_node) this.stack.push(this.node_value.right_node); // add to the end
                if(!this.left_node) this.stack.push(this.node_value.left_node);
                // console.log(this.stack)
            }
        }
    };
}


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

console.log(a);
console.log(a.depth_first_Search(a));
