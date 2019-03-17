// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            const temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        } else {
            const temp = this.top;
            if (this.top === this.bottom) {
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

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    let nodes = [];
    let head = linkedList.head;
    while(head){
        nodes.push(head);
        head = head.next;
    }

    nodes = nodes.map(node => node.value);
    return nodes.reverse().join(' -> ');
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
