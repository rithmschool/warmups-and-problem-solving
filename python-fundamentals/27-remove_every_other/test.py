import unittest
# Click to add an import
from remove_every_other import remove_every_other


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected remove_every_other([1, 2, 3, 4, 5]) to equal [1, 3, 5]
        self.assertEqual(remove_every_other([1, 2, 3, 4, 5]), [1, 3, 5])

    def test_input_2(self):

        # Failure message:
        # expected remove_every_other([5, 1, 2, 4, 1]) to equal [5, 2, 1]
        self.assertEqual(remove_every_other([5, 1, 2, 4, 1]), [5, 2, 1])

    def test_input_3(self):

        # Failure message:
        # expected remove_every_other([1]) to equal [1]
        self.assertEqual(remove_every_other([1]), [1])
