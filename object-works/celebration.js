var expenses = {
    prabinav: 560,
    venkitesh: 650,
    roshan: 120,
    goutham: 340,
    thushar: 670,
    arun: 67,
    jazeel: 480,
    nazim: 340,
    yadhu: 0,
    amal: 0,
    catherin: 0,
    reshmi: 0,
    sreelakshmi: 0
}

//unpaid students name

// for(let [k,v] of Object.entries(expenses)){
//     if(v==0){
//         console.log(k,v);

//     }
// }

var unpaidStudents = Object.entries(expenses).filter(arr => arr[1] == 0);

console.log(unpaidStudents);



// paid students

var paidStudents = Object.entries(expenses).filter(arr => arr[1] != 0);

console.log(paidStudents);


// paid greaterthan 250

var gt250 = Object.entries(expenses).filter(arr => arr[1] > 250);

console.log(gt250);

// total expense

var totalExpense = Object.values(expenses).reduce((sum, exp) => sum + exp, 0);

console.log(totalExpense);


// individual split

var individualSplit = totalExpense / Object.entries(expenses).length;

individualSplit = Math.round(individualSplit);
console.log(individualSplit);

// split wise

var splitWise = {};

for (let [k, v] of Object.entries(expenses)) {
    splitWise[k] = individualSplit - v
}
console.log(splitWise);






