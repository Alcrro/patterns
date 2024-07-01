/*
! Aggregation 

? Fundamental concept that facilitates the creation of complex objects by combining simpler ones.
? "Has-a" relationship between objects.


! Approach 1 : Aggregation using Object Properties

? - Create an object that contains properties representing the components you want to aggregate.
? - These properties can be references to other objects, functions, or any data type.
? - Establish an aggregation relationship by including one object within the other as a property.
? - Allow one object to reference and use another, providing a way to model aggregation.


!Approach 2 : Aggregation using Arrays

? - Create an object that contains an array property to hold aggregated items.
? - Perform operations like adding, removing, or manipulating items within the array.
? - Aggregation starts with collecting data from various sources, such as user input, databases, or external files.
? - Typically, store the collected data in an array data structure capable of holding multiple values of the same type.
? - Arrays provide a way to represent a collection of related data items.
? - Each item in the array is stored at a specific index, allows easy access and manipulation of individual elements.
? - Arrays are often used to group and classify data, allowing effective organization, such as storing scores of students in a class.
*/

//! Approach 1

const book1 = {
  title: "The Great Gatsby",
  author: "F.Scott Fitzgerald",
};
const book2 = {
  title: "The GeeksForGeeks",
  author: "Geek",
};

const gfg = {
  name: "My Library",
  books: [book1, book1],

  addBook: function (book) {
    this.books.push(book);
  },

  displayBooks: function () {
    console.log(`Books in ${this.name}`);
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}`);
    });
  },
};

// gfg.displayBooks();

// const book3 = {
//   title: "newBook",
//   author: "Alex",
// };
// gfg.addBook(book3);
// gfg.displayBooks();

//! Approach 2

function Players(name, age) {
  this.name = name;
  this.age = age;
}

const player1 = new Players("Alex", 31);
const player2 = new Players("Cristi", 28);

const team = {
  name: "Red Team",
  players: [player1, player2],

  addPlayer: function (player) {
    this.players.push(player);
  },

  removePlayer: function (playerName) {
    const indexToRemove = this.players.findIndex(
      (player) => player.name === playerName
    );
    if (indexToRemove !== -1) {
      this.players.splice(indexToRemove, 1);
    }
  },

  displayTeam: function () {
    console.log(`Team: ${this.name}`);
    console.log("Players: ");
    this.players.forEach((player, index) => {
      console.log(`${index + 1}. Name: ${player.name}, Age: ${player.age}`);
    });
  },
};

const gigel = new Players("Gigel", 32);

team.displayTeam();
team.addPlayer(gigel);
team.displayTeam();
