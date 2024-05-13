// Encapsulation: Binding data and functions into a single unit (class)
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }
}

// Abstraction: Hiding complex implementation details and exposing only necessary information
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
      // Polymorphism: Allowing objects of different classes to be treated as objects of a common superclass
      if (book instanceof Book) {
          this.books.push(book);
      } else {
          throw new Error("Invalid book object");
      }
  }

  searchByAuthor(author) {
      return this.books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
  }
}
// Derived class for physical books
class PhysicalBook extends Book {
    constructor(title, author, isbn) {
        super(title, author);
        this.isbn = isbn;
    }

    toString() {
        return `${super.toString()} (ISBN: ${this.isbn})`;
    }
}


// Inheritance: Creating a new class from an existing class
class EBook extends Book {
  constructor(title, author, fileFormat) {
    super(title, author);
    this.fileFormat = fileFormat;
  }

  toString() {
    return `${super.toString()} (${this.fileFormat})`;
  }
}

// Polymorphism: Allowing objects of different classes to be treated as objects of a common superclass
function printBooks(books) {
  books.forEach((book) => console.log(book.toString()));
}

// Usage
const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("Pride and Prejudice", "Jane Austen");
const book3 = new Book("Calculus for Engineering Student", "Jane Austen");
const book4 = new EBook("The Catcher in the Rye", "J.D. Salinger", "PDF");


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


console.log("All books:");
printBooks(library.books);

document.getElementById("search").addEventListener("keypress", function (event) {
    // Check if Enter key was pressed (key code 13)
    if (event.keyCode === 13) {
        searchByAuthor();
    }
});

function searchByAuthor() {
  const author = document.getElementById("search").value
  const books = library.searchByAuthor(author);
  printBooks(books);
  const title = `Search result for author "${author}":`
  alert(title + "\n" + books.map((book, i) => `${i + 1}. ${book.toString()}`).join("\n"));
}
