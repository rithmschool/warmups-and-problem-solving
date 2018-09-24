import unittest
# Click to add an import
from reverse_vowels import reverse_vowels

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected reverse_vowels("Hello!") to equal "Holle!"
        self.assertEqual(reverse_vowels("Hello!"), "Holle!")

    def test_input_2(self):

        # Failure message:
        # expected reverse_vowels("Tomatoes") to equal "Temotaos"
        self.assertEqual(reverse_vowels("Tomatoes"), "Temotaos")

    def test_input_3(self):

        # Failure message:
        # expected reverse_vowels("Reverse Vowels In A String")
        # to equal "RivArsI Vewols en e Streng"
        self.assertEqual(reverse_vowels("Reverse Vowels In A String"),
                         "RivArsI Vewols en e Streng")

    def test_input_4(self):

        # Failure message:
        # expected reverse_vowels("aeiou") to equal "uoiea"
        self.assertEqual(reverse_vowels("aeiou"), "uoiea")

    def test_input_5(self):

        # Failure message:
        # expected reverse_vowels("why try, shy fly?") to equal "why try, shy fly?"
        self.assertEqual(reverse_vowels(
            "why try, shy fly?"), "why try, shy fly?")
