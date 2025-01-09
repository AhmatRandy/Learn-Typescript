type DataCollections = {
  name: string;
  age: number;
};

type Obj = keyof DataCollections;

function printSomething(arg: Obj) {
  return arg;
}

console.log(printSomething("name"));
console.log(printSomething("age"));
