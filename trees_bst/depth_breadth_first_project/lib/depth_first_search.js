function depthFirstSearch(root, targetVal) {
    if(!root) return null;
    const curr = root.val === targetVal ? root : null;
    return depthFirstSearch(root.left, targetVal) || depthFirstSearch(root.right, targetVal) || curr;
}


module.exports = {
    depthFirstSearch
};