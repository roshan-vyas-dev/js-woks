
var words = ["thoughtful", "beautiful", "meaningful", "wonderful", "hgdghdhdjh"];

var uppercase = words.map(w => w.toUpperCase())

console.log(uppercase);


//  words ending with ful

var endingFul = words.filter(end => end.endsWith("ful"))
console.log(endingFul);
