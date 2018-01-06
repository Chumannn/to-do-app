function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

// get the text
    let title = newToDoText.value;

// create a new li
    let newLi = document.createElement('li');

// create a new input
    let checkbox = document.createElement('input');

// create remove input
    let remove = document.createElement('input')

// set the input's type to checkbox
    checkbox.type = "checkbox";

// set input type to button
    remove.type = "button";

// set button name
    remove.value = "Remove";

// set the title
    newLi.textContent = title;

// attach the checkbox to the li
    newLi.appendChild(checkbox);

// attach button to li
    newLi.appendChild(remove);

// attach the li to the ul
    toDoList.appendChild(newLi);

//empty the input
    newToDoText.value = '';

//Remove list item
  remove.addEventListener('click', event => {
    toDoList.removeChild(newLi);
  });

});
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
