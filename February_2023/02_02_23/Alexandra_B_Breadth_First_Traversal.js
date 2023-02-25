// *** WIP ***
/*
Bread First Traversal uses a Queue (FIFO)
remove the first node / front
add to the last node / back
*/

const bread_first_traversal = (root_value) => {
    let queue = [root_value];
    while(queue.length){
        let current_node = queue.shift;
        // index
        console.log(' current_node', current_node);
        // if (left node) add node to left of current node
        // if (node to right of current node) add node to right of current node
    }

};
