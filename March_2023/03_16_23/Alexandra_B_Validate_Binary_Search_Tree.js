var isValidBST = function(root, minimum, maximum) {
    if (root === null ) return true;

    if (root.val <= minimum || root.val >= maximum) return false;


    return isValidBST(root.left, minimum, root.val)
    && isValidBST(root.right, root.val, maximum);
};
