import unittest
# Click to add an import
from find_factors import find_factors


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected find_factors(10) to equal [1, 2, 5, 10]
        self.assertEqual(find_factors(10), [1, 2, 5, 10])

    def test_input_2(self):

        # Failure message:
        # expected find_factors(11) to equal [1, 11]
        self.assertEqual(find_factors(11), [1, 11])

    def test_input_3(self):

        # Failure message:
        # expected find_factors(111) to equal [1, 3, 37, 111]
        self.assertEqual(find_factors(111), [1, 3, 37, 111])

    def test_input_4(self):

        # Failure message:
        # expected find_factors(321421) to equal [1, 293, 1097, 321421]
        self.assertEqual(find_factors(321421), [1, 293, 1097, 321421])

    def test_input_5(self):

        # Failure message:
        # expected find_factors(412146) to equal [1, 2, 3, 6, 7, 9, 14, 18, 21, 42, 63, 126, 3271, 6542, 9813, 19626, 22897, 29439, 45794, 58878, 68691, 137382, 206073, 412146]
        self.assertEqual(find_factors(412146), [1, 2, 3, 6, 7, 9, 14, 18, 21, 42, 63, 126,
                                                3271, 6542, 9813, 19626, 22897, 29439, 45794, 58878, 68691, 137382, 206073, 412146])
