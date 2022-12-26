export {};

interface Book {
    title: string,
    author: string,
    isRead: boolean,
};

const library: Book[] = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

// cits pieraksts: function showStatus = (listOfBooks: Book[]): void 
const showStatus = (listOfBooks: Book[]): void => {
  listOfBooks.forEach((book) => {
    if(book.isRead) {
      console.log(`Already read '${book.title}' by ${book.author}`);
      } else {
        console.log(`You still need to read '${book.title}' by ${book.author}.`);
      }
      });

};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/