function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;

  return this;
};

SinglyLinkedList.prototype.rotate = function(n) {
  var trueN = ((n % this.length) + this.length) % this.length;
  if (trueN === 0 || this.length < 2) return this;
  var count = 0;
  var cur = this.tail;
  this.tail.next = this.head;
  while (count < trueN) {
    cur = cur.next;
    count++;
  }
  this.tail = cur;
  this.head = cur.next;
  this.tail.next = null;
  return this;
};
