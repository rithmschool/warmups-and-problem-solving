import unittest
# Click to add an import
from sum_pairs import sum_pairs


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected sum_pairs([4, 2, 10, 5, 1], 6) to equal [4, 2]
        self.assertEqual(sum_pairs([4, 2, 10, 5, 1], 6), (4, 2))

    def test_input_2(self):

        # Failure message:
        # expected sum_pairs([5, 1, 4, 8, 3, 2], 7) to equal [4, 3]
        self.assertEqual(sum_pairs([5, 1, 4, 8, 3, 2], 7), (4, 3))

    def test_input_3(self):

        # Failure message:
        # expected sum_pairs([11, 20, 4, 2, 1, 5], 100) to equal []
        self.assertEqual(sum_pairs([11, 20, 4, 2, 1, 5], 100), ())
