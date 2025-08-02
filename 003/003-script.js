// Реалізуйте клас Animal, який містить властивості: ім'я, вид, рід, клас, вік, вага, забарвлення і стать.
// Реалізуйте метод клонування, який створює копію існуючої тварини з цими властивостями.

// Базовий класс, який може бути клонований
class Animal {
  constructor(
    nameAnimal,
    typeAnimal,
    familyAnimal,
    classAnimal,
    ageAnimal,
    weightAnimal,
    colorAnimal,
    genderAnimal
  ) {
    this.nameAnimal = nameAnimal;
    this.typeAnimal = typeAnimal;
    this.familyAnimal = familyAnimal;
    this.classAnimal = classAnimal;
    this.ageAnimal = ageAnimal;
    this.weightAnimal = weightAnimal;
    this.colorAnimal = colorAnimal;
    this.genderAnimal = genderAnimal;
  }

  clone() {
    return new Animal(
      this.nameAnimal,
      this.typeAnimal,
      this.familyAnimal,
      this.classAnimal,
      this.ageAnimal,
      this.weightAnimal,
      this.colorAnimal,
      this.genderAnimal
    );
  }
}

// Приклад використання
const animal = new Animal(
  "Buster",
  "Dog",
  "Canine",
  "Mammal",
  5,
  20,
  "Brown",
  "Male"
);

// Клонуємо тварину
const clonedAnimal = animal.clone();
// Змінюємо властивості клону
clonedAnimal.nameAnimal = "Buster Jr.";

// Перевірка тварин
console.log("Original Animal:");
console.log(animal);
console.log("Cloned Animal:");
console.log(clonedAnimal);
