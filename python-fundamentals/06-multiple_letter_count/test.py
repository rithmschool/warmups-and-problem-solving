import unittest
# Click to add an import
from multiple_letter_count import multiple_letter_count


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected multiple_letter_count("awesome")
        # to equal {'a': 1, 'e': 2, 'm': 1, 'o': 1, 's': 1, 'w': 1}
        self.assertEqual(multiple_letter_count("awesome"), {
            'a': 1, 'e': 2, 'm': 1, 'o': 1, 's': 1, 'w': 1
        })

    def test_input_2(self):

        # Failure message:
        # expected multiple_letter_count("hello world")
        # to equal {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
        self.assertEqual(multiple_letter_count("hello world"), {
            'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1
        })
