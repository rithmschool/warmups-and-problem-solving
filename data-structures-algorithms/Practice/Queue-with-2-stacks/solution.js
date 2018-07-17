function Queue() {
  this.pushStack = new Stack();
  this.popStack = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.pushStack.push(val);
  return this;
};

Queue.prototype.dequeue = function() {
  if (this.popStack.size === 0) {
    while (this.pushStack.size > 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

function Node(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Stack.prototype.push = function(val) {
  var node = new Node(val);

  if (!this.first) {
    this.first = node;
    this.last = node;
  } else {
    var tmp = this.first;
    this.first = node;
    this.first.next = tmp;
  }

  return ++this.size;
};

Stack.prototype.pop = function() {
  if (!this.first) return null;

  var temp = this.first;

  if (this.first == this.last) {
    this.last = null;
  }

  this.first = this.first.next;
  this.size--;
  return temp.value;
};
