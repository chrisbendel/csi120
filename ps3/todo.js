let todoList = [];

let today = new Date();

class Todo {
    completed;
    dueDate;
    text;
    
    constructor(completed, duedate, text) {
        this.completed = completed;
        this.duedate = duedate;
        this.text = text;
    }
    
}

todoList.push({
    completed: false,
    dueDate: today.setDate(today.getDate() + 6),
    text: "Make this app better"
});

todoList.push({
    completed: true,
    dueDate: today.setDate(today.getDate() + 2),
    text: "Sleep"
});

todoList.push({
    completed: true,
    dueDate: today.setDate(today.getDate() + 3),
    text: "Eat"
});

todoList.push({
    completed: false,
    dueDate: today.setDate(today.getDate() + 6),
    text: "Drink"
});

function addTodo() {
    let textField = document.getElementById('newTodo');
    const newTodo = textField.value;

    let dueDateField = document.getElementById('dueDate');
    const dueDate = dueDateField.value;

    todoList.push(new Todo(false, dueDate, newTodo));

    todoList.push({
        completed: false,
        dueDate: dueDate,
        text: newTodo,
    });

    dueDateField.value = null;
    textField.value = null;

    console.log(todoList);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const listElement = document.getElementById("todo-list");
    todoList.forEach(todoItem => {
        let item = document.createElement("li");
        let text = document.createTextNode(`<strike>${todoItem.text}</strike>`);
        item.appendChild(text);
        listElement.appendChild(item);
    });
});