// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (!preorder.length) return null;

    const root = new TreeNode(preorder[0]);
    const idx = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
    root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1));

    return root;
}
