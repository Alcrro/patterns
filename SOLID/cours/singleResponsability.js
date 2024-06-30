/*
! Single responsibility principle 


? This principle states Should only have one reason to change


*/

class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {}
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials) {
    }
  }
}
