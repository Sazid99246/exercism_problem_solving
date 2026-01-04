def response(hey_bob):
    hey_bob = hey_bob.strip()
    response = ""

    if not hey_bob:
        response = "Fine. Be that way!"
    elif hey_bob.isupper():
        if hey_bob[-1] == "?":
            response = "Calm down, I know what I'm doing!"
        else:
            response = "Whoa, chill out!"
    elif hey_bob[-1] == "?":
        response = "Sure."
    else:
        response = "Whatever."

    return response
