// Створіть два класи, які сильно зв’язані. Переробіть код так, щоб між цими класами було слабке
// зв’язування за допомогою інтерфейсу.

// Couplers

// Поганий приклад - сильне зв’язування
// NotificationService жорстко прив’язаний до EmailSender.
// Неможливо замінити спосіб відправки без зміни NotificationService.
// Порушення DIP (Dependency Inversion Principle).
// Порушення OCP (Open/Closed Principle) — клас не розширюється, а переписується.
// class EmailSender {
//   sendEmail(message) {
//     console.log("Sending EMAIL:", message);
//   }
// }

// class NotificationService {
//   constructor() {
//     this.emailSender = new EmailSender(); // ЖОРСТКА залежність
//   }

//   notify(message) {
//     this.emailSender.sendEmail(message);
//   }
// }

// const service = new NotificationService();
// service.notify("Hello, Oleh!");

// Правильний код (слабке зв’язування через інтерфейс)
// Вводимо абстракцію — інтерфейс MessageSender.
// EmailSender реалізує цей інтерфейс,
// NotificationService залежить від абстракції, а не від конкретного класу.

class MessageSender {
  send(message) {
    throw new Error("Метод send() має бути реалізований");
  }
}

class EmailSender extends MessageSender {
  send(message) {
    console.log("Sending EMAIL:", message);
  }
}

class SmsSender extends MessageSender {
  send(message) {
    console.log("Sending SMS:", message);
  }
}

class NotificationService {
  constructor(sender) {
    this.sender = sender; // слабке зв’язування
  }

  notify(message) {
    this.sender.send(message);
  }
}

// Приклад використання:
const emailSender = new EmailSender();
const smsSender = new SmsSender();

const emailService = new NotificationService(emailSender);
const smsService = new NotificationService(smsSender);

emailService.notify("Hello via Email!");
smsService.notify("Hello via SMS!");
