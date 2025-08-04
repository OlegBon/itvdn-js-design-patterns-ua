// Напишіть клас Facade, який об'єднує функції для управління музичним плеєром: відтворення, пауза, перемикання треку.
// У внутрішній реалізації використовуйте кілька окремих класів, які відповідають за аудіо, плейлисти та обробку кнопок.

// Шаблон Facade

// Окремі класи, які відповідають за аудіо, плейлисти та обробку кнопок
// Для управління музичним плеєром: відтворення, пауза, перемикання треку

// Відтворення
class Play {
  play() {
    console.log("Відтворення треку");
  }
}

// Пауза
class Pause {
  pause() {
    console.log("Пауза");
  }
}

// Перемикання треку
class ChangeTrack {
  change(track) {
    console.log(`Пропускаємо трек "${track.name}"`);
  }
}

// Клас треку
class Track {
  constructor(name) {
    this.name = name;
  }
}

// Клас плейлисти
class Playlist {
  constructor() {
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  removeTrack(track) {
    this.tracks = this.tracks.filter((t) => t !== track);
  }

  getTracks() {
    return this.tracks;
  }
}

// Фасад для управління музичним плеєром
class PlayerFacade {
  constructor() {
    this.play = new Play();
    this.pause = new Pause();
    this.trackChange = new ChangeTrack();
    this.playlist = new Playlist();
  }

  playTrack(track) {
    this.play.play();
    console.log(`Трек "${track.name}" відтворюється...`);
  }

  pauseTrack() {
    this.pause.pause();
  }

  changeTrack(track) {
    this.trackChange.change(track);
    console.log(`Трек "${track.name}" змінюється...`);
  }

  addTrack(track) {
    this.playlist.addTrack(track);
  }

  removeTrack(track) {
    this.playlist.removeTrack(track);
  }

  getTracks() {
    return this.playlist.getTracks().map((track) => track.name);
  }
}

// Приклад використання
const facade = new PlayerFacade();

const track1 = new Track("Track 1");
const track2 = new Track("Track 2");

facade.addTrack(track1);
facade.addTrack(track2);

facade.playTrack(track1);
facade.pauseTrack();
facade.changeTrack(track2);

const tracks = facade.getTracks();
console.log(`Список треків: ${tracks.join(", ")}`);
