//Formulaire de contact dans Local Storage
function saveData(){ var name = document.getElementById("name").value; 
var email = document.getElementById("email").value; 
var sujet = document.getElementById("sujet").value; 
var message = document.getElementById("message").value; 

localStorage.setItem("Nom Prenom",name); 
localStorage.setItem("Sujet",sujet); 
localStorage.setItem("Email",email); 
localStorage.setItem("Message",message); 
} 


