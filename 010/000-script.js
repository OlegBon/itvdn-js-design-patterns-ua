// Реалізуйте клас, який порушує принцип Single Responsibility, оскільки обробляє і збереження
// даних, і їх валідацію. Розділіть цей клас на два окремих, кожен з яких буде відповідати лише за
// одну відповідальність.

// Порушення Single Responsibility (SRP)

// Поганий приклад - порушення SRP
// Один клас робить усе: перевіряє дані, зберігає дані, логує помилки.
// class UserService {
//   constructor() {
//     this.users = [];
//   }

//   saveUser(user) {
//     // Валідація
//     if (!user.name || user.name.length < 3) {
//       console.log("Помилка: некоректне ім'я");
//       return;
//     }

//     if (!user.email || !user.email.includes("@")) {
//       console.log("Помилка: некоректний email");
//       return;
//     }

//     // Збереження
//     this.users.push(user);
//     console.log("Користувача збережено:", user);
//   }
// }

// const service = new UserService();
// service.saveUser({ name: "Oleh", email: "oleh@example.com" });

// Правильний код (розділення відповідальностей)
// Розділимо логіку на два класи:
// UserValidator - відповідає тільки за валідацію
// UserRepository - відповідає тільки за збереження
// А координує все третій клас - UserService.

class UserValidator {
  validate(user) {
    if (!user.name || user.name.length < 3) {
      throw new Error("Некоректне ім'я");
    }

    if (!user.email || !user.email.includes("@")) {
      throw new Error("Некоректний email");
    }

    return true;
  }
}

class UserRepository {
  constructor() {
    this.users = [];
  }

  save(user) {
    this.users.push(user);
    console.log("Користувача збережено:", user);
  }
}

class UserService {
  constructor(validator, repository) {
    this.validator = validator;
    this.repository = repository;
  }

  createUser(user) {
    this.validator.validate(user);
    this.repository.save(user);
  }
}

// Приклад використання
const validator = new UserValidator();
const repository = new UserRepository();
const service = new UserService(validator, repository);

service.createUser({ name: "Oleh", email: "oleh@example.com" });
