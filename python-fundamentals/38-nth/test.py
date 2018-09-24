import unittest
# Click to add an import
from nth import nth

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected nth(['a', 'b', 'c', 'd'], 1) to equal 'b'
        self.assertEqual(nth(['a', 'b', 'c', 'd'], 1), 'b')

    def test_input_2(self):

        # Failure message:
        # expected nth(['a', 'b', 'c', 'd'], -2) to equal 'c'
        self.assertEqual(nth(['a', 'b', 'c', 'd'], -2), 'c')

    def test_input_3(self):

        # Failure message:
        # expected nth(['a', 'b', 'c', 'd'], 0) to equal 'a'
        self.assertEqual(nth(['a', 'b', 'c', 'd'], 0), 'a')

    def test_input_4(self):

        # Failure message:
        # expected nth(['a', 'b', 'c', 'd'], -4) to equal 'a'
        self.assertEqual(nth(['a', 'b', 'c', 'd'], -4), 'a')

    def test_input_5(self):

        # Failure message:
        # expected nth(['a', 'b', 'c', 'd'], -1) to equal 'd'
        self.assertEqual(nth(['a', 'b', 'c', 'd'], -1), 'd')

    def test_input_6(self):

        # Failure message:
        # expected nth(['a', 'b', 'c', 'd'], 3) to equal 'd'
        self.assertEqual(nth(['a', 'b', 'c', 'd'], 3), 'd')
