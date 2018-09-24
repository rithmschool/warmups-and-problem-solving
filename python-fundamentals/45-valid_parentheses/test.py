import unittest
# Click to add an import
from valid_parentheses import valid_parentheses

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected valid_parentheses("()") to equal True
        self.assertEqual(valid_parentheses("()"), True)

    def test_input_2(self):

        # Failure message:
        # expected valid_parentheses(")(()))") to equal False
        self.assertEqual(valid_parentheses(")(()))"), False)

    def test_input_3(self):

        # Failure message:
        # expected valid_parentheses("(") to equal False
        self.assertEqual(valid_parentheses("("), False)

    def test_input_4(self):

        # Failure message:
        # expected valid_parentheses("(())((()())())") to equal True
        self.assertEqual(valid_parentheses("(())((()())())"), True)

    def test_input_5(self):

        # Failure message:
        # expected valid_parentheses("))((") to equal False
        self.assertEqual(valid_parentheses("))(("), False)

    def test_input_6(self):

        # Failure message:
        # expected valid_parentheses("())(") to equal False
        self.assertEqual(valid_parentheses("())("), False)

    def test_input_7(self):

        # Failure message:
        # expected valid_parentheses("()()()()())()(") to equal False
        self.assertEqual(valid_parentheses("()()()()())()("), False)
