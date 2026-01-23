
let username = localStorage.getItem('uname');
console.log(username);

head1.innerHTML = `Welcome ${username}`

function logOut() {
    localStorage.clear()
    window.location = "./index.html"
}

