class MaxHeap {
    constructor(){
        this.array = [null];
    }

    getParent(idx){
        return Math.floor(idx / 2);
    }

    getLeftChild(idx){
        return idx * 2;
    }

    getRightChild(idx){
        return idx * 2 + 1;
    }

    siftUp(idx){
        if(idx <= 1) return;
        const pIdx = this.getParent(idx);
        if(this.array[idx] > this.array[pIdx]){
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx){
        if(idx >= this.array.length) return;

        const lChild = this.getLeftChild(idx);
        const rChild = this.getRightChild(idx);
        const lVal = this.array[lChild] || -Infinity;
        const rVal = this.array[rChild] || -Infinity;

        if(this.array[idx] >= lVal && this.array[idx] >= rVal) return;

        const swapIdx = lVal > rVal ? lChild : rChild;
        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
        this.siftDown(swapIdx);
    }
}

module.exports = {
    MaxHeap
};