def triangle(sides):
    if sides[0] == 0 or sides[1] == 0 or sides[2] == 0:
        return False
    return sides[0] + sides[1] >= sides[2] and sides[1] + sides[2] >= sides[0] and sides[2] + sides[0] >= sides[1]


def equilateral(sides):
    return triangle(sides) and (sides[0] == sides[1] and sides[1] == sides[2] and sides[2] == sides[0])


def isosceles(sides):
    return triangle(sides) and (sides[0] == sides[1] or sides[1] == sides[2] or sides[2] == sides[0])


def scalene(sides):
    return triangle(sides) and (sides[0] != sides[1] and sides[1] != sides[2] and sides[2] != sides[0])
