function isPrime(value) {

    if (!isPrime.answers) {
        isPrime.answers = {}; //Creates the cache 
    }

    if (isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
    }
    
    var prime = value !== 1; // 1 is not a prime

    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime; //Stores the computed value
    
}

//test

if (isPrime(5)) {
    console.log("5 is prime!");
}

if (isPrime.answers[5]) {
    console.log("The answer was cached!");
}