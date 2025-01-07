var Greet = function (colors) { return "hello ".concat(colors.color); };
function Draw(circle) {
    console.log("Color was ".concat(circle.radius));
    console.log("Radius was ".concat(circle.radius));
}
console.log(Greet({ color: "rand", radius: 2 }));
console.log(Draw({ color: "red", radius: 90 }));
