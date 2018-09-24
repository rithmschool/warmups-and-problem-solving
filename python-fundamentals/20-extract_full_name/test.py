import unittest
# Click to add an import
from extract_full_name import extract_full_name


class UnitTests(unittest.TestCase):

    def test_input(self):

        # Failure message:
        # expected self.assertEqual(extract_full_name([
        #   {'first': 'Elie', 'last': 'Schoppik'},
        #   {'first': 'Colt', 'last': 'Steele'}
        # ]) to equal ['Elie Schoppik', 'Colt Steele'])
        self.assertEqual(extract_full_name([
            {'first': 'Elie', 'last': 'Schoppik'},
            {'first': 'Colt', 'last': 'Steele'}
        ]), ['Elie Schoppik', 'Colt Steele'])
