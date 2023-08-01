import inquirer from "inquirer";
let todoList = [];
const addToDos = async () => {
    const todoQuestions = await inquirer.prompt([
        {
            type: "input",
            name: "description",
            message: "Enter description: ",
        },
        {
            type: "input",
            name: "dueDate",
            message: "Enter due date: ",
        },
        {
            type: "input",
            name: "assignedTo",
            message: "Enter assigned to: ",
        },
        {
            type: "confirm",
            name: "completed",
            message: "Is this task completed? ",
        },
    ]);
    const newTodo = {
        id: todoList.length + 1,
        description: todoQuestions.description,
        dueDate: todoQuestions.dueDate,
        assignedTo: todoQuestions.assignedTo,
        completed: todoQuestions.completed,
    };
    todoList.push(newTodo);
};
const showToDos = () => {
    todoList.forEach((todo) => {
        console.log(todo);
    });
};
const completeToDos = async () => {
    const completeTodo = await inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter id of task to be completed: ",
        },
    ]);
    let todo = todoList.find((todo) => todo.id == completeTodo.id);
    if (todo) {
        todo.completed = true;
    }
    else {
        console.log("Task not found");
    }
};
const deleteToDos = async () => {
    const deleteTodo = await inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter id of task to be deleted: ",
        },
    ]);
    let todoIndex = todoList.findIndex((todo) => todo.id == deleteTodo.id);
    if (todoIndex != -1) {
        todoList.splice(todoIndex, 1);
    }
    else {
        console.log("Task not found");
    }
};
const editToDos = async () => {
    const editTodo = await inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter id of task to be edited: ",
        },
    ]);
    let todo = todoList.find((todo) => todo.id == editTodo.id);
    if (todo) {
        const todoQuestions = await inquirer.prompt([
            {
                type: "input",
                name: "description",
                message: "Enter description: ",
            },
            {
                type: "input",
                name: "dueDate",
                message: "Enter due date: ",
            },
            {
                type: "input",
                name: "assignedTo",
                message: "Enter assigned to: ",
            },
            {
                type: "confirm",
                name: "completed",
                message: "Is this task completed? ",
            },
        ]);
        todo.description = todoQuestions.description;
        todo.dueDate = todoQuestions.dueDate;
        todo.assignedTo = todoQuestions.assignedTo;
        todo.completed = todoQuestions.completed;
    }
    else {
        console.log("Task not found");
    }
};
const main = async () => {
    let choice = "";
    while (choice != "Exit") {
        let user_choice = await inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Choose an option: ",
                choices: ["Add", "Show", "Complete", "Delete", "Edit", "Exit"],
            },
        ]);
        choice = user_choice.choice;
        switch (choice) {
            case "Add":
                await addToDos();
                break;
            case "Show":
                showToDos();
                break;
            case "Complete":
                await completeToDos();
                break;
            case "Delete":
                await deleteToDos();
                break;
            case "Edit":
                await editToDos();
                break;
            case "Exit":
                console.log("Goodbye!");
                break;
        }
    }
};
main();
