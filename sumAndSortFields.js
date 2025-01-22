// Метод, который возвращает сумму всех числовых полей объекта
function sumOfNumericFields(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

//Метод, который возвращает массив названий числовых полей
function sortedNumericFieldNames(obj) {
  const numericFields = [];
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      numericFields.push({ name: key, value: obj[key] });
    }
  }

  numericFields.sort((a, b) => b.value - a.value);

  return numericFields.map(field => field.name);
}

// Пример использования
const exampleObject = { name: "Vasya", friends: 5, likes: 19, projects: 7 };

console.log(sumOfNumericFields(exampleObject)); // Вывод: 31
console.log(sortedNumericFieldNames(exampleObject)); // Вывод: ['likes', 'projects', 'friends']