// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
  address?: string;
  marriage?: boolean;
};

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

const greet = (person: Person) => `hello ${person?.name}`;
console.log(greet({ name: "rand", age: 2 }));

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "red", radius: 90 });
