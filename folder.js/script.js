const exit_button = document.getElementById("exitBtn")

exit_button.addEventListener("click", ()=>{
   const answer = confirm("Are you sure you want to leave?")

    if(answer){
        alert("logged out successfully!")
        window.location.href = "login.html"

    }
})
