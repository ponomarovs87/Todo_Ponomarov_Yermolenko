import { submitForm } from "./UI/form/submitForm.js";
import { clearInput } from "./UI/form/clearInput.js";
import { currectDateToInputDateFull } from "./UI/timeAndDate/currectDateToInputDateFull.js";
import { formNewTask, clearInputButton, newTaskInput } from "./UI/getElementById/getElementById.js";

currectDateToInputDateFull("deadline");

formNewTask.addEventListener("submit", submitForm);

clearInputButton.addEventListener("click", function () {
	clearInput(newTaskInput);
});
