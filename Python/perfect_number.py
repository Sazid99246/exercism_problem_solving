def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if number <= 0:
        raise ValueError(
            "Classification is only possible for positive integers.")
    aliquot_sum = 0
    for i in range(1, number):
        if number % i == 0:
            aliquot_sum += i

    if number == aliquot_sum:
        return "perfect"
    elif number < aliquot_sum:
        return "abundant"
    else:
        return "deficient"


if __name__ == "__main__":
    print(classify(6))
    print(classify(28))
    print(classify(12))
    print(classify(24))
    print(classify(8))
    print(classify(-1))
