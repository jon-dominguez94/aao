// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    const lIdx = idx * 2;
    const rIdx = idx * 2 + 1;
    const lVal = array[lIdx] || -Infinity;
    const rVal = array[rIdx] || -Infinity;

    if(!array[lIdx] && !array[rIdx]) return true;
    if(array[idx] < lVal || array[idx] < rVal) return false;
    return isMaxHeap(array, lIdx) && isMaxHeap(array, rIdx);
}


module.exports = {
    isMaxHeap
};