// Створіть клас BankAccount, який дозволяє знімати гроші.
// Додайте клас Proxy, який перевіряє, чи користувач має право на цю операцію (наприклад, чи є достатньо грошей на рахунку).

// Шаблон Proxy

// Реальний об'єкт
class BankAccount {
  getMoney() {
    return "Знімаємо гроші";
  }
}

// Proxy для реального об'єкта
class BankAccountProxy {
  constructor(account) {
    this.account = account;
    this.cache = null; // Кеш для збереження результатів
  }

  getMoney() {
    if (!this.cache) {
      console.log("Отриманя грошей з рахунку");
      this.cache = this.account.getMoney();
    } else {
      console.log("Отриання грошей з кешу ...)))");
    }
    return this.cache;
  }
}

// Приклад використання
const bankAccount = new BankAccount();
const proxy = new BankAccountProxy(bankAccount);
console.log(proxy.getMoney()); // Знімано гроші
console.log(proxy.getMoney()); // Отриання грошей з кешу
