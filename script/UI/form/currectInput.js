import { NewTask } from "../../logic/TaskObj/obj.js";
import { timestumpToDateAndTime } from "../timeAndDate/timestumpToDateAndTime.js";
import { updateDifference } from "../timeAndDate/updateDifference.js";
import { newTaskList } from "../getElementById/getElementById.js";

export function currectInput() {
	const formData = new FormData(formNewTask);
	const toDateTimeString = formData.get("deadline");
	const toDateTime = new Date(toDateTimeString);
	const timestamp = toDateTime.getTime() / 1000;
	const textContent = formData.get("text");
	const deadline = Date.parse(formData.get("deadline"));
	const newTask = new NewTask(textContent, deadline);
	console.log(Date.parse(formData.get("deadline")));

	// проба добавить новый обьект в поле убрать в отделный фрил и перелать это фуфлокод
	{
		const taskItem = document.createElement("li");
		const checkbox = document.createElement("input");
		const textContent = document.createElement("span");
		const dateCreated = document.createElement("span");
		const deadline = document.createElement("span");
		const difference = document.createElement("span");
		const editBtn = document.createElement("button");
		const delBtn = document.createElement("button");

		taskItem.id = newTask.id

		checkbox.type = "checkbox";
		checkbox.checked = newTask.checkbox;

		textContent.textContent = newTask.textContent;
		dateCreated.textContent = timestumpToDateAndTime(newTask.dateCreation);
		deadline.textContent = timestumpToDateAndTime(newTask.deadline);
		editBtn.textContent = "Изменить";
		delBtn.textContent = "Удалить";

		updateDifference(difference, newTask.deadline);

		editBtn.addEventListener("click", () => {
			console.log("editBtn",newTask.id);
		});
		delBtn.addEventListener("click", () => {
			console.log("delBtn",newTask.id);
			taskItem.remove()
		});

		taskItem.appendChild(checkbox);
		taskItem.appendChild(textContent);
		taskItem.appendChild(dateCreated);
		taskItem.appendChild(deadline);
		taskItem.appendChild(difference);
		taskItem.appendChild(editBtn);
		taskItem.appendChild(delBtn);
		newTaskList.appendChild(taskItem);
	}
}
