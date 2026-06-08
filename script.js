/**
 * KASIR PWA PRO - Advanced Features
 * Written in Vanilla JS
 */

const DB_PRODUCTS = 'kasir_products';
const DB_HISTORY = 'kasir_history';
const DB_MUTATIONS = 'kasir_mutations';
const DB_USERS = 'kasir_users';

// Main App Object to avoid global scope pollution
const     app = {
    cart: [],
    products: [],
    history: [],
    mutations: [],
    users: [],
    settings: {
        storeName: 'STARBUCKS COFFEE',
        storeAddress: '1912 Pike Pl, Seattle, WA 98101',
        storeNpwp: '98-7654321',
        taxRate: 10.25
    },

    init() {
        // Load Data
        const defaultProducts = [
            // Coffee
            { id: 1, name: 'Caffe Latte', price: 4.50, category: 'Coffee', stock: 50, image: 'assets/image/caffe_latte.jpg' },
            { id: 2, name: 'Americano', price: 3.50, category: 'Coffee', stock: 100, image: 'assets/image/americano.jpg' },
            { id: 3, name: 'Caramel Macchiato', price: 5.50, category: 'Coffee', stock: 40, image: 'assets/image/caramel_macchiato.jpg' },
            { id: 4, name: 'Espresso', price: 3.00, category: 'Coffee', stock: 80, image: 'assets/image/espresso.jpg' },
            { id: 5, name: 'Mocha Frappuccino', price: 6.00, category: 'Coffee', stock: 35, image: 'assets/image/mocha_frappuccino.jpg' },
            { id: 6, name: 'Vanilla Latte', price: 5.00, category: 'Coffee', stock: 45, image: 'assets/image/vanilla_latte.jpg' },
            
            // Non-Coffee
            { id: 7, name: 'Matcha Green Tea', price: 5.50, category: 'Non-Coffee', stock: 30, image: 'assets/image/matcha.jpg' },
            { id: 8, name: 'Signature Chocolate', price: 5.00, category: 'Non-Coffee', stock: 40, image: 'assets/image/signature_chocolate.jpg' },
            { id: 9, name: 'Teavana Earl Grey', price: 4.00, category: 'Non-Coffee', stock: 60, image: 'assets/image/earl_grey.jpg' },
            { id: 10, name: 'Iced Shaken Lemon Tea', price: 4.50, category: 'Non-Coffee', stock: 55, image: 'assets/image/lemon_tea.jpg' },
            
            // Food
            { id: 11, name: 'Butter Croissant', price: 2.50, category: 'Food', stock: 20, image: 'assets/image/butter_croissant.jpg' },
            { id: 12, name: 'Almond Croissant', price: 3.50, category: 'Food', stock: 15, image: 'assets/image/croissant.jpg' },
            { id: 13, name: 'Beef Sausage & Cheese', price: 4.50, category: 'Food', stock: 10, image: 'assets/image/beef_sausage.jpg' },
            { id: 14, name: 'New York Cheesecake', price: 4.00, category: 'Food', stock: 8, image: 'assets/image/cheesecake.jpg' },
            { id: 15, name: 'Tuna Puff', price: 3.50, category: 'Food', stock: 12, image: 'assets/image/tuna_puff.jpg' },
            
            // Merchandise
            { id: 16, name: 'Starbucks Tumbler', price: 25.00, category: 'Merchandise', stock: 5, image: 'assets/image/tumbler.jpg' },
            { id: 17, name: 'Coffee Beans 250g', price: 12.00, category: 'Merchandise', stock: 15, image: 'assets/image/coffee_beans.jpg' },
            { id: 18, name: 'Starbucks Mug', price: 15.00, category: 'Merchandise', stock: 10, image: 'assets/image/Starbucks.jpeg' }
        ];

        let savedProducts = JSON.parse(localStorage.getItem(DB_PRODUCTS));
        // Force wipe logic via check for old IDR prices or user request
        if(localStorage.getItem('force_reset_v2') !== 'true') {
            localStorage.removeItem(DB_PRODUCTS);
            localStorage.removeItem(DB_HISTORY);
            localStorage.removeItem(DB_MUTATIONS);
            localStorage.removeItem('kasir_settings');
            localStorage.setItem('force_reset_v2', 'true');
            savedProducts = null;
        }

        if(!savedProducts || savedProducts.length === 0) {
            this.products = defaultProducts;
        } else {
            // Check if user still has the old Rupiah prices and reset their DB if needed
            if (savedProducts[0] && savedProducts[0].price > 1000) {
                this.products = defaultProducts;
            } else {
                this.products = savedProducts.map(p => {
                    const defaultP = defaultProducts.find(dp => dp.id === p.id);
                    if(defaultP && ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].includes(p.id) || !p.image || p.image.includes('images.unsplash.com'))) {
                        p.image = defaultP.image;
                    }
                    // Migrate category 'Makanan' to 'Food'
                    if (p.category === 'Makanan') p.category = 'Food';
                    return p;
                });
            }
        }
        localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));
        
        this.settings = JSON.parse(localStorage.getItem('kasir_settings')) || this.settings;
        this.history = JSON.parse(localStorage.getItem(DB_HISTORY)) || [];
        this.mutations = JSON.parse(localStorage.getItem(DB_MUTATIONS)) || [];
        
        // Load Users
        const defaultUsers = [{ id: 1, username: 'admin', password: '12345', role: 'Administrator' }];
        this.users = JSON.parse(localStorage.getItem(DB_USERS)) || defaultUsers;
        if(this.users.length === 0) this.users = defaultUsers;
        localStorage.setItem(DB_USERS, JSON.stringify(this.users));
        
        // Force Light Theme
        document.documentElement.setAttribute('data-theme', 'light');

        this.checkLogin();
        this.setupListeners();
        this.updateStatus();
        this.startClock();
    },

    // --- UTILITIES ---
    startClock() {
        setInterval(() => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const clockEl = document.getElementById('realtime-clock');
            if (clockEl) clockEl.innerText = now.toLocaleDateString('id-ID', options).replace(/\./g, ':');
        }, 1000);
    },

    formatCurrency(number) {
        return `$${parseFloat(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },

    debounce(fn, delay = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    },
    
    showToast(message, isError = false) {
        document.querySelectorAll('.toast').forEach(t => t.remove());
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : ''}`;
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    showModal(id) {
        document.getElementById(id).classList.add('show');
    },
    hideModal(id) {
        document.getElementById(id).classList.remove('show');
    },

    showConfirm(message, onConfirm) {
        document.getElementById('confirm-message').innerText = message;
        document.getElementById('modal-confirm').classList.add('show');
        document.getElementById('confirm-yes').onclick = () => {
            this.hideModal('modal-confirm');
            onConfirm();
        };
        document.getElementById('confirm-no').onclick = () => {
            this.hideModal('modal-confirm');
        };
    },

    // --- AUTH ---
    checkLogin() {
        if(localStorage.getItem("login") === "true"){
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("appPage").style.display = "flex";
            this.nav('dashboard');
        } else {
            document.getElementById("loginPage").style.display = "flex";
            document.getElementById("appPage").style.display = "none";
        }
    },
    login() {
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
        const validUser = this.users.find(u => u.username === user && u.password === pass);
        if(validUser){
            localStorage.setItem("login", "true");
            localStorage.setItem("logged_user", validUser.username);
            this.checkLogin();
            this.showToast(`Welcome, ${validUser.username}!`);
        } else {
            this.showToast("Wrong Username / Password!", true);
        }
    },
    
    forgotPassword() {
        Swal.fire({
            title: 'Forgot Password?',
            html: '<p style="margin-bottom:15px; font-size:1rem; color:#555;">Please contact the Starbucks IT Service Desk to securely reset your credentials.</p><strong>Email:</strong> support@starbucks.com<br><strong>Phone:</strong> 1-800-STARBUC',
            icon: 'info',
            confirmButtonText: 'Understood',
            confirmButtonColor: '#006241'
        });
    },
    logout() {
        localStorage.removeItem("login");
        this.checkLogin();
        this.showToast('Logged out successfully');
    },

    // --- NAVIGATION ---
    setupListeners() {
        // Nav links
        document.querySelectorAll('.nav-item').forEach(el => {
            el.addEventListener('click', (e) => {
                const target = el.closest('.nav-item').getAttribute('data-target');
                this.nav(target);
            });
        });

        // Search Product POS
        document.getElementById('pos-search').addEventListener('input', this.debounce((e) => {
            this.renderPOS(e.target.value);
        }, 200));
        document.getElementById('product-search').addEventListener('input', () => this.renderProducts());
        document.getElementById('history-search').addEventListener('input', () => this.renderHistory());

        // Image preview on file select
        document.getElementById('product-image').addEventListener('change', (e) => {
            const preview = document.getElementById('product-image-preview');
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = ev => {
                    preview.innerHTML = `<img src="${ev.target.result}" style="max-width:80px;max-height:80px;border-radius:8px;border:1px solid var(--border-color);">`;
                };
                reader.readAsDataURL(e.target.files[0]);
            } else {
                preview.innerHTML = '';
            }
        });

        // Network status
        window.addEventListener('online', () => this.updateStatus());
        window.addEventListener('offline', () => this.updateStatus());
    },

    nav(target) {
        // Update Active class
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        document.querySelector(`.nav-item[data-target="${target}"]`).classList.add('active');
        
        // Update Pages
        document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        // Update Topbar
        const titles = {
            'dashboard': 'Dashboard',
            'pos': 'POS',
            'produk': 'Product Master Data',
            'riwayat': 'Transaction History',
            'pengaturan': 'System Settings',
            'users': 'Employee Management'
        };
        document.getElementById('topbar-title').innerText = titles[target];

        // Call specific render functions
        if(target === 'dashboard') this.renderDashboard();
        if(target === 'pos') this.renderPOS();
        if(target === 'produk') this.renderProducts();
        if(target === 'riwayat') { this.renderHistory(); this.renderMutasiLog(); }
        if(target === 'pengaturan') this.renderSettings();
        if(target === 'users') this.renderUsers();
    },

    updateStatus() {
        const el = document.getElementById('status-indicator');
        if(navigator.onLine){
            el.innerText = "Online";
            el.style.color = "var(--primary-color)";
        } else {
            el.innerText = "Offline";
            el.style.color = "var(--danger-color)";
            this.showToast("Offline Mode", true);
        }
    },

    // --- DASHBOARD ---
    renderDashboard() {
        const todayStr = new Date().toLocaleDateString('id-ID');
        let todayRevenue = 0;
        let totalCount = this.history.length;
        let todayItemsSold = 0;

        this.history.forEach(h => {
            const hDate = new Date(h.timestamp).toLocaleDateString('id-ID');
            if(hDate === todayStr) {
                todayRevenue += h.total;
                h.items.forEach(i => { todayItemsSold += i.qty; });
            }
        });

        document.getElementById('dash-revenue').innerText = this.formatCurrency(todayRevenue);
        document.getElementById('dash-count').innerText = totalCount;
        
        const elItems = document.getElementById('dash-items');
        if(elItems) elItems.innerText = todayItemsSold;

        // Render low stock alerts
        const lowStockContainer = document.getElementById('dash-low-stock');
        if(lowStockContainer) {
            const lowStockProducts = this.products.filter(p => (p.stock || 0) <= 5);
            if(lowStockProducts.length === 0) {
                lowStockContainer.innerHTML = '<div style="color:var(--text-muted); font-size:0.9rem;">All stock levels are safe.</div>';
            } else {
                lowStockContainer.innerHTML = lowStockProducts.map(p => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px dashed var(--border-color);">
                        <div style="font-weight:500;">${p.name} <span class="badge badge-category" style="margin-left:5px;">${p.category||'Other'}</span></div>
                        <div style="color:var(--danger-color); font-weight:700;">Left: ${p.stock||0}</div>
                    </div>
                `).join('');
            }
        }

        this.renderCharts();
    },

    renderCharts() {
        // 1. Chart
        const ctx = document.getElementById('revenueChart');
        if(!ctx) return;
        
        // aggregate last 7 days
        const last7Days = [];
        const dataMap = {};
        for(let i=6; i>=0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toLocaleDateString('id-ID', {day: 'numeric', month: 'short'});
            last7Days.push(dateStr);
            dataMap[dateStr] = 0;
        }

        this.history.forEach(h => {
            const dStr = new Date(h.timestamp).toLocaleDateString('id-ID', {day: 'numeric', month: 'short'});
            if(dataMap[dStr] !== undefined) {
                dataMap[dStr] += h.total;
            }
        });

        const dataVals = last7Days.map(d => dataMap[d]);

        if(this.revenueChartInstance) {
            this.revenueChartInstance.destroy();
        }

        try {
            this.revenueChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: last7Days,
                    datasets: [{
                        label: 'Revenue ($)',
                        data: dataVals,
                        borderColor: '#006241',
                        backgroundColor: 'rgba(0, 98, 65, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { beginAtZero: true, ticks: { callback: (value) => value >= 1000 ? '$' + (value/1000).toFixed(1).replace('.0','') + 'k' : '$' + value } }
                    }
                }
            });
        } catch(e) { console.log("Chart.js not loaded yet or offline", e); }

        // 2. Top Products
        const prodCount = {};
        this.history.forEach(h => {
            h.items.forEach(item => {
                prodCount[item.name] = (prodCount[item.name] || 0) + item.qty;
            });
        });
        
        const sortedProds = Object.entries(prodCount).sort((a,b) => b[1] - a[1]).slice(0, 5);
        const listEl = document.getElementById('topProductsList');
        if(sortedProds.length === 0) {
            listEl.innerHTML = '<li style="color:var(--text-muted);">No sales data yet</li>';
        } else {
            listEl.innerHTML = sortedProds.map((p, index) => `
                <li style="display:flex; justify-content:space-between; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid var(--border-color);">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="background:var(--primary-color); color:white; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:bold;">${index+1}</span>
                        <span style="font-weight:500;">${p[0]}</span>
                    </div>
                    <span style="font-weight:bold; color:var(--primary-color);">${p[1]}x</span>
                </li>
            `).join('');
        }
    },

    // --- PRODUCT MANAGEMENT ---
    renderProducts() {
        const tbody = document.getElementById('product-table-body');
        const search = (document.getElementById('product-search').value || '').toLowerCase();
        
        let filtered = this.products;
        if(search) {
            filtered = this.products.filter(p => p.name.toLowerCase().includes(search));
        }

        if(filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted)">Product not found</td></tr>`;
            return;
        }

        tbody.innerHTML = filtered.map(p => {
            const cat = p.category || 'Other';
            const stock = p.stock || 0;
            const stockBadge = stock <= 5 ? 'badge-stock low' : 'badge-stock';
            const thumb = p.image
                ? `<img src="${p.image}" alt="" style="width:36px;height:36px;border-radius:8px;object-fit:cover;vertical-align:middle;margin-right:8px;" onerror="this.style.display='none'">`
                : '';
            
            return `
            <tr>
                <td style="font-weight:500">
                    ${thumb}${p.name}<br>
                    <span class="badge badge-category" style="margin-top:4px;">${cat}</span>
                </td>
                <td style="color:var(--primary-color); font-weight:600;">${this.formatCurrency(p.price)}</td>
                <td><span class="badge ${stockBadge}">Stock: ${stock}</span></td>
                <td style="text-align:right;">
                    <button class="btn" style="padding:6px 10px; background:rgba(0,98,65,0.1); color:var(--primary-color); font-size:0.75rem; border:1px solid rgba(0,98,65,0.2);" onclick="app.showMutasiModal(${p.id})">Stock</button>
                    <button class="btn" style="padding:6px 10px; background:var(--warning-color); color:white; font-size:0.75rem;" onclick="app.editProduct(${p.id})">Edit</button>
                    <button class="btn danger" style="padding:6px 10px; font-size:0.75rem;" onclick="app.deleteProduct(${p.id})">Delete</button>
                </td>
            </tr>
            `;
        }).join('');
    },

    readFileAsBase64(file) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.readAsDataURL(file);
        });
    },

    showProductModal() {
        document.getElementById('product-id').value = '';
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-category').value = 'Coffee';
        document.getElementById('product-stock').value = '0';
        document.getElementById('product-image').value = '';
        document.getElementById('product-image-preview').innerHTML = '';
        document.getElementById('product-modal-title').innerText = 'Add Product';
        this.showModal('modal-product');
    },

    editProduct(id) {
        const p = this.products.find(x => x.id === id);
        if(!p) return;
        document.getElementById('product-id').value = p.id;
        document.getElementById('product-name').value = p.name;
        document.getElementById('product-price').value = p.price;
        document.getElementById('product-category').value = p.category || 'Coffee';
        document.getElementById('product-stock').value = p.stock || 0;
        document.getElementById('product-image').value = '';
        document.getElementById('product-image-preview').innerHTML = p.image
            ? `<img src="${p.image}" style="max-width:80px;max-height:80px;border-radius:8px;border:1px solid var(--border-color);">`
            : '';
        document.getElementById('product-modal-title').innerText = 'Edit Product';
        this.showModal('modal-product');
    },

    async saveProduct() {
        const id = document.getElementById('product-id').value;
        const name = document.getElementById('product-name').value.trim();
        const price = parseInt(document.getElementById('product-price').value);
        const category = document.getElementById('product-category').value;
        const stock = parseInt(document.getElementById('product-stock').value) || 0;
        const fileInput = document.getElementById('product-image');
        const existingPreview = document.getElementById('product-image-preview').querySelector('img');
        let image = existingPreview ? existingPreview.src : '';

        if (fileInput.files && fileInput.files[0]) {
            image = await this.readFileAsBase64(fileInput.files[0]);
        }

        if(!name || !price) {
            this.showToast('Fill in product name and price!', true);
            return;
        }

        if(id) {
            // Edit
            const idx = this.products.findIndex(x => x.id == id);
            this.products[idx] = { id: parseInt(id), name, price, category, stock, image };
            this.showToast('Product updated');
        } else {
            // Add
            this.products.push({ id: Date.now(), name, price, category, stock, image });
            this.showToast('Product added');
        }

        localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));
        this.hideModal('modal-product');
        this.renderProducts();
        this.renderPOS(); // Refresh catalog if in POS
    },

    deleteProduct(id) {
        this.showConfirm('Are you sure you want to delete this product?', () => {
            this.products = this.products.filter(x => x.id !== id);
            localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));
            this.renderProducts();
            this.renderPOS();
            this.showToast('Product successfully deleted');
        });
    },

    // --- MUTASI STOK ---
    showMutasiModal(id) {
        const p = this.products.find(x => x.id === id);
        if(!p) return;
        document.getElementById('mutasi-product-id').value = p.id;
        document.getElementById('mutasi-product-name').value = p.name;
        document.getElementById('mutasi-current-stock').value = p.stock || 0;
        document.getElementById('mutasi-qty').value = '';
        document.getElementById('mutasi-type').value = 'in';
        document.getElementById('mutasi-note').value = '';
        this.showModal('modal-mutasi');
    },

    saveMutasi() {
        const id = parseInt(document.getElementById('mutasi-product-id').value);
        const qty = parseInt(document.getElementById('mutasi-qty').value);
        const type = document.getElementById('mutasi-type').value;
        const note = document.getElementById('mutasi-note').value.trim();

        if(!qty || qty <= 0) {
            this.showToast('Fill in adjustment quantity!', true);
            return;
        }

        const product = this.products.find(x => x.id === id);
        if(!product) return;

        if(type === 'out' && qty > (product.stock || 0)) {
            this.showToast('Insufficient stock!', true);
            return;
        }

        // Update stock
        product.stock = (product.stock || 0) + (type === 'in' ? qty : -qty);
        localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));

        // Save mutation record
        const mutation = {
            id: 'MUT-' + Date.now(),
            timestamp: Date.now(),
            productId: id,
            productName: product.name,
            type: type,
            qty: qty,
            note: note || (type === 'in' ? 'Restock' : 'Sales'),
            stockAfter: product.stock
        };

        this.mutations.unshift(mutation);
        localStorage.setItem(DB_MUTATIONS, JSON.stringify(this.mutations));

        this.hideModal('modal-mutasi');
        this.showToast('Adjustment successful');
        this.renderProducts();
        this.renderMutasiLog();
    },

    renderMutasiLog() {
        const container = document.getElementById('mutasi-log');
        const countEl = document.getElementById('mutasi-count');
        if(!container) return;

        if(countEl) countEl.innerText = this.mutations.length;

        if(this.mutations.length === 0) {
            container.innerHTML = '<div style="color:var(--text-muted);text-align:center;padding:10px;">No adjustments yet</div>';
            return;
        }

        container.innerHTML = this.mutations.slice(0, 20).map(m => {
            const isIn = m.type === 'in';
            const date = new Date(m.timestamp).toLocaleDateString('id-ID', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'});
            return `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-color);">
                <div>
                    <div style="font-weight:500;font-size:0.85rem;">${m.productName}</div>
                    <div style="font-size:0.7rem;color:var(--text-muted);">${date} · ${m.note || ''}</div>
                </div>
                <div style="text-align:right;">
                    <span style="font-weight:700;font-size:0.9rem;color:${isIn ? 'var(--primary-color)' : 'var(--danger-color)'};">${isIn ? '+' : '-'}${m.qty}</span>
                    <div style="font-size:0.65rem;color:var(--text-muted);">left ${m.stockAfter}</div>
                </div>
            </div>
            `;
        }).join('');
    },

    // --- POS & CART ---
    currentPosCategory: 'All',

    setPosCategory(cat) {
        this.currentPosCategory = cat;
        this.renderPOS(document.getElementById('pos-search').value);
    },

    renderPOS(search = '') {
        const grid = document.getElementById('pos-grid');
        const catContainer = document.getElementById('pos-categories');
        
        // Render Categories — dynamic from product data
        const catSet = new Set(this.products.map(p => p.category || 'Other'));
        const categories = ['All', ...Array.from(catSet).sort()];
        if(catContainer) {
            catContainer.innerHTML = categories.map(c => `
                <div class="category-tab ${this.currentPosCategory === c ? 'active' : ''}" onclick="app.setPosCategory('${c}')">
                    ${c}
                </div>
            `).join('');
        }

        let filtered = this.products;
        
        if(this.currentPosCategory !== 'All') {
            filtered = filtered.filter(p => (p.category || 'Other') === this.currentPosCategory);
        }

        if(search) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        }

        if(filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; color:var(--text-muted); padding:20px; text-align:center;">Product not found</div>`;
            return;
        }

        grid.innerHTML = filtered.map(p => {
            const lowStock = (p.stock || 0) <= 5;
            const initial = p.name.charAt(0).toUpperCase();
            const avatar = p.image
                ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;">${initial}</span>`
                : `<span>${initial}</span>`;
            return `
            <div class="product-card" onclick="app.addToCart(${p.id})">
                <div class="product-card-avatar">${avatar}</div>
                <div class="product-card-body">
                    <div class="product-name">${p.name}</div>
                    <div class="product-price">${this.formatCurrency(p.price)}</div>
                    <div class="product-stock-badge ${lowStock ? 'low' : ''}">Stock: ${p.stock || 0}</div>
                </div>
            </div>
            `;
        }).join('');

        this.renderCart();
    },

    addToCart(id) {
        const p = this.products.find(x => x.id === id);
        if(!p) return;

        const existing = this.cart.find(x => x.id === id);
        const currentQty = existing ? existing.qty : 0;

        if(currentQty + 1 > (p.stock || 0)) {
            this.showToast('Insufficient stock!', true);
            return;
        }

        if(existing) {
            existing.qty += 1;
            existing.total = existing.qty * existing.price;
        } else {
            this.cart.push({
                id: p.id,
                name: p.name,
                price: p.price,
                qty: 1,
                total: p.price
            });
        }
        this.renderCart();
    },

    clearCart() {
        if(this.cart.length === 0) return;
        this.showConfirm('Clear cart?', () => {
            this.cart = [];
            this.renderCart();
            this.showToast('Cart cleared');
        });
    },

    updateCartQty(id, delta) {
        const item = this.cart.find(x => x.id === id);
        if(!item) return;

        const newQty = item.qty + delta;
        if(newQty <= 0) {
            this.cart = this.cart.filter(x => x.id !== id);
            this.renderCart();
            return;
        }

        const product = this.products.find(p => p.id === id);
        if(delta > 0 && product && newQty > (product.stock || 0)) {
            this.showToast('Insufficient stock!', true);
            return;
        }

        item.qty = newQty;
        item.total = item.qty * item.price;
        this.renderCart();
    },

    renderCart() {
        const container = document.getElementById('cart-items');
        const countEl = document.getElementById('cart-count');
        let grandTotal = 0;

        if(this.cart.length === 0) {
            container.innerHTML = `<div class="cart-empty">Cart is empty</div>`;
            if(countEl) countEl.innerText = '0';
        } else {
            container.innerHTML = this.cart.map(c => {
                grandTotal += c.total;
                return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${c.name}</div>
                        <div class="cart-item-price">${this.formatCurrency(c.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="app.updateCartQty(${c.id}, -1)">−</button>
                        <span class="cart-qty">${c.qty}</span>
                        <button class="qty-btn" onclick="app.updateCartQty(${c.id}, 1)">+</button>
                    </div>
                </div>
                `;
            }).join('');
            if(countEl) countEl.innerText = this.cart.length;
        }

        document.getElementById('cart-total').innerText = this.formatCurrency(grandTotal);
        this.cartTotal = grandTotal;
    },

    // --- CHECKOUT & PRINT ---
    showCheckoutModal() {
        if(this.cart.length === 0) {
            this.showToast("Cart is empty!", true);
            return;
        }

        // Calculate Tax
        this.cartTax = Math.round(this.cartTotal * (this.settings.taxRate / 100));
        this.cartGrandTotal = this.cartTotal + this.cartTax;

        document.getElementById('checkout-total').innerText = this.formatCurrency(this.cartGrandTotal);
        document.getElementById('checkout-pay').value = '';
        document.getElementById('checkout-change').innerText = '$0.00';
        document.getElementById('checkout-change').style.color = 'var(--warning-color)';
        document.getElementById('checkout-method').value = 'Cash';

        this.showModal('modal-checkout');
        setTimeout(() => document.getElementById('checkout-pay').focus(), 100);
    },

    calculateChange() {
        const pay = parseInt(document.getElementById('checkout-pay').value) || 0;
        const change = pay - this.cartGrandTotal;
        const changeEl = document.getElementById('checkout-change');
        
        if(change < 0) {
            changeEl.innerText = 'Missing ' + this.formatCurrency(Math.abs(change));
            changeEl.style.color = 'var(--danger-color)';
        } else {
            changeEl.innerText = this.formatCurrency(change);
            changeEl.style.color = 'var(--primary-color)';
        }
    },

    processCheckout() {
        const method = document.getElementById('checkout-method').value;
        let pay = parseFloat(document.getElementById('checkout-pay').value);
        
        if(isNaN(pay)) pay = 0;
        
        if(pay < this.cartGrandTotal) {
            this.showToast("Insufficient payment amount!", true);
            return;
        }

        const change = pay - this.cartGrandTotal;
        
        // Save to History
        const transaction = {
            id: 'TRX-' + Date.now(),
            timestamp: Date.now(),
            items: [...this.cart],
            subtotal: this.cartTotal,
            tax: this.cartTax,
            total: this.cartGrandTotal,
            pay: pay,
            change: change,
            method: method
        };
        
        this.history.unshift(transaction);
        localStorage.setItem(DB_HISTORY, JSON.stringify(this.history));

        // Re-validate stock before deducting
        for (const cartItem of this.cart) {
            const product = this.products.find(p => p.id === cartItem.id);
            if (!product) {
                this.showToast(`Product "${cartItem.name}" not found!`, true);
                return;
            }
            if ((product.stock || 0) < cartItem.qty) {
                this.showToast(`Insufficient stock for "${product.name}" (${product.stock || 0} left)!`, true);
                return;
            }
        }

        // Deduct Stock
        this.cart.forEach(cartItem => {
            const product = this.products.find(p => p.id === cartItem.id);
            if(product) {
                product.stock -= cartItem.qty;
            }
        });
        localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));

        this.hideModal('modal-checkout');
        
        Swal.fire({
            title: 'Payment Successful!',
            text: 'Do you want to print the receipt?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Print Receipt',
            cancelButtonText: 'No, Thanks',
            confirmButtonColor: '#006241',
            cancelButtonColor: '#757575',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.printReceipt(transaction);
            }
        });

        // Reset Cart
        this.cart = [];
        this.renderCart();
    },

    printReceipt(trx) {
        // Update Store Profile dynamically
        const headerEl = document.querySelector('.receipt-header');
        if(headerEl) {
            headerEl.innerHTML = `
                <img src="assets/image/Starbucks.jpeg" alt="Logo" style="width: 60px; height: 60px; border-radius: 50%; filter: grayscale(100%); margin-bottom:5px;">
                <h3 style="margin:0; font-family:sans-serif; letter-spacing:1px; text-transform:uppercase;">${this.settings.storeName}</h3>
                <p style="margin:2px 0; font-size:11px;">${this.settings.storeAddress}</p>
                <p style="margin:2px 0; font-size:11px;">NPWP: ${this.settings.storeNpwp}</p>
            `;
        }

        document.getElementById('receipt-date').innerText = new Date(trx.timestamp).toLocaleString('id-ID');
        document.getElementById('receipt-id').innerText = trx.id;
        document.getElementById('receipt-method').innerText = (trx.method || 'Cash').toUpperCase();
        
        document.getElementById('receipt-items').innerHTML = trx.items.map(i => `
            <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                <span>${i.qty}x ${i.name}</span>
                <span>${this.formatCurrency(i.total)}</span>
            </div>
        `).join('');

        // Dynamic tax label
        const taxLabelEl = document.querySelector('.receipt-total .receipt-item:nth-child(2) span:first-child');
        if(taxLabelEl) taxLabelEl.innerText = `Tax (${this.settings.taxRate}%)`;
        const taxAmtEl = document.getElementById('receipt-tax');
        if(taxAmtEl) taxAmtEl.innerText = trx.tax > 0 ? this.formatCurrency(trx.tax) : 'Incl.';

        document.getElementById('receipt-total-amt').innerText = this.formatCurrency(trx.subtotal || trx.total);
        document.getElementById('receipt-pay-amt').innerText = this.formatCurrency(trx.pay);
        document.getElementById('receipt-change-amt').innerText = this.formatCurrency(trx.change);

        // Call browser print
        window.print();
    },

    // --- HISTORY & EXPORT ---
    toggleHistoryDetail(id) {
        const el = document.getElementById('history-item-' + id);
        if(el) {
            el.classList.toggle('open');
        }
    },

    renderHistory() {
        const container = document.getElementById('history-list');
        const search = (document.getElementById('history-search').value || '').toLowerCase();
        
        let filtered = this.history;
        if(search) {
            filtered = this.history.filter(h => h.id.toLowerCase().includes(search) || new Date(h.timestamp).toLocaleDateString('id-ID').includes(search));
        }

        if(filtered.length === 0) {
            container.innerHTML = `<div class="card" style="text-align:center; color:var(--text-muted)">History not found</div>`;
            return;
        }

        container.innerHTML = filtered.map(h => `
            <div class="history-item" id="history-item-${h.id}" onclick="app.toggleHistoryDetail('${h.id}')">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                    <div>
                        <div style="font-weight:600; color:var(--text-main)">${h.id}</div>
                        <div style="font-size:0.8rem; color:var(--text-muted)">${new Date(h.timestamp).toLocaleString('en-US')}</div>
                    </div>
                    <div style="text-align:right">
                        <div style="font-weight:700; font-size:1.1rem; color:var(--primary-color);">${this.formatCurrency(h.total)}</div>
                        <span class="badge badge-success" style="margin-top:5px;">Paid</span>
                    </div>
                </div>
                <div class="history-detail">
                    <div style="font-weight:600; margin-bottom:10px;">Order Details:</div>
                    ${h.items.map(i => `
                        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:5px;">
                            <span>${i.name} x${i.qty}</span>
                            <span style="color:var(--text-muted)">${this.formatCurrency(i.total)}</span>
                        </div>
                    `).join('')}
                    <div style="border-top:1px dashed var(--border-color); margin-top:10px; padding-top:10px; display:flex; justify-content:space-between; font-size:0.85rem;">
                        <span>Cash: ${this.formatCurrency(h.pay)}</span>
                        <span>Change: ${this.formatCurrency(h.change)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    exportCSV() {
        if(this.history.length === 0) {
            this.showToast('No data to export!', true);
            return;
        }
        
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "ID,Date,Total Amount,Method,Items\n";
        
        this.history.forEach(h => {
            const dateStr = new Date(h.timestamp).toLocaleString('en-US').replace(/,/g, '');
            const itemStr = h.items.map(i => `${i.qty}x ${i.name}`).join('; ');
            csvContent += `${h.id},${dateStr},${h.total},${h.method||'Cash'},"${itemStr}"\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `POS_Report_${new Date().toLocaleDateString('en-US')}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.showToast("Downloaded successfully");
    },

    // --- SETTINGS ---
    renderSettings() {
        document.getElementById('setting-store-name').value = this.settings.storeName;
        document.getElementById('setting-store-address').value = this.settings.storeAddress;
        document.getElementById('setting-store-npwp').value = this.settings.storeNpwp;
        document.getElementById('setting-tax-rate').value = this.settings.taxRate;
    },

    saveSettings() {
        this.settings.storeName = document.getElementById('setting-store-name').value;
        this.settings.storeAddress = document.getElementById('setting-store-address').value;
        this.settings.storeNpwp = document.getElementById('setting-store-npwp').value;
        this.settings.taxRate = parseFloat(document.getElementById('setting-tax-rate').value) || 0;
        
        localStorage.setItem('kasir_settings', JSON.stringify(this.settings));
        this.showToast('Settings successfully saved!');
    },

    resetHistory() {
        this.showConfirm('Are you absolutely sure you want to wipe all transaction history and stock adjustments? This action CANNOT be undone.', () => {
            // Clear history and mutations
            this.history = [];
            this.mutations = [];
            localStorage.removeItem(DB_HISTORY);
            localStorage.removeItem(DB_MUTATIONS);
            
            // Re-render everything
            this.renderHistory();
            this.renderMutasiLog();
            this.renderDashboard();
            this.showToast('All transaction history wiped completely', true);
        });
    },

    // --- USER MANAGEMENT ---
    renderUsers() {
        const tbody = document.getElementById('user-table-body');
        if (!tbody) return;
        tbody.innerHTML = '';
        this.users.forEach(u => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${u.id}</td>
                <td><strong>${u.username}</strong></td>
                <td><span class="badge ${u.role === 'Administrator' ? 'low' : ''}" style="background: ${u.role === 'Administrator' ? 'var(--danger-color)' : 'var(--primary-color)'}; color: white;">${u.role}</span></td>
                <td>
                    <button class="btn" style="padding:6px 10px; background:var(--warning-color); color:white; font-size:0.75rem;" onclick="app.openUserModal(${u.id})">Edit</button>
                    ${u.id !== 1 ? `<button class="btn danger" style="padding:6px 10px; font-size:0.75rem;" onclick="app.deleteUser(${u.id})">Delete</button>` : ''}
                </td>
            `;
            tbody.appendChild(tr);
        });
    },
    openUserModal(id = null) {
        const title = document.getElementById('user-modal-title');
        const idInput = document.getElementById('user-id');
        const usernameInput = document.getElementById('user-username');
        const passwordInput = document.getElementById('user-password');
        const roleInput = document.getElementById('user-role');
        
        if (id) {
            const u = this.users.find(x => x.id === id);
            title.innerText = 'Edit Employee';
            idInput.value = u.id;
            usernameInput.value = u.username;
            passwordInput.value = u.password;
            roleInput.value = u.role;
            if (u.id === 1) {
                usernameInput.disabled = true;
                roleInput.disabled = true;
            } else {
                usernameInput.disabled = false;
                roleInput.disabled = false;
            }
        } else {
            title.innerText = 'Add Employee';
            idInput.value = '';
            usernameInput.value = '';
            passwordInput.value = '';
            roleInput.value = 'Cashier';
            usernameInput.disabled = false;
            roleInput.disabled = false;
        }
        this.showModal('modal-user');
    },
    saveUser(e) {
        e.preventDefault();
        const id = document.getElementById('user-id').value;
        const username = document.getElementById('user-username').value;
        const password = document.getElementById('user-password').value;
        const role = document.getElementById('user-role').value;
        
        if (!username || !password) return this.showToast('Username and Password required', true);
        
        if (id) {
            // Edit
            const u = this.users.find(x => x.id == id);
            if (u.id !== 1) {
                u.username = username;
                u.role = role;
            }
            u.password = password;
            this.showToast('Employee updated');
        } else {
            // Add
            if (this.users.find(x => x.username === username)) return this.showToast('Username already exists', true);
            const newId = this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
            this.users.push({ id: newId, username, password, role });
            this.showToast('Employee added');
        }
        
        localStorage.setItem(DB_USERS, JSON.stringify(this.users));
        this.hideModal('modal-user');
        this.renderUsers();
    },
    deleteUser(id) {
        if (id === 1) return this.showToast('Cannot delete main admin', true);
        this.showConfirm('Are you sure you want to delete this employee?', () => {
            this.users = this.users.filter(u => u.id !== id);
            localStorage.setItem(DB_USERS, JSON.stringify(this.users));
            this.renderUsers();
            this.showToast('Employee deleted');
        });
    }
};

// Start App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// SERVICE WORKER
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered!'))
            .catch(err => console.log('SW error', err));
    });
}
