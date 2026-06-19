// const cards = document.querySelectorAll(".journal-card")
// const modal = document.getElementById("journalModel")
// const full_Journal = document.getElementById("fullJournal")
// const closeBtn = document.getElementById("closeBtn")

// cards.forEach(card=>{
//     card.addEventListener("click", ()=>{
//         const text = card.querySelector(".journal-content").innerHTML;

//         full_Journal.innerHTML = text;

//         modal.classList.remove("hidden");
//         modal.classList.add("flex");
//     });
// });

// closeBtn.addEventListener("click", ()=>{
//     modal.classList.remove("flex");
//     modal.classList.add("hidden")
// });

//New entry
// const newEntryCard = document.getElementById("newEntry");

// newEntryCard.addEventListener("click", ()=>{
//     window.location.href = "newJournal.html"
// })

const enriesContainer = document.getElementById("entriesContainer");

const journals = JSON.parse(localStorage.getItem("journals")) || [];

//Render journals
function renderJournals(){
    enriesContainer.innerHTML = "";

    if(journals.length === 0){
        enriesContainer.innerHTML = `
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
                <h1 class="font-bold text-xl text-purple-500">
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
        `;
        //Click opens popup
        card.addEventListener("click", ()=>{
            openJournal(entry);
        });
        enriesContainer.appendChild(card)
    });
}
renderJournals();