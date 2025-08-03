// Змоделюйте текстовий редактор, у якому кожен символ представлений як об'єкт.
// Використайте шаблон Flyweight, щоб ділитися однаковими символами, а унікальне
// форматування (наприклад, розмір шрифту, колір) зберігати окремо.

// Шаблон Flyweight

// Клас для унікального форматування символу (внутрішній стан)
class CharacterStyle {
  constructor(character, size, color) {
    this.character = character; // Символ
    this.size = size; // Розмір
    this.color = color; // Колір
  }

  // Метод для виведення символу з унікальним форматуванням
  print() {
    // Виведення символу з унікальним форматуванням
    console.log(
      `%c${this.character}`,
      `font-size: ${this.size}px; color: ${this.color};`
    );
  }
}

// FlyweightFactory - фабрика для управління об'єктами CharacterStyle
class CharacterFactory {
  constructor() {
    this.cache = new Map(); // Кеш для збереження об'єктів CharacterStyle
  }

  // Метод для отримання об'єкта CharacterStyle
  getCharacterStyle(character, size, color) {
    // const key = `${character}-${size}-${color}`; // Ключ для збереження у кеші
    const key = `${size}-${color}`; // БЕЗ character
    let characterStyle = this.cache.get(key); // Пошук об'єкта в кеші
    if (!characterStyle) {
      // Якщо об'єкт не знаходиться в кеші, створюємо новий
      characterStyle = new CharacterStyle(character, size, color);
      this.cache.set(key, characterStyle); // Додаємо об'єкт до кешу
    }
    return characterStyle; // Повертаємо об'єкт CharacterStyle
  }
}

// Клас для текстового редактора - контекст
class TextEditor {
  constructor() {
    this.factory = new CharacterFactory();
    this.characters = []; // Масив для збереження тексту
  }

  addCharacter(character, size, color) {
    const style = this.factory.getCharacterStyle(character, size, color);
    this.characters.push({ char: character, style }); // Зберігаємо символ + його стиль
  }

  printText() {
    for (const item of this.characters) {
      console.log(
        `%c${item.char}`,
        `font-size: ${item.style.size}px; color: ${item.style.color};`
      );
    }
  }

  clearAllCharacters() {
    this.characters = []; // Очищаємо текст
  }
}

// Приклад використання
const editor = new TextEditor(); // Створюємо текстовий редактор
editor.addCharacter("A", 12, "red"); // Додаємо символ "A" з розміром 12 і кольором "red"
editor.addCharacter("B", 16, "blue"); // Додаємо символ "B" з розміром 16 і кольором "blue"

console.log("Початковий текст:");
editor.printText(); // Виводимо всі символи з унікальним

console.log("\nОчищення тексту:");
editor.clearAllCharacters(); // Видаляємо всі символи з унікальним форматуванням

console.log("\nДобавлення нового символу після очищення:");
editor.addCharacter("C", 20, "green"); // Додаємо символ "C" з розміром 20 і кольором "green"
editor.printText(); // Виводимо всі символи з унікальним форматуванням

console.log(
  "\n----------------------\nДодавання символів з однаковими параметрами:"
);

const editor2 = new TextEditor();

editor2.addCharacter("A", 14, "purple"); // створюється новий стиль
editor2.addCharacter("B", 14, "purple"); // використовує той самий стиль!
editor2.addCharacter("C", 14, "purple"); // теж використовує його

console.log("Вивід символів з однаковим стилем:");
editor2.printText();

// Перевіримо, чи це справді один і той самий обʼєкт:
const factory = editor2.factory;
const styleAB = factory.getCharacterStyle("A", 14, "purple");
const styleBC = factory.getCharacterStyle("B", 14, "purple");

console.log(
  `styleAB = factory.getCharacterStyle("A", 14, "purple")\nstyleBC = factory.getCharacterStyle("B", 14, "purple");\nОднаковий обʼєкт стилю? styleAB === styleBC: `,
  styleAB === styleBC
); // true

console.log("\n----------------------\nУявна візуалізація кешу:");
console.log("Кеш фабрики:");
console.log([...editor.factory.cache.keys()]);
// Виведе: ["A-14-purple"] — або інші, якщо є унікальні

console.log(
  "\n----------------------\nДодавання символів з однаковим і різним стилем:"
);

const editor3 = new TextEditor();

editor3.addCharacter("A", 14, "purple"); // стиль #1
editor3.addCharacter("B", 14, "purple"); // стиль #1 — спільний
editor3.addCharacter("C", 14, "purple"); // стиль #1 — спільний

editor3.addCharacter("D", 18, "green"); // стиль #2
editor3.addCharacter("E", 12, "blue"); // стиль #3
editor3.addCharacter("F", 18, "green"); // стиль #2 — вже був

console.log("Вивід тексту з різним стилем:");
editor3.printText();

// Перевірка: скільки стилів реально створено?
const factory3 = editor3.factory;
console.log("\nКлючі кешу у фабриці:");
console.log([...editor3.factory.cache.keys()]); // Побачимо: ["14-purple", "18-green", "12-blue"]

// Порівняння стилів:
const style1 = editor3.factory.getCharacterStyle(14, "purple");
const style2 = editor3.factory.getCharacterStyle(18, "green");
const style3 = editor3.factory.getCharacterStyle(12, "blue");

console.log(
  `\nstyle1 === style2 - (14, "purple") === (18, "green"):`,
  style1 === style2
); // false
console.log(
  "style1 === style3 - (14, 'purple') === (12, 'blue')",
  style1 === style3
); // false
console.log(
  "style2 === factory3.getCharacterStyle(18, 'green'):",
  style2 === factory3.getCharacterStyle(18, "green")
); // true
