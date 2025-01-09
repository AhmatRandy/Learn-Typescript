function firstElement(arr) {
    return arr[0];
}
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4, m: 3 };
console.log(getProperty(x, "a"));
console.log(getProperty(x, "m"));
console.log(firstElement([1, 2, "awda"]));
