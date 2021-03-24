class Savings {

    constructor(id, description, balance) {
        this.id = id;
        this.description = description;
        this.balance = balance;
    }

    print() {
        return `${this.id} | ${this.description} | ${this.balance}`;
    }

    deposit(amount) {
        if(typeof amount !== "number"){
            console.error("Amount is not a number")
            return false;
        }
        if(amount <= 0) {
            console.error("Amount must be greater than zero");
            return false;
        } 
            this.balance += amount;
            return true;
    }

    withdraw(amount) {
        if(amount <= 0) {
            console.error("Amount must be greater than zero");
            return false;
        } 
        if(amount > this.balance) {
            console.error("Insufficient Funds");
            return false;
        }
            this.balance -=amount;
            return true;
    }

    transfer(amount, toAccount) {
        if(this.withdraw(amount)) {
            toAccount.deposit(amount)
            return true;
        }
        return false;
    }
}

    
let acct1 = new Savings(1, "Savings1", 2500);
console.log(acct1.print());

let acct2 = new Savings(2, "Savings2", 500);
console.log(acct2.print());

acct1.transfer(1000, acct2);
console.log(acct1.print());
console.log(acct2.print());