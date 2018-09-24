import unittest
# Click to add an import
from list_check import list_check


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected list_check([[], [1], [2, 3], (1, 2)]) to be False
        self.assertEqual(list_check([[], [1], [2, 3], (1, 2)]), False)

    def test_input_2(self):

        # Failure message:
        # expected list_check([1, True, [], [1], [2, 3]]) to be False
        self.assertEqual(list_check([1, True, [], [1], [2, 3]]), False)

    def test_input_3(self):

        # Failure message:
        # expected functions.list_check([[], [1], [2, 3]]) to be True
        self.assertEqual(list_check([[], [1], [2, 3]]), True)



