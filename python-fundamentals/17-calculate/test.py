import unittest
# Click to add an import


class UnitTests(unittest.TestCase):

    def test_custom_message(self):

        # Failure message:
        # expected calculate(
        #   make_float=False,
        #   operation='add',
        #   message='You just added',
        #   first=2,
        #   second=4
        # ) to equal "You just added 6"
        self.assertEqual(calculate(
            make_float=False,
            operation='add',
            message='You just added',
            first=2,
            second=4
        ), "You just added 6")

    def test_default_message(self):

        # Failure message:
        # expected calculate(
        #   make_float=True,
        #   operation='divide',
        #   first=3.5,
        #   second=5
        # ) to equal "The result is 0.7"
        self.assertEqual(calculate(
            make_float=True,
            operation='divide',
            first=3.5,
            second=5
        ), "The result is 0.7")
