describe("UnitTests", function () {
    Advanced
    Example test case
    it("functions_exist", function () {
        // Failure message: 
        // do not mess with TreeNode or lowestCommonAncestorBST function signatures
        expect(typeof TreeNode === 'function').toBe(true);
        expect(typeof lowestCommonAncestorBST === 'function').toBe(true);
    });
    it("passes_example_tree", function () {
        // Failure message: 
        // This test has no failure messages
        const root = new TreeNode(6);

        const left = new TreeNode(2);
        root.left = left;

        const left_left = new TreeNode(0);
        left.left = left_left;

        const left_right = new TreeNode(4);
        left.right = left_right;

        const left_right_left = new TreeNode(3);
        left_right.left = left_right_left;

        const left_right_right = new TreeNode(5);
        left_right.right = left_right_right;

        const right = new TreeNode(8);
        root.right = right;

        const right_left = new TreeNode(7);
        right.left = right_left;

        const right_right = new TreeNode(9);
        right.right = right_right;

        expect(lowestCommonAncestorBST(root, left_right_left, right_right)).toBe(root);
        // root = 6, p = 3, q = 9 --> 6 is the LCA

        expect(lowestCommonAncestorBST(root, left_right_left, left_right_right)).toBe(left_right);
        // root = 6, p = 3, q = 5 --> 4 is the LCA

        expect(lowestCommonAncestorBST(root, left_left, left)).toBe(left);
        // root = 6, p = 0, q = 2 --> 2 is the LCA

        expect(lowestCommonAncestorBST(root, left_left, left_right_right)).toBe(left);
        // root = 6, p = 0, q = 2 --> 2 is the LCA

        // root = 6, p = 9, q = 7
        expect(lowestCommonAncestorBST(root, right_left, right_right)).toBe(right);
        // --> right (8) is the LCA
    });
});