// Виберіть приклад ієрархії класів у вашому коді або знайдіть у відкритому доступі. Проаналізуйте,
// чи є можливість застосувати підходи "Підйом методу", "Спуск поля" або "Згортання ієрархії" та як
// це змінить структуру коду.

// Початковий код (ієрархія з проблемами)
// У нас є базовий клас Employee і два підкласи: Manager та Developer.
// Метод calculateBonus() дублюється у двох підкласах → кандидат на Підйом методу.
// Поле teamSize використовується тільки в Manager → кандидат на Спуск поля (вже реалізовано правильно).
// Ієрархія може бути надмірною, якщо різниця між класами мінімальна → можливе Згортання ієрархії.
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  calculateBonus() {
    return this.salary * 0.2 + this.teamSize * 100;
  }
}

class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  calculateBonus() {
    return this.salary * 0.2;
  }
}

//  1. Підйом методу (Pull Up Method)
// Обидва підкласи мають однакову частину логіки:
// return this.salary * 0.2;
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  baseBonus() {
    return this.salary * 0.2;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  calculateBonus() {
    return this.baseBonus() + this.teamSize * 100;
  }
}

class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  calculateBonus() {
    return this.baseBonus();
  }
}

// 2. Спуск поля (Push Down Field)
// У нашому прикладі поле teamSize вже знаходиться тільки в Manager, тому тут усе добре.
// Але уявімо, що початково було так:
// class Employee {
//     constructor(name, salary, teamSize) {
//         this.name = name;
//         this.salary = salary;
//         this.teamSize = teamSize; // ❌ зайве поле
//     }
// }

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize; // ✔ тепер тут
  }
}
