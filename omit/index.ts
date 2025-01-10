interface Todo {
  title: string;
  tasks: string;
  completed: boolean;
}

type TodoPreview1 = Omit<Todo, "completed" | "title">;

const todos: TodoPreview1 = {
  title: "hello",
};
