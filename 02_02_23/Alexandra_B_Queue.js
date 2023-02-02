class Queue_Node {
    constructor(value){  // [ ]
        this.node_value = value;
        this.next_node = null;
    }
}


class Queue {
    constructor() {
        this.front_node = null;
        this.back_node = null;
        this.length_of_nodes = 0;
    }

    enqueue(value){
        const new_node = new Node(value); // instantiate a new Node
        if(!this.front_node){   // if there isn't a node
            this.front_node = new_node; // assign newly instantiated node to front
            this.back_node = new_node; // assign newly instantiated node to back
        } else {
            this.back_node.next_node = new_node; // assign
            this.back_node = new_node; //
        }
        return ++this.length_of_nodes; // increase the length
    }

    dequeue() {
        if(!this.front_node) return null;
        const temp_node = this.front_node;
        if (this.front_node === this.back_node){
            this.back_node = null; // assign the back node to null
        }
        this.front_node = this.front_node.next_node; // assign the front node to the next node
        this.length_of_nodes--; // decrease the length of nodes by 1
        return temp_node.value;
    }

    check_length(){
        return this.length_of_nodes;
    }
}


const Queue_Node_0 = new Queue_Node();
const Queue_Node_1 = new Queue_Node(1,2,2,2,1);
const Queue_Node_2 = new Queue_Node(1,2);

console.log(Queue_Node_0); //
console.log(Queue_Node_1); //
console.log(Queue_Node_2); //
