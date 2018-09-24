import unittest
# Click to add an import
from last_argument import last_argument

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected last_arguments(1, 2, 3) to be 3
        self.assertEqual(last_argument(1, 2, 3), 3)

    def test_input_2(self):

        # Failure message:
        # expected last_arguments("what", "a", "strange", "function") to be "function"
        self.assertEqual(last_argument(
            "what", "a", "strange", "function"), "function")

    def test_input_3(self):

        # Failure message:
        # expected last_arguments() to be None
        self.assertIsNone(last_argument())
