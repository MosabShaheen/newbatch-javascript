const input = document.getElementById("input")
const button = document.getElementById("add")
const ol = document.getElementById("tasks")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [] 

tasks.forEach(task => {
    redertask(task)
});

button.addEventListener("click", function(){
    if(input.value==""){
        return
    }
    // creating a single task
    const task ={
        title: input.value,
        completed: false,
        time: new Date,
        id: Math.random()
    }
    // storing the task into arry tasks
    tasks.push(task)
    input.value = ""
    // adding tasks into localstorage
    addtask(tasks)
    window.location.reload()
})

// add task into localstorage 
function addtask (tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}


// show tasks on the website
function redertask(task){
    const li = document.createElement("li")
    li.textContent = task.title
    const button = document.createElement("button")
    button.textContent = "Delete"
    li.appendChild(button)
    ol.appendChild(li)  
}