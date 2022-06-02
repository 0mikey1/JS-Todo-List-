// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");
// Event Listeners
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
// Functions

function addToDo(event) {
    //prevents form from submitting
    event.preventDefault()

    //TodoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerHTML= todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    //Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //Clear To do input value

    todoInput.value="";
}

function deleteCheck(e) {
    const item = e.target;

    //Delete

    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();

    }

    //Check

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case 'all':
            todo.style.display = 'flex';
            break;
        case 'completed':
            if(todo.classList.contains('completed')){
                todo.style.display = 'flex';
            }
            else {
                todo.style.dispay='none';
            }

    }

    });
 }
