// Напишіть програму для розрахунку заробітної плати працівників різних типів (погодинна оплата,
// ставка, бонуси). Реалізуйте класи працівників. Використайте патерн Visitor для обчислення
// заробітної плати залежно від типу працівника.

// Шаблон Visitor

// Базовий клас для працівника
class Employee {
  accept(visitor) {
    throw new Error("Метод accept має бути реалізований у підкласі");
  }
}

// Підклас для працівника з погодинною оплатою
class HourlyEmployee extends Employee {
  constructor(name, hourlyRate, hoursWorked) {
    super();
    this.name = name;
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  accept(visitor) {
    return visitor.visitHourlyEmployee(this);
  }
}

// Підклас для працівника зі ставкою
class SalariedEmployee extends Employee {
  constructor(name, monthlySalary) {
    super();
    this.name = name;
    this.monthlySalary = monthlySalary;
  }

  accept(visitor) {
    return visitor.visitSalariedEmployee(this);
  }
}

// Підклас для працівника з бонусами
class BonusEmployee extends Employee {
  constructor(name, baseSalary, bonus) {
    super();
    this.name = name;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
  }

  accept(visitor) {
    return visitor.visitBonusEmployee(this);
  }
}

// Клас для розрахунку заробітної плати
// Відвідувач, який реалізує логіку розрахунку заробітної плати для різних типів працівників
class SalaryCalculator {
  visitHourlyEmployee(employee) {
    return employee.hourlyRate * employee.hoursWorked;
  }

  visitSalariedEmployee(employee) {
    return employee.monthlySalary;
  }

  visitBonusEmployee(employee) {
    return employee.baseSalary + employee.bonus;
  }
}

// Приклад використання
const employees = [
  new HourlyEmployee("Олег", 15, 160),
  new SalariedEmployee("Марія", 3000),
  new BonusEmployee("Іван", 2500, 700),
];

const calculator = new SalaryCalculator();

employees.forEach((emp) => {
  const salary = emp.accept(calculator);
  console.log(`${emp.name}: зарплата = ${salary}$`);
});
