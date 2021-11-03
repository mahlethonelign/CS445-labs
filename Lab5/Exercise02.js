Array.prototype.removeDuplicatesAsync = function () {
    let arr = this;
    let newArr = [];
    return new Promise(function (resolve, reject) {
        for (num of arr) {
            if (!newArr.includes(num)) {
                newArr.push(num);
            }
        }
        resolve(newArr);
    }).then(console.log);
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);
