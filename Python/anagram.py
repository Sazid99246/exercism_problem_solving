def find_anagrams(word, candidates):
    sorted_word = "".join(sorted(word.lower()))
    result = []
    for candidate in candidates:
        if candidate.lower() != word.lower():
            if "".join(sorted(candidate.lower())) == sorted_word:
                result.append(candidate)
    return result
