// Реалізуйте структуру класів, яка представляє файлову систему, де директорії можуть містити
// файли або інші директорії. Використайте шаблон Composite, щоб забезпечити однакове
// опрацювання файлів і директорій, наприклад, при підрахунку загального розміру або виведенні вмісту.

// Шаблон Composite

// Базовий компонент
class FileSystemComponent {
  // Метод для ім'я директорії або файлу
  getName() {
    throw new Error("Метод getName повинен бути реалізований");
  }

  // Метод для отримання розміру
  getSize() {
    throw new Error("Метод getSize повинен бути реалізований");
  }

  // Метод для виведення вмісту
  print() {
    throw new Error("Метод print повинен бути реалізований");
  }
}

// Лист. Конкретний компонент - файл
class File extends FileSystemComponent {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.size;
  }

  print(depth = 0) {
    //depth - відступ
    const indent = "  ".repeat(depth);
    console.log(`${indent}Файл: ${this.name} (${this.size} bytes)`);
  }
}

// Контейнер - папка з вмістомю Але вона може бути пустою (це все ще контейнер, просто без дітей)
class Directory extends FileSystemComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.children.reduce((sum, child) => sum + child.getSize(), 0);
  }

  print(depth = 0) {
    const indent = "  ".repeat(depth);
    console.log(`${indent}Директорія: ${this.name}`);
    if (this.children.length === 0) {
      console.log(`${indent}  (пуста)`);
    } else {
      for (const child of this.children) {
        child.print(depth + 1);
      }
    }
  }

  addChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChildren() {
    return this.children;
  }
}

// Приклад використання
const root = new Directory("root");
const docs = new Directory("docs");
const music = new Directory("music");
const readme = new File("readme.txt", 100);
const track = new File("track.mp3", 4000);
const track_my = new File("track_my.mp3", 3800);
const empty = new Directory("empty");

docs.addChild(readme);
music.addChild(track);
music.addChild(track_my);
root.addChild(docs);
root.addChild(music);
root.addChild(empty);

root.print();
console.log(`Загальний розмір: ${root.getSize()} bytes`);

console.log("-------");
console.log("Виведення вмісту папки docs:");
docs.print();
console.log(`Розмір папки docs: ${docs.getSize()} bytes`);

console.log("-------");
console.log("Виведення вмісту папки music:");
music.print();
console.log(`Розмір папки music: ${music.getSize()} bytes`);
