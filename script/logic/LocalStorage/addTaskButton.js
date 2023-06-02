import { saveTask } from "./addNewTask.js";
import { createTaskItem } from "../../main.js";
import { addTaskButton, newTaskInput, taskList } from "./naiming.js"

// Обработчик события клика на кнопку "Добавить"
addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value;

  if (taskText.trim() !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      checked: false,
    };

    saveTask(task);

    newTaskInput.value = "";

    const taskItem = createTaskItem(task);
    taskList.appendChild(taskItem);
  }
});
