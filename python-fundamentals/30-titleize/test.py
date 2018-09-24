import unittest
# Click to add an import
from titleize import titleize


class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected titleize('this is awesome') to equal "This Is Awesome"
        self.assertEqual(titleize('this is awesome'), "This Is Awesome")

    def test_input_2(self):

        # Failure message:
        # expected titleize('oNLy cAPITALIZe fIRSt') to equal "ONLy CAPITALIZe FIRSt"
        self.assertEqual(titleize('oNLy cAPITALIZe fIRSt'),
                         "ONLy CAPITALIZe FIRSt")
