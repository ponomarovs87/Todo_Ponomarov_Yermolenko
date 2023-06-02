import { clearInputButton, newTaskInput, taskList } from "./logic/LocalStorage/naiming.js";
import { deleteTask } from "./logic/LocalStorage/deleteTask.js";
import { editTask } from "./logic/LocalStorage/editTask.js";

clearInputButton.addEventListener("click", () => {
  newTaskInput.value = "";
});

//кнопка чтобы удалить задачу
export function deleteTaskOnClick(event) {
  const target = event.target;

  if (target.classList.contains("delete-task-button")) {
    const taskId = target.dataset.id;

    deleteTask(taskId);

    target.parentElement.remove();
  }
}
taskList.addEventListener("click", deleteTaskOnClick);

//создание li
export function createTaskItem(task) {
  const taskItem = document.createElement("li");
  taskItem.dataset.id = task.id;

  const taskText = createEl("span", task.text, "task-text");
  const deleteButton = createEl("button", "Удалить", "delete-task-button");
  deleteButton.dataset.id = task.id;
  const taskCheckbox = createEl("input", undefined, "task-checkbox", "checkbox");
  taskCheckbox.dataset.id = task.id;

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

//создание елемантов в li
function createEl(htmlEl, textEl, classEl, typeEl) {
  const element = document.createElement(htmlEl);
  if (textEl !== undefined) {
    element.textContent = textEl;
  }
  if (classEl !== undefined) {
    element.classList.add(classEl);
  }
  if (typeEl !== undefined) {
    element.type = typeEl;
  }
  return element;
}

//кнопка чтобы выкреслить задачу
taskList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("task-checkbox")) {
    const taskId = target.dataset.id;
    const taskText = target.nextElementSibling;
    const checked = target.checked;
    editTask(taskText.textContent, checked, taskId);

    if (checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }
});
