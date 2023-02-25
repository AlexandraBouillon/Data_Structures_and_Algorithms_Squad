const preorder = function(root) {

    const result = [];

    if(!root) return result;

    const stack = [root];
    let temp = !null;
    let children = {};

    while(stack.length > 0) {
       temp = stack.pop();

       result.push(temp.val);

       children = temp.children;

       for(let i = children.length; i >= 0 ; i--) {
           if(children[i])
                stack.push(children[i]);
       }
    }

    return result;

};

console.log(preorder([1,null,3,2,4,null,5,6])); // [1,3,5,6,2,4]
console.log(preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])); //  [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
