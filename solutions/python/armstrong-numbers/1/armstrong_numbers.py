def number_length(number):
    length = 0
    while number > 0:
        number = int(number / 10)
        length += 1

    return length


def power_sum(number):
    sum = 0
    length = number_length(number)
    while number > 0:
        sum += (number % 10) ** length
        number //= 10
    return sum


def is_armstrong_number(number):
    return number == power_sum(number)

