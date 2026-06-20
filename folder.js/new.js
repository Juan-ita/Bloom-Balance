const titleInput = document.getElementById("title")
const entryInput = document.getElementById("entry")
const saveBtn = document.getElementById("saveBtn")

const journals = JSON.parse(localStorage.getItem("journals")) || []; //Gets the saved journals if nothing is saved creates an empty array



//save
saveBtn.addEventListener("click", ()=>{  

    if(titleInput.value === "" || entryInput.value === ""){
    alert("Please fill in both fields.")
    return;
    }

    const newEntry = {
        title: titleInput.value,
        text: entryInput.value,
        date: new Date().toLocaleString()
    };

    journals.push(newEntry);// Adds the new object to the end of the journals array
    localStorage.setItem("journals", JSON.stringify(journals)); //Converts the array into text ans stores that text inside localStorage

    alert("Journal saved.");

    titleInput.value = "";//Removes what the user typed
    entryInput.value = "";//Removes what the user typed

    window.location.href = "journal.html"
});