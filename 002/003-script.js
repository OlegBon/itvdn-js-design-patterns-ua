// Реалізуйте систему, яка створює різні типи меблів: столи, стільці та дивани.
// Створіть Abstract Factory для сучасного і класичного стилів меблів.

// Базові класи для меблів
class Table {
  render() {
    throw new Error("Метод render повинен бути реалізований");
  }
}

class Chair {
  render() {
    throw new Error("Метод render повинен бути реалізований");
  }
}

class Sofa {
  render() {
    throw new Error("Метод render повинен бути реалізований");
  }
}

// Конкретні класи меблів для сучасного стилю
class ModernTable extends Table {
  render() {
    return "Стол модерн";
  }
}

class ModernChair extends Chair {
  render() {
    return "Стілце модерн";
  }
}

class ModernSofa extends Sofa {
  render() {
    return "Диван модерн";
  }
}

// Конкретні класи меблів для класичного стилю
class ClassicTable extends Table {
  render() {
    return "Стол класичний";
  }
}

class ClassicChair extends Chair {
  render() {
    return "Стілце класичне";
  }
}

class ClassicSofa extends Sofa {
  render() {
    return "Диван класичний";
  }
}

// Абстрактна фабрика для створення меблів
class FurnitureFactory {
  createTable() {
    throw new Error("Метод createTable повинен бути реалізований");
  }

  createChair() {
    throw new Error("Метод createChair повинен бути реалізований");
  }

  createSofa() {
    throw new Error("Метод createSofa повинен бути реалізований");
  }
}

// Фабрика для створення меблів для сучасного стилю
class ModernFurnitureFactory extends FurnitureFactory {
  createTable() {
    return new ModernTable();
  }

  createChair() {
    return new ModernChair();
  }

  createSofa() {
    return new ModernSofa();
  }
}

// Фабрика для створення меблів для класичного стилю
class ClassicFurnitureFactory extends FurnitureFactory {
  createTable() {
    return new ClassicTable();
  }

  createChair() {
    return new ClassicChair();
  }

  createSofa() {
    return new ClassicSofa();
  }
}

// Приклад використання
function renderFurniture(factory) {
  const table = factory.createTable();
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  console.log(table.render()); // Виведе: Стол модерн
  console.log(chair.render()); // Виведе: Стілце модерн
  console.log(sofa.render()); // Виведе: Диван модерн
}

const modernFactory = new ModernFurnitureFactory();
renderFurniture(modernFactory); // Виведе: Стол модерн, Стілце модерн, Диван модерн

const classicFactory = new ClassicFurnitureFactory();
renderFurniture(classicFactory); // Виведе: Стол класичний, Стілце класичне, Диван класичний
