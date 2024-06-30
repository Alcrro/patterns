class Inheritance {
  constructor() {
    this.textBox = new TextBox()
    this.textBox.enable()
  }
}

class UIControl {
  constructor() {}

  enable() {
    console.log("enable");
  }
}

class TextBox extends UIControl {}
