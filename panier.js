//Panier
function addItem() {
    // Get current contents of cart
 let cart = document.getElementById("cart");
 
 // New content to add
 let newContent = document.getElementById("new content");
 
 // Create a new cart element
 let cartElement = document.createElement("ul");
 
 // Add the new content to the cart, then append it to the cart section
 cartElement.innerHTML = newContent;
 cart.appendChild(cartElement);
 
 }
 
 ///test 
 class Basket {
    constructor() {
       let basket = localStorage.getItem("basket");
       if (basket == null) {
          this.basket = [];
       } else {
          this.basket = JSON.parse(basket);
       }
    }
 
    save () {
       localStorage.setItem("basket", JSON.stringify(this.basket));
    }
 
    add(product) {
       let foundProduct = this.basket.find(p => p.id == product.id);
       if (foundProduct != undefined) {
          foundProduct.quantity++;
       } else {
          product.quantity = 1;
          this.basket.push (product);
       }
          this.saveBasket ();
       }
    remove (product) {
       this.basket = this.basket.filter (p => p.id != product.id);
       this.saveBasket();
    }
 }
 
 changeQuantity(product, quantity) {
    let foundProduct = this.basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
       foundProduct.quantity += quantity;
       if (foundProduct.quantity <= 0) {
          this.removefromBasket(foundProduct);
       } else {
          this.saveBasket ();
       }
    }
 }
 
 getNumberProduct () {
    let number = 0;
    for (let product of this.basket) {
    number += product.quantity;
    }
    return number;
 }
 
 getTotalPrice () {
    let total = 0;
    for (let product of this.basket) {
       total += product.quantity * product.price;
    }
    return total;
 }
 