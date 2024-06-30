class Polymorphism {
  constructor() {
    this.drawUIControl(new TextBox());
  }
  drawUIControl(control) {
    control.draw();
  }
}

class UIControl {
  constructor() {
    if (this.constructor === UIControl) {
      console.log("error");
    }
  }
  enable() {
    console.log("enable");
  }
  draw() {}
}

class TextBox extends UIControl {
  draw() {
    console.log("drawing a textBox");
  }
}

class Checkbox extends UIControl {
  draw() {
    console.log("drawing a checkbox");
  }
}

const poly = new Polymorphism();
