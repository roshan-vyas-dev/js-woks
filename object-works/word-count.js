

var text = "this is a javascript program this javascript    program is simple";

var words = text.split(" ");

var word_count = {};

for (let w of words) {
    if (w != "") {
        if (w in word_count) {
            word_count[w] += 1;
        }
        else {
            word_count[w] = 1;
        }
    }
}

console.log(word_count);
