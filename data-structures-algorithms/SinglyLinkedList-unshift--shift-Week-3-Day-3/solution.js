function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.shift = function() {
  return this.remove(0);
};

SinglyLinkedList.prototype.unshift = function(val) {
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.remove = function(index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  var tmp;
  if (index === 0) {
    tmp = this.head;
    this.head = this.head.next;
    this.length--;
    return tmp.val;
  }

  var prev = this.__get(index - 1);
  if (index === this.length - 1) this.tail = prev;
  tmp = prev.next;
  prev.next = prev.next.next;
  this.length--;
  return tmp.val;
};

SinglyLinkedList.prototype.__get = function(index) {
  if (index >= this.length || index < 0) {
    return null;
  }

  var cur;
  var count = 0;
  for (cur = this.head; cur !== null && count != index; cur = cur.next) {
    count++;
  }

  return cur;
};
