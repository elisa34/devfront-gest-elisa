// Load all products and contact info
window.onload = function() {
    let table = document.getElementById('cart');
    let products = JSON.parse(localStorage.getItem('products'));
    let total = 0;
    let product = 0;

    loadContactInfo()

    for (product in products) {
        let img = products[product].image;
        let title = products[product].title;
        let price = products[product].price;
        let totalPrice = products[product].totalPrice;
        let color = products[product].colorLabel;
        let quantity = products[product].quantity;
        let row = table.insertRow();
        let cell = row.insertCell();
        addElement('img', img, cell, 'image');
        let div = addElement('div', '', cell, 'panier-info');
        addElement('span', title + ' ' + color + ' x ' + quantity, div, 'title');
        addElement('span', 'Price unitaire : ' + price + ' €', div, 'title');
        addElement('span', totalPrice + ' €', cell, 'price');
        total += totalPrice
    }
    let random = Math.floor(Math.random() * 1000);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    document.getElementById('orderRef').innerHTML = 'CO' + random + '-' + dd + mm + '-' + yyyy
    document.getElementById('total').innerHTML = total
    localStorage.clear();
}

// Add element in table
function addElement(element, text, cell, classname, clickEvent) {
    let elementTag = document.createElement(element);
    elementTag.setAttribute('class', classname);
    if (element === 'img') {
        elementTag.setAttribute('src', text);
    }
    if (clickEvent) {
        elementTag.setAttribute('onclick', clickEvent);
    }
    let textNode = document.createTextNode(text);
    elementTag.appendChild(textNode);
    cell.appendChild(elementTag);
    return elementTag;
}

// load contact info
function loadContactInfo() {
    let contactInfo = JSON.parse(localStorage.getItem('contactInfo'));

    document.getElementById("name").innerHTML = 'Nom Prénom : ' + contactInfo.name;
    document.getElementById("email").innerHTML = 'Email : ' + contactInfo.email;
    document.getElementById("subject").innerHTML = 'Sujet : ' + contactInfo.subject;
    document.getElementById("message").innerHTML = 'Message : ' + contactInfo.message;
}