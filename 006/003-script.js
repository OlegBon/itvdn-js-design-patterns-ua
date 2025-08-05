// Реалізуйте шаблон Command для управління музичним плеєром із функціями "Відтворити", "Пауза", "Наступна пісня", "Попередня пісня".
// Створіть класи команд для кожної операції, викликача (Invoker) і отримувача (Receiver).

// Шаблон Command

// Команда - базовий інтерфейс
class Command {
  execute() {
    throw new Error("Метод execute() повинен бути реалізованим у підкласах.");
  }
  undo() {
    throw new Error("Метод undo() повинен бути реалізованим у підкласах.");
  }
}

// Конкретні команди
// Відтворити
class PlayCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.play();
  }
  undo() {
    this.receiver.pause();
  }
}

// Пауза
class PauseCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.pause();
  }
  undo() {
    this.receiver.play();
  }
}

// Наступна пісня
class NextTrackCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.nextTrack();
  }
  undo() {
    this.receiver.previousTrack();
  }
}

// Попередня пісня
class PreviousTrackCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.previousTrack();
  }
  undo() {
    this.receiver.nextTrack();
  }
}

// Ресивер - плеєр музики
class Player {
  constructor() {
    this.isPlaying = false;
    this.trackIndex = 0;
    this.tracks = ["Пісня 1", "Пісня 2", "Пісня 3"];
  }

  play() {
    this.isPlaying = true;
    console.log(`Відтворюємо: ${this.tracks[this.trackIndex]}`);
  }

  pause() {
    this.isPlaying = false;
    console.log("Пауза");
  }

  nextTrack() {
    this.trackIndex = (this.trackIndex + 1) % this.tracks.length;
    console.log(`Наступна: ${this.tracks[this.trackIndex]}`);
  }

  previousTrack() {
    this.trackIndex =
      (this.trackIndex - 1 + this.tracks.length) % this.tracks.length;
    console.log(`Попередня: ${this.tracks[this.trackIndex]}`);
  }
}

// Класс для використання команд
class Invoker {
  constructor() {
    this.commands = []; // масив команд
    this.history = []; // масив для зберігання виконаних команд
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommand(index) {
    const command = this.commands[index];
    command.execute();
    this.history.push(command); // зберігаємо виконану команду
  }

  undoLast() {
    const command = this.history.pop(); // беремо останню
    if (command) {
      command.undo(); // відкочуємо
    }
  }
}

// Приклад використання
const player = new Player();
const invoker = new Invoker();

console.log("Додаємо команди до виконувача.");
// Додаємо команди
invoker.addCommand(new PlayCommand(player)); // [0]
invoker.addCommand(new NextTrackCommand(player)); // [1]
invoker.addCommand(new PauseCommand(player)); // [2]

console.log("\nВиконуємо команди:");
// Виконуємо декілька команд
invoker.executeCommand(0); // Відтворити пісню
invoker.executeCommand(1); // Наступна пісня
invoker.executeCommand(2); // Пауза

console.log("\nВідкочуємо останню команду:");
// Відкочуємо останню команду
invoker.undoLast(); // Відтворити (undo паузи)
invoker.undoLast(); // Попередня пісня (undo наступного треку)
invoker.undoLast(); // Пауза (undo відтворення)
