interface Users {
  name: string;
  age: number;
  address: string;
  status: boolean;
}

interface Todo {
  title: string;
  tasks: string;
  completed: boolean;
}

type TodoPreview1 = Pick<Todo, "completed" | "title">;

type TodoPreview2 = Omit<Todo, "title">;

const Todos1: TodoPreview1 = {
  title: "oke",
  completed: false,
};
const Todos2: TodoPreview2 = {
  tasks: "oke",
  completed: false,
};

const user: Partial<Users> = {
  name: "Awdawd",
};

console.log(user);
