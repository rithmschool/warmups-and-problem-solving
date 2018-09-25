import unittest
# Click to add an import
from partition import partition


class UnitTests(unittest.TestCase):

    def isEven(self, num):
        return num % 2 == 0

    def test_input_1(self):
        # Failure message:
        # expected partition([1, 2, 3, 4], isEven)
        # to equal [ [ 2, 4 ], [ 1, 3 ] ]
        self.assertEqual(partition([1, 2, 3, 4], self.isEven), [[2, 4], [1, 3]])

    def isString(self, el):
        return isinstance(el, str)

    def test_input_2(self):
        # Failure message:
        # expected partition(["hi", None, 6, "bye"], isString)
        # to equal [ [ "hi", "bye" ], [ None, 6 ] ]

        self.assertEqual(partition(["hi", None, 6, "bye"], self.isString), [
            ["hi", "bye"], [None, 6]])
