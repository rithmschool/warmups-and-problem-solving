import unittest
# Click to add an import
from compact import compact


class UnitTests(unittest.TestCase):


    def test_input(self):

            # Failure message:
            # expected compact([0, 1, 2, "", [], False, {}, None, "All done"])
            # to equal [1, 2, "All done"]
        self.assertEqual(compact([0, 1, 2, "", [], False, {}, None, "All done"]), [
            1, 2, "All done"])
