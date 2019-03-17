function breadthFirstArray(root) {
    
    if(!root) return [];
    const queue = [root];
    const values = [];
    while(queue.length){
        const curr = queue.shift();
        values.push(curr.val);
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return values;
}

module.exports = {
    breadthFirstArray
};