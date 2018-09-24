import unittest
# Click to add an import
from find_the_duplicate import find_the_duplicate

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected find_the_duplicate([1, 2, 1, 4, 3, 12]) to equal 1
        self.assertEqual(find_the_duplicate([1, 2, 1, 4, 3, 12]), 1)

    def test_input_2(self):

        # Failure message:
        # expected find_the_duplicate([6, 1, 9, 5, 3, 4, 9]) to equal 9
        self.assertEqual(find_the_duplicate([6, 1, 9, 5, 3, 4, 9]), 9)

    def test_input_3(self):

        # Failure message:
        # expected find_the_duplicate([2, 1, 3, 4]) to equal None
        self.assertEqual(find_the_duplicate([2, 1, 3, 4]), None)
