import Book, { } from './book';

let b1: Book;

b1 = new Book();
console.log('b1 is', b1);

let b2 = new Book('Let us Angular', 'Abdul Wahab', 299);
console.log('b2 is', b2);

b1.print();
b2.print();