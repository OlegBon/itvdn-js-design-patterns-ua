// Розробіть програму для перегляду елементів файлової системи. Реалізуйте елементи File і Catalog.
// Додайте відвідувача, який обчислює загальний розмір файлів та кількість об'єктів у каталозі.

// Шаблон Visitor

// Базовий абстрактний клас для елементів файлової системи
class FileSystemElement {
  accept(visitor) {
    throw new Error("Метод accept має бути реалізований у підкласі");
  }
}

// Клас для файлу
class File extends FileSystemElement {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size; // розмір у байтах
  }

  accept(visitor) {
    return visitor.visitFile(this);
  }
}

// Клас для каталогу (може містити файли та інші каталоги)
class Catalog extends FileSystemElement {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(element) {
    this.children.push(element);
  }

  accept(visitor) {
    return visitor.visitCatalog(this);
  }
}

// Клас відвідувача для обчислення загального розміру файлів та кількості об'єктів у каталозі
class SizeCalculator {
  visitFile(file) {
    return file.size;
  }

  visitCatalog(catalog) {
    return catalog.children.reduce(
      (total, child) => total + child.accept(this),
      0,
    );
  }
}

// Клас відвідувача для обчислення кількості об'єктів у каталозі
class CountCalculator {
  visitFile(file) {
    return 1;
  }

  visitCatalog(catalog) {
    return (
      1 +
      catalog.children.reduce((count, child) => count + child.accept(this), 0)
    );
  }
}

// Приклад використання
// Створюємо файлову структуру
const root = new Catalog("root");
const images = new Catalog("images");
const docs = new Catalog("docs");

const file1 = new File("photo1.jpg", 1500);
const file2 = new File("photo2.jpg", 2000);
const file3 = new File("resume.pdf", 800);
const file4 = new File("notes.txt", 300);

images.add(file1);
images.add(file2);
docs.add(file3);
docs.add(file4);

root.add(images);
root.add(docs);

// Створюємо відвідувачів
const sizeCalc = new SizeCalculator();
const countCalc = new CountCalculator();

// Обчислення
console.log("Загальний розмір:", root.accept(sizeCalc), "байт");
console.log("Кількість об'єктів:", root.accept(countCalc));
