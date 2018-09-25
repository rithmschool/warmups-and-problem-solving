import unittest
# Click to add an import
# from only_strings import only_strings
from solution import only_strings

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected only_strings("hello", "world") to be True
        self.assertEqual(only_strings("hello", "world"), True)

    def test_input_2(self):

        # Failure message:
        # expected only_strings(1, "bye") to be False
        self.assertEqual(only_strings(1, "bye"), False)

    def test_input_3(self):

        # Failure message:
        # expected only_strings(string1="string", string2="other string") to be True
        self.assertEqual(only_strings(string1="string",
                                      string2="other string"), True)

    def test_input_4(self):

        # Failure message:
        # expected only_strings([], string="yep") to be False
        self.assertEqual(only_strings([], string="yep"), False)

    def test_input_5(self):

        # Failure message:
        # expected only_strings("so", "many", wait_for_it="strings") to be True
        self.assertEqual(only_strings(
            "so", "many", wait_for_it="strings"), True)

    def test_input_6(self):

        # Failure message:
        # expected only_strings() to be False
        self.assertEqual(only_strings(), True)
