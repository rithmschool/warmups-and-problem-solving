describe("UnitTests", function() {
  it("listHasCycle_is_a_function", function() {
    // Failure message:
    // listHasCycle should be a function
    expect(typeof listHasCycle === "function").toBe(true);
  });
  it("should_detect_cycles_and_return_true", function() {
    // Failure message:
    // did not return true to detect cycles
    const head1 = new ListNode(1);
    const second1 = new ListNode(1);
    const third1 = new ListNode(3);

    head1.next = second1;
    second1.next = third1;
    third1.next = second1;

    const head2 = new ListNode(1);
    const second2 = new ListNode(2);
    const third2 = new ListNode(3);

    head2.next = second2;
    second2.next = third2;
    third2.next = head2;

    expect(listHasCycle(head2)).toBe(true);

    const head3 = new ListNode(1);
    const second3 = new ListNode(14);
    head3.next = second3;
    second3.next = head3;

    expect(listHasCycle(head2)).toBe(true);
  });
  it("should_return_false_for_no_cycles", function() {
    // Failure message:
    // did not return false with no cycles
    const head = new ListNode(5);
    const second = new ListNode(5);
    const third = new ListNode(5);

    head.next = second;
    second.next = third;

    expect(listHasCycle(head)).toBe(false);

    const head2 = new ListNode(1);
    const second2 = new ListNode(2);

    expect(listHasCycle(head2)).toBe(false);
  });
  it("should_work_with_a_single_node", function() {
    // Failure message:
    // did not work with a single node as input
    const head = new ListNode(5);

    expect(listHasCycle(head)).toBe(false);
  });
});
