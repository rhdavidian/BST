 class Node {
    constructor(mid, left = null, right = null) {
        this.data = mid;
        this.left = left;
        this.right = right;
    }
 }

 class Tree {
    constructor(array) {
        this.root = buildTree(array)
    }
 }

 function buildTree(array) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);
    if (start > end) return null;
    const node = new Node(array[mid]);
    node.left = buildTree(array.slice(start, mid));
    node.right = buildTree(array.slice(mid + 1));
    return node;
 }

function sortNumbers(a,b){
    return a-b
}
function removeDups(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] == array[i+1]){
            array.splice(i, 1);
        }
    }
    return array;
}

 const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

//  console.log(buildTree([1,2,3,4,5]));
 const tree = new Tree([1,2,3,4,5,6,7,8]);
//  console.log(tree);
//  console.log(tree.root.data);
//  console.log(tree.root.left);
//  console.log(tree.root.right);
 prettyPrint(tree.root)