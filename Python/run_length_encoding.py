def encode(string):
    if not string:
        return ""
    
    result = ""
    count = 1
    
    for i in range(1, len(string)):
        if string[i] == string[i - 1]:
            count += 1
        else:
            if count > 1:
                result += str(count)
            result += string[i - 1]
            count = 1  # reset count
    
    # handle the last run
    if count > 1:
        result += str(count)
    result += string[-1]
    
    return result


def decode(string):
    result = ""
    count = ""
    
    for char in string:
        if char.isdigit():
            count += char  # build the full number
        else:
            if count == "":
                result += char
            else:
                result += char * int(count)
                count = ""
    
    return result


# Example usage
if __name__ == "__main__":
    original = "AABCCCDEEEE"
    print("Original:", original)
    
    encoded = encode(original)
    print("Encoded:", encoded)  # Output: 2AB3CD4E
    
    decoded = decode(encoded)
    print("Decoded:", decoded)  # Output: AABCCCDEEEE
