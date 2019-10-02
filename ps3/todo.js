let todoList = [];
let counter = 0;

let today = new Date();

todoList.push({
    completed: false,
    dueDate: new Date().toUTCString(),
    text: "Make this app better"
});

todoList.push({
    completed: true,
    dueDate: new Date().toUTCString(),
    text: "Sleep"
});

todoList.push({
    completed: true,
    dueDate: new Date().toUTCString(),
    text: "Eat"
});

todoList.push({
    completed: false,
    dueDate: new Date().toUTCString(),
    text: "Drink"
});

function addTodo() {
    let textField = document.getElementById('newTodo');
    const newTodo = textField.value;

    let dueDateField = document.getElementById('dueDate');
    const dueDate = dueDateField.value;
    
    todoList.push({
        completed: false,
        dueDate: dueDate,
        text: newTodo
    });

    dueDateField.value = null;
    textField.value = null;

    renderTodos();
}

function reorderTodo() {

}

function setCompleted() {
  // TODO change the object to completed

}

function editTodo() {

}

document.addEventListener('DOMContentLoaded', (event) => {
    renderTodos();
});

function renderTodos() {
    const listElement = document.getElementById("todo-list");
    while(listElement.firstChild){
        listElement.removeChild(listElement.firstChild);
    }

    todoList.forEach(todoItem => {
        let item = document.createElement("li");
        if (todoItem.completed) {
            item.innerHTML = `<strike>${todoItem.text}</strike>`;
        } else {
            item.innerHTML = 
            `<span>${todoItem.text} </span>
            <br/> 
            <span> ${todoItem.dueDate} </span>`;
        }

        item.addEventListener("click", () => {
            todoItem.completed = !todoItem.completed;
            renderTodos();
        });

        listElement.appendChild(item);
    });
}