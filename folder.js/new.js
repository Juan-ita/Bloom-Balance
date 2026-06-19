const titleInput = document.getElementById("title")
const entryInput = document.getElementById("entry")
const saveBtn = document.getElementById("saveBtn")

const journals = JSON.parse(localStorage.getItem("journals")) || [];

//save
saveBtn.addEventListener("click", ()=>{
    const newEntry = {
        title: titleInput.value,
        text: entryInput.value,
        date: new Date().toLocaleString()
    };

    journals.push(newEntry);
    localStorage.setItem("journals", JSON.stringify(journals));

    alert("Journal saves.");

    titleInput.value = "";
    entryInput.value = "";

    window.location.href = "journal.html"
});