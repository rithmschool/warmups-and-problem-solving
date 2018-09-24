import unittest
# Click to add an import
from frequency import frequency

class UnitTests(unittest.TestCase):


    def test_numbers(self):

        # Failure message:
        # expected frequency([1, 2, 3, 4, 4, 4], 4) to equal 3
        self.assertEqual(frequency([1, 2, 3, 4, 4, 4], 4), 3)


    def test_booleans(self):

        # Failure message:
        # expected frequency([True, False, True, True], False) to equal 1
        self.assertEqual(frequency([True, False, True, True], False), 1)
