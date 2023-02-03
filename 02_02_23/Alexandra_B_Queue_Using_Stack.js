class My_Queue {
    constructor(){
        this.first_stack = [];
        this.second_stack = [];
    }

    add_to_back(x){
        if(!this.second_stack.length) {
            this.first_stack.push(x);
        } else {
            this.second_stack.push(x);
        }
    }

    remove_from_front(){
        if(!this.second_stack.length) {
            let first_node = this.first_stack[0];
            this.second_stack = this.first_stack.slice(1);
            this.first_stack = [];
            console.log('first_node',first_node)
            return first_node;
        }
    }

    peek_at_queue(){
        if(!this.second_stack.length) {
            return this.first_stack[0];
        } else {
            return this.second_stack[0];
        }
    }

    is_queue_empty(){
        return !this.first_stack.length && !this.second_stack.length;
    }
}


const test_0 = new My_Queue();
console.log(test_0);
test_0.is_queue_empty()
console.log('is_queue_empty?',test_0);
test_0.add_to_back(2)
console.log('add_to_back(2)',test_0);
test_0.add_to_back(4)
console.log('add_to_back(4)',test_0);
test_0.peek_at_queue()
console.log('peek_at_queue!',test_0);
test_0.is_queue_empty()
console.log('is_queue_empty?',test_0);
// test_0.remove_from_front()
// console.log('remove_from_front',test_0);
