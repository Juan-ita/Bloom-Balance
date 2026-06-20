const task_input = document.getElementById("taskInput")
const add_Btn = document.getElementById("Btn")
const task_list = document.getElementById("taskList")
const totalTasks = document.getElementById("totalTasks")
const reset_button = document.getElementById("resetButton")

//Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];//Gets the saved tasks but if nothing exists creates an emptu array

 function saveTasks(){
       localStorage.setItem("tasks", JSON.stringify(tasks));
}


//Render tasks
function renderTasks(){
    task_list.innerHTML = ""; //Clears old task

    tasks.forEach((task, index) => {
        const list = document.createElement("li");//Creates html for each task
        list.innerHTML = `
        <div class="flex justify-between items-center p-3 border rounded-lg">
          <div class="flex items-center gap-2">
             <input type="checkbox" class="w-5 h-5 accent-pink-400">
             <span>${task.name}</span>
          </div>

             <button onclick="removeTask(${index})" class="text-red-600 cursor-pointer">Delete</button>
        </div>
        `
        task_list.appendChild(list)//Puts the new task list on the screen

        const checkbox = list.querySelector("input");
        checkbox.checked = task.done; //If the task is saved as done tick the box

        checkbox.onchange = function(){
            task.done = checkbox.checked;//Updates the task state
            saveTasks();
        };
        });

        //Add new task
        add_Btn.onclick = function(){
            if(task_input.value !== ""){
                const new_task = {
                    name: task_input.value,
                    done: false
                };

                tasks.push(new_task);//Add task into array
                saveTasks();

                //Refreshes the page
                renderTasks();
                task_input.value = "";//Clears the input box
                
                
            }
        }

        //Remove food items
        window.removeTask = function(position){
            tasks.splice(position, 1);//Removes one task
            saveTasks()
            renderTasks();
        }
        

         let currentTasks = 0;
        totalTasks.textContent = tasks.length// Shows the number of tasks
        totalTasks.textContent = currentTasks; 
        
    reset_button.onclick = function () {
    tasks.length = 0; //Deletes all tasks
    saveTasks();
    renderTasks();
};
    
}
renderTasks();