DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


def return_day(dow):
    """Return name of day."""

    if dow < 1 or dow > 7:
        return None

    return DAYS[dow - 1]
