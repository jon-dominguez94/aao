function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set();
    const queue = [startingNode];
    while(queue.length){
        const curr = queue.shift();
        if(!visited.has(curr)){
            visited.add(curr);
        } else {
            continue;
        }
        if(curr.val === targetVal) return curr;

        curr.neighbors.forEach(node => {
            queue.push(node);
        });
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};