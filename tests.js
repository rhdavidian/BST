

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

function deleteNode(value, currentNode = this.root, parentNode) {
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

function newDelete(value) {
    if (value === this.root.data) {

    }

    if (value > this.root.data){
        this.root = this.root.right;
        return this.newDelete(value)
    } else {
        this.root = this.root.left;
        return this.newDelete(value)
    }
    
}


let twentyfive = 25;
let otherTwentyfive = twentyfive;
twentyfive = 26;
console.log(otherTwentyfive, twentyfive);

// let unsorted = [5,7,3,8,17,8,12,4,12,10];
// unsorted.sort(sortNumbers);
// console.log(unsorted);
// console.log(removeDups(unsorted));