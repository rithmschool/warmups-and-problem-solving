def extract_full_name(l):
    return ["{} {}".format(val['first'], val['last']) for val in l]
