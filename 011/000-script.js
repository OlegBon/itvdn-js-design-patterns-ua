// Напишіть код, який використовує значення помилки для передачі результатів. Запропонуйте, як
// ви можете замінити код помилки виключенням для покращення читабельності та підтримуваності.

// Поганий код (коди помилок)

// Поганий приклад - використання кодів помилок
// function saveUser(user) {
//   if (!user.name) {
//     return -1; // помилка валідації
//   }

//   if (!user.hasAccess) {
//     return -2; // помилка доступу
//   }

//   try {
//     console.log("Saving user:", user.name);
//     return 0; // успіх
//   } catch (e) {
//     return -3; // невідома помилка
//   }
// }

// // Використання
// const result = saveUser({ name: "", hasAccess: true });

// if (result === 0) {
//   console.log("User saved");
// } else if (result === -1) {
//   console.log("Validation error");
// } else if (result === -2) {
//   console.log("Access denied");
// } else {
//   console.log("Unknown error");
// }

// Правильний варіант - використання винятків
// Замінюємо коди помилок на throw new Error(), а обробку переносимо в try/catch
function saveUser(user) {
  if (!user.name) {
    throw new Error("Некоректне ім'я користувача");
  }

  if (!user.hasAccess) {
    throw new Error("Користувач не має доступу");
  }

  console.log("Saving user:", user.name);
  return "OK";
}

// Використання
try {
  const result = saveUser({ name: "", hasAccess: true });
  console.log(result);
} catch (error) {
  console.log("Помилка:", error.message);
}
