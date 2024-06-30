/*

!       JavaScript abstraction refers to the concept of hiding complex implementation details and 
!   showing only the essential features or functionalities of an object or module to the user also it 
!   is the fundamental concept in object-oriented programming.
*/

class Abstraction {
  constructor() {
    this.mailService = new MailService();
    this.mailService.sendEmail();
  }
}

class MailService {
  constructor() {}

  sendEmail() {
    this.#connect();
    this.#authenticate();
    //send email
    this.#disconnect();
  }

  #connect() {
    console.log("Connect");
  }
  #disconnect() {
    console.log("Disconnect");
  }
  #authenticate() {
    console.log("Authenticate");
  }
}
