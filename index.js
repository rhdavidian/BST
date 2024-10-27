 class Node {
    constructor(mid, left = null, right = null) {
        this.data = mid;
        this.left = left;
        this.right = right;
    }
 }

 class Tree {
    constructor(array) {
        this.array = this.refineArray(array)
        this.root = this.buildTree(array)
    }
 
    buildTree(array) {
        let start = 0;
        let end = array.length - 1;
        let mid = Math.floor((start + end) / 2);
        if (start > end) return null;
        const node = new Node(array[mid]);
        node.left = this.buildTree(array.slice(start, mid));
        node.right = this.buildTree(array.slice(mid + 1));
        return node;
    }

    refineArray(array) {
        array.sort(this.sortNumbers);
        this.removeDups(array);
    }
    sortNumbers(a,b){
        return a-b
    }
    removeDups(array) {
        for (let i = 0; i < array.length; i++){
            if (array[i] == array[i+1]){
                array.splice(i, 1);
                i--;
            }
        }
        return array;
        // console.log(array)
    }

    insert(value, currentNode = this.root){
        if (value === currentNode.data) return console.log(`${value} is already here`);
        if (value < currentNode.data) { //check left side
            if (currentNode.left === null){
                console.log(`Adding ${value} to the tree`)
                return currentNode.left = new Node(value);
            } else if (currentNode.left != null) {
                let moveNodeLeft = currentNode.left; //shift left and restart tests
                return this.insert(value, moveNodeLeft);
            }
        }
        if (value > currentNode.data) { //check right side
            if (currentNode.right === null) {
                console.log(`Adding ${value} to the tree`);
                return currentNode.right = new Node(value);
            } else if (currentNode.right != null) {
                let moveNodeRight = currentNode.right; //shift right and restart tests
                return this.insert(value, moveNodeRight);
            }
        }
    }
    delete(value, currentNode = this.root){
        //Main conditions: Value equals the root, value is less than, value is greater than.
        //If the vlaue equals the root : 
            // check the sides. If both are null, then this node is null. Only happens with a one-node 'tree'
        if (value === currentNode.data) {
            if (currentNode.left === null && currentNode.right === null) {
            return console.log(`${value} has been removed.`);
            //if the right is there, 
            } else if (currentNode.right != null) {
                //traverse the right tree, find the lowest value (left side of right tree), 
                //make that the current node, pointing to the same right node
            } else {
                //Then what is there is only the left side, point the parent of current node to this left node.
            }
        }
        if (value < currentNode.data) {
            let moveNodeLeft = currentNode.left;
            return this.delete(value, moveNodeLeft);
        }
        if (value > currentNode.data) {
            let moveNodeRight = currentNode.right;
            return this.delete(value, moveNodeLeft);
        }
    }
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
//  const tree = new Tree([1,2,3,4,5,6,7,8]);
//  const tree = new Tree([9,1,8,2,7,3,6,4,5,3,6,4,7,4,8,44,55,64]);
//  const tree = new Tree([1,3,5,7,9]);
//  const tree = new Tree([1,3,5]);
 const tree = new Tree([50]);
//  console.log(tree);
//  console.log(tree.root.data);
//  console.log(tree.root.left.data);
//  console.log(tree.root.right.data);
//  prettyPrint(tree.root)
tree.insert(25);
prettyPrint(tree.root);
tree.insert(75);
prettyPrint(tree.root);
tree.insert(75);
prettyPrint(tree.root);




