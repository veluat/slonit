function createRandomGenerator(min, max) {
  return function() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

// Пример использования
const randomNumberGenerator = createRandomGenerator(1, 10);
console.log(randomNumberGenerator()); // Случайное число от 1 до 10
console.log(randomNumberGenerator()); // Случайное число от 1 до 10