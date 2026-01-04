def _makeatbashtable():
    alpha = "abcdefghijklmnopqrstuvwxyz"

    inplace = list(alpha)
    inplace.reverse()

    return str.maketrans(alpha, ''.join(inplace))


def encode(plain_text):
    atbash = _makeatbashtable()

    ciphered = ''.join([C.lower().translate(atbash)
                       for C in plain_text if C.isalnum()])

    def fives(ciphered):
        while ciphered:
            yield ciphered[:5]
            ciphered = ciphered[5:]

    return ' '.join(fives(ciphered))


def decode(ciphered_text):
    atbash = _makeatbashtable()

    plain = ''.join([C.lower().translate(atbash)
                    for C in ciphered_text if not C.isspace()])

    return plain
