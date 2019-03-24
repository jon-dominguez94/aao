function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set();
    const queue = [startingNode];

    while(queue.length){
        const curr = queue.shift();
        visited.add(curr);
        curr.neighbors.forEach(node => {
            if(!visited.has(node)) queue.push(node);
        });
        if(curr.val === targetVal) return curr;
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};