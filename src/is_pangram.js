const isPangram = function(text) {
    let letters = {
        'a': 0, 
        'b': 0,
        'c': 0, 
        'd': 0, 
        'e': 0, 
        'f': 0, 
        'g': 0, 
        'h': 0, 
        'i': 0, 
        'j': 0, 
        'k': 0, 
        'l': 0, 
        'm': 0, 
        'n': 0, 
        'o': 0, 
        'p': 0, 
        'q': 0, 
        'r': 0, 
        's': 0,
        't': 0, 
        'u': 0, 
        'v': 0, 
        'w': 0, 
        'x': 0, 
        'y': 0, 
        'z': 0
    }

    for (letter in letters) {
        // if letter is inside the letter hash, add one to that key's value 
        if (text.includes(letter)) {
            letters[letter] += 1
        }
    }

    // after the loop ends, make sure all keys have at least a one, return true if so
    if (Object.keys(letters).every((k) => letters[k] >= 1)) {
        return true
    }

    // otherwise, return false
    return false
};

module.exports = isPangram;

const string = "foo";
const substring = "oo";

console.log(string.includes(substring));