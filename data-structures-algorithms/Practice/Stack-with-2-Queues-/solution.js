function Stack() {
  this.q1 = new Queue();
  this.q2 = new Queue();
}

// O(1) push + O(n) pop
Stack.prototype.push = function(val) {
  this.q1.enqueue(val);
  return this;
};

Stack.prototype.pop = function() {
  while (this.q1.size > 1) {
    this.q2.enqueue(this.q1.dequeue());
  }
  let removed = this.q1.dequeue();
  [this.q1, this.q2] = [this.q2, this.q1];
  return removed;
};

// O(n) push + O(1) pop
Stack.prototype.push = function(val) {
  this.q2.enqueue(val);
  while (this.q1.size > 0) {
    this.q2.enqueue(this.q1.dequeue());
  }
  [this.q1, this.q2] = [this.q2, this.q1];
  return this;
};

Stack.prototype.pop = function(val) {
  let removed = this.q1.dequeue();
  return removed;
};

// DO NOT MODIFY ANYTHING BELOW HERE - QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

function Node(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (!this.first) {
    this.first = node;
    this.last = node;
  } else {
    this.last.next = node;
    this.last = node;
  }

  return ++this.size;
};

Queue.prototype.dequeue = function() {
  if (!this.first) return null;

  var temp = this.first;
  if (this.first == this.last) {
    this.last = null;
  }
  this.first = this.first.next;
  this.size--;
  return temp.value;
};

Queue.prototype.peek = function() {
  return this.first.value;
};
