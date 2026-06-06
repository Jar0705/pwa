# 📱 WMC Mobile App (PWA)

Aplikasi ini merupakan implementasi dari konsep **Web Mobile Computing (WMC)** menggunakan teknologi **Progressive Web App (PWA)**.

Project ini dibuat sebagai simulasi aplikasi mobile berbasis web yang dapat berjalan seperti aplikasi native.

---

## 🚀 Fitur Utama

* 🌐 Deteksi **Online / Offline**
* 📦 Penyimpanan data menggunakan **LocalStorage**
* 📱 Bisa di-install seperti aplikasi (Add to Home Screen)
* ⚡ Mendukung **Offline Mode** (Service Worker)
* 🎨 UI modern dengan konsep mobile-friendly

---

## 🧠 Konsep yang Digunakan

### 1. Web Mobile Computing (WMC)

Aplikasi dibangun menggunakan:

* HTML
* CSS
* JavaScript

Sehingga dapat berjalan di berbagai perangkat tanpa perlu install dari store.

---

### 2. Progressive Web App (PWA)

Fitur PWA yang digunakan:

* **Manifest.json** → untuk install aplikasi
* **Service Worker (sw.js)** → untuk caching & offline mode

---

### 3. Framework (FW)

Saat ini menggunakan:

* Vanilla JavaScript (tanpa framework)

Namun bisa dikembangkan menggunakan:

* React
* Vue
* atau framework lainnya

---

### 4. PREP (Preparation & Best Practice)

Dalam project ini menerapkan:

* Struktur file yang jelas
* Offline capability
* Responsive design
* Data persistence

---

## 📁 Struktur Project

```
wmc-app/
├── index.html
├── manifest.json
├── sw.js
├── icon.png
└── README.md
```

---

## ⚙️ Cara Menjalankan

### 1. Clone Repository

```
git clone https://github.com/username/wmc-app.git
cd wmc-app
```

### 2. Jalankan dengan Live Server

Atau gunakan:

```
npx serve .
```

---

## 📲 Cara Install ke HP

1. Buka website di browser (Chrome)
2. Klik menu **Add to Home Screen**
3. Aplikasi akan muncul seperti aplikasi biasa

---

## ⚠️ Catatan

* Service Worker hanya berjalan di:

  * HTTPS
  * atau localhost
* Jika tidak berjalan, coba refresh / clear cache

---

## 🔥 Pengembangan Selanjutnya

Project ini bisa dikembangkan menjadi:

* 🔗 Integrasi database (Supabase / Firebase)
* 💳 Sistem pembayaran (Midtrans)
* 🔐 Login & Register user
* 📱 Convert ke APK Android

---

## 👨‍💻 Author

Dibuat oleh: **Zio Adriano**

---

## 📄 License

Project ini bebas digunakan untuk pembelajaran dan pengembangan.

---
