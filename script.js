let cartCount = 0;

function addToCart() {
    cartCount += 1;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Item added to cart!");
    // Initialize cart count
let cartCount = 0;

// Function to add a product to the cart
function addToCart() {
    // Increment the cart count
    cartCount++;
    
    // Update the cart count display
    document.getElementById('cart-count').textContent = cartCount;
}

// JavaScript to handle click events on each product card
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('h3').innerText;
            alert(You selected, ${productName}!);
        });
    });
});
}