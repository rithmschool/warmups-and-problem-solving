import unittest
# Click to add an import
from longest_named_keyword_value import longest_named_keyword_value

class UnitTests(unittest.TestCase):

    def test_input_1(self):
    # Failure message:
    # expected longest_named_keyword_value(short=1, longer=2, omg_longest=3) to be 3
        self.assertEqual(longest_named_keyword_value(
            short=1, longer=2, omg_longest=3), 3)

    def test_input_2(self):
    # Failure message:
    # expected longest_named_keyword_value(this_keyword_is_the_longest=True, a=False) to be True
        self.assertEqual(longest_named_keyword_value(
            this_keyword_is_the_longest=True, a=False), True)

    def test_input_3(self):
    # Failure message:
    # expected longest_named_keyword_value(longest_keyword_is_selected="yes!", not_longest_value="no no no, that's not it") to be "yes!"
        self.assertEqual(longest_named_keyword_value(longest_keyword_is_selected="yes!"))
        # Failure message:
        # expected longest_named_keyword_value(this_keyword_is_the_longest=True, a=False) to be True
        self.assertEqual(longest_named_keyword_value(
        this_keyword_is_the_longest=True, a=False), True)


    #def test_input_3(self):


        # Failure message:
        # expected longest_named_keyword_value(longest_keyword_is_selected="yes!", not_longest_value="no no no, that's not it") to be "yes!"
        #self.assertEqual(longest_named_keyword_value(longest_keyword_is_selected="yes!",
