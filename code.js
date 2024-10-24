<script>
// JSON data
const products = [
    {
        "id": 1,
        "name": "Laptop",
        "price": 1500,
        "stock": 5,
        "image": "https://img.freepik.com/premium-psd/laptop-mock-up-1310-197.jpg"
    },
    {
        "id": 2,
        "name": "Headphones",
        "price": 100,
        "stock": 10,
        "image": "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg"
    },
    {
        "id": 3,
        "name": "Keyboard",
        "price": 58,
        "stock": 28,
        "image": "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708805.jpg"
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <p class="card-text">Stock: ${product.stock}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
}

// Function to handle adding items to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} has been added to your cart.`);
    }
}

// Display products on page load
displayProducts();
</script>
