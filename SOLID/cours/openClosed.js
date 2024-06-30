/*
! Open / Closed Principle

?   Software entities should be open for extension but closed for modification
?   If someone wants to extend our module's behavior they won't need to modify existing code.
*/

class IceCreamMaker {
  constructor() {
    this.iceCreamFlavors = ["chocolate", "vanilla"];
  }

  makeIceCream(flavor) {
    if (this.iceCreamFlavors.indexOf(flavor) > -1) {
      console.log("Great success. You now have ice cream.");
    } else {
      console.log("Epic fail. No ice cream for you.");
    }
  }

  addFlavor(flavor) {
    this.iceCreamFlavors.push(flavor);
  }

  display() {
    this.iceCreamFlavors.forEach((element) => {
      console.log(element);
    });
  }
}

const iceCream = new IceCreamMaker();
iceCream.addFlavor("strawberry");
iceCream.display();
