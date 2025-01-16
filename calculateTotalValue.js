function calculateTotalValue(purchaseValues) {
  let totalValue = 0;
  purchaseValues.forEach(value => {
    totalValue += value;
  });
  return totalValue;
}

let topThreePurchases = [10000, 20000, 30000];
console.log(calculateTotalValue(topThreePurchases));