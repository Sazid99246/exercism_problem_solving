def sum_of_multiples(limit, multiples):
    sum = 0
    for n in range(limit):
        for multiple in multiples:
            if multiple != 0 and n % multiple == 0:
                sum += n
                break
    return sum

print(sum_of_multiples(100, [3, 5]))