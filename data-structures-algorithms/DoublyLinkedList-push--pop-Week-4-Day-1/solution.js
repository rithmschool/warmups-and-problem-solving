function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.push = function(val) {
  var node = new Node(val);
  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
    this.length++;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }
  return this;
};

DoublyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DoublyLinkedList.prototype.pop = function() {
  if (!this.head) return undefined;
  if (this.length === 1) {
    var head = this.head;
    this.clear();
    return head;
  }

  var tail = this.tail;
  var prevNode = this.tail.prev;
  prevNode.next = null;
  tail.prev = null;
  this.tail = prevNode;
  this.length--;
  return tail;
};
