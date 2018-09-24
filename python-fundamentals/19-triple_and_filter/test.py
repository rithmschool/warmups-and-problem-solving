import unittest
# Click to add an import
from triple_and_filter import triple_and_filter


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected triple_and_filter([1, 2, 3, 4]) to equal [12]
        self.assertEqual(triple_and_filter([1, 2, 3, 4]), [12])

    def test_input_2(self):

        # Failure message:
        # expected triple_and_filter([6, 8, 10, 12]) to equal [24, 36]
        self.assertEqual(triple_and_filter([6, 8, 10, 12]), [24, 36])
