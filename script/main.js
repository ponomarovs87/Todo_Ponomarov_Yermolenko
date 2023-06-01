import { saveTask } from "./logic/LocalStorage/addNewTask.js";
import { deleteTask } from "./logic/LocalStorage/deleteTask.js";
import { editTask } from "./logic/LocalStorage/editTask.js";

const clearInputButton = document.getElementById("clear-input-button");
const newTaskInput = document.getElementById("new-task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("taskList");

clearInputButton.addEventListener("click", () => {
  newTaskInput.value = "";
});
//кнопка добавления задачи
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
//кнопка чтобы удалить задачу
taskList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("delete-task-button")) {
    const taskId = target.dataset.id;

    deleteTask(taskId);

    target.parentElement.remove();
  }
});
//создание li
function createTaskItem(task) {
  const taskItem = document.createElement("li");
  taskItem.dataset.id = task.id;

  const taskText = document.createElement("span");
  taskText.textContent = task.text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.classList.add("delete-task-button");
  deleteButton.dataset.id = task.id;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("task-checkbox");
  taskCheckbox.dataset.id = task.id;

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteButton);

  return taskItem;
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
