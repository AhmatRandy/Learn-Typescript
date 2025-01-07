interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

const Greet = (colors: ColorfulCircle) => `hello ${colors.color}`;

function Draw(circle: ColorfulCircle) {
  console.log(`Color was ${circle.radius}`);
  console.log(`Radius was ${circle.radius}`);
}
console.log(Greet({ color: "rand", radius: 2 }));
console.log(Draw({ color: "red", radius: 90 }));
