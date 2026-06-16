const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const typedEmail = document.getElementById('login-email').value;
    const typedPassword = document.getElementById('login-password').value;

    //Fetch the saved account from the localstorage
    const savedData = localStorage.getItem('userProfile');

    //Check if account actualy exists
    if (savedData === null){
        alert('No account found! Please sign it first.');
        return;
    }

    const registeredUser = JSON.parse(savedData);

    //Compare what they typed with what was registered
    if(typedEmail === registeredUser.email && typedPassword === registeredUser.password){
      alert('Login was a success! Welcome back');
      window.location.href = 'dashboard.html'
    }else{
        alert('Incorrect email or password please try again!')
    }
})