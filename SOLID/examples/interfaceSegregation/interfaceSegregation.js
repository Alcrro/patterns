class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }

  move() {
    return null;
  }

  attack() {
    return null;
  }
}
class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }

  move() {
    return null;
  }

  takeDamage() {
    return null;
  }
}

// const turret = new Turret("Turret", 5);
// const character = new Character("Character", 3, 100);
// const wall = new Wall("Wall", 200);

// turret.attack(character);
// character.move();
// character.attack(wall);

//! brake into multiple party

class Entity2 {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};
const attacker = {
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

class Character2 extends Entity2 {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character2.prototype, mover);
Object.assign(Character2.prototype, attacker);
Object.assign(Character2.prototype, hasHealth);

class Wall2 extends Entity2 {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall2.prototype, hasHealth);

class Turret2 extends Entity2 {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turret2.prototype, attacker);

const turret = new Turret2("Turret", 5);
const character = new Character2("Character", 3, 100);
const wall = new Wall2("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);
