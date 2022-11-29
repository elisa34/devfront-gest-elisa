// Contact form in Local Storage
function saveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    localStorage.setItem("Nom Prenom",name);
    localStorage.setItem("Sujet",subject);
    localStorage.setItem("Email",email);
    localStorage.setItem("Message",message);
}