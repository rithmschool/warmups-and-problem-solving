import unittest
from three_odd_numbers import three_odd_numbers

class UnitTests(unittest.TestCase):

    def test_input_1(self):
        self.assertEqual(three_odd_numbers([1, 2, 3, 4, 5]), True)

    def test_input_2(self):
        self.assertEqual(three_odd_numbers(
            [0, -2, 4, 1, 9, 12, 4, 1, 0]), True)

    def test_input_3(self):
        self.assertEqual(three_odd_numbers([5, 2, 1]), False)

    def test_input_4(self):
        self.assertEqual(three_odd_numbers([1, 2, 3, 3, 2]), False)
