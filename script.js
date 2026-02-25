// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 79.99,
        originalPrice: 129.99,
        rating: 4.5,
        reviews: 234,
        image: "http://static.photos/technology/640x360/1",
        description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 249.99,
        originalPrice: 299.99,
        rating: 4.8,
        reviews: 189,
        image: "http://static.photos/technology/640x360/2",
        description: "Advanced fitness tracking, heart rate monitor, GPS, and 7-day battery life. Water-resistant up to 50m.",
        badge: "New"
    },
    {
        id: 3,
        name: "Running Shoes Elite",
        category: "sports",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.6,
        reviews: 445,
        image: "http://static.photos/sport/640x360/3",
        description: "Lightweight running shoes with advanced cushioning technology and breathable mesh upper.",
        badge: "Sale"
    },
    {
        id: 4,
        name: "Modern Leather Backpack",
        category: "fashion",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.4,
        reviews: 128,
        image: "http://static.photos/minimal/640x360/4",
        description: "Genuine leather backpack with laptop compartment, multiple pockets, and adjustable straps.",
        badge: null
    },
    {
        id: 5,
        name: "4K Ultra HD Smart TV 55",
        category: "electronics",
        price: 499.99,
        originalPrice: 699.99,
        rating: 4.7,
        reviews: 892,
        image: "http://static.photos/technology/640x360/5",
        description: "Crystal clear 4K resolution with HDR, smart features, voice control, and streaming apps built-in.",
        badge: "Hot Deal"
    },
    {
        id: 6,
        name: "Organic Cotton T-Shirt",
        category: "fashion",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.3,
        reviews: 67,
        image: "http://static.photos/minimal/640x360/6",
        description: "100% organic cotton, sustainably sourced, soft and comfortable fit. Available in multiple colors.",
        badge: null
    },
    {
        id: 7,
        name: "Yoga Mat Premium",
        category: "sports",
        price: 45.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 334,
        image: "http://static.photos/wellness/640x360/7",
        description: "Extra thick 6mm mat with non-slip surface, eco-friendly material, carrying strap included.",
        badge: "Eco Friendly"
    },
    {
        id: 8,
        name: "Stainless Steel Water Bottle",
        category: "home",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.5,
        reviews: 556,
        image: "http://static.photos/minimal/640x360/8",
        description: "Insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof.",
        badge: null
    },
    {
        id: 9,
        name: "Wireless Mouse Ergonomic",
        category: "electronics",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.2,
        reviews: 223,
        image: "http://static.photos/office/640x360/9",
        description: "Ergonomic design reduces wrist strain, precision tracking, 2-year battery life, USB-C charging.",
        badge: null
    },
    {
        id: 10,
        name: "Scented Candle Set",
        category: "home",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.7,
        reviews: 189,
        image: "http://static.photos/indoor/640x360/10",
        description: "Set of 3 natural soy candles with essential oils. 40-hour burn time each, relaxing scents.",
        badge: "Gift Set"
    },
    {
        id: 11,
        name: "Fitness Tracker Band",
        category: "electronics",
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.1,
        reviews: 445,
        image: "http://static.photos/technology/640x360/11",
        description: "Track steps, calories, sleep, and heart rate. Waterproof, 10-day battery, smartphone notifications.",
        badge: "Sale"
    },
    {
        id: 12,
        name: "Leather Wallet Minimalist",
        category: "fashion",
        price: 35.99,
        originalPrice: 45.99,
        rating: 4.6,
        reviews: 298,
        image: "http://static.photos/minimal/640x360/12",
        description: "Slim profile wallet with RFID blocking, genuine leather, 8 card slots, cash compartment.",
        badge: null
    },
    {
        id: 13,
        name: "Coffee Maker Automatic",
        category: "home",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.4,
        reviews: 567,
        image: "http://static.photos/indoor/640x360/13",
        description: "Programmable coffee maker with thermal carafe, brew strength control, auto-clean feature.",
        badge: null
    },
    {
        id: 14,
        name: "Bestseller Novel Collection",
        category: "books",
        price: 59.99,
        originalPrice: 89.99,
        rating: 4.8,
        reviews: 1234,
        image: "http://static.photos/education/640x360/14",
        description: "Collection of 5 award-winning bestsellers. Hardcover editions with dust jackets included.",
        badge: "Best Seller"
    },
    {
        id: 15,
        name: "Facial Cleansing Brush",
        category: "beauty",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 334,
        image: "http://static.photos/cosmetic/640x360/15",
        description: "Sonic facial cleansing brush with multiple speeds, waterproof, rechargeable, travel case included.",
        badge: null
    },
    {
        id: 16,
        name: "Gaming Mechanical Keyboard",
        category: "electronics",
        price: 119.99,
        originalPrice: 149.99,
        rating: 4.7,
        reviews: 892,
        image: "http://static.photos/gaming/640x360/16",
        description: "RGB backlit mechanical keyboard with blue switches, programmable keys, wrist rest included.",
        badge: "Gaming"
    }
];

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    lucide.createIcons();
});

// Render Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const loading = document.getElementById('loadingState');
    const noResults = document.getElementById('noResults');
    
    // Filter products
    let filtered = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Sort products
    const sortValue = document.getElementById('sortSelect').value;
    if (sortValue === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    // Show loading
    grid.classList.add('hidden');
    loading.classList.remove('hidden');
    noResults.classList.add('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        
        if (filtered.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            grid.classList.remove('hidden');
            grid.innerHTML = filtered.map(product => `
                <div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer" onclick="openProductModal(${product.id})">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                        ${product.badge ? `<span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">${product.badge}</span>` : ''}
                        <button onclick="event.stopPropagation(); toggleWishlist(${product.id})" class="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
                            <i data-lucide="heart" class="h-4 w-4 text-gray-600"></i>
                        </button>
                    </div>
                    <div class="p-4 flex-1 flex flex-col">
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400 text-sm">
                                ${generateStars(product.rating)}
                            </div>
                            <span class="text-xs text-gray-500 ml-1">(${product.reviews})</span>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-1 line-clamp-2 cursor-pointer hover:text-blue-600" onclick="openProductModal(${product.id})">${product.name}</h3>
                        <p class="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">${product.description}</p>
                        <div class="flex items-center justify-between mt-auto">
                            <div>
                                <span class="text-xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                                ${product.originalPrice > product.price ? `<span class="text-sm text-gray-500 line-through ml-1">$${product.originalPrice.toFixed(2)}</span>` : ''}
                            </div>
                            <button onclick="addToCart(${product.id})" class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                                <i data-lucide="plus" class="h-5 w-5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            lucide.createIcons();
        }
    }, 300);
}

// Generate Star Rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i data-lucide="star" class="h-4 w-4 fill-current"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i data-lucide="star-half" class="h-4 w-4 fill-current"></i>';
        } else {
            stars += '<i data-lucide="star" class="h-4 w-4 text-gray-300"></i>';
        }
    }
    return stars;
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    
    // Update UI
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts();
}

// Search Functions
function handleSearch() {
    searchQuery = document.getElementById('searchInput').value;
    renderProducts();
    scrollToProducts();
}

function handleMobileSearch() {
    searchQuery = document.getElementById('mobileSearchInput').value;
    renderProducts();
    scrollToProducts();
}

// Sort Products
function sortProducts() {
    renderProducts();
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

function showHome() {
    currentCategory = 'all';
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('mobileSearchInput').value = '';
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart`);
    
    // Animate cart icon
    const cartBtn = document.querySelector('[onclick="toggleCart()"]');
    cartBtn.classList.add('scale-110');
    setTimeout(() => cartBtn.classList.remove('scale-110'), 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update badges
    if (totalItems > 0) {
        cartCount.classList.remove('hidden');
        cartCount.textContent = totalItems;
        cartItemCount.textContent = totalItems;
        cartEmpty.classList.add('hidden');
        cartFooter.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
        cartEmpty.classList.remove('hidden');
        cartFooter.classList.add('hidden');
    }
    
    // Render cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="flex gap-4 bg-gray-50 p-3 rounded-lg">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md">
            <div class="flex-1">
                <h4 class="font-medium text-sm text-gray-900 line-clamp-2">${item.name}</h4>
                <p class="text-blue-600 font-bold mt-1">$${item.price.toFixed(2)}</p>
                <div class="flex items-center mt-2 space-x-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
                        <i data-lucide="minus" class="h-3 w-3"></i>
                    </button>
                    <span class="text-sm font-medium w-4 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
                        <i data-lucide="plus" class="h-3 w-3"></i>
                    </button>
                    <button onclick="removeFromCart(${item.id})" class="ml-auto text-red-500 hover:text-red-700">
                        <i data-lucide="trash-2" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update totals
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${subtotal.toFixed(2)}`;
    
    lucide.createIcons();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    } else {
        overlay.classList.remove('hidden');
        setTimeout(() => sidebar.classList.add('open'), 10);
    }
}

// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
                <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg shadow-lg">
                <div class="grid grid-cols-4 gap-2">
                    <img src="${product.image}" class="rounded border-2 border-blue-600 cursor-pointer">
                    <img src="http://static.photos/minimal/200x200/${product.id + 20}" class="rounded border border-gray-300 cursor-pointer hover:border-blue-600">
                    <img src="http://static.photos/minimal/200x200/${product.id + 30}" class="rounded border border-gray-300 cursor-pointer hover:border-blue-600">
                    <img src="http://static.photos/minimal/200x200/${product.id + 40}" class="rounded border border-gray-300 cursor-pointer hover:border-blue-600">
                </div>
            </div>
            <div>
                <div class="flex items-center mb-2">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">${product.category}</span>
                    ${product.badge ? `<span class="ml-2 bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">${product.badge}</span>` : ''}
                </div>
                <h2 class="text-3xl font-bold text-gray-900 mb-2">${product.name}</h2>
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 mr-2">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="text-gray-600 text-sm">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="flex items-baseline mb-6">
                    <span class="text-3xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice > product.price ? `
                        <span class="ml-2 text-lg text-gray-500 line-through">$${product.originalPrice.toFixed(2)}</span>
                        <span class="ml-2 text-sm text-green-600 font-medium">Save ${Math.round((1 - product.price/product.originalPrice) * 100)}%</span>
                    ` : ''}
                </div>
                <p class="text-gray-600 mb-6 leading-relaxed">${product.description}</p>
                
                <div class="space-y-4 mb-6">
                    <div class="flex items-center text-sm text-gray-600">
                        <i data-lucide="truck" class="h-5 w-5 mr-2 text-green-600"></i>
                        Free delivery on orders over $50
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                        <i data-lucide="refresh-cw" class="h-5 w-5 mr-2 text-blue-600"></i>
                        30-day return policy
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                        <i data-lucide="shield-check" class="h-5 w-5 mr-2 text-purple-600"></i>
                        2-year warranty included
                    </div>
                </div>

                <div class="flex space-x-4">
                    <button onclick="addToCart(${product.id}); closeProductModal();" class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                        <i data-lucide="shopping-cart" class="h-5 w-5 mr-2"></i>
                        Add to Cart
                    </button>
                    <button class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <i data-lucide="heart" class="h-5 w-5 text-gray-600"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    lucide.createIcons();
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

function toggleWishlist(productId) {
    showToast('Added to wishlist');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    showToast('Proceeding to checkout...');
    setTimeout(() => {
        alert('Thank you for your order! This is a demo checkout.');
        cart = [];
        saveCart();
        updateCartUI();
        toggleCart();
    }, 1000);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20');
    }, 3000);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    // Simple implementation - in real app would show mobile menu
    const nav = document.querySelector('nav');
    nav.classList.toggle('bg-gray-50');
}

// Close modals on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar.classList.contains('open')) {
            toggleCart();
        }
    }
});

// Search on enter key
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
document.getElementById('mobileSearchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleMobileSearch();
});