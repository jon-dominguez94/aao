function treeSum(root) {
    if(!root) return 0;
    // let sum = 0;
    // const queue = [root];
    // while(queue.length){
    //     const curr = queue.shift();
    //     sum += curr.val;
    //     if(curr.left) queue.push(curr.left);
    //     if(curr.right) queue.push(curr.right);
    // }
    // return sum;
    return treeSum(root.left) + root.val + treeSum(root.right);
}


module.exports = {
    treeSum
};