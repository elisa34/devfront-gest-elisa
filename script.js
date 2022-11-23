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
        document.getElementById("image").src = "img/M22025406_2.png";
        document.getElementById("title").innerHTML = "Canapé confort";
        document.getElementById("colorLabel1").innerHTML = "Beige";
        document.getElementById("colorLabel2").innerHTML = "Bleu";
        document.getElementById("colorLabel3").innerHTML = "Gris";
        document.getElementById("price").innerHTML = "1399 €";
        document.getElementById("description").innerHTML = "Très confort";
        break;
    case '2':
        document.getElementById("image").src = "img/sablier-beige-en-verre-et-accessoire-en-raphia-1000-14-39-221439_2.png";
        document.getElementById("title").innerHTML = "Miroir Déco";
        document.getElementById("colorLabel1").innerHTML = "Doré";
        document.getElementById("colorLabel2").innerHTML = "Argenté";
        document.getElementById("colorLabel3").innerHTML = "Noir";
        document.getElementById("price").innerHTML = "80 €";
        document.getElementById("description").innerHTML = "Miroir déco pliable";
        break;
    case '3':
        document.getElementById("image").src = "img/M22073119_2.png";
        document.getElementById("title").innerHTML = "Table Scandinave";
        document.getElementById("colorLabel1").innerHTML = "Blanc";
        document.getElementById("colorLabel2").innerHTML = "Vert";
        document.getElementById("colorLabel3").innerHTML = "Bleu";
        document.getElementById("price").innerHTML = "249 €";
        document.getElementById("description").innerHTML = "Table Scandinave pour 4 personnes";
        break;   
    case '4':
        document.getElementById("image").src = "img/table-a-manger-ovale-8-personnes-l200-1000-15-38-155633_7.png";
        document.getElementById("title").innerHTML = "Table Ovale";
        document.getElementById("colorLabel1").innerHTML = "Bois";
        document.getElementById("colorLabel2").innerHTML = "Métal";
        document.getElementById("colorLabel3").innerHTML = "Blanc";
        document.getElementById("price").innerHTML = "479 €";
        document.getElementById("description").innerHTML = "Table ovale pour 4 personnes";
        break;  
    case '5':
        document.getElementById("image").src = "img/chaise-avec-accoudoirs-en-velours-rose-1000-8-35-216146_5.png";
        document.getElementById("title").innerHTML = "Chaise Velours";
        document.getElementById("colorLabel1").innerHTML = "Rouge";
        document.getElementById("colorLabel2").innerHTML = "Rose";
        document.getElementById("colorLabel3").innerHTML = "Beige";
        document.getElementById("price").innerHTML = "120 €";
        document.getElementById("description").innerHTML = "Chaise de bureau en velours";
        break;  
    case '6':
        document.getElementById("image").src = "img/canape-3-4-places-beige-sable-1000-6-29-223233_5.png";
        document.getElementById("title").innerHTML = "Canapé 4 places";
        document.getElementById("colorLabel1").innerHTML = "Blanc";
        document.getElementById("colorLabel2").innerHTML = "Gris";
        document.getElementById("colorLabel3").innerHTML = "Beige";
        document.getElementById("price").innerHTML = "969 €";
        document.getElementById("description").innerHTML = "Canapé 4 places design";
        break;  
    case '7':
        document.getElementById("image").src = "img/img/canape-de-jardin-3-places-avec-auvent-en-bois-d-acacia-massif-et-coussins-terracotta-1000-13-7-219398_4.jpeg";
        document.getElementById("title").innerHTML = "Canapé de jardin";
        document.getElementById("colorLabel1").innerHTML = "Orange";
        document.getElementById("colorLabel2").innerHTML = "Vert";
        document.getElementById("colorLabel3").innerHTML = "Bleu";
        document.getElementById("price").innerHTML = "749 €";
        document.getElementById("description").innerHTML = "Canapé d'exterieur pour jardin";
        break;  
    case '8':
        document.getElementById("image").src = "img/lampe-en-metal-dore-et-abat-jour-en-verre-1000-11-31-203637_2.webp";
        document.getElementById("title").innerHTML = "Vase déco";
        document.getElementById("colorLabel1").innerHTML = "Blanc";
        document.getElementById("colorLabel2").innerHTML = "Noir";
        document.getElementById("colorLabel3").innerHTML = "Gris";
        document.getElementById("price").innerHTML = "40 €";
        document.getElementById("description").innerHTML = "Vase déco à poser sur un meuble";
        break;  
    case '9':
        document.getElementById("image").src = "img/chaise-de-bureau-a-roulettes-a-bouclettes-blanches-et-metal-coloris-laiton-1000-1-2-215170_7.webp";
        document.getElementById("title").innerHTML = "Chaise roulante bureau";
        document.getElementById("colorLabel1").innerHTML = "Blanc";
        document.getElementById("colorLabel2").innerHTML = "Rose";
        document.getElementById("colorLabel3").innerHTML = "Bleu";
        document.getElementById("price").innerHTML = "99 €";
        document.getElementById("description").innerHTML = "Chaise roulante pour bureau";
        break;  
    default:
        console.log('vide');
}