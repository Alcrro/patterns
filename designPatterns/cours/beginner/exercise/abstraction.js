class Abstraction {
  constructor() {
    this.emailService = new MailService();
  }
}

class MailService {
  sendEmail() {
    this.#connect();
    this.#authenticate();
    console.log("Your email is sended");
    this.#disconnect();
  }
  #connect() {
    console.log("You are connected");
  }
  #disconnect() {
    console.log("You are disconnected");
  }
  #authenticate() {
    console.log("You are authenticate");
  }
}

const car = new Abstraction();
car.emailService.sendEmail();
