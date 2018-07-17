function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.set = function(index, val) {
  var cur = this.__get(index);
  if (cur !== null) {
    cur.val = val;
    return true;
  }

  return false;
};

SinglyLinkedList.prototype.__get = function(index) {
  if (index >= this.length || index < 0) {
    return null;
  }

  cur = this.head;
  var count = 0;
  for (var cur = this.head; cur !== null && count != index; cur = cur.next) {
    count++;
  }

  return cur;
};
