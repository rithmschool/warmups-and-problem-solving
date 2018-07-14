import unittest
# Click to add an import


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected three_odd_numbers([1, 2, 3, 4, 5]) to equal True
        self.assertEqual(three_odd_numbers([1, 2, 3, 4, 5]), True)

    def test_input_2(self):

        # Failure message:
        # expected three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0]) to equal True
        self.assertEqual(three_odd_numbers(
            [0, -2, 4, 1, 9, 12, 4, 1, 0]), True)

    def test_input_3(self):

        # Failure message:
        # expected three_odd_numbers([5, 2, 1]) to equal False
        self.assertEqual(three_odd_numbers([5, 2, 1]), False)

    def test_input_4(self):

        # Failure message:
        # expected three_odd_numbers([1, 2, 3, 3, 2]) to equal False
        self.assertEqual(three_odd_numbers([1, 2, 3, 3, 2]), False)
