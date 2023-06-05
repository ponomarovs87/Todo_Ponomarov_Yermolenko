import { errorMessage } from "../getElementById/getElementById.js";

export function clearInput(newTaskInput) {
	newTaskInput.value = "";
	newTaskInput.style.border = "";
	errorMessage.remove();
}
