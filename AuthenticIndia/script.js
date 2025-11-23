document.addEventListener('DOMContentLoaded', () => {
    const viewToggleBtn = document.getElementById('view-toggle');
    const mapView = document.getElementById('map-view');
    const categoryView = document.getElementById('category-view');
    const toggleText = viewToggleBtn.querySelector('.text');
    const toggleIcon = viewToggleBtn.querySelector('.icon');

    // View Toggle Logic
    let isMapView = true;
    viewToggleBtn.addEventListener('click', () => {
        isMapView = !isMapView;
        if (isMapView) {
            mapView.classList.remove('hidden');
            mapView.classList.add('active');
            categoryView.classList.remove('active');
            categoryView.classList.add('hidden');
            toggleText.textContent = 'Switch to Categories';
            toggleIcon.textContent = '📦';
        } else {
            categoryView.classList.remove('hidden');
            categoryView.classList.add('active');
            mapView.classList.remove('active');
            mapView.classList.add('hidden');
            toggleText.textContent = 'Switch to Map';
            toggleIcon.textContent = '🗺️';
        }
    });

    // Mock Data - Comprehensive State Data with Greetings
    const stateData = {
        'ap': {
            name: 'Andhra Pradesh',
            greeting: 'Namaskaram! 🙏',
            description: 'The Rice Bowl of India, famous for its fiery Guntur chillies and turmeric.',
            products: [
                { name: 'Guntur Sannam Chilli', type: 'Spice', img: '🌶️', price: 250 },
                { name: 'Turmeric', type: 'Spice', img: '🟡', price: 180 },
                { name: 'Tamarind', type: 'Spice', img: '🟤', price: 120 }
            ]
        },
        'kl': {
            name: 'Kerala',
            greeting: 'Namaskaram! 🌴',
            description: 'God\'s Own Country, the land of spices like cardamom, pepper, and cinnamon.',
            products: [
                { name: 'Alleppey Green Cardamom', type: 'Spice', img: '🌿', price: 1200 },
                { name: 'Tellicherry Black Pepper', type: 'Spice', img: '⚫', price: 450 },
                { name: 'Malabar Cinnamon', type: 'Spice', img: '🟫', price: 320 },
                { name: 'Cloves', type: 'Spice', img: '🌰', price: 680 }
            ]
        },
        'rj': {
            name: 'Rajasthan',
            greeting: 'Khamma Ghani! 🏰',
            description: 'The Land of Kings, known for Mathania chillies and aromatic spices.',
            products: [
                { name: 'Mathania Chilli', type: 'Spice', img: '🌶️', price: 380 },
                { name: 'Cumin (Jeera)', type: 'Spice', img: '🟤', price: 220 },
                { name: 'Fenugreek (Methi)', type: 'Spice', img: '🌾', price: 150 }
            ]
        },
        'jk': {
            name: 'Jammu & Kashmir',
            greeting: 'Aadab! ❄️',
            description: 'Crown of India, home to the world\'s finest Saffron and dry fruits.',
            products: [
                { name: 'Kashmiri Saffron (Kesar)', type: 'Spice', img: '🌸', price: 8500 },
                { name: 'Kashmiri Walnuts', type: 'Dry Fruit', img: '🌰', price: 850 },
                { name: 'Almonds', type: 'Dry Fruit', img: '🥜', price: 720 },
                { name: 'Kashmiri Chilli', type: 'Spice', img: '🌶️', price: 420 }
            ]
        },
        'tn': {
            name: 'Tamil Nadu',
            greeting: 'Vanakkam! 🛕',
            description: 'Land of temples and aromatic spices, famous for Chettinad masala.',
            products: [
                { name: 'Chettinad Pepper', type: 'Spice', img: '⚫', price: 380 },
                { name: 'Star Anise', type: 'Spice', img: '⭐', price: 290 },
                { name: 'Curry Leaves', type: 'Herb', img: '🌿', price: 80 },
                { name: 'Tamarind', type: 'Spice', img: '🟤', price: 110 }
            ]
        },
        'ka': {
            name: 'Karnataka',
            greeting: 'Namaskara! ☕',
            description: 'Coffee country with rich spice heritage from Coorg and Malnad regions.',
            products: [
                { name: 'Coorg Cardamom', type: 'Spice', img: '🌿', price: 1100 },
                { name: 'Black Pepper', type: 'Spice', img: '⚫', price: 420 },
                { name: 'Nutmeg', type: 'Spice', img: '🥜', price: 580 },
                { name: 'Vanilla', type: 'Spice', img: '🌸', price: 1500 }
            ]
        },
        'mh': {
            name: 'Maharashtra',
            greeting: 'Namaskar! 🌊',
            description: 'Home to Kolhapuri spices and the famous Nashik onions.',
            products: [
                { name: 'Kolhapuri Chilli', type: 'Spice', img: '🌶️', price: 340 },
                { name: 'Goda Masala', type: 'Spice Mix', img: '🟤', price: 280 },
                { name: 'Kokum', type: 'Spice', img: '🔴', price: 320 }
            ]
        },
        'gj': {
            name: 'Gujarat',
            greeting: 'Kem Cho! 🦁',
            description: 'Land of diverse flavors, known for fennel, sesame, and unique spice blends.',
            products: [
                { name: 'Fennel Seeds (Saunf)', type: 'Spice', img: '🌾', price: 180 },
                { name: 'Sesame Seeds (Til)', type: 'Spice', img: '⚪', price: 160 },
                { name: 'Asafoetida (Hing)', type: 'Spice', img: '🟡', price: 950 }
            ]
        },
        'wb': {
            name: 'West Bengal',
            greeting: 'Nomoshkar! 🐟',
            description: 'Famous for Darjeeling tea and the five-spice blend Panch Phoron.',
            products: [
                { name: 'Panch Phoron Mix', type: 'Spice Mix', img: '🌾', price: 190 },
                { name: 'Mustard Seeds', type: 'Spice', img: '🟡', price: 140 },
                { name: 'Bay Leaves', type: 'Herb', img: '🍃', price: 120 }
            ]
        },
        'up': {
            name: 'Uttar Pradesh',
            greeting: 'Namaste! 🕌',
            description: 'The heartland known for aromatic spices and traditional masalas.',
            products: [
                { name: 'Garam Masala', type: 'Spice Mix', img: '🟤', price: 240 },
                { name: 'Coriander Seeds', type: 'Spice', img: '🌾', price: 130 },
                { name: 'Fennel', type: 'Spice', img: '🌿', price: 170 }
            ]
        },
        'mp': {
            name: 'Madhya Pradesh',
            greeting: 'Namaste! 🏛️',
            description: 'Heart of India, known for its unique tribal spices and forest produce.',
            products: [
                { name: 'Coriander', type: 'Spice', img: '🌾', price: 125 },
                { name: 'Garlic', type: 'Spice', img: '🧄', price: 90 },
                { name: 'Ginger', type: 'Spice', img: '🫚', price: 110 }
            ]
        },
        'pb': {
            name: 'Punjab',
            greeting: 'Sat Sri Akal! 🌾',
            description: 'Land of five rivers, famous for aromatic spices and dried fruits.',
            products: [
                { name: 'Kasuri Methi', type: 'Herb', img: '🌿', price: 180 },
                { name: 'Carom Seeds (Ajwain)', type: 'Spice', img: '🌾', price: 160 },
                { name: 'Dried Dates', type: 'Dry Fruit', img: '🌰', price: 380 }
            ]
        },
        'hr': {
            name: 'Haryana',
            greeting: 'Namaste! 🌾',
            description: 'Agricultural heartland with quality mustard and spice production.',
            products: [
                { name: 'Mustard Seeds', type: 'Spice', img: '🟡', price: 135 },
                { name: 'Cumin', type: 'Spice', img: '🟤', price: 210 },
                { name: 'Coriander', type: 'Spice', img: '🌾', price: 120 }
            ]
        },
        'or': {
            name: 'Odisha',
            greeting: 'Namaskar! 🏖️',
            description: 'Coastal state known for unique temple spices and turmeric.',
            products: [
                { name: 'Turmeric', type: 'Spice', img: '🟡', price: 175 },
                { name: 'Mustard', type: 'Spice', img: '🟡', price: 130 },
                { name: 'Panch Phutana', type: 'Spice Mix', img: '🌾', price: 185 }
            ]
        },
        'as': {
            name: 'Assam',
            greeting: 'Nomoskar! 🍵',
            description: 'Land of tea gardens and aromatic spices from the Northeast.',
            products: [
                { name: 'Bhut Jolokia (Ghost Pepper)', type: 'Spice', img: '🌶️', price: 1200 },
                { name: 'Ginger', type: 'Spice', img: '🫚', price: 105 },
                { name: 'Turmeric', type: 'Spice', img: '🟡', price: 165 }
            ]
        },
        'tg': {
            name: 'Telangana',
            greeting: 'Namaskaram! 🏰',
            description: 'Known for its rich spice heritage and Hyderabadi flavors.',
            products: [
                { name: 'Red Chilli', type: 'Spice', img: '🌶️', price: 260 },
                { name: 'Coriander', type: 'Spice', img: '🌾', price: 125 },
                { name: 'Cumin', type: 'Spice', img: '🟤', price: 215 }
            ]
        },
        'ga': {
            name: 'Goa',
            greeting: 'Susegad! 🏖️',
            description: 'Coastal paradise famous for kokum and unique spice blends.',
            products: [
                { name: 'Kokum', type: 'Spice', img: '🔴', price: 340 },
                { name: 'Cashew Nuts', type: 'Dry Fruit', img: '🥜', price: 650 },
                { name: 'Black Pepper', type: 'Spice', img: '⚫', price: 410 }
            ]
        },
        'hp': {
            name: 'Himachal Pradesh',
            greeting: 'Namaste! 🏔️',
            description: 'Mountain state known for apples and aromatic herbs.',
            products: [
                { name: 'Dried Apples', type: 'Dry Fruit', img: '🍎', price: 480 },
                { name: 'Walnuts', type: 'Dry Fruit', img: '🌰', price: 820 },
                { name: 'Pine Nuts', type: 'Dry Fruit', img: '🥜', price: 1400 }
            ]
        },
        'jh': {
            name: 'Jharkhand',
            greeting: 'Johar! 🌳',
            description: 'Tribal heartland with unique forest spices and herbs.',
            products: [
                { name: 'Turmeric', type: 'Spice', img: '🟡', price: 170 },
                { name: 'Ginger', type: 'Spice', img: '🫚', price: 100 },
                { name: 'Tamarind', type: 'Spice', img: '🟤', price: 115 }
            ]
        },
        'ct': {
            name: 'Chhattisgarh',
            greeting: 'Pranam! 🌾',
            description: 'Rice bowl with traditional tribal spices and forest produce.',
            products: [
                { name: 'Red Chilli', type: 'Spice', img: '🌶️', price: 255 },
                { name: 'Turmeric', type: 'Spice', img: '🟡', price: 168 },
                { name: 'Coriander', type: 'Spice', img: '🌾', price: 122 }
            ]
        }
    };

    // Initialize Map Interactions directly since SVG is embedded
    initMapInteractions();

    function initMapInteractions() {
        const svgObject = document.querySelector('#india-map-wrapper svg');

        if (!svgObject) {
            console.error("SVG map not found in DOM.");
            return;
        }

        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'state-tooltip';
        tooltip.style.cssText = `
            position: fixed;
            background: rgba(20, 20, 20, 0.95);
            color: var(--accent-gold);
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            border: 1px solid var(--accent-copper);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        `;
        document.body.appendChild(tooltip);

        // Add tooltips if they don't exist
        const paths = svgObject.querySelectorAll('path');
        paths.forEach(path => {
            if (!path.querySelector('title')) {
                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = path.getAttribute('name') || path.getAttribute('id');
                path.appendChild(title);
            }
        });

        // Add click event listeners to states
        paths.forEach(path => {
            path.addEventListener('click', function () {
                // Reset active state
                paths.forEach(p => p.style.fill = ''); // Clear previous inline fills if any

                const stateId = this.getAttribute('id');
                const stateName = this.getAttribute('name') || stateId; // Fallback
                handleStateClick(stateId, stateName);
            });

            // Hover effect with greeting tooltip
            path.addEventListener('mouseenter', function (e) {
                this.style.opacity = '0.8';
                this.style.cursor = 'pointer';

                const stateId = this.getAttribute('id');
                const normalizedId = stateId.toLowerCase();
                const data = stateData[normalizedId];

                if (data && data.greeting) {
                    tooltip.textContent = data.greeting;
                    tooltip.style.opacity = '1';
                }
            });

            path.addEventListener('mousemove', function (e) {
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY + 15) + 'px';
            });

            path.addEventListener('mouseleave', function () {
                this.style.opacity = '1';
                tooltip.style.opacity = '0';
            });
        });
    }

    function handleStateClick(stateId, stateName) {
        console.log("Clicked state:", stateId, stateName);

        // Normalize ID to match data keys (lowercase)
        const normalizedId = stateId.toLowerCase();
        const data = stateData[normalizedId];

        if (data) {
            updateDetailPanel(data);
            // Scroll to detail section for better UX on mobile
            const detailPanel = document.querySelector('.detail-panel');
            if (detailPanel) detailPanel.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("No data for state:", stateId);
            // Optional: Show a generic message or clear details
            const titleEl = document.getElementById('detail-state-name');
            const descEl = document.getElementById('detail-description');
            const productsEl = document.getElementById('detail-products');

            if (titleEl) titleEl.textContent = stateName;
            if (descEl) descEl.textContent = "Authentic products from " + stateName + " coming soon.";
            if (productsEl) productsEl.innerHTML = '<p>Explore our other regions for now.</p>';
        }
    }

    function updateDetailPanel(data) {
        const titleEl = document.getElementById('detail-state-name');
        const descEl = document.getElementById('detail-description');
        const productsEl = document.getElementById('detail-products');
        const detailPanel = document.getElementById('state-detail-panel');
        const introCard = document.querySelector('.intro-card');

        if (!titleEl || !descEl || !productsEl) return;

        // Hide intro card and show detail panel
        if (introCard) introCard.style.display = 'none';
        if (detailPanel) detailPanel.classList.remove('hidden');

        // Animate content change
        titleEl.style.opacity = 0;
        descEl.style.opacity = 0;
        productsEl.style.opacity = 0;

        setTimeout(() => {
            titleEl.textContent = data.name;
            descEl.textContent = data.description;

            // Render products with Buy Now options
            productsEl.innerHTML = data.products.map((product, index) => `
                <div class="product-item">
                    <div style="font-size: 2rem;">${product.img}</div>
                    <div style="flex: 1;">
                        <h4 style="color: var(--text-light); margin-bottom: 0.2rem;">${product.name}</h4>
                        <small style="color: var(--text-muted);">${product.type}</small>
                        <div style="margin-top: 0.5rem; color: var(--accent-gold); font-weight: 600;">
                            ₹${product.price}/kg
                        </div>
                    </div>
                    <div class="product-actions">
                        <select class="order-type-select" id="order-type-${index}">
                            <option value="individual">Individual (1-10 kg)</option>
                            <option value="bulk">Bulk Order (10+ kg)</option>
                        </select>
                        <button class="btn-buy-now" onclick="handleBuyNow('${product.name}', ${product.price}, '${index}')">
                            🛒 Buy Now
                        </button>
                    </div>
                </div>
            `).join('');

            titleEl.style.opacity = 1;
            descEl.style.opacity = 1;
            productsEl.style.opacity = 1;
        }, 300);
    }

    // Buy Now Handler
    window.handleBuyNow = function (productName, price, index) {
        const orderType = document.getElementById(`order-type-${index}`).value;
        const orderTypeText = orderType === 'bulk' ? 'Bulk Order' : 'Individual Order';
        const discount = orderType === 'bulk' ? 15 : 0;
        const finalPrice = discount > 0 ? price - (price * discount / 100) : price;

        alert(`🛒 Order Details:\n\nProduct: ${productName}\nOrder Type: ${orderTypeText}\nPrice: ₹${price}/kg${discount > 0 ? `\nDiscount: ${discount}%\nFinal Price: ₹${finalPrice}/kg` : ''}\n\n✅ Proceeding to checkout...`);

        // Here you would typically redirect to checkout or open a modal
        console.log('Order placed:', { productName, orderType, price, finalPrice });
    };
});
