import unittest
# Click to add an import
from truncate import truncate

class UnitTests(unittest.TestCase):

    def test_input_1(self):

        # Failure message:
        # expected truncate("Cool", 2)
        # to equal "Truncation must be at least 3 characters."
        self.assertEqual(truncate("Cool", 2),
                         "Truncation must be at least 3 characters.")

    def test_input_2(self):

        # Failure message:
        # expected truncate("Cool", 1)
        # to equal "Truncation must be at least 3 characters."
        self.assertEqual(truncate("Cool", 1),
                         "Truncation must be at least 3 characters.")

    def test_input_3(self):

        # Failure message:
        # expected truncate("Cool", 0)
        # to equal "Truncation must be at least 3 characters."
        self.assertEqual(truncate("Cool", 0),
                         "Truncation must be at least 3 characters.")

    def test_input_4(self):

        # Failure message:
        # expected truncate("Hello World", 6) to equal "Hel..."
        self.assertEqual(truncate("Hello World", 6), "Hel...")

    def test_input_5(self):

        # Failure message:
        # expected truncate("Problem solving is the best!", 10) to equal "Problem..."
        self.assertEqual(
            truncate("Problem solving is the best!", 10), "Problem...")

    def test_input_6(self):

        # Failure message:
        # expected truncate("Another test", 12) to equal "Another t..."
        self.assertEqual(truncate("Another test", 12), "Another t...")

    def test_input_7(self):

        # Failure message:
        # expected truncate("Woah", 4) to equal "W..."
        self.assertEqual(truncate("Woah", 4), "W...")

    def test_input_8(self):

        # Failure message:
        # expected truncate("Woah", 3) to equal "..."
        self.assertEqual(truncate("Woah", 3), "...")

    def test_input_9(self):

        # Failure message:
        # expected truncate("Yo", 100) to equal "Yo"
        self.assertEqual(truncate("Yo", 100), "Yo")

    def test_input_10(self):

        # Failure message:
        # expected truncate("Holy guacamole!", 152) to equal "Holy guacamole!"
        self.assertEqual(truncate("Holy guacamole!", 152), "Holy guacamole!")

    def test_right_length(self):

        # Failure message:
        # expected truncate("Hey", 3) to equal "Hey"
        self.assertEqual(truncate("Hey", 3), "...")
