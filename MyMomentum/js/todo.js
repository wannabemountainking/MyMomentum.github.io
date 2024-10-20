
const $todoInput = $todoForm.querySelector('input');

const TODOLIST_KEY = 'todoList';

let todoObj = [];

const saveTodoObj = () => {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoObj));
};

const deleteTodo = (event) => {
  $$todoThatwillBeDeleted = event.target.parentElement;
  todoObj = todoObj.filter(
    (oneOfTodoObj) => oneOfTodoObj.id !== parseInt($$todoThatwillBeDeleted.id)
  );
  saveTodoObj();
  $$todoThatwillBeDeleted.remove();
};

const configTodoObj = (newTodoObj) => {
  if ($listOfTodos.classList.contains('hidden')) {
    return
  }
  const $$todoList = document.createElement('li');
  $$todoList.id = newTodoObj.id;
  const $$todoText = document.createElement('span');
  $$todoText.textContent = newTodoObj.text;
  const $$deleteButton = document.createElement('button');
  $$deleteButton.style.marginLeft = '5px';
  $$deleteButton.textContent = '×';
  $$deleteButton.style.borderWidth = '0';
  $$deleteButton.style.backgroundColor = 'transparent';
  $$deleteButton.style.color = '#808080';
  $$deleteButton.style.opacity = '0.5';
  $$deleteButton.style.fontSize = '70%';
  $$deleteButton.addEventListener('click', deleteTodo);

  $$todoList.appendChild($$todoText);
  $$todoList.appendChild($$deleteButton);
  $listOfTodos.appendChild($$todoList);
};

const onSubmit = (event) => {
  event.preventDefault();
  const newTodo = $todoInput.value;
  $todoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoObj.push(newTodoObj);
  saveTodoObj();
  configTodoObj(newTodoObj);
};

$todoForm.addEventListener('submit', onSubmit);

const savedTodoObj = localStorage.getItem(TODOLIST_KEY);
if (savedTodoObj) {
  const parsedTodoObjs = JSON.parse(savedTodoObj);
  todoList = parsedTodoObjs;
  parsedTodoObjs.forEach(configTodoObj);
}
