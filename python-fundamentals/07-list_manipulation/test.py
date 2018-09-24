import unittest
# Click to add an import
from list_manipulation import list_manipulation


class UnitTests(unittest.TestCase):

    def test_remove_from_end(self):

        # Failure message:
        # expected list_manipulation([1, 2, 3], "remove", "end") to equal 3
        self.assertEqual(list_manipulation([1, 2, 3], "remove", "end"), 3)

    def test_remove_from_end_mutates_list(self):

        # Failure message:
        # expected list to be [1, 2] after calling list_manipulation([1, 2, 3], "remove", "end")
        l = [1, 2, 3]
        list_manipulation(l, "remove", "end")
        self.assertEqual(l, [1, 2])

    def test_remove_from_beginning(self):

        # Failure message:
        # expected list_manipulation([1, 2], "remove", "beginning") to equal 1
        self.assertEqual(list_manipulation([1, 2], "remove", "beginning"), 1)

    def test_remove_from_beginning_mutates_list(self):

        # Failure message:
        # expected list to be [2] after calling list_manipulation([1, 2], "remove", "beginning")
        l = [1, 2]
        list_manipulation(l, "remove", "beginning")
        self.assertEqual(l, [2])

    def test_add_to_beginning(self):

        # Failure message:
        # expected list_manipulation([2], "add", "beginning", 20) to equal [20, 2]
        self.assertEqual(list_manipulation(
            [2], "add", "beginning", 20), [20, 2])

    def test_add_to_beginning_mutates_list(self):

        # Failure message:
        # expected list to be [20, 2] after calling list_manipulation([2], "add", "beginning", 20)
        l = [2]
        list_manipulation(l, "add", "beginning", 20)
        self.assertEqual(l, [20, 2])

    def test_add_to_end(self):

        # Failure message:
        # expected list_manipulation([20, 2], "add", "beginning", 30) to equal [20, 2, 30]
        self.assertEqual(list_manipulation(
            [20, 2], "add", "end", 30), [20, 2, 30])

    def test_add_to_end_mutates_list(self):

        # Failure message:
        # expected list to be [20, 2, 30] after calling list_manipulation([20, 2], "add", "end", 30)
        l = [20, 2]
        list_manipulation(l, "add", "end", 30)
        self.assertEqual(l, [20, 2, 30])
