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
  if (!Number.isInteger(amount) || amount <= 0 || isNaN(amount)) {
    return false;
  }
  // if amount is positive
  if (Number.isInteger(amount) && amount > 0) {
  this.transactions.push(new Transaction('deposit', amount));
  return true;
  }
}

Account.prototype.withdraw = function(amount) {
  // if amount is not positive
  if (!Number.isInteger(amount) || amount <= 0 || isNaN(amount)) {
    return false;
  }
  // if amount is positive
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
}

Account.prototype.getBalance = function() {
  // if there are no funds available
  if (this.transactions.length === 0) return 0;
  // if there are funs available
  // create variable balance
  var balance = 0;
  // iterate over array transactions
  for(var i = 0; i < this.transactions.length; i++) {
    // if transaction is a deposit, add to balance
    if (this.transactions[i].type === 'deposit') {
      balance = balance + this.transactions[i].amount;
    } else { // if transactio is a withdraw, subtract from balance
      balance = balance - this.transactions[i].amount;
    }
  }
  // return balance
  return balance;
}
