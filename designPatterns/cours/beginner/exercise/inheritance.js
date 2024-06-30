class Inheritance {
  constructor() {
    this.textBox = new TextBox();
  }
}

// class UIControl {
//   enable() {
//     console.log("Enable");
//   }
// }

// class TextBox extends UIControl {}

const inh = new Inheritance();
inh.textBox.enable();
