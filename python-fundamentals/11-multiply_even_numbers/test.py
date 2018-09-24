import unittest
# Click to add an import
from multiply_even_numbers import multiply_even_numbers


class UnitTests(unittest.TestCase):

    def test_many_evens(self):

        # Failure message:
        # expected multiply_even_numbers([2, 3, 4, 5, 6]) to equal 48
        self.assertEqual(multiply_even_numbers([2, 3, 4, 5, 6]), 48)

    def test_one_even(self):

        # Failure message:
        # expected multiply_even_numbers([3, 4, 5]) to equal 4
        self.assertEqual(multiply_even_numbers([3, 4, 5]), 4)

    def test_no_evens(self):

        # Failure message:
        # expected multiply_even_numbers([1,3,5,7,9]) to equal 1
        self.assertEqual(multiply_even_numbers([1, 3, 5, 7, 9]), 1)
