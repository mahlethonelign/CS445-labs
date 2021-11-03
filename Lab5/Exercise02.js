Array.prototype.removeDuplicates = function () {
    let arr = this;
    let newArr = [];
    for (num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    return new Promise(function (resolve, reject) {
        resolve(newArr);
    }).then(console.log);
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates();
console.log(`end`);
