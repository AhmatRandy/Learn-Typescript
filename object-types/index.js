// interface Person {
//   name: string;
//   age: number;
// }
var greet = function (person) { return "hello ".concat(person === null || person === void 0 ? void 0 : person.name); };
console.log(greet({ name: "rand", age: 2 }));
function draw(circle) {
    console.log("Color was ".concat(circle.color));
    console.log("Radius was ".concat(circle.radius));
}
draw({ color: "red", radius: 90 });
