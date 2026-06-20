const form = document.getElementById("user-form")
form.addEventListener("submit", function(event){ //Runs the code when the form is submitted
    event.preventDefault();//Prevents the page from reloading

 const firstName = document.getElementById("user-firstname").value;
 const lastName = document.getElementById("user-lastname").value;
 const user_name = document.getElementById("UserName").value;
 const email = document.getElementById("user-email").value;
 const password = document.getElementById("user-password").value;
 const ConfirmPassword = document.getElementById("confirm-password").value;
 const age = document.getElementById("user-age").value;



//password varification
if(password !== ConfirmPassword){
    alert("Password does not match")
    return;
}

// Age varification
if(age < 13){
    alert("You must be at least 13")
    return;
}

const userAccount = {
    firstName, lastName, user_name, email, password, age
};

localStorage.setItem('userProfile', JSON.stringify(userAccount));

alert("Welcome to Bloom & Balance!")
 window.location.href = "login.html"
})