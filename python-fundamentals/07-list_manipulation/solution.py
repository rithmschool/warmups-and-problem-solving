def list_manipulation(lst, command, location, value=None):
    """Manipulate lst to add/remove from beginning or end."""

    if command == "remove":
        if location == "end":
            return lst.pop()
        elif location == "beginning":
            return lst.pop(0)

    elif command == "add":
        if location == "beginning":
            lst.insert(0, value)
            return lst
        elif location == "end":
            lst.append(value)
            return lst
