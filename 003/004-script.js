// Створіть клас CarBuilder, який дозволяє зібрати автомобіль з опціями: марка, рік випуску, тип кузова,
// привід, двигун, колір, коробка передач і додаткові аксесуари.
// Додайте метод для відображення результату у вигляді рядка з усіма обраними параметрами.

// Патерн Builder
// Клас Car представляє об'єкт автомобіля
class Car {
  constructor(
    brand,
    year,
    bodyType,
    drive,
    engine,
    color,
    transmission,
    accessories
  ) {
    this.brand = brand;
    this.year = year;
    this.bodyType = bodyType;
    this.drive = drive;
    this.engine = engine;
    this.color = color;
    this.transmission = transmission;
    this.accessories = accessories;
  }

  // Метод для виведення інформації про автомобіль
  // Аксесуари виводяться через кому. Перетворюємо масив в рядок
  getCarInfo() {
    return `Марка: ${this.brand},\nРік: ${this.year},\nТип кузова: ${
      this.bodyType
    },\nПривід: ${this.drive},\nДвигун: ${this.engine},\nКолір: ${
      this.color
    },\nКоробка передач: ${
      this.transmission
    },\nАксесуари: ${this.accessories.join(", ")}`;
  }
}

// Клас CarBuilder, представляє реалізацію патерну Builder для створення об'єктів Car
class CarBuilder {
  constructor() {
    this.brand = "";
    this.year = null;
    this.bodyType = "";
    this.drive = "";
    this.engine = "";
    this.color = "";
    this.transmission = "";
    this.accessories = [];
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setBodyType(bodyType) {
    this.bodyType = bodyType;
    return this;
  }

  setDrive(drive) {
    this.drive = drive;
    return this;
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setTransmission(transmission) {
    this.transmission = transmission;
    return this;
  }

  setAccessories(accessories) {
    this.accessories = accessories;
    return this;
  }

  build() {
    return new Car(
      this.brand,
      this.year,
      this.bodyType,
      this.drive,
      this.engine,
      this.color,
      this.transmission,
      this.accessories
    );
  }

  // Метод для виведення інформації про автомобіль
  previewInfo() {
    return new Car(
      this.brand,
      this.year,
      this.bodyType,
      this.drive,
      this.engine,
      this.color,
      this.transmission,
      this.accessories
    ).getCarInfo();
  }
}

// Приклад використання
// Створюємо Builder, налаштовуємо авто
const builder = new CarBuilder()
  .setBrand("Toyota")
  .setYear(2022)
  .setBodyType("Седан")
  .setDrive("Передній")
  .setEngine("Гібрид")
  .setColor("Червоний")
  .setTransmission("Автомат")
  .setAccessories(["Парктронік", "ABS", "Круїз-контроль"]);

// Перегляд налаштувань до створення об'єкта
console.log("--- Попередній перегляд конфігурації ---");
console.log(builder.previewInfo());

// Створення фінального об'єкта
const car = builder.build();

// Перевірка створеного об'єкта
console.log("\n--- Створений об'єкт Car ---");
console.log(car);

// Виведення інформації через метод об'єкта Car
console.log("\n--- Інформація про автомобіль ---");
console.log(car.getCarInfo());
