def transform(old_data):
    new_data = {}
    for score, letters in old_data.items():
        for letter in letters:
            new_data[letter.lower()] = score
    return new_data
