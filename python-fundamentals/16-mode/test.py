import unittest
# Click to add an import
from mode import mode


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected mode([1, 2, 1]) to equal 1
        self.assertEqual(mode([1, 2, 1]), 1)

    def test_input_2(self):

        # Failure message:
        # expected mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4]) to equal 4
        self.assertEqual(
            mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4]), 4)
