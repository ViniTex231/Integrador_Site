if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready();
}

function ready(){
    // Remove items
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }
    // Add to Cart
    var addCart = document.getElementsByClassName("add-cart")
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }    
}


// Remove Items from Cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked = document.getElementById("item1");
    buttonClicked.remove();
    updatetotal();
}

// Quantity Changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal();
}
// Add To Cart
function addCartClicked(event){
    var button = event.target
    shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("single-pro-image")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();   
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add("cart-box")
    var cartItems = document.getElementsByClassName("cart-content")[0]
    var cartItemsNames = cartItems.getElementsByClassName("product-title")
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title) {
            alert("You have already add this item to cart");
            return;
        }    
    }
    var cartBoxContent = `
                    <tr id="item1">
                        <td><button class="cart-remove"><i class='bx bxs-message-rounded-minus'></i></button></td>
                        <td><img src="${productImg}" alt=""></td>
                        <td>Kart Kids</td>
                        <td class="cart-price">R$ 130</td>
                        <td class="cart-quantity"><input type="number" value="1" min="0"></td>
                        <td class="total-item">R$ 0</td>
                    </tr>`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
}    


// Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0]
    var cartBoxes = cartContent.getElementById("item1")
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var price = parseFloat(priceElement.innerText.replace("R$", ""));
        var quantity = quantityElement.value
        total = total + (price * quantity);

        document.getElementsByClassName("total-price")[0].innerText = 'R$' + total;
    }

}
