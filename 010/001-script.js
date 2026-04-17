// Створіть кілька методів, що містять дубльований код. Об’єднайте дубльований код в окремий
// метод.

// Bloaters → Duplicate Code

// Поганий приклад — дублювання коду
// Три методи повторюють один і той самий фрагмент
// class ReportGenerator {
//   generateDailyReport(data) {
//     console.log("=== Report Start ===");
//     console.log("Date:", new Date().toLocaleDateString());
//     console.log("Data:", data);
//     console.log("=== Report End ===");
//   }

//   generateWeeklyReport(data) {
//     console.log("=== Report Start ===");
//     console.log("Date:", new Date().toLocaleDateString());
//     console.log("Data:", data);
//     console.log("=== Report End ===");
//   }

//   generateMonthlyReport(data) {
//     console.log("=== Report Start ===");
//     console.log("Date:", new Date().toLocaleDateString());
//     console.log("Data:", data);
//     console.log("=== Report End ===");
//   }
// }

// const gen = new ReportGenerator();
// gen.generateDailyReport("Daily stats");

// Правильний варіант - дублювання винесено в окремий метод
// Винесемо спільну логіку в приватний метод _printReport()
class ReportGenerator {
  _printReport(data) {
    console.log("=== Report Start ===");
    console.log("Date:", new Date().toLocaleDateString());
    console.log("Data:", data);
    console.log("=== Report End ===");
  }

  generateDailyReport(data) {
    this._printReport(data);
  }

  generateWeeklyReport(data) {
    this._printReport(data);
  }

  generateMonthlyReport(data) {
    this._printReport(data);
  }
}

const gen = new ReportGenerator();
gen.generateDailyReport("Daily stats");
