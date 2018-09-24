import unittest
# Click to add an import
from single_letter_count import single_letter_count


class UnitTests(unittest.TestCase):

    def test_one_match(self):

        # Failure message:
        # expected single_letter_count("Hello World", "h") to equal 1
        self.assertEqual(single_letter_count("Hello World", "h"), 1)

    def test_no_matches(self):

        # Failure message:
        # expected single_letter_count("Hello World", "z") to equal 0
        self.assertEqual(single_letter_count("Hello World", "z"), 0)

    def test_many_matches(self):

        # Failure message:
        # expected single_letter_count("HelLo World", "l") to equal 3
        self.assertEqual(single_letter_count("HelLo World", "l"), 3)
