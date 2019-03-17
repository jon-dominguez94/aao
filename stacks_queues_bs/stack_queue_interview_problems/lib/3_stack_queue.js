// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push({value}){
        const newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop(){
        if(!this.top){
            return null;
        } else {
            const temp = this.top;
            if(this.top === this.bottom){
                this.top = null;
                this.bottom = null;
            } else {
                this.top = this.top.next;
            }
            this.length--;
            return temp;
        }
    }

    size(){
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
