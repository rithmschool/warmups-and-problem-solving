import unittest
# Click to add an import
from vowel_count import vowel_count


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected vowel_count('awesome') to equal {'a': 1, 'e': 2, 'o': 1}
        self.assertEqual(vowel_count('awesome'), {'a': 1, 'e': 2, 'o': 1})

    def test_input_2(self):

        # Failure message:
        # expected vowel_count('Elie') to equal {'e': 2, 'i': 1}
        self.assertEqual(vowel_count('Elie'), {'e': 2, 'i': 1})

    def test_input_3(self):

        # Failure message:
        # expected vowel_count('Colt') to equal {'o': 1}
        self.assertEqual(vowel_count('Colt'), {'o': 1})
