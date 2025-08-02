// Опишіть клас ComputerBuilder, який створює об'єкт комп'ютера з параметрами: процесор, оперативна пам’ять, материнська плата
// і жорсткий диск. Реалізуйте будівельник, який дозволяє вибірково встановлювати ці параметри.
// Патерн Builder

// Клас Computer представляє об'єкт комп'ютера
class Computer {
  constructor(processor, memory, motherboard, hardDisk) {
    this.processor = processor;
    this.memory = memory;
    this.motherboard = motherboard;
    this.hardDisk = hardDisk;
  }

  setProcessor(processor) {
    this.processor = processor;
    return this;
  }

  setMemory(memory) {
    this.memory = memory;
    return this;
  }

  setMotherboard(motherboard) {
    this.motherboard = motherboard;
    return this;
  }

  setHardDisk(hardDisk) {
    this.hardDisk = hardDisk;
    return this;
  }

  getComputer() {
    return {
      processor: this.processor,
      memory: this.memory,
      motherboard: this.motherboard,
      hardDisk: this.hardDisk,
    };
  }

  getComputerInfo() {
    return `Комп'ютер\nПроцесор: ${this.processor}\nОперативна пам'ять: ${this.memory}\nМатеринська плата: ${this.motherboard}\nЖорсткий диск: ${this.hardDisk}`;
  }
}

// Клас ComputerBuilder представляє будівельник комп'ютера
class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }

  setProcessor(processor) {
    if (
      this.computer.processor !== undefined &&
      this.computer.processor !== ""
    ) {
      console.warn(`Процесор вже встановлено: ${this.computer.processor}`);
    } else {
      this.computer.setProcessor(processor);
      console.log(`Встановлено процесор: ${processor}`);
    }
    return this;
  }

  setMemory(memory) {
    if (this.computer.memory !== undefined && this.computer.memory !== "") {
      console.warn(
        `Оперативна пам'ять вже встановлена: ${this.computer.memory}`
      );
    } else {
      this.computer.setMemory(memory);
      console.log(`Встановлена оперативна пам'ять: ${memory}`);
    }
    return this;
  }

  setMotherboard(motherboard) {
    if (
      this.computer.motherboard !== undefined &&
      this.computer.motherboard !== ""
    ) {
      console.warn(
        `Материнська плата вже встановлена: ${this.computer.motherboard}`
      );
    } else {
      this.computer.setMotherboard(motherboard);
      console.log(`Встановлена материнська плата: ${motherboard}`);
    }
    return this;
  }

  setHardDisk(hardDisk) {
    if (this.computer.hardDisk !== undefined && this.computer.hardDisk !== "") {
      console.warn(`Жорсткий диск вже встановлении: ${this.computer.hardDisk}`);
    } else {
      this.computer.setHardDisk(hardDisk);
      console.log(`Встановлении жорсткий диск: ${hardDisk}`);
    }
    return this;
  }

  buildComputer() {
    return this.computer;
  }

  getInstallStatus() {
    return {
      processor: !!this.computer.processor,
      memory: !!this.computer.memory,
      motherboard: !!this.computer.motherboard,
      hardDisk: !!this.computer.hardDisk,
    };
  }
}

// Приклад використання
const computerBuilder = new ComputerBuilder();
const computer = computerBuilder
  .setProcessor("Intel Core i7")
  .setMemory("16GB")
  .setMotherboard("ASUS ROG")
  .setHardDisk("500GB SSD")
  .buildComputer();

console.log(computer.getComputer());
console.log(computer.getComputerInfo());

console.log("---");

// Приклад для "... вже встановлено."
const computerBuilder2 = new ComputerBuilder();
const computer2 = computerBuilder2
  .setProcessor("Intel Core i7")
  .setMemory("16GB")
  .setMotherboard("ASUS ROG")
  .setHardDisk("500GB SSD")
  .setProcessor("Intel Core i9")
  .buildComputer();

console.log(computer2.getComputer());
console.log(computer2.getComputerInfo());

computerBuilder2.setMemory("32GB"); // Повідомлення: вже встановлена: 16GB

console.log("---");

console.log("Стан встановлення компонентів:");
console.log(computerBuilder2.getInstallStatus());
