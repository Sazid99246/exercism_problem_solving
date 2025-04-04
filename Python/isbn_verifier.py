def is_valid(isbn):
    isbn = isbn.replace('-', '')
    if len(isbn) != 10:
        return False
    total = 0
    for idx, char in enumerate(isbn):
        if idx == 9 and char == 'X':
            digit = 10
        elif char.isdigit():
            digit = int(char)
        else:
            return False
        multiplier = 10 - idx
        total += digit * multiplier
    return total % 11 == 0
