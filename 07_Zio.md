# Ringkasan Modul 1–6 — Pertanyaan Kunci (Format PREP + APBDP)

---

## 🔗 Koneksi Antar Konsep yang Harus Dipahami

### 1. Jaringan → OS → Aplikasi

### Point
Kinerja aplikasi mobile sangat dipengaruhi oleh karakteristik jaringan dan bagaimana OS mengelola resource.

### Reason
Jaringan mobile memiliki keterbatasan seperti **latency tinggi** dan **bandwidth terbatas**, sehingga OS harus mengoptimalkan penggunaan resource (RAM, CPU, network).

### Example
- OS menggunakan **LMK (Low Memory Killer)** untuk menghemat RAM  
- Background process dibatasi agar tidak boros data  
- Aplikasi menggunakan teknik caching & lazy loading  

### Point (Penegasan)
Efisiensi aplikasi mobile bukan hanya tanggung jawab developer, tetapi juga hasil kerja sama antara jaringan dan OS.

### APBDP
| Dimensi | Tanpa Optimasi OS | Dengan Optimasi OS |
|--------|------------------|-------------------|
| Performa | Lambat | Lebih cepat |
| Penggunaan data | Boros | Efisien |
| Stabilitas | Mudah crash | Lebih stabil |

**Penilaian:**
Optimasi OS sangat penting untuk memastikan aplikasi tetap performant di kondisi jaringan terbatas.

---

### 2. Handover → Data Consistency

### Point
Handover dapat menyebabkan gangguan koneksi yang berdampak pada konsistensi data.

### Reason
Saat perpindahan jaringan, koneksi bisa terputus sementara sehingga data tidak terkirim atau sinkronisasi gagal.

### Example
- Saat transaksi online → bisa gagal saat pindah jaringan  
- Chat tidak terkirim saat sinyal berpindah  
- Solusi: **Offline-first + retry mechanism**

### Point (Penegasan)
Aplikasi harus dirancang untuk tahan terhadap gangguan jaringan.

### APBDP
| Dimensi | Tanpa Penanganan | Dengan Offline-First |
|--------|------------------|---------------------|
| Kehilangan data | Tinggi | Rendah |
| User experience | Buruk | Lebih baik |
| Reliabilitas | Rendah | Tinggi |

**Penilaian:**
Pendekatan **Offline-First** sangat direkomendasikan untuk aplikasi mobile modern.

---

### 3. Native vs PWA → Tradeoff

### Point
Pemilihan teknologi aplikasi adalah tradeoff antara performa, biaya, dan akses fitur.

### Reason
Setiap pendekatan memiliki kelebihan dan kekurangan tergantung kebutuhan bisnis.

### Example
- Native: akses penuh hardware (kamera, sensor)
- PWA: ringan dan cepat dikembangkan
- Hybrid: kompromi antara keduanya

### Point (Penegasan)
Pemilihan bukan soal terbaik, tapi paling sesuai kebutuhan.

### APBDP
| Dimensi | Native | Hybrid | PWA |
|--------|--------|--------|-----|
| Performa | Tinggi | Sedang | Rendah |
| Biaya | Tinggi | Sedang | Rendah |
| Akses hardware | Full | Cukup | Terbatas |
| Development time | Lama | Sedang | Cepat |

**Penilaian:**
- Native → untuk aplikasi kompleks  
- Hybrid → untuk efisiensi tim  
- PWA → untuk budget minim  

---

# 📚 Ringkasan Modul

---

## P1: Wireless vs Mobile Computing

### Point
Wireless ≠ Mobile, meskipun sering digunakan bersamaan.

### Reason
Wireless = media komunikasi  
Mobile = mobilitas perangkat

### Example
- WiFi di PC → Wireless saja  
- Game offline di HP → Mobile saja  
- HP + internet → Keduanya  

### Point
Keduanya bisa berdiri sendiri maupun digabung.

### APBDP
| Dimensi | Wireless | Mobile |
|--------|---------|--------|
| Fokus | Jaringan | Perangkat |
| Mobilitas | Tidak wajib | Wajib |
| Koneksi | Wajib | Opsional |

**Penilaian:**
Mobile lebih fleksibel, Wireless lebih fokus pada konektivitas.

---

## P2: Hard vs Soft Handoff

### Point
Perpindahan jaringan dapat mempengaruhi kualitas koneksi.

### Reason
Hard memutus koneksi, Soft mempertahankan koneksi sementara.

### Example
Voice call lebih stabil di Soft Handoff.

### Point
Soft lebih unggul untuk real-time communication.

### APBDP
| Dimensi | Hard | Soft |
|--------|------|------|
| Stabilitas | Rendah | Tinggi |
| Risiko putus | Tinggi | Rendah |

**Penilaian:**
Soft handoff lebih baik untuk komunikasi penting.

---

## P3: Jaringan & IEEE

### Point
Jaringan dibedakan berdasarkan cakupan.

### Reason
Semakin luas jaringan → semakin kompleks.

### Example
WPAN → WLAN → WMAN → WWAN

### Point
Pemilihan jaringan harus sesuai kebutuhan.

### APBDP
| Dimensi | Ad-Hoc | Infrastructure |
|--------|--------|----------------|
| Stabilitas | Rendah | Tinggi |
| Skalabilitas | Rendah | Tinggi |

**Penilaian:**
Infrastructure lebih cocok untuk sistem nyata.

---

## P4: OS Mobile & Sandbox

### Point
Mobile OS dirancang lebih aman dibanding desktop.

### Reason
Menggunakan sandbox untuk membatasi akses aplikasi.

### Example
Permission system di Android/iOS.

### Point
Keamanan adalah prioritas utama.

### APBDP
| Dimensi | Mobile | Desktop |
|--------|--------|---------|
| Keamanan | Tinggi | Sedang |
| Fleksibilitas | Rendah | Tinggi |

**Penilaian:**
Mobile lebih aman, Desktop lebih fleksibel.

---

## P5: LMK, IPC, Intent

### Point
Android mengatur proses dan komunikasi antar komponen.

### Reason
Untuk efisiensi resource dan modularitas aplikasi.

### Example
Intent untuk membuka aplikasi lain.

### Point
Intent adalah kunci komunikasi.

### APBDP
| Dimensi | Explicit | Implicit |
|--------|----------|----------|
| Keamanan | Tinggi | Sedang |
| Fleksibilitas | Rendah | Tinggi |

**Penilaian:**
Explicit lebih aman, Implicit lebih fleksibel.

---

## P6: Native vs Hybrid vs PWA

### Point
Pemilihan teknologi harus sesuai kebutuhan.

### Reason
Setiap teknologi memiliki tradeoff.

### Example
Aplikasi inventaris → Hybrid / PWA

### Point
Tidak ada solusi universal.

### APBDP
| Dimensi | Native | Hybrid | PWA |
|--------|--------|--------|-----|
| Performa | Tinggi | Sedang | Rendah |
| Biaya | Tinggi | Sedang | Rendah |

**Penilaian:**
Hybrid adalah pilihan paling seimbang.

---

# 🧠 Kesimpulan

### Point
Semua konsep saling terhubung dalam ekosistem mobile computing.

### Reason
Mulai dari jaringan → OS → aplikasi → user experience.

### Example
Jaringan buruk → OS kerja lebih keras → aplikasi harus adaptif.

### Point
Pemahaman hubungan antar konsep adalah kunci utama sukses di ujian dan praktik nyata.

---
