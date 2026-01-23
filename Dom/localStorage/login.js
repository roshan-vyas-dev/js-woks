
function login() {
    const username = document.getElementById('uname').value;
    console.log(username);

    // add username to local storage
    localStorage.setItem("uname", username);

    // redirect to home

    window.location = "./logout.html"
}


