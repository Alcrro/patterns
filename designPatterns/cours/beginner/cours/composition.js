/*
! Composition

?   Composition helps in creating large & complex functions by combining small functions.

*/

//! JS

const MixFood = (superclass) =>
  class extends superclass {
    eating(food) {
      console.log(`Eating ${food}`);
    }
    excrete() {
      console.log("Going to excrete");
    }
  };

class Human {
  constructor(name) {
    this.name = name;
  }
}

//!Child class takes inheritance by mixedFood function and Human class

class Child extends MixFood(Human) {
  constructor() {
    super();
  }

  cry() {
    console.log("Woff woff!");
  }

  lunch(food) {
    this.eating(food);
    this.excrete();
  }
}

const alex = new Child("Alex");

alex.lunch("biscuits");
