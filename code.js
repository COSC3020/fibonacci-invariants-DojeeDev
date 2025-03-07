function fib(n) {
  if (n == 0) { return [0]; }

  var fib_array = [0,1]

  while (n > (fib_array.length-1)) {
    var i = fib_array.length;
    var fib_i = fib_array[i-1] + fib_array[i-2];
    fib_array.push(fib_i);
  }

  return fib_array;
}

