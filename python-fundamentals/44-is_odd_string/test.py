import unittest
# Click to add an import
from is_odd_string import is_odd_string

class UnitTests(unittest.TestCase):

    def test_input_1(self):
        # Failure message:
        # expected is_odd_string('a') to equal True
        self.assertEqual(is_odd_string('a'), True)

    def test_input_2(self):
        # Failure message:
        # expected is_odd_string('aaaa') to equal False
        self.assertEqual(is_odd_string('aaaa'), False)

    def test_input_3(self):
        # Failure message:
        # expected is_odd_string('amazing') to equal True
        self.assertEqual(is_odd_string('amazing'), True)

    def test_input_4(self):
        # Failure message:
        # expected is_odd_string('veryfun') to equal True
        self.assertEqual(is_odd_string('veryfun'), True)

    def test_input_5(self):
        # Failure message:
        # expected is_odd_string('veryfunny') to equal False
        self.assertEqual(is_odd_string('veryfunny'), False)
