import unittest
# Click to add an import
from includes import includes


class UnitTests(unittest.TestCase):

    def test_list_true(self):

        # Failure message:
        # expected includes([1, 2, 3], 1) to equal True
        self.assertEqual(includes([1, 2, 3], 1), True)

    def test_list_false(self):

        # Failure message:
        # expected includes([1, 2, 3], 1, 2) to equal False
        self.assertEqual(includes([1, 2, 3], 1, 2), False)

    def test_dict_true(self):

        # Failure message:
        # expected includes({'a': 1, 'b': 2}, 1) to equal True
        self.assertEqual(includes({'a': 1, 'b': 2}, 1), True)

    def test_dict_false(self):

        # Failure message:
        # expected includes({'a': 1, 'b': 2}, 'a') to equal False
        self.assertEqual(includes({'a': 1, 'b': 2}, 'a'), False)

    def test_string_true(self):

        # Failure message:
        # expected includes('abcd', 'b') to equal True
        self.assertEqual(includes('abcd', 'b'), True)

    def test_string_false(self):

        # Failure message:
        # expected includes('abcd', 'e') to equal False
        self.assertEqual(includes('abcd', 'e'), False)
