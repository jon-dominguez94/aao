function numRegions(graph) {
    let visited = new Set();
    let count = 0;

    Object.keys(graph).forEach(node => {
        if(!visited.has(node)){
            count++;
            const newVisited = explore(graph, node);
            visited = new Set([...visited, ...newVisited]);
        }
    });

    return count;
}

function explore(graph, node, visited=new Set()){
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