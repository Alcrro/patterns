/*

! Liskov Substitution Principle
? Objects or types must be substitutable for their base
? If S is subtype of T , then objects of type t may be replaced with objects of type S
? an object of type T may be substituted with an object of a subtype S
*/

class Shape {
  constructor(color) {}
  render(area) {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  getArea() {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    console.log(area);
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
