function fib(n) {
    if (n == 0) {
        return [0];   
    }
    if (n == 1) {
        return [0, 1];
    }

    var f = fib(n - 1);
    f.push(f[n - 1] + f[n - 2]);
    return f;
};
