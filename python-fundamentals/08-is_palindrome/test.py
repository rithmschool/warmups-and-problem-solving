import unittest
# Click to add an import
from is_palindrome import is_palindrome

class UnitTests(unittest.TestCase):


    def test_input_1(self):

        # Failure message:
        # expected is_palindrome('testing') to equal False
        self.assertEqual(is_palindrome('testing'), False)


    def test_input_2(self):

        # Failure message:
        # expected is_palindrome('tacocat') to equal True
        self.assertEqual(is_palindrome('tacocat'), True)


    def test_input_3(self):

        # Failure message:
        # expected is_palindrome('hannah') to equal True
        self.assertEqual(is_palindrome('hannah'), True)


    def test_input_4(self):

        # Failure message:
        # expected is_palindrome('robert') to equal False
        self.assertEqual(is_palindrome('robert'), False)


    def test_input_5(self):

        # Failure message:
        # expected is_palindrome('amanaplanacanalpanama') to equal True
        self.assertEqual(is_palindrome('amanaplanacanalpanama'), True)
