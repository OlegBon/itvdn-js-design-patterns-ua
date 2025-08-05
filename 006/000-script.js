// Реалізуйте систему логування за допомогою Chain of Responsibility.
// Створіть три рівні логів: info, warn, error. Кожен рівень повинен обробляти лише відповідні повідомлення.

// Шаблон Chain of Responsibility

// Базовий класс обробника
class LogHandler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }
  handleLog(log) {
    if (this.nextHandler) {
      return this.nextHandler.handleLog(log);
    }
    console.log("Лог не обробляється.");
  }
}

// Конкретні класи обробників
class InfoLogHandler extends LogHandler {
  handleLog(log) {
    if (log.level === "info") {
      console.log(`Info: ${log.message}`);
    } else {
      super.handleLog(log);
    }
  }
}

class WarnLogHandler extends LogHandler {
  handleLog(log) {
    if (log.level === "warn") {
      console.log(`Warn: ${log.message}`);
    } else {
      super.handleLog(log);
    }
  }
}

class ErrorLogHandler extends LogHandler {
  handleLog(log) {
    if (log.level === "error") {
      console.log(`Error: ${log.message}`);
    } else {
      super.handleLog(log);
    }
  }
}

// Приклад використання
const infoHandler = new InfoLogHandler();
const warnHandler = new WarnLogHandler();
const errorHandler = new ErrorLogHandler();

// Побудуємо ланцюг обробників
infoHandler.setNext(warnHandler).setNext(errorHandler);

// Логи
const logs = [
  { level: "info", message: "Приклад інформаційного логу" },
  { level: "warn", message: "Приклад предупреждення" },
  { level: "error", message: "Приклад помилки" },
  { level: "other", message: "Приклад іншого логу" },
  { level: "info", message: "Інший інформаційний лог" },
  { level: "warn", message: "Інший предупреждення" },
  { level: "other", message: "Приклад іншого логу" },
  { level: "other", message: "Приклад іншого логу" },
];

// Обробка логів
for (const log of logs) {
  infoHandler.handleLog(log);
}
