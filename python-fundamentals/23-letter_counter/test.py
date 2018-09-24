import unittest
# Click to add an import
from letter_counter import letter_counter


class UnitTests(unittest.TestCase):

    def test_counter_string1_a(self):

            # Failure message:
            # expected letter_counter('Amazing')('a') to equal 2
        counter = letter_counter('Amazing')
        self.assertEqual(counter('a'), 2)

    def test_counter_string1_m(self):

        # Failure message:
            # expected letter_counter('Amazing')('m') to equal 1
        counter = letter_counter('Amazing')
        self.assertEqual(counter('m'), 1)

    def test_counter_string2_i(self):

        # Failure message:
            # expected letter_counter('This Is Really Fun!')('i') to equal 2
        counter = letter_counter('This Is Really Fun!')
        self.assertEqual(counter('i'), 2)

    def test_counter_string2_t(self):

        # Failure message:
            # expected letter_counter('This Is Really Fun!')('t') to equal 1
        counter = letter_counter('This Is Really Fun!')
        self.assertEqual(counter('t'), 1)
