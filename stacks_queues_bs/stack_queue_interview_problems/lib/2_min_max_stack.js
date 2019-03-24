// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.maximum = null;
        this.minimum = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            this.maximum = newNode;
            this.minimum = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
            if(newNode.value > this.maximum.value){
                this.maximum = newNode;
            } else if (newNode.value < this.minimum.value){
                this.minimum = newNode;
            }
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
            this.maximum = null;
            this.minimum = null;
        } else {
            this.minimum = temp === this.minimum ? this.findMin(this.top.next) : this.minimum;
            this.maximum = temp === this.maximum ? this.findMax(this.top.next) : this.maximum;
            this.top = this.top.next;
        }
        this.length--;
        return temp;
    }

    findMin(node){
        let min = new Node(Infinity);
        while(node){
            min = node.value < min.value ? node : min;
            node = node.next;
        }
        return node;
    }

    findMax(node){
        let max = new Node(-Infinity);
        while (node) {
            max = node.value > max.value ? node : max;
            node = node.next;
        }
        return node;
    }

    size() {
        return this.length;
    }

    max() {
        return this.maximum;
    }

    min() {
        return this.minimum;
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = Stack;
