function Node(val) {
  this.val = val;
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

SinglyLinkedList.prototype.remove = function(index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  var tmp;
  if (index === 0) {
    tmp = this.head;
    this.head = this.head.next;
    this.length--;
    return tmp;
  }

  var prev = this.__get(index - 1);
  tmp = prev.next;
  prev.next = prev.next.next;
  this.length--;
  this.tail = prev;
  return tmp;
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

SinglyLinkedList.prototype.pop = function() {
  return this.remove(this.length - 1);
};
