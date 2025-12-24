// word length
var words=["carrot","parrot","beetroot","apple"];

var wordLength=words.map(w=>w.length);

console.log(wordLength);


// uppercase;

var uppercase=words.map(w=>w.toUpperCase());

console.log(uppercase);

// rr in words

var rrWords=words.filter(w=>w.includes("rr"))

console.log(rrWords);

// longest word

var longestWord=words.reduce((w1,w2)=>w1.length>w2.length?w1:w2)

console.log(longestWord);

// sort words longest words

words.sort((w1,w2)=>w2.length - w1.length);

console.log(words);

// 


