const hbabit_input = document.getElementById("habitInput")
const add_button = document.getElementById("addHabitBtn")
const habit_list = document.getElementById("habitList")

//Load habits
const habits = JSON.parse(localStorage.getItem("habits")) || [];

//Save habits
function saveHabits(){
    localStorage.setItem("habits", JSON.stringify(habits));
}

//Render habits
function renderHabits(){
    habit_list.innerHTML = "",

    habits.forEach((habit, index) => {
        const row = document.createElement("div");

        row.innerHTML = `
        <div class="grid grid-cols-8 items-center bg-pink-50 border border-pink-200 p-3 rounded-xl">
          <h1 class="text-sm font-medium">${habit.name}</h1>

          <input type="checkbox" class="w-5 h-5 accent-pink-400">
          <input type="checkbox" class="w-5 h-5 accent-pink-400">
          <input type="checkbox" class="w-5 h-5 accent-pink-400">
          <input type="checkbox" class="w-5 h-5 accent-pink-400">
          <input type="checkbox" class="w-5 h-5 accent-pink-400">
          <input type="checkbox" class="w-5 h-5 accent-pink-400">
          <input type="checkbox" class="w-5 h-5 accent-pink-400">
        </div>
        <button onclick="removeHabit(${index})" class="text-red-500 text-sm mt-2 hover:underline">Delete</button>
        `;

        habit_list.appendChild(row);
    });

    add_button.onclick = function(){
        if(hbabit_input.value !== "") {
            const new_habit = {
                name: hbabit_input.value
            };

            habits.push(new_habit);
            saveHabits();
            renderHabits();

            hbabit_input.value = "";
        }
    };

    window.removeHabit = function(position){
        habits.splice(position, 1);
        saveHabits();
        renderHabits();
    }
}
renderHabits()