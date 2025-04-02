"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(lasagna_count):
    """Calculate the preparation time.

    :param lasagna_count: int - number of layers of lasagna.
    :return: int - total preparation time (in minutes).

    This function calculates the total preparation time required
    based on the number of layers, assuming each layer takes
    `PREPARATION_TIME` minutes to prepare.
    """
    return lasagna_count * PREPARATION_TIME


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the total elapsed cooking time.

    :param number_of_layers: int - number of layers of lasagna prepared.
    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - total time spent (in minutes) preparing and baking.

    This function computes the total elapsed time by summing the
    preparation time (computed from `preparation_time_in_minutes`)
    and the elapsed baking time.
    """
    preparation_time = preparation_time_in_minutes(number_of_layers)
    return preparation_time + elapsed_bake_time
