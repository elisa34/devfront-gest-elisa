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
        addElement('h5', title, cell, 'title');
        addElement('span', price, cell, 'price');
        addElement('span', color, cell, 'color');
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