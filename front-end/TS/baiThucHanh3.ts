const checkPrimeNumber = (num: number) => {
    if (num == 1) {
        return false
    }

    if (num == 2 || num == 3) {
        return true
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }

    return true
}

console.log(checkPrimeNumber(11));