// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if(!this.tail){
            const newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
        } else {
            const newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.tail) return undefined;
        const temp = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            this.tail = curr;
            curr.next = null;
        }
        this.length--;
        return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if(!this.head){
            const newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
        } else {
            const newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) return undefined;
        const temp = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
        }
        this.length--;
        return temp;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head;
        while(curr){
            if(curr.value === target) return true;
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index >= this.length || index < 0) return null;
        let curr = this.head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }
        return curr;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length || index < 0) return false;
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        curr.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length || index < 0) return false;
        let curr = this.head;
        for (let i = 1; i < index; i++) {
          curr = curr.next;
        }
        const newNode = new Node(val);
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length || index < 0) return undefined;
        let curr = this.head;
        for (let i = 1; i < index; i++) {
            curr = curr.next;
        }
        const remove = curr.next;
        curr.next = remove.next;
        this.length--;
        return remove;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
