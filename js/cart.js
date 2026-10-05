function displayCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems =
        document.getElementById("cartItems");

    let subtotal = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="success-message">
                <h2>Your cart is empty 🛒</h2>
                <p>Add some delicious food from our menu.</p>
                <a href="menu.html" class="btn">
                    Browse Menu
                </a>
            </div>
        `;

        document.getElementById("subtotal")
            .textContent = "0";

        document.getElementById("total")
            .textContent = "0";

        return;
    }

    cart.forEach(function(item, index) {

        let itemTotal =
            item.price * item.quantity;

        subtotal += itemTotal;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price} each</p>
                </div>

                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(${index}, -1)">
                        -
                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                </div>

                <div>
                    <strong>
                        ₹${itemTotal}
                    </strong>
                </div>

                <button
                    class="quantity-controls remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

    });

    let delivery = 40;

    let total = subtotal + delivery;

    document.getElementById("subtotal")
        .textContent = subtotal;

    document.getElementById("delivery")
        .textContent = delivery;

    document.getElementById("total")
        .textContent = total;
}


function changeQuantity(index, change) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    updateCartCount();
}


function removeItem(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    updateCartCount();
}


displayCart();