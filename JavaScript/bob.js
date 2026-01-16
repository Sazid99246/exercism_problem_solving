export const hey = message => {
    const trimmed = message.trim();

    const hasLetters = /[a-zA-Z]/.test(trimmed);
    const isYelling = hasLetters && trimmed === trimmed.toUpperCase();

    if (isYelling) {
        if (trimmed.endsWith("?")) {
            return "Calm down, I know what I'm doing!";
        } else {
            return "Whoa, chill out!";
        }
    }

    if (trimmed.endsWith("?")) {
        return "Sure.";
    }

    if (trimmed === "") {
        return "Fine. Be that way!";
    }

    return "Whatever.";
};
