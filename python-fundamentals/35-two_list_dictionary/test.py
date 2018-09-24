import unittest
# Click to add an import
from two_list_dictionary import two_list_dictionary


class UnitTests(unittest.TestCase):

    def test_too_many_keys(self):
        # Failure message:
        # expected two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3]),
        # to equal {'a': 1, 'b': 2, 'c': 3, 'd': None}
        self.assertEqual(
            two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3]),
            {'a': 1, 'b': 2, 'c': 3, 'd': None}
        )

    def test_too_many_values(self):
        # Failure message:
        # expected two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        # to equal {'a': 1, 'b': 2, 'c': 3}
        self.assertEqual(
            two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4]),
            {'a': 1, 'b': 2, 'c': 3}
        )

    def test_equal_keys_and_values(self):
        # Failure message:
        # expected two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        # to equal {'x': 9, 'y': 8, 'z': 7}
        self.assertEqual(
            two_list_dictionary(['x', 'y', 'z'], [9, 8, 7]),
            {'x': 9, 'y': 8, 'z': 7}
        )
