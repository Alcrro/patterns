class Main {
  constructor() {
    let editor = new Editor();
    let history = new EditorHistory();
editor.getContent
    history.append(editor.createState());
  }
}

class Editor {
  private content: any;
  constructor() {
    this.content;
  }

  createState() {
    return new EditorState(this.content);
  }

  restore(state: any) {
    this.content = state.getContent();
  }
  getContent() {
    return this.content;
  }

  setContent() {
    this.content = this.content;
  }
}

class EditorState {
  private content: string = "";
  constructor(content: any) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setContent() {
    this.content = this.content;
  }
}

class EditorHistory {
  states: [];
  constructor() {
    this.states = [];
  }

  append(state: any) {
    this.states.push(state);
  }

  prepend() {
    this.states.pop();
  }
}
