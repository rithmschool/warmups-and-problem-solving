import unittest
# Click to add an import
from repeat import repeat


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected (repeat('*', 3) to equal '***'
        self.assertEqual(repeat('*', 3), '***')

    def test_input_2(self):

        # Failure message:
        # expected repeat('abc', 2) to equal 'abcabc'
        self.assertEqual(repeat('abc', 2), 'abcabc')

    def test_input_3(self):

        # Failure message:
        # expected repeat('abc', 0) to equal ''
        self.assertEqual(repeat('abc', 0), '')
