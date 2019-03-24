function numRegions(graph) {
    let visited = new Set();
    let count = 0;

    // Object.keys(graph).forEach(node => {
    for(let node in graph){
        if(!visited.has(node)){
            count++;
            explore(graph, node, visited);
        }
    }

    return count;
}

function explore(graph, node, visited){
    if(!visited.has(node)){
        visited.add(node);
        graph[node].forEach(neighbor => {
            explore(graph, neighbor, visited);
        });
    }
    return visited;
}


module.exports = {
    numRegions
};