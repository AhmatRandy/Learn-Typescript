interface SomeType {
  readonly prop: string;
}

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

const writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

const readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson);

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello";
}

console.log(doSomething({ prop: "oke" }));
