// Напишіть базовий клас Task із методом run().
// Реалізуйте декоратор, який додає до методу логування часу початку та закінчення виконання задачі.

// Шаблон Decorator

// Базовий клас
class Task {
  run() {
    // Реалізація базового методу
    console.log("Виконання задачі");
  }
}

// Декоратор - базовий клас для всіх декораторів
class TaskDecorator {
  constructor(task) {
    this.task = task;
  }

  run() {
    return this.task.run();
  }
}

// Конкретні декоратори
class StartTimeDecorator extends TaskDecorator {
  run() {
    console.log("Початок виконання задачі");
    return super.run();
  }
}

class EndTimeDecorator extends TaskDecorator {
  run() {
    super.run();
    console.log("Закінчення виконання задачі");
  }
}

// Приклад використання
const task = new Task();
const startTimeDecorator = new StartTimeDecorator(task);
const endTimeDecorator = new EndTimeDecorator(startTimeDecorator);
endTimeDecorator.run();

console.log("---\nУсі декоратори одразу:\n---");
const totalTask = new EndTimeDecorator(new StartTimeDecorator(task));
totalTask.run();
