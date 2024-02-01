// const $sectionAction = document.getElementById('sectionActions');
// const $divError = document.getElementById('divError');
// const $addButton = document.getElementById('buttonAdd');
// const $bigDelete = document.getElementById('borrar');

// // Cargar tareas almacenadas en localStorage al cargar la página
// document.addEventListener('DOMContentLoaded', loadTasks);

// $addButton.addEventListener('click', añadirTarea);

// function añadirTarea() {
//   const $inputAction = document.getElementById('inputAction').value;
//   if ($inputAction.length === 0) {
//     $divError.innerHTML = '<p>INGRESA UNA TAREA VALIDA</p>';
//   } else {
//     document.getElementById('inputAction').value = '';
//     $divError.innerHTML = '';

//     const task = {
//       content: $inputAction,
//       completed: false,
//     };

//     createTaskElement(task);

//     // Guardar tareas en localStorage
//     saveTasksToLocalStorage();
//   }
// }

// function createTaskElement(task) {
//   const $newAction = document.createElement('div');
//   $newAction.innerHTML = `🚀​<p>${task.content}</p>`;
//   $newAction.classList.add('div_action');

//   if (task.completed) {
//     $newAction.style.backgroundColor = '#11B411';
//   }

//   $sectionAction.appendChild($newAction);

//   const $divButtons = document.createElement('div');
//   $divButtons.classList.add('div-buttons');

//   const $deleteButton = document.createElement('button');
//   $deleteButton.classList.add('button-style');
//   $deleteButton.title = 'Borrar la tarea';

//   const $imgEq = document.createElement('img');
//   $imgEq.src = 'eliminar.png';
//   $deleteButton.appendChild($imgEq);

//   const $completeButton = document.createElement('button');
//   $completeButton.classList.add('button-style');
//   $completeButton.title = 'Marcar tarea como completada';

//   const $imgTi = document.createElement('img');
//   $imgTi.src = 'comprobar.png';
//   $completeButton.appendChild($imgTi);

//   $newAction.appendChild($divButtons);
//   $divButtons.appendChild($deleteButton);
//   $divButtons.appendChild($completeButton);

//   $deleteButton.addEventListener('click', () => deleteTarea($newAction));
//   $completeButton.addEventListener('click', () =>
//     completeTarea($newAction, task)
//   );
// }

// function deleteTarea($taskElement) {
//   $taskElement.remove();
//   saveTasksToLocalStorage();
// }

// function completeTarea($taskElement, task) {
//   task.completed = !task.completed;
//   if (task.completed) {
//     $taskElement.style.backgroundColor = '#11B411';
//   } else {
//     $taskElement.style.backgroundColor = 'beige';
//   }
//   saveTasksToLocalStorage();
// }

// function saveTasksToLocalStorage() {
//   const tasks = Array.from($sectionAction.children).map(($taskElement) => {
//     const content = $taskElement.querySelector('p').textContent;
//     const completed = $taskElement.style.backgroundColor === 'rgb(17, 180, 17)';
//     return { content, completed };
//   });

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function loadTasks() {
//   const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//   storedTasks.forEach((task) => {
//     createTaskElement(task);
//   });
// }

// $bigDelete.addEventListener('click', () => {
//   // Limpiar localStorage y recargar la página
//   localStorage.removeItem('tasks');
//   location.reload();
// });
