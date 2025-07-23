
      // ---------------- STATE MANAGEMENT ----------------
      let currentPage = 1;
      let itemsPerPage = 12;
      let filteredProducts = [];
      let cart = JSON.parse(localStorage.getItem('geezerz_cart')) || [];
      let currentSort = 'default';
      let currentCategory = 'all';
      let currentSearch = '';

      // ---------------- DOM ELEMENTS ----------------
      const productGrid = document.getElementById('productGrid');
      const loadingGrid = document.getElementById('loadingGrid');
      const noResults = document.getElementById('noResults');
      const searchInput = document.getElementById('productSearch');
      const sortSelect = document.getElementById('sortProducts');
      const perPageSelect = document.getElementById('perPage');
      const filterBtns = document.querySelectorAll('.filter-btn');
      const cartButton = document.getElementById('cartButton');
      const cartModal = document.getElementById('cartModal');
      const closeCart = document.querySelector('.close-cart');
      const cartItemsContainer = document.getElementById('cartItems');
      const cartBadge = document.getElementById('cartBadge');
      const itemCount = document.getElementById('itemCount');
      const cartSubtotal = document.getElementById('cartSubtotal');
      const totalProducts = document.getElementById('totalProducts');
      const totalItems = document.getElementById('totalItems');
      const showingStart = document.getElementById('showingStart');
      const showingEnd = document.getElementById('showingEnd');
      const paginationControls = document.getElementById('paginationControls');

      // ---------------- INITIALIZATION ----------------
      function init() {
        updateYearInFooter();
        setupEventListeners();
        updateCartUI();
        applyFilters();
        renderProducts();
        renderPagination();
        totalProducts.textContent = 0;
        perPageSelect.value = itemsPerPage;
      }

      document.addEventListener('DOMContentLoaded', init);

      // ---------------- EVENT LISTENERS ----------------
      function setupEventListeners() {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        sortSelect.addEventListener('change', handleSort);
        perPageSelect.addEventListener('change', handlePerPageChange);
        filterBtns.forEach(btn => btn.addEventListener('click', handleCategoryFilter));
        cartButton.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);

        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeBtn = document.getElementById('closeBtn');

        if (hamburger && mobileMenu && closeBtn) {
          hamburger.addEventListener('click', () => mobileMenu.classList.remove('translate-x-full'));
          closeBtn.addEventListener('click', () => mobileMenu.classList.add('translate-x-full'));
          mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) mobileMenu.classList.add('translate-x-full');
          });
        }

        document.addEventListener('click', (e) => {
          if (!cartModal.contains(e.target) && !cartButton.contains(e.target) && cartModal.classList.contains('show')) toggleCart();
        });
      }

      // ---------------- UTILITY ----------------
      function debounce(func, wait) {
        let timeout;
        return function (...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
        };
      }

      function updateYearInFooter() {
        const yearElement = document.getElementById('year');
        if (yearElement) yearElement.textContent = new Date().getFullYear();
      }

      // ---------------- PRODUCT LISTING ----------------
      function applyFilters() {
        filteredProducts = []; // Replace with your filtering logic
      }

      function renderProducts() {
        productGrid.innerHTML = "";
        hideLoading();
        showNoResults();
      }

      function renderPagination() {
        paginationControls.innerHTML = '';
      }

      function hideLoading() {
        loadingGrid.classList.add('hidden');
        productGrid.classList.remove('hidden');
      }

      function showNoResults() {
        noResults.classList.remove('hidden');
        productGrid.classList.add('hidden');
      }

      // ---------------- HANDLERS ----------------
      function handleSearch(e) {
        currentSearch = e.target.value.toLowerCase();
        currentPage = 1;
        applyFilters();
        renderProducts();
        renderPagination();
      }

      function handleSort(e) {
        currentSort = e.target.value;
        currentPage = 1;
        applyFilters();
        renderProducts();
        renderPagination();
      }

      function handlePerPageChange(e) {
        itemsPerPage = parseInt(e.target.value);
        currentPage = 1;
        renderProducts();
        renderPagination();
      }

      function handleCategoryFilter(e) {
        filterBtns.forEach(btn => btn.classList.remove('active', 'bg-yellow-400', 'text-[#002B5C]'));
        e.target.classList.add('active', 'bg-yellow-400', 'text-[#002B5C]');
        currentCategory = e.target.dataset.category;
        currentPage = 1;
        applyFilters();
        renderProducts();
        renderPagination();
      }

      function goToPage() { }

      // ---------------- CART ----------------
      function toggleCart() {
        cartModal.classList.toggle('show');
        document.body.style.overflow = cartModal.classList.contains('show') ? 'hidden' : 'auto';
        if (cartModal.classList.contains('show')) renderCart();
      }

      function renderCart() {
        cartItemsContainer.innerHTML = `
          <div class="text-center py-12 text-gray-500">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.6m-11-4h10m-3 6a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
            <p>Your cart is empty</p>
          </div>
        `;
      }

      function updateCartUI() {
        cartBadge.classList.add('hidden');
        itemCount.textContent = 0;
        cartSubtotal.textContent = '₦0.00';
      }

      function saveCart() {
        localStorage.setItem('geezerz_cart', JSON.stringify(cart));
      }

      // ---------------- MEMBERSHIP ----------------
      function selectMembership(type) {
        document.querySelectorAll('.membership-option').forEach(option => option.classList.remove('selected'));
        document.querySelectorAll('[id$="-selected"]').forEach(indicator => indicator.classList.add('hidden'));
        const selectedOption = document.querySelector(`[onclick="selectMembership('${type}')"]`);
        selectedOption.classList.add('selected');
        document.getElementById(`${type}-selected`).classList.remove('hidden');

        const prices = { 'standard': 40, 'premium': 75, 'family': 120, 'season': 25 };
        const names = { 'standard': 'Standard Membership', 'premium': 'Premium Membership', 'family': 'Family Membership', 'season': 'Season Ticket Holder' };

        document.getElementById('membership-type').textContent = names[type];
        document.getElementById('subtotal').textContent = `₦${prices[type]}`;
        document.getElementById('total').textContent = `₦${prices[type]}`;

        if (type === 'family') {
          document.getElementById('family-members').classList.remove('hidden');
          document.getElementById('season-ticket-info').classList.add('hidden');
        } else if (type === 'season') {
          document.getElementById('season-ticket-info').classList.remove('hidden');
          document.getElementById('family-members').classList.add('hidden');
        } else {
          document.getElementById('family-members').classList.add('hidden');
          document.getElementById('season-ticket-info').classList.add('hidden');
        }
      }

      function updateGuests(change) {
        const guestElement = document.getElementById('guest-count');
        const guestSummary = document.getElementById('guest-count-summary');
        let guests = Math.max(1, parseInt(guestElement.textContent) + change);
        guestElement.textContent = guests;
        guestSummary.textContent = guests;
        const subtotal = guests * 750;
        document.getElementById('subtotal').textContent = `₦${subtotal}`;
        document.getElementById('package-total').textContent = `₦${subtotal}`;
        document.getElementById('total').textContent = `₦${(subtotal + 25).toFixed(2)}`;
      }

      function updateTicketQuantity(type, change) {
        const qtyElement = document.getElementById(`${type}-qty`);
        let qty = Math.max(0, parseInt(qtyElement.textContent) + change);
        qtyElement.textContent = qty;
        document.getElementById(`${type}-summary`).textContent = qty;

        const prices = { 'west-upper': 75, 'east-lower': 95, 'family': 120 };
        document.getElementById(`${type}-total`).textContent = `₦${qty * prices[type]}`;

        const subtotal =
          (parseInt(document.getElementById('west-upper-summary').textContent) * 75) +
          (parseInt(document.getElementById('east-lower-summary').textContent) * 95) +
          (parseInt(document.getElementById('family-summary').textContent) * 120);

        document.getElementById('subtotal').textContent = `₦${subtotal}`;
        document.getElementById('total').textContent = `₦${subtotal + 2.50}`;
      }

      // ---------------- DROPDOWN ----------------
      function toggleDropdown() {
        document.getElementById('dropdown-menu').classList.toggle('hidden');
      }

      function changeLanguage() {
        toggleDropdown();
      }

      // ---------------- WINDOW SCOPED ----------------
      window.goToPage = goToPage;
      window.selectMembership = selectMembership;
      window.updateGuests = updateGuests;
      window.updateTicketQuantity = updateTicketQuantity;
      window.toggleDropdown = toggleDropdown;
      window.changeLanguage = changeLanguage;
