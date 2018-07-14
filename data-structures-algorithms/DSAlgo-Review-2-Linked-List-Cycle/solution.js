// Linked List Constructor
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * O(n) space using a Set
 */

function listHasCycleSet(node) {
  const seen = new Set();
  while (node !== null) {
    if (seen.has(node)) {
      return true;
    }
    seen.add(node);
    node = node.next;
  }
  return false;
}

/**
 * O(n) space using a Map
 */

function listHasCycleMap(node) {
  const seen = new Map();
  while (node !== null) {
    if (seen.has(node)) {
      return true;
    }
    seen.set(node, node); // the value can be whatever here
    node = node.next;
  }
  return false;
}

/**
 * O(1) space using a two pointers
 *  Check out:
 *    https://leetcode.com/problems/linked-list-cycle/solution/
 */

function listHasCycle(node) {
  let slow = node;
  let fast = node.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
