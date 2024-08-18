import styles from "./instructions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export default function Instructions() {
  return (
    <div className={styles.docs_wrapper}>
      <h1> How to use </h1>
      <div className={styles.docs_text}>
        <div>
          <h3> Add a task </h3>
        </div>
        <p> Click inside the yellow box and add text. </p>
        <p>
          {" "}
          Once done, press Enter or click on the{" "}
          <FontAwesomeIcon
            icon={faPlus}
            className={`fas fa-lg ${styles.icon}`}
          />
          button.{" "}
        </p>
      </div>
      <div className={styles.docs_text}>
        <div>
          <h3> Complete a task </h3>
        </div>
        <p className={styles.inline}>
          {" "}
          Hover over the task and click
          <FontAwesomeIcon
            icon={faSquare}
            className={`fas fa-lg ${styles.icon}`}
          />
        </p>
      </div>
      <div className={styles.docs_text}>
        <div>
          <h3> Edit a task </h3>
        </div>
        <p className="inline">
          {" "}
          Hover over the task and click{"  "}
          <FontAwesomeIcon
            icon={faPencilAlt}
            className={`fas fa-lg ${styles.icon}`}
          />{" "}
        </p>
        <p> You can now edit the task. </p>
        <p> Once done, press Enter or click the pencil icon again. </p>
        <p> A completed task cannot be edited! </p>
        <p> In order to do so, un-click the square box first. </p>
      </div>
      <div className={styles.docs_text}>
        <div>
          <h3> Remove a task </h3>
        </div>
        <p className={styles.inline}>
          {" "}
          Hover over the task and click
          <FontAwesomeIcon
            icon={faTrash}
            className={`fas fa-lg ${styles.icon}`}
          />{" "}
        </p>
      </div>
    </div>
  );
}
