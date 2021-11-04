
Array.prototype.removeDuplicatesAsync = async function () {
    console.log(await removeDuplicate(this));

}
function removeDuplicate(arr){
    let newArr = [];
    for (num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    return newArr;
    
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);
