if (document.readyState == "Loading"){
    document.addEventListener("DOMContentLoaded")
}

const removeProductButtons = document.getElementsByClassName("remove-product-button")
for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.parentElement.remove()
        updateTotal()
        
    })
}

function updateTotal(){
    let totalAmount = 0
    const cartProducts = document.getElementsByClassName("cart-product")
    for (var i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$ ", "")
        const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
        totalAmount += productPrice * productQuantity
    }
    document.querySelector(".total-price").innerText = "R$" + totalAmount
}
