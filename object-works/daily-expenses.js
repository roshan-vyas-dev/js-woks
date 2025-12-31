
var expenses = [
    { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
    { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
    { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
    { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
    { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
    { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
    { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
    { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
    { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
    { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
    { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
    { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
    { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
    { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
    { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
    { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
    { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];


// //q12=>payment methods
var paymentMethod=[];

for(let t of expenses){
    let methods=t.payment_method;
    if(!paymentMethod.includes(methods)){
        paymentMethod.push(methods)
    }
}

console.log(paymentMethod);



// // q6=> most used payment method
var paymentMethodSummary = {};

for (let p of expenses) {
    let type = p.payment_method;

    if (type in paymentMethodSummary) {
        paymentMethodSummary[type] += 1
    }
    else {
        paymentMethodSummary[type] = 1
    }
}
// console.log(paymentMethodSummary);

//q1=> owner summary

let ownerSummary = {};

for (let t of expenses) {
    let owner = t.owner;
    let amount = t.amount
    if (owner in ownerSummary) {
        ownerSummary[owner] += amount
    }
    else {
        ownerSummary[owner] = amount
    }
}

// console.log(ownerSummary);

// q2=> transaction with highest

let costlyTransaction = expenses.reduce((t1, t2) => t1.amount > t2.amount ? t1 : t2);

// console.log(costlyTransaction);

// q3=> cash transactions
let transactionMethod = expenses.filter(cash => cash.payment_method = "cash");
// console.log(transactionMethod);


// q4=> transaction with amount >1000;

let transactionGt1000 = expenses.filter(cash => cash.amount > 1000);
// console.log(transactionGt1000);

// q5=> total expenses

let totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);

// console.log(totalExpenses);



// q7=> sara+food+amount

var sFoodTrans = expenses.filter(t => t.owner == "sarah" && t.category == "food").reduce((sum, t) => sum + t.amount, 0);
// console.log(sFoodTrans);



// q8=>priority summary

var prioritySummary = {};

for (let t of expenses) {
    let amount = t.amount;
    let priority = t.priority;

    if (priority in prioritySummary) {
        prioritySummary[priority] += amount
    }
    else {
        prioritySummary[priority] = amount
    }
}
// console.log(prioritySummary);


//q9=> transactions of jazeel
var jazeelTransactions = expenses.filter(t => t.owner == "jazeel")
// console.log(jazeelTransactions);


//q10=> highest paid category

var highPaidCatogory = {};

for (let t of expenses) {
    let amount = t.amount;
    let category = t.category;

    if (category in highPaidCatogory) {
        highPaidCatogory[category] += 1

    }
    else {
        highPaidCatogory[category] = 1;
    }
}
// console.log(highPaidCatogory);




//q11=>priority summary wrt owner (which owner have highest want priority expense)

var wantSummaryWrtOwner={};

for(let t of expenses){
    let priority=t.priority;
    let amount=t.amount;
    let owner=t.owner;
    if(priority=="want"){
        if(owner in wantSummaryWrtOwner){
            wantSummaryWrtOwner[owner]+=amount;
        }
        else{
            wantSummaryWrtOwner[owner]=amount;
        }
    }

}
// console.log(wantSummaryWrtOwner);
// console.log(Object.entries(wantSummaryWrtOwner).sort((o1,o2)=>o2[1]-o1[1]));













