// import { load } from "./load.js";
// import { setItem } from "./setItem.js";
// import { nameTextTasks, nameChecedTasks } from "./naiming.js";

export function editTask(textContentElement, deadlineElement, difference, editTaskButton) {
	const originalText = textContentElement.textContent;
  
	const inputText = document.createElement("input");
	inputText.type = "text";
	inputText.value = originalText;
	textContentElement.textContent = "";
	textContentElement.appendChild(inputText);
  
	const cancelButton = document.createElement("button");
	cancelButton.textContent = "Отмена";
	cancelButton.addEventListener("click", function() {
	  textContentElement.textContent = originalText;
	  editTaskButton.disabled = false;
	});
  
	const saveButton = document.createElement("button");
	saveButton.textContent = "Сохранить";
	saveButton.addEventListener("click", function() {
	  const newText = inputText.value;
	  textContentElement.textContent = newText;
	  editTaskButton.disabled = false;
	});
  
	editTaskButton.disabled = true;
	textContentElement.appendChild(cancelButton);
	textContentElement.appendChild(saveButton);
  }

// export function editTask(newText, checkedstatus, id) {
// 	let tasks = load();

// 	let indexEditTask = findindexByTaskId(id, tasks);

// 	if (indexEditTask < 0) {
// 		return -1;
// 	}
// 	tasks[indexEditTask][nameTextTasks] = newText;
// 	tasks[indexEditTask][nameChecedTasks] = checkedstatus;

// 	setItem(tasks);
// }

// function findindexByTaskId(id, array) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (id === array[i].id) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }
