type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
type Alive = Person["alive"];

type getAll = Person[keyof Person];
