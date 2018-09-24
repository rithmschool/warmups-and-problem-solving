import unittest
# Click to add an import
from return_day import return_day

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected return_day(1) to equal "Sunday"
        self.assertEqual(return_day(1), "Sunday")

    def test_input_2(self):

        # Failure message:
        # expected return_day(2) to equal "Monday"
        self.assertEqual(return_day(2), "Monday")

    def test_input_3(self):

        # Failure message:
        # expected return_day(3) to equal "Tuesday"
        self.assertEqual(return_day(3), "Tuesday")

    def test_input_4(self):

        # Failure message:
        # expected return_day(4) to equal "Wednesday"
        self.assertEqual(return_day(4), "Wednesday")

    def test_input_5(self):

        # Failure message:
        # expected return_day(5) to equal "Thursday"
        self.assertEqual(return_day(5), "Thursday")

    def test_input_6(self):

        # Failure message:
        # expected return_day(6) to equal "Friday"
        self.assertEqual(return_day(6), "Friday")

    def test_input_7(self):

        # Failure message:
        # expected return_day(7) to equal "Saturday"
        self.assertEqual(return_day(7), "Saturday")

    def test_input_8(self):

        # Failure message:
        # expected return_day(41) to equal None
        self.assertIsNone(return_day(41))

    def test_input_9(self):

        # Failure message:
        # expected return_day(0) to equal None
        self.assertIsNone(return_day(0))
