"""Functions for creating, transforming, and adding prefixes to strings."""


def add_prefix_un(word):
    """Take the given word and add the 'un' prefix.

    :param word: str - containing the root word.
    :return: str - of root word prepended with 'un'.
    """

    return "un" + word


def make_word_groups(vocab_words):
    """Transform a list containing a prefix and words into a string with the prefix followed by the words with prefix prepended.

    :param vocab_words: list - of vocabulary words with prefix in first index.
    :return: str - of prefix followed by vocabulary words with
            prefix applied.

    This function takes a `vocab_words` list and returns a string
    with the prefix and the words with prefix applied, separated
     by ' :: '.

    For example: list('en', 'close', 'joy', 'lighten'),
    produces the following string: 'en :: enclose :: enjoy :: enlighten'.
    """

    prefix = vocab_words[0]
    words = []
    for word in range(1, len(vocab_words)):
        changed_word = prefix + vocab_words[word]
        words.append(changed_word)
    result = prefix + " :: "
    result += " :: ".join(words)
    return result


def remove_suffix_ness(word):
    """Remove the suffix from the word while keeping spelling in mind.

    :param word: str - of word to remove suffix from.
    :return: str - of word with suffix removed & spelling adjusted.

    For example: "heaviness" becomes "heavy", but "sadness" becomes "sad".
    """

    new_word = word.replace("ness", "")
    if new_word.endswith("i"):
        new_word = new_word.replace("i", "y")
    return new_word


def adjective_to_verb(sentence, index):
    """Change the adjective within the sentence to a verb.

    :param sentence: str - that uses the word in sentence.
    :param index: int - index of the word to remove and transform.
    :return: str - word that changes the extracted adjective to a verb.

    For example, ("It got dark as the sun set.", 2) becomes "darken".
    """

    word = sentence.replace(".", "").split(" ")[index]
    return word + "en"


if __name__ == "__main__":
    print(add_prefix_un("happy"))
    print(make_word_groups(['en', 'close', 'joy', 'lighten']))
    print(remove_suffix_ness("happiness"))
    print(adjective_to_verb('I need to make that bright.', -1))
