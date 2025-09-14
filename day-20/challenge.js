class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        const existingBook = this.books.find(b => b.title === book.title);
        if (!existingBook) {
            this.books.push(book);
            console.log(`The book "${book.title}" is added to library.`)
        } else {
            console.log(`The book "${book.title}" already exists in library.`);
        }
    }

    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            console.log(`The book "${title}" is now borrowed.`);
        } else {
            console.log(`The book "${title}" is not available.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && !book.isAvailable) {
            book.isAvailable = true;
            console.log(`The book "${title}" is now returned.`);
        } else {
            console.log(`The book "${title}" was not borrowed or not found.`);
        }
    }

    listAvailableBooks() {
        console.log('Available books:')
        this.books
            .filter(b => b.isAvailable)
            .forEach(b => console.log(`- ${b.title}`));
    }
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien");

const library = new Library();

library.listAvailableBooks();
library.addBook(book1);
library.addBook(book2);
library.addBook(new Book("1984", "George Orwell"));
library.listAvailableBooks();

library.borrowBook("1984");
library.listAvailableBooks();

library.returnBook("1984");
library.listAvailableBooks();

library.returnBook("The Hobbit");