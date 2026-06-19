const entriesContainer = document.getElementById("entriesContainer");

const journals = JSON.parse(localStorage.getItem("journals")) || [];

 function deleteJournal(index){
            journals.splice(index, 1);
            localStorage.setItem("journals", JSON.stringify(journals));
            renderJournals();
        }

//Render journals
function renderJournals(){
    entriesContainer.innerHTML = "";

    if(journals.length === 0){
        entriesContainer.innerHTML = `
        <p class="text-gray-600 text-lg">No journal entries yet.</p>
        `;
        return;
    }
    journals.forEach((entry, index) =>{
        const card = document.createElement("div");

        card.className = `
        bg-white border border-pink-400 p-6 rounded-xl h-80
         cursor-pointer hover:scale-105 transition duration-300 shadow-md
         overflow-hidden
        `;

        card.innerHTML = `
        <div class="flex justify-between">
                <h1 class="font-bold text-xl text-indigo-500">
                    ${entry.title || "Untitled"}
                </h1>
                <p class="text-xs text-rose-400 font-bold">Edit</p>
            </div>

             
        
            <div class="bg-rose-100 border border-rose-300 rounded-xl p-4 mt-4 h-48 overflow-hidden">
                <p class="text-gray-700 line-clamp-6">
                    ${entry.text}
                </p>
            </div>

            <p class="text-xs text-gray-400 mt-3">
                ${entry.date}
            </p>

            <button onclick="deleteJournal (${index})" class="text-sm text-red-600 font-bold cursor-pointer">Delete</button>

            `;

            
        //Click opens popup
        card.addEventListener("click", ()=>{
            openJournal(entry);
        });
        entriesContainer.appendChild(card)

       
    });
    
    
}
renderJournals();