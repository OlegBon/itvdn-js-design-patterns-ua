// Створіть клас, який буде генерувати способи доставки: наземну, морську або повітряну.
// Визначте базовий клас Logistics і дочірні класи TruckLogistics, ShipLogistics та AirLogistics,
// кожен з яких перевизначає метод createTransport.

class Logistics {
  constructor(transport) {
    this.transport = transport;
  }

  createTransport() {
    return this.transport;
  }
}

class TruckLogistics extends Logistics {
  constructor() {
    super("Наземна доставка");
  }
}

class ShipLogistics extends Logistics {
  constructor() {
    super("Морська доставка");
  }
}

class AirLogistics extends Logistics {
  constructor() {
    super("Повітряна доставка");
  }
}

// Приклад використання
const truckLogistics = new TruckLogistics();
console.log(truckLogistics.createTransport()); // Виведе: Наземна доставка

const shipLogistics = new ShipLogistics();
console.log(shipLogistics.createTransport()); // Виведе: Морська доставка

const airLogistics = new AirLogistics();
console.log(airLogistics.createTransport()); // Виведе: Повітряна доставка
