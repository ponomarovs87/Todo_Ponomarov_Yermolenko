import { currectInput } from "./currectInput.js";
import { clearInput } from "./clearInput.js";
import { newTaskInput } from "../getElementById/getElementById.js";
import { emptyInput } from "./emptyInput.js";

export function submitForm(e) {
	e.preventDefault();
	if (newTaskInput.value === "") {
		emptyInput();
		return;
	} else {
		currectInput();
	}

	clearInput(newTaskInput);
}
