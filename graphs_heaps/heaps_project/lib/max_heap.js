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


    }

    siftDown(idx){

    }

    deleteMax(){

    }

}

module.exports = {
    MaxHeap
};