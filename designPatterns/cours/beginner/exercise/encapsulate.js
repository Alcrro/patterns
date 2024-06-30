class User {
  constructor(user) {
    this.user = user;
    this.account = new Account();
  }
}

class Account {
  #deposit;
  constructor() {
    this.#deposit = 0;
  }

  deposit(amount) {
    if (amount > 0 || amount !== undefined) {
      this.#deposit += amount;
    }
    this.showDeposit();
  }
  withdraw(amount) {
    if (amount > 0 || amount !== undefined) {
      this.#deposit -= amount;
    }
    this.showDeposit();
  }

  showDeposit() {
    console.log("Your deposit is :", this.#deposit);
  }
}

const user = new User("alex");
user.account.deposit(1000);
user.account.withdraw(300);
