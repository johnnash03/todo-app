"use client";
// Bug edit, then Done.
import { useReducer } from "react";

import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

import { reducer } from "./reducer";

export default function TodoPage() {
  const [todos, dispatch] = useReducer(reducer, []);

  const actions = {
    handleAdd: (newTodoName: string) => {
      dispatch({ type: "ADD", newTodoName });
    },
    markAsDone: (todoId: string) => dispatch({ type: "DONE", todoId }),
    handleEdit: (todoId: string, value: string) =>
      dispatch({ type: "EDIT", todoId, value }),
    handleDelete: (todoId: string) => dispatch({ type: "DELETE", todoId }),
  };

  return (
    <main>
      <div className="container">
        <h1>To-Do List</h1>
        <AddForm handleAdd={actions.handleAdd} />
        <TodoList
          todos={todos}
          handleDone={actions.markAsDone}
          handleInputChange={actions.handleEdit}
          handleDelete={actions.handleDelete}
        />
      </div>
      <Instructions />
      <Footer />
    </main>
  );
}
