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
        const newNode = new Node(val);
        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
        } else {
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
            let prev = this.head;
            while(prev.next !== this.tail) prev = prev.next;
            prev.next = null;
            this.tail = prev;
        }
        this.length--;
        return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
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
        let temp = this.head;
        while(temp){
            if(temp.value === target) return true;
            temp = temp.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index < 0 || index >= this.length) return false;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        temp.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;

        if(index === 0){
            this.addToHead(val);
            return true;
        } else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            const newNode = new Node(val);
            newNode.next = temp.next;
            temp.text = newNode;
            this.length++;
            return true;
        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        let removed;

        if(index === 0){
            this.removeHead();
        } else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
              temp = temp.next;
            }
            removed = temp.next;
            temp.next = removed.next;
            this.length--;
        }
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
