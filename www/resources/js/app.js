import "../sass/app.scss";
// This is a comment in main
console.log("Loading app.js");

let es_six = () => console.log("kHello ES6 Script");

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by
        ${this.author} in ${this.year}`;
  };
  // console.log("Book Instantiated..");
}

// Instatiate an Object
const book3 = new Book("Book Three", "Greg", "2988");
const book4 = new Book("Book Four", "Henry", "9996");

console.log(book3.getSummary());
console.log(book4);
