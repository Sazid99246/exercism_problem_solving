def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    count = 0
    while number != 1:
        if number % 2 == 0:
            number /= 2
            count += 1
        else:
            number = number * 3 + 1
            count += 1
    return count

