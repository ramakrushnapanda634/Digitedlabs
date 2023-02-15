import { useState } from "react";
import Complete from "./Complete";

import styles from "./TaskItem.module.css";

import { CheckIcon } from "@heroicons/react/24/outline";

import { TrashIcon } from "@heroicons/react/24/outline";

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);
  const [completed, setCompleted] = useState([]);
  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCompleted([...completed, { ...task.name }]);
    }
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };
  console.log("Completed", completed);
  return (
    <>
      <div>
        <li className={styles.task}>
          <div className={styles["task-group"]}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={isChecked}
              onChange={handleCheckboxChange}
              name={task.name}
              id={task.id}
            />
            <label htmlFor={task.id} className={styles.label}>
              {task.name}
              <p className={styles.checkmark}>
                <CheckIcon strokeWidth={2} width={24} height={24} />
              </p>
            </label>
          </div>
          <div className={styles["task-group"]}>
            <button
              className={`btn ${styles.delete}`}
              aria-label={`Delete ${task.name} Task`}
              onClick={() => deleteTask(task.id)}
            >
              <TrashIcon width={24} height={24} />
            </button>
          </div>
        </li>
      </div>

      <Complete completed={completed} />
    </>
  );
};
export default TaskItem;
