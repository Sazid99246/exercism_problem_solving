def is_isogram(word):
    word = word.lower().replace(" ","").replace("-","")
    return len(word) == len(set(word))

if __name__ == "__main__":
    print(is_isogram("lumberjacks"))
    print(is_isogram("background "))
    print(is_isogram("downstream "))
    print(is_isogram("six-year-old"))
