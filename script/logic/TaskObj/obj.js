// пример обьекта
// const obj = {
// 	checkbox: true,
// 	textContent: "Сама задача описание",
// 	dateCreation: new Date(),
// 	deathLine: "timestamp",
// 	dateCompletion: "timestamp"
// };

export class NewTask {
	constructor(textContent, deadline) {
		this.checkbox = false;
		this.textContent = textContent;
		this.dateCreation = Date.now();
		this.deadline = deadline;
		this.dateCompletion = null;
	}

	editTask(textContent, deadline) {
		this.textContent = textContent;
		this.deadline = deadline;
	}

	finishTaskControl() {
		if (this.checkbox === true) {
			this.checkbox = false;
			this.dateCompletion = null;
		} else {
			this.checkbox = true;
			this.dateCompletion = Date.now();
		}
	}
}
