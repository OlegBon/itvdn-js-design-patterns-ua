// Створіть програму, яка обчислює площу трикутника, використовуючи "магічні числа". Потім
// замініть ці числа на константи із зрозумілими назвами.

// Магічні числа
// Поганий приклад з магічними числами
// Незрозуміло, що таке 0.5 — звідки воно взялося?
// Чому основа = 10? Чому висота = 20?
// Якщо формула зміниться — доведеться шукати числа по всьому коду.
// Порушення принципу DRY та читабельності.
function calculateTriangleArea() {
  const base = 10; // магічне число
  const height = 20; // магічне число
  const area = 0.5 * base * height; // магічне число 0.5
  console.log("Площа трикутника:", area);
}

calculateTriangleArea();

// Правильний варіант з константами
const TRIANGLE_COEFFICIENT = 0.5;
const BASE = 10;
const HEIGHT = 20;

function calculateTriangleAreaTrue() {
  const area = TRIANGLE_COEFFICIENT * BASE * HEIGHT;
  console.log("Площа трикутника:", area);
}

calculateTriangleAreaTrue();
