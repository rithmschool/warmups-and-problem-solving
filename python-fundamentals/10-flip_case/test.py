import unittest
# Click to add an import
from flip_case import flip_case


class UnitTests(unittest.TestCase):


    def test_input_1(self):

        # Failure message:
        # expected flip_case("Hardy har har", "h") to equal "hardy Har Har"
        self.assertEqual(flip_case("Hardy har har", "h"), "hardy Har Har")


    def test_input_2(self):

        # Failure message:
        # expected flip_case("Aaaaahhh!", "A") to equal "aAAAAhhh!"
        self.assertEqual(flip_case("Aaaaahhh!", "A"), "aAAAAhhh!")
