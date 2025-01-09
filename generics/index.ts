function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));
console.log(getProperty(x, "m"));

console.log(firstElement([1, 2, "awda"]));
