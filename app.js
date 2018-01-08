function onReady() {
  let id = 0
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input')
      checkbox.type = "checkbox";

      const button = document.createElement('input')
      button.type = "button";
      button.value = "Remove";

      const title = document.createElement('span')
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(button);

      button.addEventListener('click', event => {
      deleteToDo(toDo.id);
      toDoList.removeChild(newLi);
      renderTheUI();
      });
    });

  }

  function deleteToDo(toDoId) {
    toDos = toDos.filter(item =>{
      console.log(toDoId, item)
      return item.id !== toDoId
     });

  }
    addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';

  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
