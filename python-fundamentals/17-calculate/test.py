import unittest
from calculate import calculate

class UnitTests(unittest.TestCase):

    def test_custom_message(self):
        self.assertEqual(calculate(
            operation='add',
            message='You just added',
            first=2,
            second=4
        ), "You just added 6")

    def test_default_message(self):
        self.assertEqual(calculate(
            operation='divide',
            first=3.5,
            second=5
        ), "The result is 0.7")

    def test_int_trunc(self):
        self.assertEqual(calculate(
            operation='divide',
            first=3.5,
            second=5,
            make_int=True
        ), "The result is 0")
