function MinStack() {
  this.min = Infinity; // initialize the min to an impossibly large value so any item is the new min
  this.stack = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // if the new value is smaller than the current min,
  //   push the current min onto the stack first to save it
  //   then push the new value
  if (x <= this.min) {
    this.stack.push(this.min);
    this.min = x;
  }
  this.stack.push(x);
};

/**
 * @return {number}
 */
MinStack.prototype.pop = function() {
  let popped = this.stack.pop();
  // if we popped off the min, we need to pop again to get a new min
  if (popped === this.min) {
    this.min = this.stack.pop();
  }

  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};
