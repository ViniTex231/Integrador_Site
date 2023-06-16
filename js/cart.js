document.addEventListener("DOMContentLoaded", function() {
    // Pega os elementos
    var cartItems = document.querySelectorAll(".cart-content tr");
    var subtotalElement = document.querySelector(".total-price");
    var totalElement = document.querySelector(".total-price strong");
    var confirmButton = document.querySelector(".normal");

    // Atualiza SubTotal e Total
    function updateTotals() {
        var subtotal = 0;
        var total = 0;

        cartItems.forEach(function(item) {
            var priceElement = item.querySelector(".cart-price");
            var quantityElement = item.querySelector(".cart-quantity input");
            var totalItemElement = item.querySelector(".total-item");

            var price = parseFloat(priceElement.textContent.replace("R$", ""));
            var quantity = parseInt(quantityElement.value);
            var totalItem = price * quantity;

            subtotal += totalItem;
            total += totalItem;

            totalItemElement.textContent = "R$ " + totalItem.toFixed(2);
        });

        subtotalElement.textContent = "R$ " + subtotal.toFixed(2);
        totalElement.textContent = "R$ " + total.toFixed(2);
    }

    // Cria um escutador para atualizar os valores totais quando a quantidade alterar
    cartItems.forEach(function(item) {
        var quantityElement = item.querySelector(".cart-quantity input");
        quantityElement.addEventListener("change", updateTotals);
    });

    // Remove o item do carrinho
    cartItems.forEach(function(item) {
        var removeButton = item.querySelector(".cart-remove");
        removeButton.addEventListener("click", function() {
            item.remove()
            updateTotals()
        });
    });

    // Chama a função no inicio
    updateTotals();
});