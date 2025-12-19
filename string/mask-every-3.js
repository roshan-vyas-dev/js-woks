
let word = "ABC123"

let challengeCode = "7YZ"

// 1) append challenge code with word

// A B C 1 2 3 7 Y Z
// 0 1 2 3 4 5 6 7 8


let append = word.concat(challengeCode);

console.log(append);


// 2) 2,5,8 (X)
//  A B X 1 2 X 7 Y X
//  0 1 2 3 4 5 6 7 8

let mask = "";
for (let i = 0; i < append.length; i++) {
    if ((i + 1) % 3 == 0) {
        mask += "X";
    }
    else {
        mask += append[i];
    }

}

console.log(mask);

