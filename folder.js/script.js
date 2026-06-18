//Mood tracker
const moods = document.querySelectorAll(".mood");
console.log(moods)

// LOad saved mood when page opens
const savedMood = localStorage.getItem("selectedMood");

if(savedMood){
    moods.forEach(mood =>{
        if(mood.dataset.mood === savedMood){
            
        }
    })
}
// Link with task.html
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderDashboardTasks(){

    let container = document.getElementById("dashboardTasks");

    container.innerHTML = "";

    tasks.slice(0, 3).forEach(task => {
        container.innerHTML += `
        <div class="p-2 border rounded">${task.name}</div>
        `
    })
}
renderTasks()
renderDashboardTasks();


document.getElementById("addTaskBtn").onclick = function(){
    let input = document.getElementById("dashboardTaskInput");

    if(input.value !== ""){
        tasks.push({
            name: input.value,
            done: false
        });
        saveTasks();
        renderDashboardTasks()
        input.value = "";
    }
}