// Реалізуйте клас SessionManager.
// Цей клас повинен мати властивість sessionId і два методи:
// setSessionId для зберігання ідентифікатора поточної сесії та getSessionId для його отримання.
// Переконайтеся, що можна створити лише один екземпляр SessionManager.

class SessionManager {
  constructor() {
    // Перевірка на наявність вже існуючого екземпляра
    if (SessionManager.instance) {
      return SessionManager.instance;
    }
    this.sessionId = null; // Ініціалізація властивості sessionId
    SessionManager.instance = this; // Збереження екземпляра в статичній властивості
  }

  // Метод для встановлення ідентифікатора сесії
  setSessionId(id) {
    this.sessionId = id;
  }

  // Метод для отримання ідентифікатора сесії
  getSessionId() {
    return this.sessionId;
  }
}

// Приклад використання
const session1 = new SessionManager();
const session2 = new SessionManager();

session1.setSessionId("abc123");
console.log(`session1.getSessionId(): ${session1.getSessionId()}`); // Виведе: 'abc123'
console.log(`session1 === session2: ${session1 === session2}`); // Виведе: true, оскільки це один і тий сам екземпляр
console.log(`session2.getSessionId(): ${session2.getSessionId()}`); // Виведе: 'abc123', оскільки session1 і session2 це один і той самий екземпляр
