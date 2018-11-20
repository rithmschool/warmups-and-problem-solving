import unittest
# Click to add an import
from sum_even_values import sum_even_values


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected sum_even_values([1, 2, 3, 4, 5, 6]) to equal 12
        self.assertEqual(sum_even_values([1, 2, 3, 4, 5, 6]), 12)

    def test_input_2(self):

        # Failure message:
        # expected sum_even_values([4, 2, 1, 10]) to equal 16
        self.assertEqual(sum_even_values([4, 2, 1, 10]), 16)

    def test_input_3(self):

        # Failure message:
        # expected sum_even_values([1]) to equal 0
        self.assertEqual(sum_even_values([1]), 0)
