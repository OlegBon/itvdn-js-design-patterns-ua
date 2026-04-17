// Додайте методи, які можна перейменувати для кращого розуміння їхньої мети. Проаналізуйте, як
// нові імена допоможуть іншим розробникам краще орієнтуватися в коді.

// Rename Method

// Поганий код (неочевидні назви методів)
// У цьому прикладі методи мають назви, які:
// не пояснюють, що саме роблять,
// вимагають читати тіло методу, щоб зрозуміти призначення,
// можуть вводити в оману інших розробників.
class UserService {
  constructor() {
    this.users = [];
  }

  doStuff(user) {
    this.users.push(user);
  }

  check(user) {
    return user.age >= 18;
  }

  get(userName) {
    return this.users.find((u) => u.name === userName);
  }
}

// Правильний варіант - зрозумілі назви методів
// Перейменуємо методи так, щоб:
// назва відображала дію,
// іншим розробникам не потрібно було читати тіло методу,
// код став самодокументованим.
class UserService {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  isAdult(user) {
    return user.age >= 18;
  }

  findUserByName(userName) {
    return this.users.find((u) => u.name === userName);
  }
}
