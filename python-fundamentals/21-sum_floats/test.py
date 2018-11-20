import unittest
# Click to add an import
from sum_floats import sum_floats

class UnitTests(unittest.TestCase):

    def test_floats(self):

        # Failure message:
        # expected sum_floats(1.5, 2.4, 'awesome', [], 1) to equal 3.9
        self.assertEqual(sum_floats([1.5, 2.4, 'awesome', [], 1]), 3.9)

    def test_no_floats(self):

        # Failure message:
        # expected sum_floats(1, 2, 3, 4, 5) to equal 0
        self.assertEqual(sum_floats([1, 2, 3, 4, 5]), 0)
