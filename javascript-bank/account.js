/* exported Account */

// constructor Account
function Account(number, holder) {
  this.number = number; // account number
  this.holder = holder; // account's holder's name
  this.transactions = []; // transactions array
  // returns an Account object with number, holder, and transactions properties
}

Account.prototype.deposit = function(amount) {
  // if amount is not positive
  if (!this.amount) return false;
  // if amount is positive
  this.transactions.push(new Transaction('deposit', this.amount));
  return true;
}

Account.prototype.withdraw = function(amount) {
  // if amount is not positive
  if (!this.amount) return false;
  // if amount is positive
  this.transactions.push(new Transaction('withdrawal', this.amount));
  return true;
}
Account.prototype.getBalance = function() {
  // if there are no funds available
  if (this.transactions.length === 0) return 0;
  // if there are funs available
  // create variable balance
  var balance = 0;
  // iterate over array transactions
  for(var i = 0; i < this.transactions.length; i++) {
    // if transactio is a deposit, add to balance
    if (this.transactions[i].type === 'deposit') {
      balance = balance + this.transactions[i].amount;
    } else { // if transactio is a withdraw, subtract from balance
      balance = balance - this.transactions[i].amount;
    }
  }
  // return balance
  return balance;
}
