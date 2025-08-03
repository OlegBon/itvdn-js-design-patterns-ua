// Реалізуйте адаптер, який перетворює температуру між шкалами Цельсія та Фаренгейта.
// Напишіть код, що дозволяє перемикатися між цими системами за допомогою адаптера.

// Шаблон Adapter

// Клас для шкали Цельсія
class CelsiusScale {
  constructor(value) {
    this.value = value;
  }

  // Метод для отримання температури
  display() {
    return this.value;
  }
}

// Клас для шкали Фаренгейта
class FahrenheitScale {
  constructor(value) {
    this.value = value;
  }

  // Метод для отримання температури
  display() {
    return this.value;
  }
}

// Адаптер для перетворення температури не в залежності від напряму
// class TemperatureAdapter {
//   constructor(scale) {
//     this.scale = scale;
//   }

//   getTemperature() {
//     // Якщо Цельсії, то конвертуємо у Фаренгейт
//     if (this.scale instanceof CelsiusScale) {
//       return (this.scale.value * 9) / 5 + 32;
//     }

//     // Якщо Фаренгейт, то конвертуємо у Цельсії
//     if (this.scale instanceof FahrenheitScale) {
//       return ((this.scale.value - 32) * 5) / 9;
//     }
//   }
// }

// Адаптер щоб керувати напрямом конвертації
class TemperatureAdapter {
  constructor(scale) {
    this.scale = scale;
  }

  // convertTo(unit) {
  //   if (unit === "F" && this.scale instanceof CelsiusScale) {
  //     return (this.scale.value * 9) / 5 + 32;
  //   }
  //   if (unit === "C" && this.scale instanceof FahrenheitScale) {
  //     return ((this.scale.value - 32) * 5) / 9;
  //   }
  //   // якщо помидкова одиниця, не "F" або "C"
  //   if (unit !== "C" && unit !== "F") {
  //     throw new Error(`Невідома одиниця температури: ${unit}`);
  //   }
  //   return this.scale.value; // якщо вже в потрібній одиниці
  // }

  convertTo(unit) {
    switch (unit) {
      case "F":
        if (this.scale instanceof CelsiusScale) {
          return (this.scale.value * 9) / 5 + 32;
        }
        return this.scale.value;
      case "C":
        if (this.scale instanceof FahrenheitScale) {
          return ((this.scale.value - 32) * 5) / 9;
        }
        return this.scale.value;
      default:
        throw new Error(`Невідома одиниця температури: ${unit}`);
    }
  }
}

// Приклад використання
// const celsiusScale = new CelsiusScale(25);
// const fahrenheitScale = new FahrenheitScale(77);

// const celsiusAdapter = new TemperatureAdapter(celsiusScale);
// const fahrenheitAdapter = new TemperatureAdapter(fahrenheitScale);

// console.log(
//   `Температура у Цельсії: ${celsiusScale.display()}. Температура у Фаренгейта: ${celsiusAdapter.getTemperature()}.`
// ); // Виведе 25 та 77

// console.log(
//   `Температура у Фаренгейта: ${fahrenheitScale.display()}. Температура у Цельсії: ${fahrenheitAdapter.getTemperature()}.`
// ); // Виведе 77 та 25

const celsiusScale = new CelsiusScale(25);
const fahrenheitScale = new FahrenheitScale(77);

const celsiusAdapter = new TemperatureAdapter(celsiusScale);
const fahrenheitAdapter = new TemperatureAdapter(fahrenheitScale);

console.log(
  `Температура у Цельсії: ${celsiusScale.display()}. Температура у Фаренгейта: ${celsiusAdapter.convertTo(
    "F"
  )}.`
); // Виведе 25 та 77

console.log(
  `Температура у Фаренгейта: ${fahrenheitScale.display()}. Температура у Цельсії: ${fahrenheitAdapter.convertTo(
    "C"
  )}.`
); // Виведе 77 та 25

// Приклад помилки
try {
  const adapter = new TemperatureAdapter(new CelsiusScale(25));
  const converted = adapter.convertTo("K"); // Помилкова одиниця
  console.log(converted);
} catch (error) {
  console.error(`Сталася помилка: ${error.message}`);
}
