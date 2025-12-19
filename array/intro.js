/*
if we want to store and organize multiple object with same or different type

create: var arr=[]

keeps order 

duplicate allowed

mutable 

var color=["red", "blue", "green"]
*/

let color=["red", "blue", "green"];

console.log(color);
console.log(color[2]);

// display all expenses

let expenses = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000,9000,10000]

/*
console.log("iterating array using index");

for(let i=0;i<expenses.length;i++){
    console.log(expenses[i]);

}
console.log("iterating array using index");

let total=0;

for(let ch of expenses){
    total+=ch;
}
console.log(`total expenses : ${total}`);

 costly expense

 */

//   -----------------------------------------------------------------------------------------------------------


/*

let maxExpense=0;

for(let e of expenses){
    if(e>maxExpense){
        maxExpense=e;
    }
}
console.log(`max expense : ${maxExpense}`);


*/


let minExpense=expenses[0];

for(let e of expenses){
    if(minExpense<e){
        minExpense=e

    }
}
console.log(`min expense : ${minExpense}`);










