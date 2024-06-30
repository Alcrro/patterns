/*
! Dependency Inversion Principle

?   1.  High level module should not depend by low level module both depend by abstraction
?   2.  Abstraction should not depend by details, details should depend on abstraction
*/

class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requester(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }
  requestItem(item) {}
}
class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ["WS"];
  }
  requestItem(item) {}
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets
const inventoryTracker = new InventoryTracker(
  ["apple", "bananas"],
  new InventoryRequesterV2()
);

inventoryTracker.requestItems();
