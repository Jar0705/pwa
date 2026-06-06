# Ringkasan Modul 1–6 — Pertanyaan Kunci (Format PREP + APBDP)

---

## P1: Fondasi — Wireless vs Mobile Computing

### Point
Wireless Computing dan Mobile Computing adalah dua konsep berbeda namun sering dianggap sama.

### Reason
Wireless berfokus pada **media komunikasi tanpa kabel**, sedangkan Mobile berfokus pada **mobilitas perangkat**.

### Example
- Wireless saja: PC dengan WiFi
- Mobile saja: Aplikasi offline di HP
- Keduanya: Smartphone dengan 4G/5G

### Point (Penegasan)
Wireless = koneksi, Mobile = mobilitas.

### APBDP (Analisis Perbandingan Berbasis Dimensi + Penilaian)
| Dimensi | Wireless Computing | Mobile Computing |
|--------|------------------|------------------|
| Fokus | Teknologi jaringan | Perangkat & mobilitas |
| Ketergantungan | Butuh jaringan | Bisa offline |
| Fleksibilitas | Terbatas lokasi | Sangat fleksibel |
| Contoh | WiFi, Bluetooth | Smartphone |

**Penilaian:**
Mobile Computing lebih unggul dalam fleksibilitas penggunaan, sedangkan Wireless unggul dalam efisiensi koneksi.

---

## P2: Mobilitas — Hard vs Soft Handoff

### Point
Handoff adalah proses perpindahan koneksi saat user berpindah jaringan.

### Reason
- Hard: putus dulu baru sambung
- Soft: sambung dulu baru putus

### Example
- Hard → GSM
- Soft → CDMA

### Point (Penegasan)
Soft handoff lebih baik untuk komunikasi real-time.

### APBDP
| Dimensi | Hard Handoff | Soft Handoff |
|--------|-------------|--------------|
| Mekanisme | Break before make | Make before break |
| Stabilitas | Rendah | Tinggi |
| Kompleksitas | Rendah | Tinggi |
| Risiko putus | Tinggi | Rendah |

**Penilaian:**
Soft handoff lebih direkomendasikan untuk voice call karena koneksi lebih stabil.

---

## P3: Jaringan — WPAN, WLAN, WMAN, WWAN + IEEE

### Point
Jenis jaringan dibedakan berdasarkan cakupan dan teknologi.

### Reason
Semakin luas cakupan, semakin kompleks infrastrukturnya.

### Example
| Jenis | Cakupan | Standar |
|------|--------|--------|
| WPAN | Personal | 802.15 |
| WLAN | Lokal | 802.11 |
| WMAN | Kota | 802.16 |
| WWAN | Luas | Seluler |

**Ad-Hoc vs Infrastructure**
- Ad-Hoc: tanpa access point
- Infrastructure: menggunakan access point

### Point (Penegasan)
Setiap jaringan memiliki fungsi sesuai skala kebutuhan.

### APBDP
| Dimensi | Ad-Hoc | Infrastructure |
|--------|--------|----------------|
| Setup | Cepat | Butuh perangkat |
| Stabilitas | Rendah | Tinggi |
| Skalabilitas | Terbatas | Tinggi |
| Kontrol | Minim | Terpusat |

**Penilaian:**
Infrastructure lebih cocok untuk penggunaan nyata karena lebih stabil dan scalable.

---

## P4: OS Mobile — Arsitektur 4 Lapisan + Sandbox

### Point
OS Mobile menggunakan arsitektur berlapis untuk keamanan dan efisiensi.

### Reason
Lapisan:
1. Kernel
2. Libraries
3. Framework
4. Applications

Sandbox membatasi akses aplikasi.

### Example
Aplikasi tidak bisa akses data aplikasi lain tanpa izin.

### Point (Penegasan)
Sandbox penting untuk keamanan data pengguna.

### APBDP
| Dimensi | Mobile OS | Desktop OS |
|--------|----------|------------|
| Keamanan | Sangat ketat | Lebih longgar |
| Sandbox | Wajib | Opsional |
| Akses sistem | Terbatas | Lebih bebas |
| Risiko malware | Lebih rendah | Lebih tinggi |

**Penilaian:**
Mobile OS lebih aman karena sandbox yang ketat, tetapi kurang fleksibel dibanding desktop.

---

## P5: OS Lanjutan — LMK, IPC, Intent

### Point
Android mengelola proses dan komunikasi antar komponen secara efisien.

### Reason
- LMK: menghemat RAM
- IPC: komunikasi antar proses
- Intent: penghubung antar komponen

### Example
- Foreground vs Background process
- Intent untuk membuka aplikasi lain

### Point (Penegasan)
Intent adalah mekanisme utama komunikasi di Android.

### APBDP
| Dimensi | Explicit Intent | Implicit Intent |
|--------|----------------|----------------|
| Target | Spesifik | Umum |
| Fleksibilitas | Rendah | Tinggi |
| Kontrol | Tinggi | Lebih rendah |
| Risiko | Aman | Lebih berisiko |

**Penilaian:**
Explicit lebih aman, Implicit lebih fleksibel tergantung kebutuhan aplikasi.

---

## P6: Mobile Web — Native vs Hybrid vs PWA

### Point
Pemilihan teknologi bergantung pada kebutuhan dan budget.

### Reason
- Native: performa tinggi
- Hybrid: efisien
- PWA: murah dan cepat

### Example
Kasus: aplikasi inventaris 2 platform
→ pilih Hybrid atau PWA

### Point (Penegasan)
Tidak ada solusi terbaik mutlak, semua tergantung konteks.

### APBDP
| Dimensi | Native | Hybrid | PWA |
|--------|--------|--------|-----|
| Performa | Tinggi | Sedang | Rendah |
| Biaya | Tinggi | Sedang | Rendah |
| Development | Lama | Cepat | Sangat cepat |
| Akses device | Full | Cukup | Terbatas |

**Penilaian:**
- Native: terbaik untuk performa tinggi
- Hybrid: terbaik untuk efisiensi
- PWA: terbaik untuk budget minim

---

## Kesimpulan Umum

### Point
Setiap modul saling terhubung dalam ekosistem mobile computing.

### Reason
Dari jaringan hingga implementasi aplikasi.

### Example
- P1–P3: dasar jaringan
- P4–P5: sistem
- P6: implementasi

### Point (Penegasan)
Pemahaman ini penting untuk memilih teknologi yang tepat sesuai kebutuhan.

---
