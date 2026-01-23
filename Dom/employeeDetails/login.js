
function login() {
    let username = document.getElementById('uname').value;

    console.log(username);

    localStorage.setItem('uname', username);


    window.location = "./details.html";
}

