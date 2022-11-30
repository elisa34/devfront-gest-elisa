// Load cart with all products
window.onload = function() {
    let table = document.getElementById('cart');
    let products = JSON.parse(localStorage.getItem('products'));
    let total = 0;
    let product = 0;

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
        addElement('span', title + ' ' + color, div, 'title');
        addElement('span', 'Price unitaire : ' + price + ' €', div, 'title');
        addElement('span', 'Quantité : ' + quantity, div, 'title');
        let quantiyDiv = addElement('div', '', div, 'quantity');
        addElement('button', '-', quantiyDiv, 'minus', 'changeQuantity(' + products[product].productID + ',' + 0 + ')');
        addElement('button', '+', quantiyDiv, 'more', 'changeQuantity(' + products[product].productID + ',' + 1 + ')');
        addElement('span', totalPrice + ' €', cell, 'price');
        addElement('img', '../img/trash-solid.png', cell, 'trash', 'removeProduct(' + products[product].productID + ')');
        total += totalPrice
    }
    document.getElementById('total').innerHTML = total
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

// Remove product in cart
function removeProduct(productID){
    let products = JSON.parse(localStorage.getItem('products'));
    let newProduct = products.filter(element => element.productID != productID);
    localStorage.setItem('products', JSON.stringify(newProduct));
    location.reload()
}

// Change product quantity in cart
function changeQuantity(productID, button) {
    let products = JSON.parse(localStorage.getItem('products'));
    let product = products.find(element => element.productID == productID);

    if (button === 1) {
        product.totalPrice += parseInt(product.price)
        product.quantity += 1
    } else {
        if (product.quantity > 1) {
            product.totalPrice -= parseInt(product.price)
            product.quantity -= 1
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    location.reload()
}