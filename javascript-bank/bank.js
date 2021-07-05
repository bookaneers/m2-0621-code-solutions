/* exported Bank */

// constructor Bank
function Bank() {
  // an integer number used to uniquely identify the next account to be opened in the bank
  this.nextAccountNumber = ;
  // an array to hold account objects when they are opened at the bank.
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance) {
  // makes sure that the opening balance provided is a positive integer
  if (this.balance) {
    // creates a new account object, passing the current value of
    // this.nextAccountNumber and holder as arguments
    var newAccount = new Account(this.nextAccountNumber, holder);
    // deposits balance into the new account
    newAccount.balance = balance;
    // pushes the account object into this.accounts
    this.accounts.push(newAccount);
    // increments this.nextAccountNumber
    this.nextAccountNumber++;
    // returns the number property of the successfully created account
    return this.nextAccountNumber;
  }
  // if the value of balance is not a positive integer, then the method returns null
  return null;
}

Bank.prototype.getAccount = function(number) {
  // iterate over this.accounts array
  for (var i = 0; i < this.accounts.length; i++) {
    // finds the account object stored in this.accounts whose
    // account.number matches the value of number
    if (this.accounts[i].number === number) return Account.number;
  }
  // if the bank does not have an account that matches the provided number,
  // then null is returned
  return null;
}

Bank.prototype.getTotalAssets = function() {

}
