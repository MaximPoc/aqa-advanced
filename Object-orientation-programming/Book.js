class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Title must be a non-empty string');
    }
    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Author must be a non-empty string');
    }
    this.#author = value.trim();
  }

  get year() {
    return this.#year;
  }

  set year(value) {
    const num = Number(value);
    if (!Number.isInteger(num) || num < 1 || num > new Date().getFullYear()) {
      throw new Error(`Year must be a valid integer between 1 and ${new Date().getFullYear()}`);
    }
    this.#year = num;
  }

  printInfo() {
    console.log(`Title: ${this.#title}, Author: ${this.#author}, Year: ${this.#year}`);
  }

  static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('books must be a non-empty array');
    }
    return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
  }
}

export default Book;
