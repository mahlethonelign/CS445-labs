Array.prototype.removeDuplicates = function () {
    let arr = this;
    let newArr = [];
    for (num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    return new Promise(function (resolve, reject) {
        resolve(newArr)
    });
}

Array.prototype.removeDuplicatesAsync = async function () {
    console.log(await this.removeDuplicates());

}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);