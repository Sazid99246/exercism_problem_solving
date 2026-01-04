from datetime import timedelta

ONE_GIGASECOND_DELTA = timedelta(seconds = 10 ** 9)

def add(moment):
    return moment + ONE_GIGASECOND_DELTA