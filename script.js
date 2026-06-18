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