class Polymorphism {
  constructor() {
    this.drawUIControl(new TextBox());
  }
  drawUIControl(control) {
    control.draw();
  }
}

class UIControl {
  enable() {
    console.log("Enabled");
  }

  draw() {}
}

class TextBox extends UIControl {
  draw() {
    console.log("Drawing a TextBox");
  }
}
class CheckBox extends UIControl {
  draw() {
    console.log("Drawing a checkbox");
  }
}

const poly = new Polymorphism();
