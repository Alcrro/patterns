const users = [
  { id: 1, name: "alex", access: true },
  { id: 2, name: "cristi", access: false },
];

class User {
  constructor() {}

  getUser(newUser) {
    const findUser = users.find((user) => user.id === newUser.id);
    if (findUser == null) {
      return new NullUser();
    } else {
      return findUser;
    }
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
    this.access = false;
  }
}

class Login {
  constructor() {
    this.isLoggedIn = false;
    this.user = {};
  }

  hasLoggedIn(user) {
    let getUser = new User();
    this.user = getUser.getUser(user);

    this.isLoggedIn = true;
    return this.user;
  }
}

const login = new Login();

login.hasLoggedIn({ id: 1, name: "alex", access: true });
console.log(login);
