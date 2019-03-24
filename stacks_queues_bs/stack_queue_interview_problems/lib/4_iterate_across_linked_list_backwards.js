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

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    // if(!linkedList) return null;
    // const result = [];
    // let curr = linkedList.head;
    // while(curr){
        //     result.unshift(String(curr.value));
        //     curr = curr.next;
        // }
        // return result.join(' -> ');
        
    if(!linkedList) return null;

    const stack = buildStack(linkedList);
    const ordered = clearStack(stack);
    return ordered.join(' -> ');
}

function buildStack(linkedList){
    const stack = [];
    let curr = linkedList.head;
    while (curr) {
        stack.push(String(curr.value));
        curr = curr.next;
    }
    return stack;
}

function clearStack(stack){
    const result = [];
    while(stack.length){
        result.push(stack.pop());
    }
    return result;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
