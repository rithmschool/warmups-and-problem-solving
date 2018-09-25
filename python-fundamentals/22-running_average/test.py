import unittest
# Click to add an import
from running_average import RunningAverage


class UnitTests(unittest.TestCase):

    def test_running_average_1(self):
        r = RunningAverage()
        self.assertEqual(r.avg(10), 10)
        self.assertEqual(r.avg(11), 10.5)
        self.assertEqual(r.avg(12), 11)
