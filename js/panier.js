window.onload = function() {
    let table = document.getElementById('cart');
    let products = JSON.parse(localStorage.getItem('products'));
    let totalPrice = 0;
    for (product in products) {
        let img = products[product].image;
        let title = products[product].title;
        let price = products[product].totalPrice;
        let color = products[product].colorLabel;
        let row = table.insertRow();
        let cell = row.insertCell();
        addElement('img', img, cell, 'image');
        addElement('span', title, cell, 'title');
        addElement('span', color, cell, 'color');
        addElement('span', price + ' €', cell, 'price');
        totalPrice += price
    }
    document.getElementById('totalPrice').innerHTML = totalPrice
}

function addElement(element, text, cell, classname) {
    let elementTag = document.createElement(element);
    elementTag.setAttribute('class', classname);
    if (element == 'img') {
        elementTag.setAttribute('src', text);
    }
    let textNode = document.createTextNode(text);
    elementTag.appendChild(textNode);
    cell.appendChild(elementTag);
}

// remove product in cart
function removeProduct(productId){
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.productId !== productId );
    localStorage.setItem('products', JSON.stringify(products));
}

function removeElement(element, text, cell, classname) {
    let elementTag = document.createElement(element);
    elementTag.setAttribute('class', classname);
    if (element == 'img') {
        elementTag.setAttribute('src', text);
    }
    let textNode = document.createTextNode(text);
    elementTag.appendChild(textNode);
    cell.appendChild(elementTag);
}