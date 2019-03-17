// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if(!nums.length) return nums;
    return buildTree(nums, 0, nums.length - 1);
};

function buildTree(arr, s, e){
    if(s <= e){
        const mid = Math.floor((e+s) / 2);
        const root = new TreeNode(arr[mid]);
        root.left = buildTree(arr, s, mid-1);
        root.right = buildTree(arr, mid+1, e);
        return root;
    }
}