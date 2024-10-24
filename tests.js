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
let unsorted = [5,7,3,8,17,8,12,4,12,10];
unsorted.sort(sortNumbers);
console.log(unsorted);
console.log(removeDups(unsorted));