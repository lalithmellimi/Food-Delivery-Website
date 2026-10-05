function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(function(item) {
        count += item.quantity;
    });

    let cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }
}


function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem =
        cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(name + " added to cart!");
}


function openCategory(category) {

    localStorage.setItem(
        "selectedCategory",
        category
    );

    window.location.href = "menu.html";
}


function goToCheckout() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "checkout.html";
}


updateCartCount();