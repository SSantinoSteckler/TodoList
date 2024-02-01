const $sectionAction = document.getElementById('sectionActions');
const $divError = document.getElementById('divError');
const $addButton = document.getElementById('buttonAdd');
const $bigDelete = document.getElementById('borrar');

$addButton.addEventListener('click', añadirTarea);

function añadirTarea() {
  const $newAction = document.createElement('div');
  const $inputAction = document.getElementById('inputAction').value;
  if ($inputAction.length === 0) {
    $divError.innerHTML = '<p>INGRESA UNA TAREA VALIDA</p>';
  } else {
    document.getElementById('inputAction').value = '';
    $divError.innerHTML = '';

    $newAction.innerHTML = `🚀​<p>${$inputAction}</p>`;
    $newAction.classList.add('div_action');
    $sectionAction.appendChild($newAction);

    const $divButtons = document.createElement('div');
    $divButtons.classList.add('div-buttons');

    const $deleteButton = document.createElement('button');
    $deleteButton.classList.add('button-style');
    $deleteButton.title = 'Borrar la tarea';

    const $imgEq = document.createElement('img');
    $imgEq.src = 'eliminar.png';
    $deleteButton.appendChild($imgEq);

    const $completeButton = document.createElement('button');
    $completeButton.classList.add('button-style');
    $completeButton.title = 'Marcar tarea como completada';

    const $imgTi = document.createElement('img');
    $imgTi.src = 'comprobar.png';
    $completeButton.appendChild($imgTi);

    $newAction.appendChild($divButtons);
    $divButtons.appendChild($deleteButton);
    $divButtons.appendChild($completeButton);

    $deleteButton.addEventListener('click', deleteTarea);
    $completeButton.addEventListener('click', completeTarea);
  }

  function deleteTarea() {
    $newAction.remove();
  }

  let colorOriginal = true;

  function completeTarea() {
    if (colorOriginal) {
      $newAction.style.backgroundColor = '#11B411';
    } else {
      $newAction.style.backgroundColor = 'beige';
    }

    colorOriginal = !colorOriginal;
  }
}

$bigDelete.addEventListener('click', () => {
  location.reload();
});
