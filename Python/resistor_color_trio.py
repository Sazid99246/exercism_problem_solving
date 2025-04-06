colors_and_codes = {"black": 0, "brown": 1, "red": 2, "orange": 3,
                    "yellow": 4, "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9, }


def color_code(color):
    return colors_and_codes[color]


def value(colors):
    return color_code(colors[0]) * 10 + color_code(colors[1])


def label(colors):
    first_two_value = str(value(colors))
    color_3_str = str(color_code(colors[2]) * "0")
    ohms = int(first_two_value + color_3_str)

    if ohms >= 1000000000:
        giga_ohms = int(ohms / 1000000000)
        return f"{giga_ohms} gigaohms"
    elif ohms >= 1000000:
        mega_ohms = int(ohms / 1000000)
        return f"{mega_ohms} megaohms"
    elif ohms >= 1000:
        kilo_ohms = int(ohms / 1000)
        return f"{kilo_ohms} kiloohms"
    elif ohms >= 0:
        return f"{ohms} ohms"

# print(label(["orange", "orange", "black"]))
# print(label(["blue", "grey", "brown"]))
# print(label(["red", "black", "red"]))
# print(label(["blue", "violet", "blue"]))
# print(label(["white", "white", "white"]))