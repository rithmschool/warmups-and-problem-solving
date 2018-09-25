def extract_full_name(people):
    """Return list of names, extracting from first+last keys in people dicts."""

    return [f"{person['first']} {person['last']}" for person in people]
