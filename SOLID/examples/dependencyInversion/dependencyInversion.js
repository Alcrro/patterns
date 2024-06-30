class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.user = user;
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}
class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal(user);
  }
  pay(amountInDollars) {
    this.paypal.makePayment(amountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of ${amountInCents / 100} with Stripe`
    );
  }
}
class Paypal {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInDollars) {
    console.log(
      `${this.user} made payment of ${amountInDollars / 100} with Paypal`
    );
  }
}
const store = new Store(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);
