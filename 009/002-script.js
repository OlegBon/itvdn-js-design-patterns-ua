// Створіть клас, що містить кілька методів із різними функціями (наприклад, обробка даних,
// відправлення запитів до API, логування). Виконайте рефакторинг, щоб виділити окремі класи чи
// модулі для кожної зони відповідальності.

// God Object

// Поганий приклад — God Object
// Один клас робить усе: обробляє дані, відправляє API‑запити, логування, валідацію, кешування.
// Клас робить 5 різних задач.
// Порушення Single Responsibility Principle.
// Неможливо тестувати окремі частини.
// Неможливо розширювати.
// Неможливо замінити логер, API‑клієнт чи кеш.
// class AppManager {
//   constructor() {
//     this.cache = {};
//     this.logs = [];
//   }

//   processData(data) {
//     const cleaned = data.trim().toLowerCase();
//     this.logs.push("Data processed");
//     return cleaned;
//   }

//   sendRequest(url, payload) {
//     this.logs.push("Sending request to " + url);
//     console.log("POST", url, payload);
//     return { status: 200 };
//   }

//   validate(data) {
//     this.logs.push("Validating data");
//     return data.length > 0;
//   }

//   saveToCache(key, value) {
//     this.cache[key] = value;
//     this.logs.push("Saved to cache");
//   }

//   getLogs() {
//     return this.logs;
//   }
// }

// const app = new AppManager();
// app.processData(" Hello ");
// app.sendRequest("/api", { a: 1 });
// console.log(app.getLogs());

// Рефакторинг у модульну структуру
// DataProcessor - обробка даних
// ApiClient - робота з API
// Logger - логування
// Cache - кешування
// AppService - координатор (композиція)

class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push({ message, time: new Date() });
  }

  getLogs() {
    return this.logs;
  }
}

class DataProcessor {
  constructor(logger) {
    this.logger = logger;
  }

  process(data) {
    this.logger.log("Processing data");
    return data.trim().toLowerCase();
  }

  validate(data) {
    this.logger.log("Validating data");
    return data.length > 0;
  }
}

class ApiClient {
  constructor(logger) {
    this.logger = logger;
  }

  post(url, payload) {
    this.logger.log(`POST request to ${url}`);
    console.log("POST", url, payload);
    return { status: 200 };
  }
}

class Cache {
  constructor(logger) {
    this.logger = logger;
    this.storage = {};
  }

  set(key, value) {
    this.logger.log(`Cache set: ${key}`);
    this.storage[key] = value;
  }

  get(key) {
    return this.storage[key];
  }
}

class AppService {
  constructor() {
    this.logger = new Logger();
    this.processor = new DataProcessor(this.logger);
    this.api = new ApiClient(this.logger);
    this.cache = new Cache(this.logger);
  }

  handle(data) {
    if (!this.processor.validate(data)) {
      throw new Error("Invalid data");
    }

    const processed = this.processor.process(data);
    this.cache.set("lastData", processed);
    this.api.post("/api", { processed });

    return this.logger.getLogs();
  }
}

// Приклад використання
const app = new AppService();
const logs = app.handle(" Hello World ");

console.log(logs);
