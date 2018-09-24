import unittest
# Click to add an import
from number_compare import number_compare


class UnitTests(unittest.TestCase):

    def test_equal_values(self):

        # Failure message:
            # expected number_compare(1, 1) to equal "Numbers are equal"
        self.assertEqual(number_compare(1, 1), "Numbers are equal")
        self.assertEqual(number_compare(1, 0), "First is greater")
        self.assertEqual(number_compare(2, 4), "Second is greater")

    def test_first_greater(self):

        # Failure message:
        # expected number_compare(1, 0) to equal "First is greater"
        self.assertEqual(number_compare(1, 0), "First is greater")

    def test_second_greater(self):

        # Failure message:
        # expected number_compare(2, 4) to equal "Second is greater"
        self.assertEqual(number_compare(2, 4), "Second is greater")
