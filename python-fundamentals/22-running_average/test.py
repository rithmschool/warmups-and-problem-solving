import unittest
# Click to add an import


class UnitTests(unittest.TestCase):

    def test_running_average_1(self):

        # Failure message:
        # expected a running average given values of 10, 11, and 12 to return 10.0, 10.5, and 11.0
        rAvg = running_average()
        self.assertEqual(rAvg(10), 10.0)
        self.assertEqual(rAvg(11), 10.5)
        self.assertEqual(rAvg(12), 11.0)

    def test_running_average_2(self):

        # Failure message:
        # expected a running average given values of 1 and 3 to return 1 and 2
        rAvg2 = running_average()
        self.assertEqual(rAvg2(1), 1)
        self.assertEqual(rAvg2(3), 2)
