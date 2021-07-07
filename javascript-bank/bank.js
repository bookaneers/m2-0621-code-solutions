/* exported Bank */

// constructor Bank
function Bank() {
  // an integer number used to uniquely identify the next account to be opened in the bank
  this.nextAccountNumber = 1;
  // an array to hold account objects when they are opened at the bank.
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance) {
  // makes sure that the opening balance provided is a positive integer
  if (Number.isInteger(balance) && balance > 0) {
    // creates a new account object, passing the current value of
    // this.nextAccountNumber and holder as arguments
    var newAccount = new Account(this.nextAccountNumber, holder);
    // deposits balance into the new account
    newAccount.deposit(balance);
    // pushes the account object into this.accounts
    this.accounts.push(newAccount);
    // increments this.nextAccountNumber
    this.nextAccountNumber++;
    // returns the number property of the successfully created account
    return newAccount.number;
  }
  // if the value of balance is not a positive integer, then the method returns null
  return null;
}

Bank.prototype.getAccount = function(number) {
  // iterate over this.accounts array
  for (var i = 0; i < this.accounts.length; i++) {
    // finds the account object stored in this.accounts whose
    // account.number matches the value of number
    if (this.accounts[i].number === number) return this.accounts[i];
  }
  // if the bank does not have an account that matches the provided number,
  // then null is returned
  return null;
}

Bank.prototype.getTotalAssets = function() {
  var assets = 0;
  // iterate over this.accounts
  for (var acc = 0; acc < this.accounts.length; acc++) {
    assets += this.accounts[acc].getBalance();
  }
  // A number that is the grand total of all of the bank's account balances.
  // If there are no accounts in the bank, then 0 is returned.
  return assets;
}
