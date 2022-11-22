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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('product_id')

console.log(productID)

switch (productID) {
    case '1':
        document.getElementById("title").innerHTML = "Canapé";
        document.getElementById("colorLabel1").innerHTML = "Bleu";
        document.getElementById("colorLabel2").innerHTML = "Blanc";
        document.getElementById("colorLabel3").innerHTML = "Rouge";
        document.getElementById("price").innerHTML = "100 €";
        document.getElementById("description").innerHTML = "très confort";
        break;
    case '2':
        document.getElementById("title").innerHTML = "Table";
        document.getElementById("colorLabel1").innerHTML = "Marron";
        document.getElementById("colorLabel2").innerHTML = "Gris";
        document.getElementById("colorLabel3").innerHTML = "Noir";
        document.getElementById("price").innerHTML = "200 €";
        document.getElementById("description").innerHTML = "Joli";
        break;
    default:
        console.log('vide');
}