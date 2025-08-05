// Створіть клас колекції, що представляє список пісень.
// Реалізуйте шаблон Iterator для ітерації по цьому списку, щоб вивести назви пісень.

// Шаблон Iterator

// Колекція пісень
class Playlist {
  constructor(songs) {
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(songName) {
    const index = this.songs.findIndex((s) => s.name === songName);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }

  createIterator() {
    return new PlaylistIterator(this);
  }
}

// Ітератор
class PlaylistIterator {
  constructor(playlist) {
    this.playlist = playlist;
    this.index = 0;
  }

  next() {
    return this.hasNext() ? this.playlist.songs[this.index++].name : null;
  }

  hasNext() {
    return this.index < this.playlist.songs.length;
  }
}

// Приклад використання
const playlist = new Playlist([
  { name: "Song 1", artist: "Artist 1" },
  { name: "Song 2", artist: "Artist 2" },
  { name: "Song 3", artist: "Artist 3" },
]);

// Початкова ітерація
let iterator = playlist.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

// Додаємо нові пісні
playlist.addSong({ name: "Song 4", artist: "Artist 4" });
playlist.addSong({ name: "Song 5", artist: "Artist 5" });

console.log("\nДодали пісні. Оновлений список:");
iterator = playlist.createIterator(); // Створюємо новий ітератор
while (iterator.hasNext()) {
  console.log(iterator.next());
}

// Видаляємо пісню
playlist.removeSong("Song 2"); // Видаляємо пісню по назві - "Song 2"

console.log("\nВидалено пісню. Оновлений список:");
iterator = playlist.createIterator(); // Знову створюємо новий ітератор
while (iterator.hasNext()) {
  console.log(iterator.next());
}
