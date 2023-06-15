import { updateDifference } from "../../UI/timeAndDate/updateDifference.js";

export function editDeadline(deadlineElement, difference, editDeadlineButton) {
    const originalDeadline = deadlineElement.textContent;
  
    const inputDeadline = document.createElement("input");
    inputDeadline.type = "datetime-local";
    inputDeadline.value = originalDeadline;
    deadlineElement.textContent = "";
    deadlineElement.appendChild(inputDeadline);
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Отмена";
    cancelButton.addEventListener("click", function() {
      deadlineElement.textContent = originalDeadline;
      editDeadlineButton.disabled = false;
    });
  
    const saveButton = document.createElement("button");
    saveButton.textContent = "Сохранить";
    saveButton.addEventListener("click", function() {
      const newDeadline = inputDeadline.value;
      deadlineElement.textContent = newDeadline;
      updateDifference(difference, newDeadline);
      editDeadlineButton.disabled = false;
    });
  
    editDeadlineButton.disabled = true;
    deadlineElement.appendChild(cancelButton);
    deadlineElement.appendChild(saveButton);
  }