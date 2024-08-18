export type Todo = {
  id: string;
  name: string;
  done: boolean;
};

export type Action =
  | { type: "ADD"; newTodoName: string }
  | { type: "DONE"; todoId: string }
  | { type: "DELETE"; todoId: string }
  | { type: "EDIT"; todoId: string; value: string };

export type TodoListProps = {
  todos: Todo[];
  handleDone: (todoId: string) => void;
  handleInputChange: (todoId: string, value: string) => void;
  handleDelete: (todoId: string) => void;
};

export type AddFormProps = {
  handleAdd: (todoId: string) => void;
};

interface FormElements extends HTMLFormControlsCollection {
  todo: HTMLInputElement;
}
export interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
