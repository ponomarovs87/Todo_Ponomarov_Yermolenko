import { NewTask } from "../../logic/TaskObj/obj.js";
import { timestumpToDateAndTime } from "../timeAndDate/timestumpToDateAndTime.js";
import { updateDifference } from "../timeAndDate/updateDifference.js";
import { newTaskList } from "../getElementById/getElementById.js";
import { editTask } from "../../logic/LocalStorage/editTask.js"; 	
import { editDeadline } from "../../logic/LocalStorage/editDeadline.js";
import { removeTask } from "../../logic/LocalStorage/deleteTask.js";
import { toggleTaskCompleted } from "../../logic/LocalStorage/toggleTaskCompleted.js";

export function currectInput() {
  const formData = new FormData(formNewTask);
  const toDateTimeString = formData.get("deadline");
  const toDateTime = new Date(toDateTimeString);
  const timestamp = toDateTime.getTime() / 1000;
  const textContent = formData.get("text");
  const deadline = Date.parse(formData.get("deadline"));
  const newTask = new NewTask(textContent, deadline);

// Создаем элементы задачи
// Создание элемента списка задач
const taskItem = document.createElement("li"); 

// Создание чекбокса для отметки задачи
const checkbox = document.createElement("input"); 
  checkbox.type = "checkbox";
  checkbox.checked = newTask.checkbox;
  checkbox.addEventListener("change", function() {
    toggleTaskCompleted(taskItem);
  });

// Создание элемента для отображения текста задачи
const textContentElement = document.createElement("span"); 
textContentElement.textContent = newTask.textContent;
// Создание элемента для отображения даты создания задачи
const dateCreated = document.createElement("span");
dateCreated.textContent = timestumpToDateAndTime(newTask.dateCreation);

// Создание элемента для отображения дедлайна задачи
const deadlineElement = document.createElement("span");
deadlineElement.textContent = timestumpToDateAndTime(newTask.deadline);

// Создание элемента для отображения разницы между дедлайном и текущим временем
const difference = document.createElement("span");
updateDifference(difference, newTask.deadline);

// Создание кнопки для удаления задачи
const deleteButton = document.createElement("button");
deleteButton.textContent = "Удалить";
deleteButton.addEventListener("click", function() {
  removeTask(taskItem);
});

// Создание кнопки для изменения задачи
const editTaskButton = document.createElement("button"); 
editTaskButton.textContent = "Изменить";
editTaskButton.addEventListener("click", function() {
  editTask(textContentElement, deadlineElement, difference, editTaskButton);
});

// Создание кнопки для изменения дедлайна задачи
const editDeadlineButton = document.createElement("button"); 
editDeadlineButton.textContent = "Изменить дедлайн";
editDeadlineButton.addEventListener("click", function() {
  editDeadline(deadlineElement, difference, editDeadlineButton);
});
  
taskItem.append( checkbox, textContentElement, dateCreated, deadlineElement, difference, deleteButton, editTaskButton, editDeadlineButton );
newTaskList.appendChild(taskItem);
}