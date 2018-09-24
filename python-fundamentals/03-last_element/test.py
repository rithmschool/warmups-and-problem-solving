import unittest
# Click to add an import
from last_element import last_element


class UnitTests(unittest.TestCase):

    def test_nonempty_array(self):

        # Failure message:
        # expected last_element([1,2,3]) to equal 3
        self.assertEqual(last_element([1, 2, 3]), 3)

    def test_test_empty_array(self):

        # Failure message:
        # expected last_element([]) to equal None
        self.assertEqual(last_element([]), None)
