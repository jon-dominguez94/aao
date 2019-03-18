function numRegions(graph) {
    const visited = new Set();
    let runs = 0;
    for(let n in graph){
        if(visited.has(n)){
            continue;
        } else {
            runs++;
            searchGraph(n, graph, visited);
        }
    }
    return runs;
}

function searchGraph(node, graph, visited){
    if(visited.has(node)){
        return;
    } else {
        visited.add(node);
    }
    graph[node].forEach(n => { searchGraph(n, graph, visited); });
}

module.exports = {
    numRegions
};