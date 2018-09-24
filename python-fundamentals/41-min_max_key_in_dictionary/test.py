import unittest

# Click to add an import
from min_max_key_in_dictionary import min_max_key_in_dictionary

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected min_max_key_in_dictionary({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})
        # to equal [1, 10]
        self.assertEqual(
            min_max_key_in_dictionary(
                {2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}),
            [1, 10]
        )

    def test_input_2(self):

        # Failure message:
        # expected min_max_key_in_dictionary({1: "Elie", 4: "Matt", 3: "Tim"})
        # to equal [1, 4]
        self.assertEqual(
            min_max_key_in_dictionary({1: "Elie", 4: "Matt", 3: "Tim"}),
            [1, 4]
        )
