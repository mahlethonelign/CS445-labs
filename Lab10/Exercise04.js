let fibonacci1 = (function () {
    let memo = [];
    function fib(n) {
        let value;
        if (memo.includes(value)) {
            value = memo[memo.indexOf[value]];
        } else {
            if (n <= 1) {
                value = n;
            } else {
                value = fib(n - 1) + fib(n - 2);
            }
        }
        return value;

    }
    return fib;
})()

function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.time("memo")
console.log(fibonacci2(1))
console.timeEnd("memo")
console.time()
console.log(fibonacci1(1))
console.timeEnd()