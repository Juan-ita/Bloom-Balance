const habit_input = document.getElementById("habitInput")
const add_button = document.getElementById("addHabitBtn")
const habit_list = document.getElementById("habitList")

//Load habits
const habits = JSON.parse(localStorage.getItem("habits")) || []; // gets the saved habits and if nothing is saved, creat an empty array.

//Save habits
function saveHabits(){
    localStorage.setItem("habits", JSON.stringify(habits)); //Changes the array ito text then stores the text in localStorage
}

//Render habits
function renderHabits(){
    habit_list.innerHTML = "";

    habits.forEach((habit, index) => {
        const row = document.createElement("div");// This creates a new div element

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

        habit_list.appendChild(row);// Adds the newly created row into the habit list
    });

    add_button.onclick = function(){
        if(habit_input.value !== "") { //Makes sure the user typed sth
            const new_habit = {
                name: habit_input.value
            };

            habits.push(new_habit);// Adds the new habit to the end of the array
            saveHabits();// Saves the new habit in the localStorage
            renderHabits();//Show the updated list

            habit_input.value = "";//Removes the text after adding the habit
        }
    };

    window.removeHabit = function(position){ 
        habits.splice(position, 1);//Removes one item from the array
        saveHabits();//Saves the updated array
        renderHabits(); // Refreshes the page.
    }
}
renderHabits()//Runs the function when the page opens and the previous saved habits appear automaticlly