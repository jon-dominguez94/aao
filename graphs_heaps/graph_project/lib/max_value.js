function maxValue(node, visited=new Set()) {
    let max = -Infinity;
    if(!node) return null;
    const queue = [node];
    while(queue.length){
        const curr = queue.shift();
        visited.add(curr);
        if(curr.val > max) max = curr.val;
        curr.neighbors.forEach(neighbor => {
            if(!visited.has(neighbor)) queue.push(neighbor);
        });
    }
    return max;
}

module.exports = {
    maxValue
};