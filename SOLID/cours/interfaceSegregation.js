/*
! Interface segregation

?  A client should not be forced to depend on interfaces it doesn't use
?  Need to implement all methods from the interface
*/

class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }
  setupOptions() {
    if (this.options.animationModule) {
    }
  }
  traverse() {}
}

const dom = new DOMTraverser({
  rootNode: document.getElementsByName("body"),
  options: { animationModule() {} },
});
