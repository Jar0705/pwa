# Ringkasan Modul 1–6 — Pertanyaan Kunci (PREP + APBDP + Insight Teknis)

---

# 🔗 Koneksi Antar Konsep yang Harus Dipahami

---

## 1. Jaringan → OS → Aplikasi

### Point
Kinerja aplikasi mobile ditentukan oleh interaksi antara jaringan, sistem operasi, dan desain aplikasi itu sendiri.

### Reason
Jaringan mobile memiliki karakteristik:
- **Latency tinggi** (delay)
- **Bandwidth fluktuatif**
- **Packet loss (kehilangan data)**

OS harus menyesuaikan:
- Manajemen RAM (LMK)
- Scheduling CPU
- Pengaturan background process

Aplikasi harus adaptif:
- Tidak selalu mengandalkan koneksi real-time
- Mengurangi request berulang

### Example
- Instagram menyimpan cache gambar → loading cepat meski sinyal lemah  
- WhatsApp tetap bisa mengetik saat offline → kirim saat online  
- Android menghentikan background app untuk hemat resource  

### Point (Penegasan)
Aplikasi mobile yang baik = adaptif terhadap keterbatasan jaringan + efisien terhadap resource OS.

### APBDP
| Dimensi | Tanpa Optimasi | Dengan Optimasi |
|--------|----------------|-----------------|
| Latency handling | Tidak adaptif | Adaptif (retry, cache) |
| RAM usage | Boros | Efisien |
| UX | Lag / delay | Smooth |
| Battery | Cepat habis | Lebih hemat |

**Penilaian:**
Optimasi lintas layer (network + OS + app) adalah faktor utama performa aplikasi modern.

---

## 2. Handover → Data Consistency

### Point
Perpindahan jaringan (handover) dapat menyebabkan inkonsistensi data jika tidak ditangani dengan benar.

### Reason
Saat handover:
- Koneksi bisa **terputus sementara**
- Request API bisa gagal
- Data bisa tidak sinkron antara client dan server

### Example
- Checkout e-commerce gagal saat pindah jaringan  
- Chat tidak terkirim (pending)  
- Upload file berhenti di tengah  

### Solusi Desain
- **Offline-first architecture**
- Local database (SQLite, IndexedDB)
- Retry otomatis (exponential backoff)
- Queue system (antrian request)

### Point (Penegasan)
Aplikasi mobile harus **tahan gangguan jaringan (resilient)**, bukan hanya cepat saat kondisi ideal.

### APBDP
| Dimensi | Tanpa Penanganan | Dengan Offline-First |
|--------|------------------|---------------------|
| Data loss | Tinggi | Sangat rendah |
| Konsistensi | Lemah | Kuat |
| UX | Frustrasi | Stabil |
| Reliabilitas | Rendah | Tinggi |

**Penilaian:**
Offline-first adalah standar desain aplikasi mobile modern.

---

## 3. Native vs PWA → Tradeoff

### Point
Pemilihan teknologi aplikasi adalah keputusan strategis berbasis tradeoff.

### Reason
Setiap pendekatan berbeda dalam:
- Performa
- Biaya
- Akses hardware
- Time-to-market

### Example
- Native: Game, aplikasi kamera, fintech  
- Hybrid: Startup dengan budget terbatas  
- PWA: Dashboard, admin panel, e-commerce ringan  

### Insight Teknis
- Native → akses langsung ke OS API  
- Hybrid → bridge (React Native / Flutter)  
- PWA → browser + service worker  

### Point (Penegasan)
Pilihan teknologi harus berbasis kebutuhan bisnis, bukan tren.

### APBDP
| Dimensi | Native | Hybrid | PWA |
|--------|--------|--------|-----|
| Performa | 🔥 Tinggi | ⚖️ Sedang | ❄️ Rendah |
| Biaya | 💸 Tinggi | 💰 Sedang | 🪶 Rendah |
| Hardware access | Full | Cukup | Terbatas |
| Maintenance | Kompleks | Sedang | Mudah |

**Penilaian:**
- Native → performa maksimal  
- Hybrid → balance terbaik  
- PWA → efisiensi maksimal  

---

# 📚 RINGKASAN MODUL

---

## P1: Wireless vs Mobile Computing

### Point
Wireless dan Mobile adalah konsep berbeda namun saling melengkapi.

### Reason
- Wireless = cara komunikasi  
- Mobile = sifat perangkat  

### Example
- Laptop WiFi → Wireless  
- HP offline → Mobile  
- HP + internet → Keduanya  

### Insight
- IoT banyak menggunakan Wireless tanpa Mobile  
- Mobile apps bisa tetap berjalan tanpa internet  

### Point (Penegasan)
Memahami perbedaan ini penting untuk desain sistem.

### APBDP
| Dimensi | Wireless | Mobile |
|--------|---------|--------|
| Fokus | Koneksi | Mobilitas |
| Ketergantungan jaringan | Tinggi | Tidak selalu |
| Fleksibilitas | Terbatas | Tinggi |

**Penilaian:**
Mobile lebih fleksibel, Wireless lebih spesifik pada konektivitas.

---

## P2: Hard vs Soft Handoff

### Point
Handoff mempengaruhi kualitas koneksi saat perangkat berpindah.

### Reason
- Hard: koneksi lama diputus dulu  
- Soft: koneksi baru dibuat sebelum lama diputus  

### Example
- GSM → Hard  
- CDMA → Soft  

### Insight Teknis
Soft handoff menggunakan **multiple base station** untuk menjaga koneksi.

### Point (Penegasan)
Soft handoff lebih unggul untuk aplikasi real-time.

### APBDP
| Dimensi | Hard | Soft |
|--------|------|------|
| Stabilitas | Rendah | Tinggi |
| Delay | Tinggi | Rendah |
| Kompleksitas | Rendah | Tinggi |

**Penilaian:**
Soft lebih baik, tetapi lebih kompleks secara sistem.

---

## P3: Jaringan & IEEE

### Point
Jaringan dibedakan berdasarkan cakupan geografis.

### Reason
Setiap jaringan memiliki kebutuhan infrastruktur berbeda.

### Example
- WPAN → Bluetooth  
- WLAN → WiFi  
- WMAN → WiMAX  
- WWAN → 4G/5G  

### Insight
Semakin luas jaringan:
- Latency meningkat
- Infrastruktur makin kompleks

### Point (Penegasan)
Pemilihan jaringan harus sesuai skala aplikasi.

### APBDP
| Dimensi | Ad-Hoc | Infrastructure |
|--------|--------|----------------|
| Setup | Cepat | Lebih lama |
| Stabilitas | Rendah | Tinggi |
| Kontrol | Tidak ada | Terpusat |

**Penilaian:**
Infrastructure lebih cocok untuk sistem produksi.

---

## P4: OS Mobile & Sandbox

### Point
Mobile OS dirancang dengan keamanan tinggi melalui sandboxing.

### Reason
Setiap aplikasi berjalan di lingkungan terisolasi.

### Example
- Aplikasi tidak bisa akses file app lain  
- Permission harus disetujui user  

### Insight Teknis
- Android: Linux kernel + sandbox UID  
- iOS: sandbox lebih ketat  

### Point (Penegasan)
Keamanan > fleksibilitas di mobile OS.

### APBDP
| Dimensi | Mobile | Desktop |
|--------|--------|---------|
| Keamanan | Tinggi | Sedang |
| Kontrol user | Terbatas | Lebih bebas |
| Risiko malware | Rendah | Tinggi |

**Penilaian:**
Mobile lebih aman, Desktop lebih fleksibel.

---

## P5: LMK, IPC, Intent

### Point
Android mengelola resource dan komunikasi antar komponen secara efisien.

### Reason
- LMK → menghemat RAM  
- IPC → komunikasi antar proses  
- Intent → penghubung antar komponen  

### Example
- Buka kamera dari aplikasi lain  
- Share ke WhatsApp  

### Insight Teknis
- Binder = mekanisme IPC Android  
- Intent filter menentukan handler  

### Point (Penegasan)
Intent adalah backbone interaksi aplikasi Android.

### APBDP
| Dimensi | Explicit | Implicit |
|--------|----------|----------|
| Target | Spesifik | Umum |
| Keamanan | Tinggi | Sedang |
| Fleksibilitas | Rendah | Tinggi |

**Penilaian:**
Gunakan Explicit untuk kontrol, Implicit untuk fleksibilitas.

---

## P6: Native vs Hybrid vs PWA

### Point
Pemilihan teknologi harus mempertimbangkan kebutuhan bisnis dan teknis.

### Reason
Tidak semua aplikasi butuh performa tinggi.

### Example
- Inventory app → Hybrid/PWA  
- Game → Native  

### Insight
- PWA bisa offline (service worker)  
- Hybrid bisa akses API native  

### Point (Penegasan)
Tidak ada solusi universal.

### APBDP
| Dimensi | Native | Hybrid | PWA |
|--------|--------|--------|-----|
| Performa | Tinggi | Sedang | Rendah |
| Biaya | Tinggi | Sedang | Rendah |
| Time to market | Lama | Sedang | Cepat |

**Penilaian:**
Hybrid adalah pilihan paling realistis untuk banyak kasus.

---

# 🧠 KESIMPULAN AKHIR

### Point
Mobile computing adalah kombinasi dari jaringan, sistem, dan aplikasi.

### Reason
Setiap layer saling mempengaruhi:
- Jaringan → latency
- OS → resource
- App → user experience

### Example
Sinyal buruk → OS batasi resource → app harus adaptif

### Point (Penegasan)
Developer yang memahami hubungan ini akan menghasilkan aplikasi yang:
- Lebih cepat  
- Lebih stabil  
- Lebih efisien  

---
