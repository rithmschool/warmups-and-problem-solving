import unittest
# Click to add an import
from reverse_string import reverse_string


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected reverse_string('awesome') to equal 'emosewa'
        self.assertEqual(reverse_string('awesome'), 'emosewa')

    def test_input_2(self):

        # Failure message:
        # expected reverse_string('Colt') to equal 'tloC'
        self.assertEqual(reverse_string('Colt'), 'tloC')

    def test_input_3(self):

        # Failure message:
        # expected reverse_string('Elie') to equal 'eilE'
        self.assertEqual(reverse_string('Elie'), 'eilE')
