const username = document.querySelector("#username");
const signoutBtn = document.querySelector("#signout");
// const userEmail = document.querySelector("#useremail");

let userCreds = JSON.parse(localStorage.getItem("user-creds"));
let userInfo = JSON.parse(localStorage.getItem("user-info"));



let Signout = () => {
    localStorage.removeItem("user-creds");
    localStorage.removeItem("user-info");
    window.location.href = 'index.html'
}

let CheckCred = () => {
    if (!localStorage.getItem("user-cred")) {
        window.location.href = 'signIn.html'
    } else {
        username.innerText = userInfo.firstname + userInfo.lastname;
    }
}
// window.addEventListener('load', CheckCred)
signoutBtn.addEventListener('click', Signout);


