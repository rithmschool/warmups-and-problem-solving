import unittest
# Click to add an import
from find_greater_numbers import find_greater_numbers

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected find_greater_numbers([1, 2, 3]) to equal 3
        self.assertEqual(find_greater_numbers([1, 2, 3]), 3)

    def test_input_2(self):

        # Failure message:
        # expected find_greater_numbers([6, 1, 2, 7]) to equal 4
        self.assertEqual(find_greater_numbers([6, 1, 2, 7]), 4)

    def test_input_3(self):

        # Failure message:
        # expected find_greater_numbers([5, 4, 3, 2, 1]) to equal 0
        self.assertEqual(find_greater_numbers([5, 4, 3, 2, 1]), 0)

    def test_input_4(self):

        # Failure message:
        # expected find_greater_numbers([]) to equal 0
        self.assertEqual(find_greater_numbers([]), 0)
