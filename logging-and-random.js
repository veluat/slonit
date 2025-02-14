// Логгер

function createLogger() {
  const logs = [];

  return {
    log(message) {
      logs.push(message);
    },

    getLogs() {
      return logs;
    }
  };
}

const logger = createLogger();
logger.log("Сообщение-1");
logger.log("Сообщение-2");
console.log(logger.getLogs()); // ["Сообщение-1", "Сообщение-1"]


// Генератор случайных чисел из диапазона

function createRandomGenerator(min, max) {
  return function() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

const randomNumberGenerator = createRandomGenerator(1, 10);
console.log(randomNumberGenerator()); // Случайное число от 1 до 10
console.log(randomNumberGenerator()); // Случайное число от 1 до 10


