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
    // delete(value, currentNode = this.root, parentNode){
    //     if (value === currentNode.data){
    //         var changeMe = currentNode;
    //         if (currentNode.left === null && currentNode.right === null) {
    //             if (currentNode.data < parentNode.data) {
    //                 console.log(`${value} has been removed.`);
    //                 parentNode.left = null;
    //                 } else {
    //                 console.log(`${value} has been removed.`);
    //                 parentNode.right = null; 
    //                 }

    //         } else if (currentNode.right) {
    //             parentNode = currentNode;     
    //             currentNode = currentNode.right; //move to right subtree
    //             if (!currentNode.left) { //if there is no left node, make the switch
    //                 changeMe.data = currentNode.data; 
    //                 parentNode.right = currentNode.right;   
    //             } else if (currentNode.left) { //if there is a left node to the right subtree, get to the bottom-most lefty
    //                 while (currentNode.left) {  //find the lowest value (left side of right tree), 
    //                     parentNode = currentNode;
    //                     currentNode = currentNode.left;
    //                 } 
    //                 changeMe.data = currentNode.data; //make switch
    //                 parentNode.left = null;
    //             }    

    //         } else {
    //             parentNode = currentNode;
    //             currentNode = currentNode.left; //move to the left tree; there must be a left
    //             if (!currentNode.right) {
    //                 changeMe.data = currentNode.data;
    //                 parentNode.left = currentNode.left;
    //             } else if (currentNode.right) {
    //                 while (currentNode.right) {
    //                     parentNode = currentNode;
    //                     currentNode = currentNode.right;
    //                 }
    //             parentNode.left = currentNode;
    //             changeMe.data = currentNode.data
    //             }
    //         }    
    //             return
    //     } 
        
    //     if (value < currentNode.data ) {
    //         let parentNode = currentNode;
    //         let moveNodeLeft = currentNode.left;
    //         return this.delete(value, moveNodeLeft, parentNode);
    //     }
    //     if (value > currentNode.data) {
    //         let parentNode = currentNode;
    //         let moveNodeRight = currentNode.right;
    //         return this.delete(value, moveNodeRight, parentNode);
    //     }
    // }

    deleteNode(value, currentNode = this.root, parentNode) {
        if (value === currentNode.data){
            var deleteMe = currentNode;

            if (currentNode.left === null && currentNode.right === null) {
                if (currentNode.data < parentNode.data) {
                    console.log(`${value} has been removed.`);
                    parentNode.left = null;
                    } else {
                    console.log(`${value} has been removed.`);
                    parentNode.right = null; 
                    }
                    
            } else if (currentNode.right) {
                currentNode = currentNode.right; //move to right subtree
                if (!currentNode.left) { //if there is no left node, make the switch
                    if (currentNode.data < parentNode.data){
                    currentNode.left = deleteMe.left;
                    parentNode.left = currentNode;
                    } else {
                        currentNode.left = deleteMe.left;
                        parentNode.right = currentNode;
                    }
                    return;
                } else while (currentNode.left) {  //find the lowest value (left side of right tree), 
                            var currentParent = currentNode;
                            currentNode = currentNode.left;
                        } 
                        if (parentNode) { 
                            currentNode.left = deleteMe.left;
                            deleteMe.left = currentNode;
                            currentParent.left = null;
                            currentNode.right = currentParent;
                            if (currentNode.data < parentNode.data){
                                parentNode.left = currentNode;
                            } else {
                                parentNode.right = currentNode;

                            }
                          
                        } else {
                            currentNode.left = deleteMe.left;
                            deleteMe.left = currentNode;
                            currentParent.left = null;
                            currentNode.right = this.root.right;
                            this.root = currentNode;
                        }

            } else {
                parentNode = currentNode;
                currentNode = currentNode.left; //move to the left tree; there must be a left
                    if (!currentNode.right) {
                        changeMe = currentNode;
                        parentNode.left = currentNode.left;
                    } else while (currentNode.right) {
                        parentNode = currentNode;
                        currentNode = currentNode.right;
                        }
                        parentNode.left = currentNode;
                        changeMe = currentNode
            }
            return
        }    
        
        if (value < currentNode.data ) {
            let parentNode = currentNode;
            let moveNodeLeft = currentNode.left;
            return this.deleteNode(value, moveNodeLeft, parentNode);
        }
        if (value > currentNode.data) {
            let parentNode = currentNode;
            let moveNodeRight = currentNode.right;
            return this.deleteNode(value, moveNodeRight, parentNode);
        }
    }

    newDelete(value, movingNode = this.root, tracker = []) {
        if (value === movingNode.data) {
            let successorData;
            if (movingNode.left === null && movingNode.right === null) {
                movingNode = this.root;
                for (let i = 0; i < tracker.length - 1; i++) {
                    movingNode = movingNode[tracker[i]];
                }
                movingNode[tracker.pop()] = null;
                return;
            }

            if (movingNode.right) {
                movingNode = movingNode.right;
                this.deleteHelper('right', 'left', movingNode, tracker, successorData);
            } else {
                movingNode = movingNode.left;
                this.deleteHelper('left', 'right', movingNode, tracker, successorData);
            }

        } else if (value > movingNode.data){
            let currentNode = movingNode.right;
            tracker.push('right');
            return this.newDelete(value, currentNode, tracker);
        } else if (value < movingNode.data) {
            let currentNode = movingNode.left;
            tracker.push('left');
            return this.newDelete(value, currentNode, tracker);
        }
    }
    
    deleteHelper(right, left, movingNode, tracker, successorData) {
            if (!movingNode[left]) {
                successorData = movingNode.data;
            } else while (movingNode[left][left]){
                movingNode = movingNode[left];
            } 
            if (movingNode[left]) {
                successorData = movingNode[left].data;
                movingNode[left] = null; //node removed at the end of left node chain if there is a left chain
            }
            movingNode = this.root;
            for (let i = 0; i < tracker.length; i++) {
                movingNode = movingNode[tracker[i]];
            }
            movingNode.data = successorData;
            if (movingNode.data === movingNode[right].data) {
                movingNode[right] = movingNode[right][right];
            }
        }
    
    find(value, currentNode = tree.root) {
        if (value === currentNode.data) {
            return currentNode;
        }
        if (value < currentNode.data ) {
            let moveNodeLeft = currentNode.left;
            return this.find(value, moveNodeLeft);
        } else {
            let moveNodeRight = currentNode.right;
            return this.find(value, moveNodeRight);
        }
    }

    height(node, currentNode = tree.root) {
        if (node === currentNode.data) {
            return this.heightHelper(node, currentNode);
        }
        if (node < currentNode.data ) {
            const moveNodeLeft = currentNode.left;
            return this.height(node, moveNodeLeft);
        } else {
            const moveNodeRight = currentNode.right;
            return this.height(node, moveNodeRight);
        }
    }
    heightHelper (node, currentNode, counterL = 0, counterR = 0){
        if (!currentNode.left && !currentNode.right){
            if (counterL > counterR){
                return counterL 
            } else return counterR;
        } 
        if (currentNode.left && currentNode.right){
            counterL++;
            counterR++; 
            const goLeft = this.heightHelper(node, currentNode.left, counterL, counterR);
            const goRight = this.heightHelper(node, currentNode.right, counterL, counterR);
            if (goLeft > goRight) {
                return goLeft
            } else return goRight;
        }
        if (currentNode.left && !currentNode.right){
            counterL++;
            console.log(counterL, counterR);
            const goLeft = this.heightHelper(node, currentNode.left, counterL, counterR);
            return goLeft;
        }
        if (!currentNode.left && currentNode.right){
            counterR++;
            const goRight = this.heightHelper(node, currentNode.right, counterL, counterR);
            return goRight;
        }
        
    }

    depth(node, currentNode = tree.root, counter = 0) {
        if (node === currentNode.data) {
            return counter;
        }
        if (node < currentNode.data ) {
            let moveNodeLeft = currentNode.left;
            counter++;
            return this.depth(node, moveNodeLeft, counter);
        } else {
            let moveNodeRight = currentNode.right;
            counter++;
            return this.depth(node, moveNodeRight, counter);
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
  }


//  console.log(buildTree([1,2,3,4,5]));
 const tree = new Tree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);
//  const tree = new Tree([9,1,8,2,7,3,6,4,5,3,6,4,7,4,8,44,55,64]);
//  prettyPrint(tree.root)
// tree.insert(25);

prettyPrint(tree.root);
console.log(tree.height(10));








