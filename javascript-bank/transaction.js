/* exported Transaction */

// constructor Transaction
function Transaction(type, amount) {
  this.type = type; // deposit or withdraw
  this.amount = amount; // amount to be deposited or withdrew
  // returns a Transaction object with type and amount properties
}
