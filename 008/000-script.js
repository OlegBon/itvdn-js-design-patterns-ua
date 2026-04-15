// Використовуючи патерн Template Method розробіть клас "Готування їжі" з методом приготувати,
// який виконує наступні кроки: підготовка інгредієнтів, основне приготування, та подача. Створіть
// підкласи для "Приготування пасти" та "Приготування салату", що реалізують конкретні кроки
// алгоритму. Використовуйте базовий метод, щоб задати спільну структуру алгоритму.

// Template Method

// Базовий клас із шаблонним методом
class Cooking {
  prepare() {
    this.prepareIngredients(); // 1. Підготовка інгредієнтів
    this.cook(); // 2. Основне приготування
    this.serve(); // 3. Подача
  }

  prepareIngredients() {
    throw new Error(
      "Метод prepareIngredients має бути реалізований у підкласі",
    );
  }

  cook() {
    throw new Error("Метод cook має бути реалізований у підкласі");
  }

  serve() {
    throw new Error("Метод serve має бути реалізований у підкласі");
  }
}

class PastaCooking extends Cooking {
  prepareIngredients() {
    console.log("Готуємо інгредієнти для пасти: макарони, соус, спеції...");
  }

  cook() {
    console.log("Варимо пасту та готуємо соус...");
  }

  serve() {
    console.log("Подаємо пасту з соусом та сиром.");
  }
}

class SaladCooking extends Cooking {
  prepareIngredients() {
    console.log("Миємо та нарізаємо овочі для салату...");
  }

  cook() {
    console.log("Змішуємо інгредієнти та додаємо заправку...");
  }

  serve() {
    console.log("Подаємо салат у глибокій тарілці.");
  }
}

// Приклад використання
const pasta = new PastaCooking();
console.log("=== Приготування пасти ===");
pasta.prepare();

const salad = new SaladCooking();
console.log("\n=== Приготування салату ===");
salad.prepare();
