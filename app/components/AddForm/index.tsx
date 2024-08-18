import { useState } from "react";
import { UsernameFormElement, AddFormProps } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./form.module.css";

const AddForm = ({ handleAdd }: AddFormProps) => {
  const [newTodo, setNewTodo] = useState("");
  const [focussed, setFocussed] = useState(false);
  function handleSubmit(e: React.FormEvent<UsernameFormElement>) {
    e.preventDefault();
    const value = e.currentTarget.elements.todo.value.trim();
    if (value !== "") {
      handleAdd(value);
    }
    setNewTodo("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.wrapper} ${focussed ? `${styles.focussed}` : ""}`}
    >
      <input
        type="text"
        spellCheck="false"
        placeholder="Add a new task here..."
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className={styles.addInput}
        onFocus={() => setFocussed(true)}
        onBlur={() => setFocussed(false)}
      />
      {newTodo !== "" && (
        <button
          type="submit"
          className={`${styles.addBtn} ${focussed ? `${styles.focussed}` : ""}`}
        >
          <FontAwesomeIcon icon={faPlus} className="fas fa-plus fa-lg" />
        </button>
      )}
    </form>
  );
};

export default AddForm;
