import unittest
# Click to add an import
from two_oldest_ages import two_oldest_ages

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected two_oldest_ages([1, 2, 10, 8]) to equal [8, 10]
        self.assertEqual(two_oldest_ages([1, 2, 10, 8]), [8, 10])

    def test_input_2(self):

        # Failure message:
        # expected two_oldest_ages([6, 1, 9, 10, 4]) to equal [9, 10]
        self.assertEqual(two_oldest_ages([6, 1, 9, 10, 4]), [9, 10])

    def test_input_3(self):

        # Failure message:
        # expected two_oldest_ages([4, 25, 3, 20, 19, 5]) to equal [20, 25]
        self.assertEqual(two_oldest_ages([4, 25, 3, 20, 19, 5]), [20, 25])
