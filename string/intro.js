

                //              
var companyName = " Luminar Technolab ";
                // 01234567890123456     charat()

var companyName2 ="Luminar Technolab";
              
console.log(companyName.length);
console.log(companyName.toUpperCase());
console.log(companyName.toLowerCase());

// charAt() return character at specified index (only +ve indexing)

console.log(companyName.charAt(9)); 

// at() return character at specified index (both  +ve  & -ve indexing)

console.log(companyName.at(-2)); 

// concat()   add str or number at end

console.log(companyName.concat(".com","  edu")); 


// slice (start, end) slice can use neg and pos index, 
console.log(companyName.slice(8,17));
console.log(companyName.slice(-3,));


// substring (start, end) substring can use only pos index
console.log(companyName.substring(8,));


// trim() use for remove spaces  left and right of a string object

console.log(`new string:${companyName.trim()}...`);

// trimStart() use for remove space  left  a string object

console.log(`new string:${companyName.trimStart()}...`);

// trimEnd() use for remove space right of a string object

console.log(`new string:${companyName.trimEnd()}...`);

// padEnd () 

console.log(companyName2.padEnd(25,"$"));







