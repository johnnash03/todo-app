import { useState, useEffect, useRef } from "react";
import { TodoListProps } from "../../types";
import styles from "./list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
const TodoList = ({
  todos,
  handleDone,
  handleInputChange,
  handleDelete,
}: TodoListProps) => {
  const itemsRef = useRef<Map<string, HTMLInputElement> | null>(null);

  const [editing, setEditing] = useState("");

  useEffect(() => {
    // Focus input while editing
    const map = getMap();
    if (editing !== "") {
      map.get(editing)?.focus();
    }
  }, [editing]);

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map<string, HTMLInputElement>();
    }
    return itemsRef.current;
  }

  function handleEditing(todoId: string) {
    if (editing === "") {
      setEditing(todoId);
    } else {
      setEditing("");
    }
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.list}>
          <div>
            <input
              style={{
                display: editing === todo.id && !todo.done ? "inline" : "none",
              }}
              className={styles.editInput}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(todo.id, node);
                } else {
                  map.delete(todo.id);
                }
              }}
              value={todo.name}
              onChange={(e) => handleInputChange(todo.id, e.target.value)}
              spellCheck={false}
            />
            <span
              style={{
                display: editing === todo.id ? "none" : "inline",
              }}
            >
              <span className={todo.done ? styles.done : ""}>{todo.name}</span>
            </span>
          </div>
          <div className={styles.editButtons}>
            <button
              onClick={() => {
                setEditing("");
                handleDone(todo.id);
              }}
            >
              <FontAwesomeIcon
                icon={todo.done ? faSquareCheck : faSquare}
                className={`fa-lg ${todo.done ? `${styles.green}` : ""} ${
                  styles.heartBeatAnimate
                }`}
              />
            </button>
            <button disabled={todo.done} onClick={() => handleEditing(todo.id)}>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className={`fas fa-lg ${styles.wiggleAnimate} ${
                  editing === todo.id ? `${styles.editActive}` : ""
                }`}
              />
            </button>
            <button onClick={() => handleDelete(todo.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                className={`fas fa-lg ${styles.rotateAnimate}`}
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
