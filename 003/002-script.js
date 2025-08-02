// Реалізуйте клас Library, який містить список книг (масив об'єктів, де кожен об'єкт містить назву, перелік авторів та рік видання).
// Реалізуйте глибоке клонування бібліотеки, щоб новий об'єкт був незалежним від оригіналу.

// Базовий клас
class BookWithDetails {
  constructor(books) {
    this.books = books;
  }

  clone() {
    return new BookWithDetails(JSON.parse(JSON.stringify(this.books)));
  }
}

// Створюємо бібліотеку з масивом об'єктів (книг)
const library = new BookWithDetails([
  { title: "The Great Gatsby", authors: ["F. Scott Fitzgerald"], year: 1925 },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], year: 1960 },
  { title: "1984", authors: ["George Orwell"], year: 1949 },
  // Книга з декількома авторами
  {
    title: "The Catcher in the Rye",
    authors: ["J.D. Salinger", "F. Scott Fitzgerald"],
    year: 1951,
  },
]);

// Клонуємо бібліотеку
const clonedLibrary = library.clone();

// Змінемо назву книги у клону
clonedLibrary.books[0].title = "The Catcher in the Rye";

// Перевіримо, що назва оригіналу не змінилася
console.log(library.books[0].title); // The Great Gatsby

// Виводимо обідви бібліотеки
console.log("Original Library:");
console.log(library.books);
console.log("Cloned Library:");
console.log(clonedLibrary.books);

// Порівняння об'єктів
console.log("library === clonedLibrary: ", library === clonedLibrary);
