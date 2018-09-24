import unittest
# Click to add an import
from sum_up_diagonals import sum_up_diagonals

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected sum_up_diagonals([
        #     [1, 2],
        #     [3, 4]
        # ]) to equal 10
        list1 = [
            [1, 2],
            [3, 4]
        ]
        self.assertEqual(sum_up_diagonals(list1), 10)

    def test_input_2(self):

        # Failure message:
        # expected sum_up_diagonals([
        #     [1, 2, 3],
        #     [4, 5, 6],
        #     [7, 8, 9],
        # ]) to equal 30
        list2 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]

        self.assertEqual(sum_up_diagonals(list2), 30)

    def test_input_3(self):

        # Failure message:
        # expected sum_up_diagonals([
        #     [4, 1, 0],
        #     [-1, -1, 0],
        #     [0, 0, 9]
        # ]) to equal 11
        list3 = [
            [4, 1, 0],
            [-1, -1, 0],
            [0, 0, 9]
        ]

        self.assertEqual(sum_up_diagonals(list3), 11)

    def test_input_4(self):

        # Failure message:
        # expected sum_up_diagonals([
        #     [1, 2, 3, 4],
        #     [5, 6, 7, 8],
        #     [9, 10, 11, 12],
        #     [13, 14, 15, 16]
        # ]) to equal 68
        list4 = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]

        self.assertEqual(sum_up_diagonals(list4), 68)
