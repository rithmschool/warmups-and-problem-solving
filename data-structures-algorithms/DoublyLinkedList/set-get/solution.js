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

DoublyLinkedList.prototype.set = function(index, val) {
  var cur = this.__get(index);
  if (cur !== null) {
    cur.val = val;
    return true;
  }

  return false;
};

DoublyLinkedList.prototype.__get = function(index) {
  if (index < 0 || index >= this.length) {
    return null;
  }

  var el = null;
  var count;

  if (index <= Math.floor(this.length / 2)) {
    count = 0;
    for (el = this.head; el !== null && count != index; el = el.next) {
      count++;
    }
  } else {
    count = this.length - 1;
    for (el = this.tail; el !== null && count != index; el = el.prev) {
      count--;
    }
  }

  return el;
};
