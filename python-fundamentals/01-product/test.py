import unittest
from product import product


class UnitTests(unittest.TestCase):

    def test_multiplies_numbers_1(self):

        # Failure message:
        # expected product(2, 2) to equal 4
        self.assertEqual(product(2, 2), 4)

    def test_multiplies_numbers_2(self):

        # Failure message:
        # expected product(2, -2) to equal -4
        self.assertEqual(product(2, -2), -4)
