// Реалізуйте ієрархію класів для фігур (наприклад, Коло, Прямокутник) і ієрархію рендерерів (наприклад, SVGRenderer, CanvasRenderer).
// Використайте шаблон Bridge, щоб забезпечити динамічну зміну рендерера для кожної фігури.

// Шаблон Bridge

// Абстракція
class Figure {
  constructor(renderer) {
    this.renderer = renderer;
  }

  draw() {
    this.renderer.draw();
  }
}

// Реалізація 1 (коло)
class Circle extends Figure {
  constructor(renderer) {
    super(renderer);
  }

  draw() {
    this.renderer.drawCircle();
  }
}

// Реалізація 2 (прямокутник)
class Rectangle extends Figure {
  constructor(renderer) {
    super(renderer);
  }

  draw() {
    this.renderer.drawRectangle();
  }
}

// Інтерфейс рендерера - абстракція
class Renderer {
  drawCircle() {
    throw new Error("drawCircle() not implemented");
  }

  drawRectangle() {
    throw new Error("drawRectangle() not implemented");
  }
}

// Реалізація рендерера SVG
class SVGRenderer extends Renderer {
  drawCircle() {
    console.log("Drawing a circle in SVG format.");
  }

  drawRectangle() {
    console.log("Drawing a rectangle in SVG format.");
  }
}

// Реалізація рендерера Canvas
class CanvasRenderer extends Renderer {
  drawCircle() {
    console.log("Drawing a circle in Canvas format.");
  }

  drawRectangle() {
    console.log("Drawing a rectangle in Canvas format.");
  }
}

// Приклад використання
const circle = new Circle(new SVGRenderer());
circle.draw(); // Виведе: Drawing a circle in SVG format.

const rectangle = new Rectangle(new CanvasRenderer());
rectangle.draw(); // Виведе: Drawing a rectangle in Canvas format.

const circle2 = new Circle(new CanvasRenderer());
circle2.draw(); // Виведе: Drawing a circle in Canvas format.

console.log("\n----------------------\nПеревірка інтерфейсу рендерера:");

const svgRenderer = new SVGRenderer();
const canvasRenderer = new CanvasRenderer();

const circleSvg = new Circle(svgRenderer);
circleSvg.draw(); // Виведе: Drawing a circle in SVG format.

const rectangleCanvas = new Rectangle(canvasRenderer);
rectangleCanvas.draw(); // Виведе: Drawing a rectangle in Canvas format.

const circleCanvas = new Circle(canvasRenderer);
circleCanvas.draw(); // Виведе: Drawing a circle in Canvas format.

console.log("\nСпроба створити фігуру з абстрактним рендерером:");
const faultyRenderer = new Renderer(); // базовий клас, без реалізації

try {
  const testCircle = new Circle(faultyRenderer);
  testCircle.draw(); // Генерує помилку drawCircle() not implemented
} catch (error) {
  console.error("Помилка рендерингу:", error.message);
}
