interface Todo {
  title: string;
  tasks: string;
  completed: boolean;
}

type TodoPreview1 = Omit<Todo, "tasks">;

const todos: TodoPreview1 = {
  title: "hello",
  completed: false,
};
