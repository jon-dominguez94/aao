function depthFirstSearch(root, targetVal) {
    if(!root) return null;
    const children = depthFirstSearch(root.left, targetVal) || depthFirstSearch(root.right, targetVal);
    const curr = root.val === targetVal ? root : null;
    return children || curr;
}


module.exports = {
    depthFirstSearch
};