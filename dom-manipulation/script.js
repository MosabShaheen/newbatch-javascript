// changing para
// check if the para content is "The para is changed" 
// then change it to orignal text if not it should be changed
document.getElementById("change-button").addEventListener("click", function () {
    document.getElementById("para").textContent = "The para is changed"
})


// higligh para.. adding styling and classes

let highlight = document.getElementById("higlight")

highlight.addEventListener("click", function (){
    // highlight.classList.add("highlight")

    highlight.style.backgroundColor = "yellow"
})

// creating new html element

document.getElementById("addtask").addEventListener("mouseover", function(){
    let newtask = document.createElement("li")
    newtask.textContent = "New task"
    document.getElementById("tasks").appendChild(newtask)
})

document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("value").textContent= `Value: ${document.getElementById("formin").value}`
})