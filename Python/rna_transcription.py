def to_rna(dna_strand):
    result = ""
    for char in dna_strand:
        if char == "G":
            result += "C"
        if char == "C":
            result += "G"
        if char == "T":
            result += "A"
        if char == "A":
            result += "U"

    return result
