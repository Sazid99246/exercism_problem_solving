colors_and_codes = {"black": 0, "brown": 1, "red": 2, "orange": 3,
                    "yellow": 4, "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9, }


def color_code(color):
    return colors_and_codes[color]


def value(colors):
    return color_code(colors[0]) * 10 + color_code(colors[1])


if __name__ == "__main__":
    print(value(["white", "red"]))
    print(value(["orange", "orange"]))
    print(value(["green", "brown", "orange"]))
    print(value(["black", "brown"]))