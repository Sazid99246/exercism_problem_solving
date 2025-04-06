SUBLIST = 0
SUPERLIST = 1
EQUAL = 2
UNEQUAL = 3

def sublist(list_one, list_two):
    if list_one == list_two:
        return EQUAL
    elif is_sublist(list_one, list_two):
        return SUBLIST
    elif is_sublist(list_two, list_one):
        return SUPERLIST
    else:
        return UNEQUAL

def is_sublist(smaller, larger):
    if not smaller:
        return True
    for i in range(len(larger) - len(smaller) + 1):
        if larger[i:i+len(smaller)] == smaller:
            return True
    return False
