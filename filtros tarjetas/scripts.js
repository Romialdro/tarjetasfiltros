document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
    const nameFilter = document.getElementById('nameFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const minPriceFilter = document.getElementById('minPriceFilter');
    const maxPriceFilter = document.getElementById('maxPriceFilter');
    const clearFilters = document.getElementById('clearFilters');

    let products = [
        { "name": "Producto A", "category": "Electrónica", "price": 100, "image": "https://via.placeholder.com/250x150?text=Producto+A" },
        { "name": "Producto B", "category": "Hogar", "price": 80, "image": "https://via.placeholder.com/250x150?text=Producto+B" },
        { "name": "Producto C", "category": "Electrónica", "price": 120, "image": "https://via.placeholder.com/250x150?text=Producto+C" },
        { "name": "Producto D", "category": "Hogar", "price": 150, "image": "https://via.placeholder.com/250x150?text=Producto+D" },
        { "name": "Producto E", "category": "Electrónica", "price": 100, "image": "https://via.placeholder.com/250x150?text=Producto+E" },
        { "name": "Producto F", "category": "Hogar", "price": 80, "image": "https://via.placeholder.com/250x150?text=Producto+F" },
        { "name": "Producto G", "category": "Electrónica", "price": 180, "image": "https://via.placeholder.com/250x150?text=Producto+G" },
        { "name": "Producto H", "category": "Hogar", "price": 150, "image": "https://via.placeholder.com/250x150?text=Producto+H" },
        { "name": "Producto I", "category": "Electrónica", "price": 2200, "image": "https://via.placeholder.com/250x150?text=Producto+I" },
        { "name": "Producto J", "category": "Hogar", "price": 800, "image": "https://via.placeholder.com/250x150?text=Producto+J" },
        { "name": "Producto I", "category": "Electrónica", "price": 2200, "image": "https://via.placeholder.com/250x150?text=Producto+I" },
        { "name": "Producto J", "category": "Hogar", "price": 800, "image": "https://via.placeholder.com/250x150?text=Producto+J" }
    
    ];

    const renderProducts = (products) => {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="card-content">
                    <h2>${product.name}</h2>
                    <p>Categoría: ${product.category}</p>
                    <p>Precio: $${product.price}</p>
                    <button>Comprar</button>
                </div>
            `;
            const buyButton = productCard.querySelector('button');
            buyButton.addEventListener('click', () => {
                alert('No estás logueado! Por favor, logueate antes.');
                buyButton.style.backgroundColor = 'red';
            });
            productContainer.appendChild(productCard);
        });
    };

    const filterProducts = () => {
        let filteredProducts = products;

        const name = nameFilter.value.toLowerCase();
        const category = categoryFilter.value.toLowerCase();
        const minPrice = parseFloat(minPriceFilter.value);
        const maxPrice = parseFloat(maxPriceFilter.value);

        if (name) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(name)
            );
        }

        if (category) {
            filteredProducts = filteredProducts.filter(product =>
                product.category.toLowerCase().includes(category)
            );
        }

        if (!isNaN(minPrice)) {
            filteredProducts = filteredProducts.filter(product =>
                product.price >= minPrice
            );
        }

        if (!isNaN(maxPrice)) {
            filteredProducts = filteredProducts.filter(product =>
                product.price <= maxPrice
            );
        }

        renderProducts(filteredProducts);
    };

    nameFilter.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('input', filterProducts);
    minPriceFilter.addEventListener('input', filterProducts);
    maxPriceFilter.addEventListener('input', filterProducts);

    clearFilters.addEventListener('click', () => {
        nameFilter.value = '';
        categoryFilter.value = '';
        minPriceFilter.value = '';
        maxPriceFilter.value = '';
        renderProducts(products);
    });

    renderProducts(products);
});

