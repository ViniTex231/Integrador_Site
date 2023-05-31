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
}