document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuBtn = document.getElementById('menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    const cartBtn = document.getElementById('cart-btn');
    const cartClose = document.querySelector('.close-cart');
    const shoppingCart = document.querySelector('.shopping-cart');
    const productGrid = document.querySelector('.product-grid');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total span');
    const cartCount = document.querySelector('.cart-count');


        // Carousel Functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 seconds
    
    // Initialize carousel
    function startCarousel() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Go to specific slide
    function goToSlide(n) {
        carouselSlides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        currentSlide = (n + carouselSlides.length) % carouselSlides.length;
        
        carouselSlides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Event listeners for controls
    nextBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        nextSlide();
        startCarousel();
    });
    
    prevBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        prevSlide();
        startCarousel();
    });
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            clearInterval(slideInterval);
            goToSlide(index);
            startCarousel();
        });
    });
    
    // Start the carousel
    startCarousel();
    
    // Pause carousel on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', function() {
        startCarousel();
    });
    
    // Product Data
    const products = [
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 99.99,
            oldPrice: 129.99,
            image: 'https://media.istockphoto.com/id/1473931527/photo/hands-credit-card-and-payment-for-online-shopping-in-studio-isolated-on-a-gray-background.jpg?s=612x612&w=0&k=20&c=qdO87xQbcI4tD-PNyp9yBoLkEWZ7ThYQ1vY1oxyPvJY=',
            rating: 4,
            badge: 'Sale'
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 199.99,
            oldPrice: 249.99,
            image: "https://media.istockphoto.com/id/2100237162/photo/wedding-invitation-cards-templates-top-view-blank-paper-cards-ribbon-elegant-flowers-olive.jpg?s=612x612&w=0&k=20&c=EpYjm70nU4_wPhtZdZVic3bilECTd_uBSmPtB23SRUQ=",
            rating: 5,
            badge: 'Popular'
        },
        {
            id: 3,
            name: 'Bluetooth Speaker',
            price: 79.99,
            image: 'https://plus.unsplash.com/premium_photo-1728392520767-0b099a78ec43?q=80&w=1595&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4
        },
        {
            id: 4,
            name: 'Laptop Backpack',
            price: 49.99,
            image: 'https://plus.unsplash.com/premium_photo-1729036163578-f80877183448?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 3
        },
        {
            id: 5,
            name: 'Fitness Tracker',
            price: 59.99,
            oldPrice: 79.99,
            image: 'https://plus.unsplash.com/premium_photo-1729011776151-0b7778d329fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByZW1pbSUyMGNhcmR8ZW58MHx8MHx8fDA%3D',
            rating: 4,
            badge: 'Sale'
        },
        {
            id: 6,
            name: 'Wireless Charger',
            price: 29.99,
            image: 'https://plus.unsplash.com/premium_photo-1728313181661-5b93fbfe362a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByZW1pbSUyMGNhcmR8ZW58MHx8MHx8fDA%3D',
            rating: 4
        },
        {
            id: 7,
            name: 'Portable SSD',
            price: 129.99,
            image: 'https://media.istockphoto.com/id/1197494042/photo/businessman-checking-out-at-reception.jpg?s=612x612&w=0&k=20&c=gjxDDylqrrl3bd344XvaMBfLgcT4H9QBdoM-YNI6t4s=',
            rating: 5
        },
        {
            id: 8,
            name: 'Noise Cancelling Earbuds',
            price: 149.99,
            oldPrice: 179.99,
            image: 'https://media.istockphoto.com/id/2107503194/photo/luxury-wedding-invitation-card-mockup-with-violet-envelope-wax-seal-stamp-roses-buds-on.jpg?s=612x612&w=0&k=20&c=niRW43osKZl-ziCHtm28TNTvgm6Q-FpwdbELeJYsOtk=',
            rating: 5,
            badge: 'New'
        }
    ];
    
    // Cart Data
    let cart = [];
    
    // Toggle Mobile Menu
    menuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Toggle Search Form
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchForm.classList.toggle('active');
    });
    
    // Toggle Shopping Cart
    cartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        shoppingCart.classList.add('active');
    });
    
    cartClose.addEventListener('click', function() {
        shoppingCart.classList.remove('active');
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!shoppingCart.contains(e.target) && e.target !== cartBtn && !cartBtn.contains(e.target)) {
            shoppingCart.classList.remove('active');
        }
    });
    
    // Display Products
    function displayProducts() {
        productGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            let badge = '';
            if (product.badge) {
                badge = `<div class="product-badge">${product.badge}</div>`;
            }
            
            let oldPrice = '';
            if (product.oldPrice) {
                oldPrice = `<span>$${product.oldPrice.toFixed(2)}</span>`;
            }
            
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= product.rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            
            productCard.innerHTML = `
                ${badge}
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="stars">
                        ${stars}
                    </div>
                    <div class="price">$${product.price.toFixed(2)} ${oldPrice}</div>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to add-to-cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }
    
    // Add to Cart Function
    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
        showCartNotification();
    }
    
    // Update Cart Function
    function updateCart() {
        cartItems.innerHTML = '';
        
        let total = 0;
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="price">$${item.price.toFixed(2)}</div>
                        <div class="quantity">Quantity: ${item.quantity}</div>
                        <div class="remove-item" data-id="${item.id}">Remove</div>
                    </div>
                `;
                
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update total
        cartTotal.textContent = total.toFixed(2);
        
        // Update cart count
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }
    
    // Remove from Cart Function
    function removeFromCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }
    
    // Show Cart Notification
    function showCartNotification() {
        const notification = document.createElement('div');
        notification.classList.add('cart-notification');
        notification.textContent = 'Item added to cart!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
    
    // Initialize the page
    displayProducts();
    
    // Add cart notification styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            font-size: 1.6rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10000;
        }
        
        .cart-notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});