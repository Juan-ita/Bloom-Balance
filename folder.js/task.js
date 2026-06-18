const task_input = document.getElementById("taskInput")
const add_Btn = document.getElementById("Btn")
const task_list = document.getElementById("taskList")
const totalTasks = document.getElementById("totalTasks")
//const task_input = document.getElementById("taskInput")
const reset_button = document.getElementById("resetButton")



 function saveTasks(){
       localStorage.setItem("tasks", JSON.stringify(tasks))
}

//Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Render tasks
function renderTasks(){
    task_list.innerHTML = "";

    tasks.forEach((task, index) => {
        const list = document.createElement("li");
        list.innerHTML = `
        <div class="flex justify-between items-center p-3 border rounded-lg">
          <div class="flex items-center gap-2">
             <input type="checkbox" class="w-5 h-5 accent-pink-400">
             <span>${task.name}</span>
          </div>

             <button onclick="removeTask(${index})" class="text-red-600 cursor-pointer">Delete</button>
        </div>
        `
        task_list.appendChild(list)

        const checkbox = list.querySelector("input");
        checkbox.onchange = function(){
            task.done = checkbox.checked;
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

                tasks.push(new_task);
                saveTasks();
                //Refreshes the page
                renderTasks();
                task_input.value = "";
                
                
            }
        }

        //Remove food items
        window.removeTask = function(position){
            tasks.splice(position, 1);
            saveTasks()
            renderTasks();
        }
        

        // let currentTasks = 0;
        // tasks.forEach(function(task, index){
        //     currentTasks = currentTasks + 1
        // })
        totalTasks.textContent = tasks.length
        totalTasks.textContent = currentTasks;
        //localStorage.setItem("tasks", JSON.stringify(tasks))

        //Reset task count
        // resetButton.addEventListener('click', function(){
        //     tasks.length = 0;
        //     saveTasks()
        //     renderTasks();
        // })
        resetButton.onclick = function () {
    tasks.length = 0;
    saveTasks();
    renderTasks();
};
    
}
renderTasks();