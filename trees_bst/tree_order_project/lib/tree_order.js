function inOrderArray(root) {
    let result = [];
    if(!root) return result;
    result = result.concat(inOrderArray(root.left));
    result.push((root.val));
    result = result.concat(inOrderArray(root.right));
    return result;
}

function postOrderArray(root) {

}


module.exports = {
    inOrderArray,
    postOrderArray
};