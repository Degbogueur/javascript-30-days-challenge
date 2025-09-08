const MathToolkit = {
    factorial(n) {
        return n === 0 ? 1 : n * this.factorial(n - 1);
    },

    fibonacci(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n === 0) return 0;
        if (n === 1) return 1;
        return memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
    },

    isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        let squareRoot = Math.floor(Math.sqrt(n));
        for (let i = 3; i <= squareRoot; i+= 2) {
            if (n % i === 0) return false;
        }

        return true;
    },

    gcd(a, b) {
        if (b === 0) return a;
        return this.gcd(b, a % b);
    }
};

console.log(MathToolkit.factorial(5));
console.log(MathToolkit.isPrime(1));
console.log(MathToolkit.isPrime(0));
console.log(MathToolkit.isPrime(-3));
console.log(MathToolkit.isPrime(2));
console.log(MathToolkit.isPrime(18));
console.log(MathToolkit.isPrime(29));
console.log(MathToolkit.fibonacci(5));
console.log(MathToolkit.fibonacci(6));
console.log(MathToolkit.fibonacci(60));
console.log(MathToolkit.gcd(48, 18));
console.log(MathToolkit.gcd(12, 4));