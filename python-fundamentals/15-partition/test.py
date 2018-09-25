import unittest
# Click to add an import
from partition import partition


class UnitTests(unittest.TestCase):

    def test_input_1(self):
        def isEven(num):
            return num % 2 == 0
        # Failure message:
        # expected partition([1, 2, 3, 4], isEven)
        # to equal [ [ 2, 4 ], [ 1, 3 ] ]
        self.assertEqual(partition([1, 2, 3, 4], isEven), [[2, 4], [1, 3]])


    def test_input_2(self):

        def isString(el):
            return isinstance(el, str)
        # Failure message:
        # expected partition(["hi", None, 6, "bye"], isString)
        # to equal [ [ "hi", "bye" ], [ None, 6 ] ]

        self.assertEqual(partition(["hi", None, 6, "bye"], isString), [
            ["hi", "bye"], [None, 6]])
