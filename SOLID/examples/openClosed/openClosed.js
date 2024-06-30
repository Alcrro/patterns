class PrintQuiz {
  printQuiz(questions) {
    questions.forEach((question) => {
      console.log(question.description);
      question.printQuestionChoices();
      console.log("");
    });
  }
}

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log(`1. True`);
    console.log(`2. False`);
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log(`Answer: ______________`);
  }
}
class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log(`Minimum: ______________`);
    console.log(`Maximum: ______________`);
  }
}

const questions = [
  new BooleanQuestion("This video is useful."),
  new MultipleChoiceQuestion(
    "What is tour favorite language?",
    ["CSS", "HTML", "JS", "Python"],
    new TextQuestion("Describe your favorite JS feature")
  ),
  new RangeQuestion("What is the speed limit in your city?"),
];

const printQuiz = new PrintQuiz().printQuiz(questions);
console.log(printQuiz);
