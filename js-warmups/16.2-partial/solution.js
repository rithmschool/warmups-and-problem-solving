function partial(fn) {
  return function f1(...f1innerArgs) {
    if (f1innerArgs.length >= fn.length) {
      return fn(...f1innerArgs);
    } else {
      return function f2(...f2innerArgs) {
        return f1(...f1innerArgs, ...f2innerArgs);
      };
    }
  };
}
