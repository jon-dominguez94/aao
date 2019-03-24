function treeHeight(root) {
    if(!root) return -1;
    let maxHeight = 0;

    const queue = [{ node: root, height: 0 }];
    while(queue.length){
        curr = queue.shift();
        if(curr.height > maxHeight) maxHeight = curr.height;
        if(curr.node.left){
            const newObj = { node: curr.node.left, height: curr.height + 1 };
            queue.push(newObj);
        }
        if(curr.node.right){
            const newObj = { node: curr.node.right, height: curr.height + 1 };
            queue.push(newObj);
        }
    }
    return maxHeight;

}


module.exports = {
    treeHeight
};