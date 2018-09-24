import unittest
# Click to add an import
from same_frequency import same_frequency


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected same_frequency(551122, 221515) to equal True
        self.assertEqual(same_frequency(551122, 221515), True)

    def test_input_2(self):

        # Failure message:
        # expected same_frequency(321142, 3212215) to equal False
        self.assertEqual(same_frequency(321142, 3212215), False)

    def test_input_3(self):

        # Failure message:
        # expected same_frequency(1212, 2211) to equal True
        self.assertEqual(same_frequency(1212, 2211), True)
