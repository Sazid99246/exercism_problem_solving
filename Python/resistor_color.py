colors_and_codes = {"black": 0, "brown": 1, "red": 2, "orange": 3,
                    "yellow": 4, "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9, }


def color_code(color):
    return colors_and_codes[color]


def colors():
    return ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white",]


print(colors())
