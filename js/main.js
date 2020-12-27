var taskList = new TaskList();

var validation = new Validation();
var completedList = new TaskList();


getElement("addItem").addEventListener("click", function(){
    
    var taskId = Math.random(1, 100);
    var taskName = getElement("newTask").value;
    var status = "todo";

    var task = new Task(taskId, taskName, "todo");

    
// check null
    var isValid = true;
    isValid &= validation.checkNull(taskName, "newTask", "Empty task");
    if(!isValid) return;
        
    taskList.addTask(task);
    console.log(taskList.arr);
    createTodoTable(taskList.arr);
    setLocalStorage();
})

function createTodoTable(arr){
    var contentTodo = "";
    arr.map(function(item, i){
        contentTodo += `
            <li>
                <span id="taskContent">${item.taskName}</span>
                <div class="buttons">
                    <button class="remove btn btn-danger" onclick="deleteTodoTask(${item.taskId})"><i class="fa fa-trash-alt"></i></button>
                    <button class="complete btn btn-info" onclick="completeTask(${item.taskId})"><i class="fa fa-check-circle"></i></button>
                </div>
            </li>
            `;         
        });
    getElement("todo").innerHTML = contentTodo;
}


function createCompletedTable(arr){
    var contentCompleted = "";
        arr.map(function(item, i){
            contentCompleted += `
            <li>
                <span id="taskContent">${item.taskName}</span>
                <div class="buttons">
                    <button class="remove btn btn-danger" onclick="deleteCompletedTask(${item.taskId})"><i class="fa fa-trash-alt"></i></button>
                    <button class="complete btn btn-success"><i class="fa fa-check-circle"></i></button>
                </div>
            </li>
            `; 
        });
            getElement("completed").innerHTML = contentCompleted;   
};



function completeTask(taskId) {
    console.log(taskId);
    var task1 = taskList.getTaskById(taskId);
    console.log(task1);
    task1.status = "completed";
    console.log(task1);
    completedList.addTask(task1);
    createCompletedTable(completedList.arr);
    console.log(completedList.arr)
    taskList.deleteTask(taskId);
    createTodoTable(taskList.arr);
    setLocalStorage();

}

function deleteTodoTask(taskId){
    // console.log(taskId);
    taskList.deleteTask(taskId);
    // console.log(taskList.arr);
    createTodoTable(taskList.arr);
    setLocalStorage();
}

function deleteCompletedTask(taskId){
    completedList.deleteTask(taskId);
    createCompletedTable(completedList.arr);
    setLocalStorage();
}

function getLocalStorage() {
    if (localStorage.getItem("tasks")) {
        taskList.arr = JSON.parse(localStorage.getItem("tasks"));
        createTodoTable(taskList.arr);
    }
}

function setLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(taskList.arr));
}


// DOM
function getElement(id){
    return document.getElementById(id);
}

