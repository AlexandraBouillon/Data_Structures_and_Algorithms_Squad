class Node {
    constructor(value){
        this.node_value = value;
        this.next_node = null;
    }
}

class Stack {
    constructor(value){
        this.top_node = null;
        this.bottom_node = null;
        this.length_of_nodes = 0;
    }


    add_node_on_top(){
        const  new_node = new Node(value);
        if (!this.top_node) {
            this.top_node = new_node;
            this.bottom_node = new_node;
        } else {
            const temp_node = this.top_node;
            this.top_node = new_node;
            this.top_node.next_node = temp_node;
        }
        return ++this.length_of_nodes;
    }

    remove_node_from_top() {
        if (!this.top_node) return null;

        const temp_node = this.top_node;

        if(this.top_node === this.bottom_node){
            this.bottom_node = null;
        }
        this.top_node = this.top_node.next_node;
        this.length_of_nodes--;
        return temp_node.node_value;
    }

    check_length(){
        return this.length_of_nodes;
    }
};

const node_0 = new Node([])
// const node_1 = new Node()
const node_1 = new Node([1,2,2,2,1])
// const node_2 = new Node()
const node_2 = new Node([0])
// const node_3 = new Node()
console.log('this is node 0', node_0);
console.log('this is node 1', node_1);
console.log('this is node 2', node_2);
