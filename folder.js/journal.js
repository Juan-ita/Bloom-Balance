const cards = document.querySelectorAll(".journal-card")
const modal = document.getElementById("journalModel")
const full_Journal = document.getElementById("fullJournal")
const closeBtn = document.getElementById("closeBtn")

cards.forEach(card=>{
    card.addEventListener("click", ()=>{
        const text = card.querySelector(".journal-content").innerHTML;

        full_Journal.innerHTML = text;

        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });
});

closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("flex");
    modal.classList.add("hidden")
});

//New entry
const newEntryCard = document.getElementById("newEntry");

newEntryCard.addEventListener("click", ()=>{
    window.location.href = "newJournal.html"
})