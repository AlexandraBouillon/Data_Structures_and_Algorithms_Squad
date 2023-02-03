class My_Queue {
    constructor(){
        this.queue = []
        this.temp_queue = []
    }
    push_element(x) {       // Pushes element x to the back of the queue.
        while(this.queue.length !== 0) {
            this.temp_queue.push(this.queue.pop());
            this.queue.push(x)
        }

        while(this.temp_queue.length !== 0) {
            this.queue.push(this.temp_queue.pop())
        };
    };

    pop_element() {     // Removes the element from the front of the queue and returns it
        return this.queue.pop()
    };

    peek_at_element() {     // Returns the element at the front of the queue
        return this.queue[this.queue.length-1]
    };

    is_empty() {        // Returns true if the queue is empty, false otherwise
        return this.queue.length === 0
    };

};









const test_0 = [[],[1],[2],[],[],[]];
console.log()
