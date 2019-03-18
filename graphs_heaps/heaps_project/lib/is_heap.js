// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    const lChild = 2 * idx;
    const rChild = 2 * idx + 1;
    if(array[idx] < array[lChild] || array[idx] < array[rChild]) return false;
    if(!array[rChild] && !array[lChild]) return true;
    return isMaxHeap(array, lChild) && isMaxHeap(array, rChild);
}


module.exports = {
    isMaxHeap
};