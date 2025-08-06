// Напишіть клас AirportControlTower (Mediator), який координуватиме дії між літаками,
// злітно-посадковими смугами та службами обслуговування. Кожен літак (клас Airplane)
// повідомляє вежу про свій статус: готовність до зльоту, запит на посадку,
// технічне обслуговування тощо. Вежа забезпечує координацію,
// наприклад, виділяючи злітно-посадкову смугу або інформуючи літак про затримки.

// Шаблон Mediator

// Клас Mediator (Посередник) - відповідає за координування дій між класами-компонентами
class AirportControlTower {
  constructor() {
    this.airplanes = [];
    this.supportServices = [];
  }

  // Реєстрація класів-компонентів
  registerAirplane(airplane) {
    this.airplanes.push(airplane);
    airplane.setAirplaneControl(this);
  }

  // Реєстрація класів-компонентів
  registerSupportService(service) {
    this.supportServices.push(service);
    service.setSupportServiceControl(this);
  }

  // Координування дій між класами-компонентами
  notify(message, fromUser, toUser = null) {
    const allParticipants = [...this.airplanes, ...this.supportServices];
    if (toUser) {
      toUser.receiveMessage(message, fromUser);
    } else {
      allParticipants.forEach((user) => {
        if (user !== fromUser) {
          user.receiveMessage(message, fromUser);
        }
      });
    }
  }
}

// Класи-компоненти (Класи, які мають залежності на Mediator)
class Airplane {
  constructor(name) {
    this.name = name;
    this.AirportControlTower = null;
  }

  // Встановлення посилання на AirportControlTower (Посередник, Mediator)
  setAirplaneControl(coordinator) {
    this.AirportControlTower = coordinator;
  }

  // Надсилання повідомлення
  sendMessage(message, toUser = null) {
    this.AirportControlTower.notify(message, this, toUser);
  }

  // Отримання повідомлення
  receiveMessage(message, fromUser) {
    console.log(
      `${this.name} отримав повідомлення: ${message} від ${fromUser.name}`
    );
  }
}

class SupportService {
  constructor(name) {
    this.name = name;
    this.AirportControlTower = null;
  }

  // Встановлення посилання на AirportControlTower (Посередник, Mediator)
  setSupportServiceControl(coordinator) {
    this.AirportControlTower = coordinator;
  }

  // Надсилання повідомлення
  sendMessage(message, toUser = null) {
    this.AirportControlTower.notify(message, this, toUser);
  }

  // Отримання повідомлення
  receiveMessage(message, fromUser) {
    console.log(
      `${this.name} отримав повідомлення: ${message} від ${fromUser.name}`
    );
  }
}

// Приклад використання
const airportControlTower = new AirportControlTower();
const airplane1 = new Airplane("Літак 1");
const airplane2 = new Airplane("Літак 2");
const supportService1 = new SupportService("Служба обслуговування 1");
const supportService2 = new SupportService("Служба обслуговування 2");

airportControlTower.registerAirplane(airplane1);
airportControlTower.registerAirplane(airplane2);
airportControlTower.registerSupportService(supportService1);
airportControlTower.registerSupportService(supportService2);

airplane1.sendMessage("Готовність до зльоту");
airplane2.sendMessage("Запит на посадку");
supportService1.sendMessage("Технічне обслуговування");
