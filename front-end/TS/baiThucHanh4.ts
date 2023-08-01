enum BookGenre {
    Fiction,
    NonFiction,
    Fantasy,
}

type BorrowedBook = [string, Date];

type Book = {
    name: string;
    author: string;
    publishedYear: number | any;
    genre: BookGenre | any;
};

const books: Book[] = [
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
        genre: BookGenre.Fiction
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        publishedYear: 2011,
        genre: BookGenre.NonFiction
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        publishedYear: 1997,
        genre: BookGenre.Fantasy
    },
];

function printBookInfo(book: Book) {
    console.log(`Name: ${book.name}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.publishedYear}`);
    console.log(`Genre: ${BookGenre[book.genre]}`);
    console.log("------------------------");
}

function borrowBook(book: Book): BorrowedBook {
    const currentDate = new Date();
    return [book.name, currentDate];
}

console.log("Library Book List:");
books.forEach((item) => {
    printBookInfo(item)
});

// Mượn sách và in thông tin sách được mượn
const borrowedBook: BorrowedBook = borrowBook(books[0]);
console.log(`Borrowed Book: ${borrowedBook[0]}`);
console.log(`Borrowed Date: ${borrowedBook[1].toLocaleDateString()}`);