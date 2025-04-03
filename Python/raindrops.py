def convert(number):
    result = ""
    if number % 3 == 0:
        result += "Pling"
    if number % 5 == 0:
        result += "Plang"
    if number % 7 == 0:
        result += "Plong"

    # Return number as string if no conditions met
    return result if result else str(number)


if __name__ == "__main__":
    print(convert(15))
    print(convert(21))
    print(convert(25))
    print(convert(27))
    print(convert(35))
    print(convert(34))
