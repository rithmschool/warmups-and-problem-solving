def longest_named_keyword_value(**kwargs):
    longest = ""
    for key in kwargs:
        if len(key) > len(longest):
            longest = key
    return kwargs[longest]
