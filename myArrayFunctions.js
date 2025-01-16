// mySlice - аналог метода arr.slice([start], [end])
function mySlice(arr, start = 0, end = arr.length) {
  const result = [];
  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

// myIndexOf - аналог метода arr.indexOf(item, from)
function myIndexOf(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

// myIncludes - аналог метода arr.includes(item, from)
function myIncludes(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

// Примеры использования
const array = [1, 2, 3, 4, 5];

console.log(mySlice(array, 1, 4)); // [2, 3, 4]
console.log(myIndexOf(array, 3)); // 2
console.log(myIncludes(array, 4)); // true
console.log(myIncludes(array, 6)); // false