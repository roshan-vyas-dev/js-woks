/*
create a class bank with attri(butes

acno,custome_name,acc_type,balance,

cre
ateacount(),
deposit(amount),
withdraw(amount),
balance()
*/


class Bank {

    createAccount(acno, custome_name, acc_type, balance) {
        this.acno = acno;
        this.custome_name = custome_name;
        this.acc_type = acc_type;
        this.balance = balance

    }

    Deposit(amount) {
        this.balance += amount;
        console.log(`${this.acno} has been credited with ${amount} your available balance is ${this.balance}`);

    }

    Withdraw(amount) {
        if (amount > this.balance) {
            console.log("insufficient balance transacrion failed");

        }
        else {
            this.balance -= amount;
            console.log(`${this.acno} has been debited with ${amount} your available balance is ${this.balance}`);
        }

    }
    balanceCheck() {
        console.log(`acc n0: ${this.acno} has available balance: ${this.balance}`);

    }
}


var customerInstance = new Bank();

customerInstance.createAccount(123, "roshan", "savings", 1000);

customerInstance.Deposit(10000)

customerInstance.Withdraw(20000);

customerInstance.balanceCheck();

