class MaxHeap {
    constructor(){
        this.array = [null];
    }
 
    getParent(idx){
        return Math.floor(idx / 2);
    }

    getLeftChild(idx){
        return 2 * idx;
    }

    getRightChild(idx){
        return 2 * idx + 1;
    }

    siftUp(idx){
        if(idx === 1) return;

        const pIdx = this.getParent(idx);
        if(this.array[pIdx] < this.array[idx]){
            [this.array[pIdx], this.array[idx]] = [this.array[idx], this.array[pIdx]];
            this.siftUp(pIdx); 
        }
    }

    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx){
        const arr = this.array;
        const val = arr[idx];
        const lChild = this.getLeftChild(idx);
        const lVal = arr[lChild] || -Infinity;
        const rChild = this.getRightChild(idx) ;
        const rVal = arr[rChild] || -Infinity;

        if(val >= lVal && val >= rVal) return;

        const swapIdx = lVal > rVal ? lChild : rChild;
        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]];
        this.siftDown(swapIdx);

    }

    deleteMax(){

    }

}

module.exports = {
    MaxHeap
};