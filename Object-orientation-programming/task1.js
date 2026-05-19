import Book from './Book.js';
import EBook from './EBook.js';

// --- Створення екземплярів Book ---
const book1 = new Book('Копзар', 'Тарас Шевченко', 1840);
const book2 = new Book('1984', 'Дродж Оруел', 1949);
const book3 = new Book('451 градус по фаренгейту', 'Рей Бредбері', 1953);

console.log('=== Books ===');
book1.printInfo();
book2.printInfo();
book3.printInfo();

// --- Створення екземплярів EBook ---
const ebook1 = new EBook('Гаррі Поттер', 'Джоан Роулінг', 1997, 'epub');
const ebook2 = new EBook('Хоббіт', 'Джон Рональд Руел Толкін', 1937, 'pdf');

console.log('\n=== EBooks ===');
ebook1.printInfo();
ebook2.printInfo();

// --- Геттери та сеттери ---
console.log('\n=== Getters / Setters ===');
book1.title = 'Кобзар (Updated)';
console.log('Updated title:', book1.title);

ebook1.fileFormat = 'mobi';
console.log('Updated fileFormat:', ebook1.fileFormat);

// --- Статичний метод Book.getOldestBook ---
const allBooks = [book1, book2, book3, ebook1, ebook2];
const oldest = Book.getOldestBook(allBooks);

console.log('\n=== Oldest Book ===');
oldest.printInfo();

// --- Статичний метод EBook.fromBook ---
console.log('\n=== EBook created from Book ===');
const ebookFromBook = EBook.fromBook(book2, 'fb2');
ebookFromBook.printInfo();
