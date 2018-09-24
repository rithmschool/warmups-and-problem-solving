import unittest
# Click to add an import
from intersection import intersection


class UnitTests(unittest.TestCase):

    def test_intersection(self):

        # Failure message:
        # expected intersection([1, 2, 3], [2, 3, 4]) to equal [2, 3]
        self.assertEqual(intersection([1, 2, 3], [2, 3, 4]), [2, 3])
