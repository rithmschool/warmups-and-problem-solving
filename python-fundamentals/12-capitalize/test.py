import unittest
# Click to add an import
from capitalize import capitalize


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected capitalize("elie") to equal "Elie"
        self.assertEqual(capitalize("elie"), "Elie")

    def test_input_2(self):

        # Failure message:
        # expected capitalize("matt") to equal "Matt"
        self.assertEqual(capitalize("matt"), "Matt")

    def test_input_3(self):

        # Failure message:
        # expected capitalize("Michael") to equal "Michael"
        self.assertEqual(capitalize("Michael"), "Michael")

    def test_input_4(self):

        # Failure message:
        # expected capitalize("only first word") to equal "Only first word"
        self.assertEqual(capitalize("only first word"), "Only first word")
