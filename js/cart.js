document.addEventListener("DOMContentLoaded", function() {
    // Get all elements
    var cartItems = document.querySelectorAll(".cart-content tr");
    var subtotalElement = document.querySelector(".total-price");
    var totalElement = document.querySelector(".total-price strong");
    var confirmButton = document.querySelector(".normal");

    // Update Subtotal and Total prices
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

    // Crate a event listener for update the totals when the itens quantity updates 
    cartItems.forEach(function(item) {
        var quantityElement = item.querySelector(".cart-quantity input");
        quantityElement.addEventListener("change", updateTotals);
    });

    // Remove a item for cart
    cartItems.forEach(function(item) {
        var removeButton = item.querySelector(".cart-remove");
        removeButton.addEventListener("click", function() {
            item.remove()
            updateTotals()
        });
    });

    // Call the update function in the start
    updateTotals();
});