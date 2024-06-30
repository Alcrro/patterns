const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Cristi" },
];

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getUser(id) {
    console.log(users);
    const user = users.find((user) => user.id === id);
    if (user == null) {
      return new NullUser();
    } else {
      return user;
    }
  }

  printUser() {
    const user = this.getUser(this.id);

    console.log("Hello " + user.name);

    if (this.#hasAccess()) {
      console.log("You have access");
    } else {
      console.log("You are not allowed here");
    }
  }

  #hasAccess() {
    
    return this.name === "Alex";
  }
}
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    console.log(false);
    return false;
  }
}

const user = new User(3, "Ema");
user.getUser(users);
user.printUser();
