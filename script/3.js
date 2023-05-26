// Файл 3.js

// Получаем ссылки на нужные элементы
const taskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-button");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("error-message");

const emptyText = document.getElementById("emptyText");

// Обработчик события для кнопки добавления задачи
addTaskBtn.addEventListener("click", addTask);

// Функция добавления задачи в список
const items = [];
function addTask() {
	// Получаем текст из поля ввода
	const taskText = taskInput.value.trim();

	// Проверяем, что поле не пустое
	if (taskText === "") {
		displayErrorMessage("Введите задачу");
		taskInput.classList.add("error");
		return;
	}

	// Создаем новый элемент списка=================
	const li = document.createElement("li");
	const itemId = items.length;
	li.setAttribute("data-id", itemId);
	li.textContent = taskText;
	taskList.appendChild(li);
	emptyText.style.display = "none";



	//Добавление кнопки удалить 
	const liButtonDelete = document.createElement("button");
	liButtonDelete.textContent = "Видалити";
	li.appendChild(liButtonDelete);

	liButtonDelete.addEventListener("click", function() {
        taskList.removeChild(li);
        if (taskList.children.length === 0) {
          emptyText.style.display = "block";
        }
      });


	//Добавление кнопки изменить
	const liButtonChange = document.createElement("button");
	liButtonChange.textContent = "Редагувати";
	li.appendChild(liButtonChange);

	// Добавляем элемент в список
	items.push(li);

	// Очищаем поле ввода
	taskInput.value = "";
}

// Функция отображения сообщения об ошибке
function displayErrorMessage(message) {
	errorMessage.textContent = message;
}

// Обработчик события для поля ввода (сбрасываем стили ошибки при изменении)
taskInput.addEventListener("input", resetErrorStyles);

// Функция сброса стилей ошибки
function resetErrorStyles() {
	taskInput.classList.remove("error");
	errorMessage.textContent = "";
}

// Экспортируем необходимые функции и переменные
export { addTask, displayErrorMessage, resetErrorStyles };

