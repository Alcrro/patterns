/*
!   Encapsulation is a fundamental concept in object-oriented programming that refers 
! to the practice of hiding the internal details of an object and exposing only the 
! necessary information to the outside world.

*/
class Encapsulate {
  constructor() {
    this.account = new Account();
  }
}

class Account {
  #balance;
  constructor() {
    // # -hide properties from outside
    this.#balance = 0;
  }

  //create a method to change the properties
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      this.#balance /= amount;
    }
  }

  getBalance() {
    return parseFloat(this.#balance.toFixed(2));
  }
}

const main = new Encapsulate();
main.account.deposit(10);
main.account.withdraw(3);

console.log(+main.account.getBalance());
