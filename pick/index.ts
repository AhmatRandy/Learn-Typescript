interface Todo {
  title: string;
  tasks: string;
  completed: boolean;
}

type TodoPreview1 = Pick<Todo, "completed" | "title">;

const todos: TodoPreview1 = {
  completed: true,
  title: "hello world",
};
