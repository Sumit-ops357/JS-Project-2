document.addEventListener("DOMContentLoaded", function() {

    const taskInput=document.getElementById("taskInput");
    const addTaskBtn=document.getElementById("addTaskBtn");
    const taskList=document.getElementById("taskList");

    addTaskBtn.addEventListener("click" , function() {

        const taskText=taskInput.value.trim();

        if(taskText !=="")
        {
            addTask(taskText);
            taskInput.value="";
        }
    })

    function addTask(taskText) {

        const task= document.createElement("div");
        task.classList.add("task");    //Connecting css to html element

        const checkbox=document.createElement("img");
        checkbox.src="images/unchecked.png";
        checkbox.classList.add("checkbox");

        const taskSpan=document.createElement("span");
        taskSpan.textContent=taskText;

        checkbox.addEventListener("click", function() {

            if(taskSpan.classList.contains("completed"))
            {
                taskSpan.classList.remove("completed");
                checkbox.src="images/unchecked.png";
            }
            else{
                taskSpan.classList.add("completed");
                checkbox.src="images/checked.png";
            }
        })

        //Remove task on double click
        taskSpan.addEventListener("dblclick", function() {

            taskList.removeChild(task);
        })

        task.appendChild(checkbox);
        task.appendChild(taskSpan);
        taskList.appendChild(task);
    }
})