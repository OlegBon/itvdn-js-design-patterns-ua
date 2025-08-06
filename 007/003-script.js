// Реалізуйте клас StockMarket як суб'єкт, який повідомляє інвесторам (Investor) про зміну вартості акцій.
// Переконайтеся, що інвестори можуть підписуватися на певні акції та отримувати оновлення тільки про них.
// При виконанні завдання використайте патерн Observer.

// Шаблон Observer

// Суб'єкт (Subject) - це об'єкт, який повідомляє зміни у себе відповідальним об'єктам (Observer).
class StockMarket {
  constructor() {
    this.stocks = {}; // { "AAPL": price, "TSLA": price }
    this.observers = {}; // { "AAPL": [Investor1], "TSLA": [Investor2] }
  }

  // Методи для підписки
  subscribe(stockName, observer) {
    if (!this.observers[stockName]) {
      this.observers[stockName] = [];
    }
    if (!this.observers[stockName].includes(observer)) {
      this.observers[stockName].push(observer);
      return true;
    } else {
      console.log(`${observer.name} вже підписаний на ${stockName}`);
      return false;
    }
  }

  // Метод для відписки
  unsubscribe(stockName, observer) {
    this.observers[stockName] = this.observers[stockName].filter(
      (o) => o !== observer
    );
  }

  // Метод для отримання акцій, на які підписаний інвестор
  getSubscriptions(observer) {
    const subscribedStocks = [];
    for (const stock in this.observers) {
      if (this.observers[stock].includes(observer)) {
        subscribedStocks.push(stock);
      }
    }
    return `${observer.name} підписаний на акції: ${subscribedStocks.join(
      ", "
    )}`;
  }

  // Конкретні акції
  updateStockPrice(stockName, newPrice) {
    this.stocks[stockName] = newPrice;
    if (this.observers[stockName]) {
      this.observers[stockName].forEach((observer) =>
        observer.update(stockName, newPrice)
      );
    }
  }
}

// Отримувач (Observer) - це об'єкт, який отримує повідомлення про зміни у суб'єкті.
class Investor {
  constructor(name) {
    this.name = name;
  }

  update(stockName, price) {
    console.log(`${this.name} отримав оновлення: ${stockName} = ${price}`);
  }
}

// Приклад використання
const market = new StockMarket();
const investor1 = new Investor("Інвестор 1");
const investor2 = new Investor("Інвестор 2");

market.subscribe("AAPL", investor1);
market.subscribe("TSLA", investor2);

market.updateStockPrice("AAPL", 150);
market.updateStockPrice("TSLA", 720);
market.updateStockPrice("GOOG", 2800); // ніхто не підписаний — тиша

// Зміни вартості акцій
market.updateStockPrice("AAPL", 160);
market.updateStockPrice("TSLA", 740);

// Ще раз підпишимося на акції
market.subscribe("AAPL", investor1); // вже підписаний

// На які акції підписаний інвестор?
console.log(market.getSubscriptions(investor1)); // ["AAPL"]
console.log(market.getSubscriptions(investor2)); // ["TSLA"]

market.subscribe("APPA", investor1);

console.log(market.getSubscriptions(investor1)); // ["AAPL", "APPA"]
console.log(market.getSubscriptions(investor2)); // ["TSLA"]
