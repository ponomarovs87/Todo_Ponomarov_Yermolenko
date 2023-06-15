export function toggleTaskCompleted(taskItem) {
    if (taskItem.style.textDecoration === "line-through") {
      taskItem.style.textDecoration = "";
    } else {
      taskItem.style.textDecoration = "line-through";
    }
  }