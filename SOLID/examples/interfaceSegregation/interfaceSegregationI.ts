interface Entity {
  attackDamage: number;
  health: number;
  name: string;

  move(): void;
  attack(): void;
  takeDamage(): void;
}

class Character implements Entity {
  attackDamage: any;
  health: any;
  name: any;

  move() {}
  attack() {}
  takeDamage() {}
}

class Turret implements Entity {
  attackDamage: any;
  health: any;
  name: any;

  move() {
    // Error : cannot
  }
  attack() {}
  takeDamage() {}
}
