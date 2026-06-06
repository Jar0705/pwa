/**
 * KASIR PWA PRO - Advanced Features
 * Written in Vanilla JS
 */

const DB_PRODUCTS = 'kasir_products';
const DB_HISTORY = 'kasir_history';
const USER = "admin";
const PASS = "12345";

// Main App Object to avoid global scope pollution
const app = {
    cart: [],
    products: [],
    history: [],
    theme: 'light',

    init() {
        // Load Data
        this.products = JSON.parse(localStorage.getItem(DB_PRODUCTS)) || [
            { id: 1, name: 'Kopi Susu', price: 15000 },
            { id: 2, name: 'Indomie Goreng', price: 10000 },
            { id: 3, name: 'Es Teh Manis', price: 5000 }
        ];
        this.history = JSON.parse(localStorage.getItem(DB_HISTORY)) || [];
        
        // Load Theme
        this.theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', this.theme);

        this.checkLogin();
        this.setupListeners();
        this.updateStatus();
    },

    // --- UTILITIES ---
    formatRupiah(number) {
        return `Rp ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
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

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    },

    showModal(id) {
        document.getElementById(id).classList.add('show');
    },
    hideModal(id) {
        document.getElementById(id).classList.remove('show');
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
        if(user === USER && pass === PASS){
            localStorage.setItem("login", "true");
            this.checkLogin();
        } else {
            this.showToast("Username / Password salah!", true);
        }
    },
    logout() {
        localStorage.removeItem("login");
        this.checkLogin();
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
        document.getElementById('pos-search').addEventListener('input', (e) => {
            this.renderPOS(e.target.value);
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
            'pos': 'Kasir (POS)',
            'produk': 'Master Data Produk',
            'riwayat': 'Riwayat Transaksi'
        };
        document.getElementById('topbar-title').innerText = titles[target];

        // Call specific render functions
        if(target === 'dashboard') this.renderDashboard();
        if(target === 'pos') this.renderPOS();
        if(target === 'produk') this.renderProducts();
        if(target === 'riwayat') this.renderHistory();
    },

    updateStatus() {
        const el = document.getElementById('status-indicator');
        if(navigator.onLine){
            el.innerText = "Online";
            el.style.color = "var(--primary-color)";
        } else {
            el.innerText = "Offline";
            el.style.color = "var(--danger-color)";
            this.showToast("Mode Offline", true);
        }
    },

    // --- DASHBOARD ---
    renderDashboard() {
        const todayStr = new Date().toLocaleDateString('id-ID');
        let todayRevenue = 0;
        let totalCount = this.history.length;

        this.history.forEach(h => {
            const hDate = new Date(h.timestamp).toLocaleDateString('id-ID');
            if(hDate === todayStr) {
                todayRevenue += h.total;
            }
        });

        document.getElementById('dash-revenue').innerText = this.formatRupiah(todayRevenue);
        document.getElementById('dash-count').innerText = totalCount;
    },

    // --- PRODUCT MANAGEMENT ---
    renderProducts() {
        const tbody = document.getElementById('product-table-body');
        if(this.products.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted)">Belum ada data produk</td></tr>`;
            return;
        }

        tbody.innerHTML = this.products.map(p => `
            <tr>
                <td style="font-weight:500">${p.name}</td>
                <td style="color:var(--primary-color); font-weight:600;">${this.formatRupiah(p.price)}</td>
                <td>-</td>
                <td style="text-align:right;">
                    <button class="btn" style="padding:6px 12px; background:var(--warning-color); color:white; font-size:0.8rem;" onclick="app.editProduct(${p.id})">Edit</button>
                    <button class="btn danger" style="padding:6px 12px; font-size:0.8rem;" onclick="app.deleteProduct(${p.id})">Hapus</button>
                </td>
            </tr>
        `).join('');
    },

    showProductModal() {
        document.getElementById('product-id').value = '';
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-modal-title').innerText = 'Tambah Produk';
        this.showModal('modal-product');
    },

    editProduct(id) {
        const p = this.products.find(x => x.id === id);
        if(!p) return;
        document.getElementById('product-id').value = p.id;
        document.getElementById('product-name').value = p.name;
        document.getElementById('product-price').value = p.price;
        document.getElementById('product-modal-title').innerText = 'Edit Produk';
        this.showModal('modal-product');
    },

    saveProduct() {
        const id = document.getElementById('product-id').value;
        const name = document.getElementById('product-name').value.trim();
        const price = parseInt(document.getElementById('product-price').value);

        if(!name || !price) {
            this.showToast('Isi nama dan harga produk!', true);
            return;
        }

        if(id) {
            // Edit
            const idx = this.products.findIndex(x => x.id == id);
            this.products[idx] = { id: parseInt(id), name, price };
            this.showToast('Produk diperbarui');
        } else {
            // Add
            this.products.push({ id: Date.now(), name, price });
            this.showToast('Produk ditambahkan');
        }

        localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));
        this.hideModal('modal-product');
        this.renderProducts();
        this.renderPOS(); // Refresh catalog if in POS
    },

    deleteProduct(id) {
        if(confirm('Yakin hapus produk ini?')) {
            this.products = this.products.filter(x => x.id !== id);
            localStorage.setItem(DB_PRODUCTS, JSON.stringify(this.products));
            this.renderProducts();
            this.renderPOS();
        }
    },

    // --- POS & CART ---
    renderPOS(search = '') {
        const grid = document.getElementById('pos-grid');
        
        let filtered = this.products;
        if(search) {
            filtered = this.products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        }

        if(filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; color:var(--text-muted); padding:20px; text-align:center;">Produk tidak ditemukan</div>`;
            return;
        }

        grid.innerHTML = filtered.map(p => `
            <div class="product-card" onclick="app.addToCart(${p.id})">
                <div class="product-name">${p.name}</div>
                <div class="product-price">${this.formatRupiah(p.price)}</div>
            </div>
        `).join('');

        this.renderCart();
    },

    addToCart(id) {
        const p = this.products.find(x => x.id === id);
        if(!p) return;

        const existing = this.cart.find(x => x.id === id);
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

    updateCartQty(id, delta) {
        const item = this.cart.find(x => x.id === id);
        if(!item) return;
        
        item.qty += delta;
        if(item.qty <= 0) {
            this.cart = this.cart.filter(x => x.id !== id);
        } else {
            item.total = item.qty * item.price;
        }
        this.renderCart();
    },

    renderCart() {
        const container = document.getElementById('cart-items');
        let grandTotal = 0;

        if(this.cart.length === 0) {
            container.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding-top:20px;">Keranjang kosong</div>`;
        } else {
            container.innerHTML = this.cart.map(c => {
                grandTotal += c.total;
                return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${c.name}</div>
                        <div class="cart-item-price">${this.formatRupiah(c.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="app.updateCartQty(${c.id}, -1)">-</button>
                        <span style="font-weight:600; font-size:0.9rem; min-width:15px; text-align:center;">${c.qty}</span>
                        <button class="qty-btn" onclick="app.updateCartQty(${c.id}, 1)">+</button>
                    </div>
                </div>
                `;
            }).join('');
        }

        document.getElementById('cart-total').innerText = this.formatRupiah(grandTotal);
        this.cartTotal = grandTotal; // store globally for checkout
    },

    // --- CHECKOUT & PRINT ---
    showCheckoutModal() {
        if(this.cart.length === 0) {
            this.showToast("Keranjang kosong!", true);
            return;
        }
        document.getElementById('checkout-total').innerText = this.formatRupiah(this.cartTotal);
        document.getElementById('checkout-pay').value = '';
        document.getElementById('checkout-change').innerText = 'Rp 0';
        document.getElementById('checkout-change').style.color = 'var(--warning-color)';
        this.showModal('modal-checkout');
        setTimeout(() => document.getElementById('checkout-pay').focus(), 100);
    },

    calculateChange() {
        const pay = parseInt(document.getElementById('checkout-pay').value) || 0;
        const change = pay - this.cartTotal;
        const changeEl = document.getElementById('checkout-change');
        
        if(change < 0) {
            changeEl.innerText = 'Kurang ' + this.formatRupiah(Math.abs(change));
            changeEl.style.color = 'var(--danger-color)';
        } else {
            changeEl.innerText = this.formatRupiah(change);
            changeEl.style.color = 'var(--primary-color)';
        }
    },

    processCheckout() {
        const pay = parseInt(document.getElementById('checkout-pay').value) || 0;
        if(pay < this.cartTotal) {
            this.showToast("Uang pembayaran kurang!", true);
            return;
        }

        const change = pay - this.cartTotal;
        
        // Save to History
        const transaction = {
            id: 'TRX-' + Date.now(),
            timestamp: Date.now(),
            items: [...this.cart],
            total: this.cartTotal,
            pay: pay,
            change: change
        };
        
        this.history.unshift(transaction);
        localStorage.setItem(DB_HISTORY, JSON.stringify(this.history));

        this.hideModal('modal-checkout');
        this.showToast("Transaksi Berhasil!");

        // Prepare Print Receipt
        this.printReceipt(transaction);

        // Reset Cart
        this.cart = [];
        this.renderCart();
    },

    printReceipt(trx) {
        document.getElementById('receipt-date').innerText = new Date(trx.timestamp).toLocaleString('id-ID');
        
        document.getElementById('receipt-items').innerHTML = trx.items.map(i => `
            <div class="receipt-item">
                <span>${i.name} (x${i.qty})</span>
                <span>${this.formatRupiah(i.total)}</span>
            </div>
        `).join('');

        document.getElementById('receipt-total-amt').innerText = this.formatRupiah(trx.total);
        document.getElementById('receipt-pay-amt').innerText = this.formatRupiah(trx.pay);
        document.getElementById('receipt-change-amt').innerText = this.formatRupiah(trx.change);

        // Call browser print
        window.print();
    },

    // --- HISTORY & EXPORT ---
    renderHistory() {
        const container = document.getElementById('history-list');
        if(this.history.length === 0) {
            container.innerHTML = `<div class="card" style="text-align:center; color:var(--text-muted)">Belum ada transaksi</div>`;
            return;
        }

        container.innerHTML = this.history.map(h => `
            <div class="card" style="margin-bottom:15px; padding:15px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid var(--border-color); padding-bottom:10px;">
                    <div>
                        <div style="font-weight:600; color:var(--primary-color)">${h.id}</div>
                        <div style="font-size:0.8rem; color:var(--text-muted)">${new Date(h.timestamp).toLocaleString('id-ID')}</div>
                    </div>
                    <div style="text-align:right">
                        <div style="font-weight:700; font-size:1.1rem;">${this.formatRupiah(h.total)}</div>
                    </div>
                </div>
                <div style="font-size:0.85rem; color:var(--text-muted)">
                    ${h.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
                </div>
            </div>
        `).join('');
    },

    exportCSV() {
        if(this.history.length === 0) {
            this.showToast("Tidak ada data untuk diexport", true);
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "ID Transaksi,Tanggal,Item Pembelian,Total,Bayar,Kembali\n";

        this.history.forEach(row => {
            const date = new Date(row.timestamp).toLocaleString('id-ID');
            // Ganti koma dalam string item dengan spasi agar CSV tidak rusak
            const items = row.items.map(i => `${i.qty}x ${i.name}`).join(' | ');
            const csvRow = `${row.id},"${date}","${items}",${row.total},${row.pay},${row.change}`;
            csvContent += csvRow + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Laporan_Kasir_${new Date().toLocaleDateString('id-ID')}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.showToast("Berhasil didownload");
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
            .then(reg => console.log('SW terdaftar!'))
            .catch(err => console.log('SW error', err));
    });
}
