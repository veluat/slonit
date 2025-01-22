// Функция делает первую букву строки заглавной
function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
// Пример использования
console.log(capitalizeFirstLetter("my function")); // Вывод: "My function"
console.log(capitalizeFirstLetter("")); // Вывод: ""



// Метод обрезает строку до указанной длины, добавляет троеточие, если строка длиннее
function truncateStringWithEllipsis(str, limit) {
  if (str.length <= limit) return str;

  const truncated = str.slice(0, limit);
  const lastSpaceIndex = Math.max(truncated.lastIndexOf(" "), truncated.lastIndexOf(","),
    truncated.lastIndexOf("."), truncated.lastIndexOf("!"),
    truncated.lastIndexOf("?"), truncated.lastIndexOf(":"),
    truncated.lastIndexOf(";"));

  if (lastSpaceIndex > 0) {
    return truncated.slice(0, lastSpaceIndex) + "...";
  }

  return truncated + "...";
}
// Пример использования
console.log(truncateStringWithEllipsis("Очень длинная строка, намного длиннее допустимого.", 40));
// Вывод: "Очень длинная строка, намного длиннее,..."
console.log(truncateStringWithEllipsis("Короткая строка.", 40));
// Вывод: "Короткая строка."



// Функция проверяет, является ли одна строка подстрокой другой
function isSubstring(str1, str2) {
  return str1.includes(str2) || str2.includes(str1);
}
// Пример использования
console.log(isSubstring("hello function", "function")); // Вывод: true
console.log(isSubstring("hello", "goodbye")); // Вывод: false
console.log(isSubstring("abc", "abcdef")); // Вывод: true