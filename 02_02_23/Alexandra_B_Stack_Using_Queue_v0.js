class My_Stack {
    constructor(){
        this.queue = [];
    }

    add_to_top_of_stack(x){         // Pushes element x to the top of the stack
        this.queue.unshift(x);
    }

    remove_from_top_of_stack(){     // Removes the element on the top of the stack and returns it
        return this.queue.shift();
    }

    peek_at_top_node_on_stack(){    // Peeks on the top of the stack and returns it
        return this.queue[0];
    }

    is_stack_empty(){
        return this.queue.length === 0; //Returns true if the stack is empty, false otherwise.
    }

}

const test_0 = new My_Stack();
console.log(test_0)
test_0.add_to_top_of_stack([]);
console.log('add_to_top_of_stack []',test_0)
test_0.add_to_top_of_stack([]);
console.log('add_to_top_of_stack []',test_0)
test_0.add_to_top_of_stack([]);
console.log('add_to_top_of_stack []', test_0)
test_0.add_to_top_of_stack([2]);
console.log('add_to_top_of_stack 2', test_0)
test_0.add_to_top_of_stack([1]);
console.log('add_to_top_of_stack 1', test_0)
test_0.add_to_top_of_stack([]);
console.log('add_to_top_of_stack []',test_0)
