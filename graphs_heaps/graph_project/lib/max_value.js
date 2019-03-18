function maxValue(node, visited=new Set()) {
    const queue = [node];
    let max = null;
    while(queue.length){
        const curr = queue.shift();
        if(visited.has(curr)){
            continue;
        } else {
            visited.add(curr);
        }

        if (!max || max < curr.val) max = curr.val;

        curr.neighbors.forEach(node => { queue.push(node) });
    }

    return max;
}

module.exports = {
    maxValue
};