class My_Queue {
    constructor(){
        this.queue = []
    }
    push_element(x) {       // Pushes element x to the back of the queue.
        this.queue.unshift(x);
    };

    pop_element() {     // Removes the element from the front of the queue and returns it
        return this.queue.shift()
    };

    peek_at_element() {     // Returns the element at the front of the queue
        return this.queue[0]
    };

    is_empty() {        // Returns true if the queue is empty, false otherwise
        return this.queue.length === 0
    };

};









const test_0 = [[],[1],[2],[],[],[]];
console.log()
