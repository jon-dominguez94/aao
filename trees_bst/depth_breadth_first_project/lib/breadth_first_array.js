function breadthFirstArray(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    while(queue.length){
        const curr = queue.shift();
        result.push(curr.val);
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return result;
}

module.exports = {
    breadthFirstArray
};