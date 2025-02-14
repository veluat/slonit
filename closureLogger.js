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

// Пример использования
const logger = createLogger();
logger.log("Сообщение-1");
logger.log("Сообщение-2");
console.log(logger.getLogs()); // ["Сообщение-1", "Сообщение-1"]


