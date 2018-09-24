import unittest
# Click to add an import
from range_in_list import range_in_list

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected range_in_list([1, 2, 3, 4], 0, 2) to equal 6
        self.assertEqual(range_in_list([1, 2, 3, 4], 0, 2), 6)

    def test_input_2(self):

        # Failure message:
        # expected range_in_list([1, 2, 3, 4], 0, 3) to equal 10
        self.assertEqual(range_in_list([1, 2, 3, 4], 0, 3), 10)

    def test_input_3(self):

        # Failure message:
        # expected range_in_list([1, 2, 3, 4], 1) to equal 9
        self.assertEqual(range_in_list([1, 2, 3, 4], 1), 9)

    def test_input_4(self):

        # Failure message:
        # expected range_in_list([1, 2, 3, 4]) to equal 10
        self.assertEqual(range_in_list([1, 2, 3, 4]), 10)

    def test_input_5(self):

        # Failure message:
        # expected range_in_list([1, 2, 3, 4], 0, 100) to equal 10
        self.assertEqual(range_in_list([1, 2, 3, 4], 0, 100), 10)

    def test_input_6(self):

        # Failure message:
        # expected range_in_list([], 0, 1) to equal 0
        self.assertEqual(range_in_list([], 0, 1), 0)
