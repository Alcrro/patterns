class FlyingBird {
  fly() {
    console.log("i can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("i can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("i can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}
function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
