def translate(text: str) -> str:
    vowels = ["a", "e", "i", "o", "u"]
    extra_words = ["xr", "yt"]

    def translate_word(word: str) -> str:
        if any(word.startswith(item) for item in vowels + extra_words):
            return word + "ay"

        consonant_cluster = ""
        rest_of_word = word

        for index, char in enumerate(word):
            if char in vowels or (char == 'y' and index != 0):
                rest_of_word = word[index:]
                break
            consonant_cluster += char

        if consonant_cluster.endswith("q") and rest_of_word.startswith("u"):
            consonant_cluster += "u"
            rest_of_word = rest_of_word[1:]

        new_string = rest_of_word + consonant_cluster + "ay"
        return new_string

    translated_words = [translate_word(word) for word in text.split()]
    return ' '.join(translated_words)
