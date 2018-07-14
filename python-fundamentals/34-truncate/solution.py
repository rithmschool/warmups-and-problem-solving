def truncate(string, n):
    if n < 3:
        return "Truncation must be at least 3 characters."
    if n > len(string) + 2:
        return string
    return string[:n - 3] + "..."
