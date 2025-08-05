// Створіть клас "Сім'я", який містить членів сім'ї (наприклад, батька, матір, дітей).
// Реалізуйте ітератор, який дозволяє обійти членів сім'ї в порядку старшинства.

// Шаблон Iterator

// // Колекція - Сім'я
// class Family {
//   constructor(mother, father, children) {
//     this.mother = mother;
//     this.father = father;
//     this.children = children;
//   }

//   createIterator() {
//     return new FamilyIterator(this);
//   }
// }

// // Ітератор
// class FamilyIterator {
//   constructor(family) {
//     this.members = [family.father, family.mother, ...family.children];
//     this.index = 0;
//   }

//   next() {
//     return this.hasNext() ? this.members[this.index++] : null;
//   }

//   hasNext() {
//     return this.index < this.members.length;
//   }
// }

// // Приклад використання
// const family = new Family("Олена", "Сергій", ["Анна", "Петро", "Іван"]);

// const iterator = family.createIterator();

// while (iterator.hasNext()) {
//   console.log(iterator.next());
// }

// Варіант 2. З віком
// Клас для одного члена сім'ї
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `${this.name} (${this.age} років)`;
  }
}

// Колекція - Сім'я
class Family {
  constructor(mother, father, children) {
    this.mother = mother;
    this.father = father;
    this.children = children;
  }

  createIterator() {
    return new FamilyIterator(this);
  }
}

// Ітератор
class FamilyIterator {
  constructor(family) {
    this.members = [family.father, family.mother, ...family.children].sort(
      (a, b) => b.age - a.age
    ); // Сортування за спаданням віку

    this.index = 0;
  }

  next() {
    return this.hasNext() ? this.members[this.index++].toString() : null;
  }

  hasNext() {
    return this.index < this.members.length;
  }
}

// Приклад використання
const father = new Person("Сергій", 45);
const mother = new Person("Олена", 46);
const children = [
  new Person("Анна", 18),
  new Person("Петро", 15),
  new Person("Іван", 19),
];

const family = new Family(mother, father, children);
const iterator = family.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
