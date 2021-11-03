let isPrime = function (num) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) {
                    reject({ prime: false });
                } else {
                    resolve({ prime: true });

                }
            }

        }, 500)
    })
}

let isPrimeAsync = async function (num) {
    try {
        console.log(await isPrime(num));
    } catch (e) {
        console.log(e);
    }

}
console.log('start');
isPrimeAsync(4)

console.log('end');