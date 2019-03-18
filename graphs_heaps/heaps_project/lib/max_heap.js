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