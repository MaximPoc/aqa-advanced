import Book from './Book.js';

class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    const allowed = ['pdf', 'epub', 'mobi', 'fb2', 'txt'];
    if (typeof value !== 'string' || !allowed.includes(value.toLowerCase())) {
      throw new Error(`File format must be one of: ${allowed.join(', ')}`);
    }
    this.#fileFormat = value.toLowerCase();
  }

  printInfo() {
    super.printInfo();
    console.log(`File Format: ${this.#fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error('First argument must be an instance of Book');
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;
