import { Todo, Action } from "./types";
import { v4 as uuidv4 } from "uuid";

function reducer(todos: Todo[], action: Action) {
  switch (action.type) {
    case "ADD": {
      const id = uuidv4();
      const newTodos = [
        ...todos,
        {
          id,
          name: action.newTodoName,
          done: false,
        },
      ];
      return newTodos;
    }

    case "DONE": {
      const newTodos = todos.map((todo) => {
        if (action.todoId === todo.id)
          return {
            ...todo,
            done: !todo.done,
          };
        return todo;
      });
      return newTodos;
    }

    case "DELETE": {
      const newTodos = todos.filter((todo) => todo.id !== action.todoId);
      return newTodos;
    }

    case "EDIT": {
      const newTodos = todos.map((todo) => {
        if (action.todoId === todo.id)
          return {
            ...todo,
            name: action.value,
          };
        return todo;
      });
      return newTodos;
    }
  }
}

export { reducer };
