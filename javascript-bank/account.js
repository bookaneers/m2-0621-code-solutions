/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  if ((parseInt(!amount))) {
    //
    return true;

  } else {
    return false;
  }
}
Account.prototype.withdraw = function () {

}
Account.prototype.getBalance = function () {

}
