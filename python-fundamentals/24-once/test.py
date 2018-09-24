import unittest
# Click to add an import
from once import once


class UnitTests(unittest.TestCase):

    def add(a, b):
        return a + b

    def test_once_first(self):
        # Failure message:
        # expected once(add) to return 4 when it is called with 2 and 2 the first time

        oneAddition = once(add)

        self.assertEqual(oneAddition(2, 2), 4)

    def test_once_second(self):
        # Failure message:
        # expected once(add) to return None when it is called with 2 and 2 after the first function call

        oneAddition = once(add)
        oneAddition(2, 2)
        self.assertEqual(oneAddition(2, 2), None)

    def test_once_third(self):
        # Failure message:
        # expected once(add) to return None when it is called with 12 and 200 after the first function call
        oneAddition = once(add)
        oneAddition(2, 2)
        self.assertEqual(oneAddition(12, 200), None)
