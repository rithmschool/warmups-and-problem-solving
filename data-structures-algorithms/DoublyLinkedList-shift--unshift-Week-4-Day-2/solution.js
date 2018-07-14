function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList(arr = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.unshift = function(val) {
  var newNode = new Node(val);
  if (this.length) {
    this.head.prev = newNode;
    newNode.next = this.head;
  } else this.tail = newNode;
  this.head = newNode;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.shift = function() {
  if (this.length) {
    var removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removedNode.next.prev = null;
      this.head = removedNode.next;
    }
    this.length--;
    return removedNode;
  }
};
