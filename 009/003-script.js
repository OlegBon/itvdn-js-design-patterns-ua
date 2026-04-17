// Створіть або знайдіть код із застарілими елементами (наприклад, методи, які більше не
// використовуються). Дослідіть, як такі елементи можуть впливати на продуктивність і
// масштабованість проєкту, а потім оптимізуйте код, видаливши їх.

// Lava Flow

// Поганий приклад - Lava Flow
// старі методи, які більше не використовуються;
// дублювання логіки;
// мертвий код, який ніхто не видаляє;
// коментарі «на всяк випадок».
// class UserService {
//   constructor() {
//     this.users = [];
//   }

//   // Старий метод, який більше не використовується
//   addUserOld(name, age) {
//     // Колись тут була логіка, але зараз вона не потрібна
//     console.log("addUserOld is deprecated");
//     this.users.push({ name, age, createdAt: Date.now() });
//   }

//   // Новий метод
//   addUser(name, age) {
//     this.users.push({ name, age });
//   }

//   // Старий метод для пошуку (не використовується)
//   findUserOld(name) {
//     for (let i = 0; i < this.users.length; i++) {
//       if (this.users[i].name === name) {
//         return this.users[i];
//       }
//     }
//     return null;
//   }

//   // Новий метод
//   findUser(name) {
//     return this.users.find((u) => u.name === name);
//   }

//   // Метод, який ніхто не викликає
//   calculateSomethingWeird() {
//     let x = 0;
//     for (let i = 0; i < 1000000; i++) {
//       x += Math.sqrt(i); // марна робота
//     }
//     return x;
//   }
// }

// const service = new UserService();
// service.addUser("Oleh", 49);
// console.log(service.findUser("Oleh"));

// Очищений, оптимізований код
class UserService {
  constructor() {
    this.users = [];
  }

  addUser(name, age) {
    this.users.push({ name, age });
  }

  findUser(name) {
    return this.users.find((u) => u.name === name);
  }
}

const service = new UserService();
service.addUser("Oleh", 49);
console.log(service.findUser("Oleh"));
