// Створіть об’єкт UserProfile, який представляє дані профілю користувача.
// Об’єкт повинен мати дві властивості: ім’я (name) та електронну пошту (email).
// Додайте два методи: updateProfile для зміни значень імені та електронної пошти та getProfile для відображення
// поточних значень цих властивостей. Переконайтеся, що існує лише один об’єкт UserProfile.

class UserProfile {
  constructor() {
    if (UserProfile.instance) {
      return UserProfile.instance;
    }

    this.name = "Default Name";
    this.email = "Default Email";
    UserProfile.instance = this;

    this.updateProfile = (name, email) => {
      this.name = name;
      this.email = email;
    };

    this.getProfile = () => {
      return {
        name: this.name,
        email: this.email,
      };
    };
  }
}

// Приклад використання
const userProfile1 = new UserProfile();
userProfile1.updateProfile("John Doe", "john.doe@example.com");
console.log(
  `userProfile1.getProfile(): ${JSON.stringify(userProfile1.getProfile())}`
); // Виведе: { name: 'John Doe', email: 'john.doe@example.com' }

const userProfile2 = new UserProfile();
console.log(`userProfile1 === userProfile2: ${userProfile1 === userProfile2}`); // Виведе: true, оскільки це один і тий сам екземпляр

console.log(
  `userProfile2.getProfile(): ${JSON.stringify(userProfile2.getProfile())}`
); // Виведе: { name: 'John Doe', email: 'john.doe@example.com' }
