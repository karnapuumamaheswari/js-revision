function createBankAccount(){
    let balance = 0;
    let history = [];

    return{
        deposit(amount){
            if(amount <= 0){
                return "Invalid deposit amount";
            }
            balance += amount;
            history.push(`Deposited ${amount}`);
            return balance;
        },
        withdraw(amount){
            if(amount<0){
                return "Invalid Withdrawal amount";
            }
            if(amount > balance){
                return "Insufficient Balance";
            }
            balance -= amount;
            history.push(`withdrew ${amount}`);
            return balance;
        },
        getBalance(){
            return balance;
        },
        getTransactionHistory(){
            return history;
        }
    };
}