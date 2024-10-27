let array = [1,2,3,4,5];
let start = 0;
let end = array.length - 1;
let mid = (start + end) / 2;
let left = array.slice(start, mid);
let right = array.slice(mid + 1);

console.log(left);
console.log(right);
console.log(end);

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

function insert(value, currentNode = this.root){
    // let currentNode = this.root;
    if (value === currentNode.data) return console.log(`${value} is already here`); //checking that it already is in tree
    if (value < currentNode.data && currentNode.left === null){ //checking that it's less than the data and adding a 'leaf' as the node to the left if left is null
        console.log(`Adding ${value} to the tree`)
        return currentNode.left = new Node(value);
        // console.log(value + ' added to tree.')
    }
    if (value < currentNode.data && currentNode.left.data != null) {
        let moveNodeLeft = currentNode.left;
        // return console.log(`Going to add ${value} here`);
        return this.insert(value, moveNodeLeft);
    }

    if (value < currentNode.data && currentNode.right === null){ //checking that it's less than the data and adding a 'leaf' as the node to the left if left is null
        console.log(`Adding ${value} to the tree`)
        return currentNode.left = new Node(value);
    }
    if (value < currentNode.data && currentNode.right.data != null) {
        let moveNodeRight = currentNode.right;
        return this.insert(value, moveNodeRight);
    }

    if (value === currentNode.data) return console.log(`${value} is already here`);
    if (value < currentNode.data) {
        if (currentNode.left === null){
            console.log(`Adding ${value} to the tree`)
            return currentNode.left = new Node(value);
        } else if (currentNode.left != null) {
            let moveNodeLeft = currentNode.left;
            return this.insert(value, moveNodeLeft);
        }
    }
    if (value > currentNode.data) {
        if (currentNode.right === null) {
            console.log(`Adding ${value} to the tree`);
            return currentNode.right = new Node(value);
        } else if (currentNode.right != null) {
            let moveNodeRight = currentNode.right;
            return this.insert(value, moveNodeRight);
        }
    }


}


let unsorted = [5,7,3,8,17,8,12,4,12,10];
unsorted.sort(sortNumbers);
console.log(unsorted);
console.log(removeDups(unsorted));