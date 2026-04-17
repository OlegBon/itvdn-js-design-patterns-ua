// Додайте методи, які використовують складні параметри. Здійсніть рефакторинг коду для заміни
// методів спеціалізованими методами або викликами інших функцій, щоб зробити код простішим.

// Simplifying Method Calls

// Поганий приклад - метод із складними параметрами
// Метод updateUser приймає:
// action — що робити
// payload — дані
// options — додаткові налаштування
// Це типовий приклад методу, який робить забагато.
class UserService {
  constructor() {
    this.users = [];
  }

  updateUser(action, payload, options = {}) {
    if (action === "create") {
      this.users.push(payload);
      if (options.log) console.log("User created:", payload);
    }

    if (action === "update") {
      const user = this.users.find((u) => u.id === payload.id);
      if (user) {
        Object.assign(user, payload);
        if (options.log) console.log("User updated:", user);
      }
    }

    if (action === "delete") {
      this.users = this.users.filter((u) => u.id !== payload.id);
      if (options.log) console.log("User deleted:", payload.id);
    }
  }
}

// Правильний варіант - спеціалізовані методи
// Замінюємо один складний метод на три простих і зрозумілих
class UserService {
  constructor() {
    this.users = [];
  }

  createUser(user, log = false) {
    this.users.push(user);
    if (log) console.log("User created:", user);
  }

  updateUser(user, log = false) {
    const existing = this.users.find((u) => u.id === user.id);
    if (existing) {
      Object.assign(existing, user);
      if (log) console.log("User updated:", existing);
    }
  }

  deleteUser(id, log = false) {
    this.users = this.users.filter((u) => u.id !== id);
    if (log) console.log("User deleted:", id);
  }
}
