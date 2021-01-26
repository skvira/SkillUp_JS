
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],

    typeTransaction: {...Transaction},
     
    createTransaction(amount, type) {
      let id = this.transactions.length + 1;
      let currentTransaction = {id, type, amount};
      return currentTransaction;
    },
  
    deposit(amount) {
      this.balance = this.balance + amount;
      this.transactions.push(this.createTransaction(amount, this.typeTransaction.DEPOSIT));
    },
  
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            this.transactions.push(this.createTransaction(amount, this.typeTransaction.WITHDRAW));
        } else alert('Снятие такой суммы не возможно, недостаточно средств!');
    },
 
    getBalance() {
        return this.balance;
    },
  
    getTransactionDetails(id) {
      for (let transaction of this.transactions) {
          if (transaction.id == id) return transaction;
      }
    },
  
    getTransactionTotal(type) {
        let sumType = 0;
        let qntTransactions = this.transactions.length;
        console.log(this.transactions);
        console.log(qntTransactions);
        for (let i = 0; i < qntTransactions; i +=1) {
              console.log(this.transactions[i])
            if (this.transactions[i].type == type) {
                console.log(`${this.transactions[i].type} - ${this.transactions[i].amount}`);
                console.log(sumType);
                sumType += this.transactions[i].amount;
                console.log(sumType);
            }
        }
        return sumType; 
    }    
};

