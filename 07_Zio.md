# Ringkasan Modul 1–6 — Pertanyaan Kunci (Format PREP)

---

## P1: Fondasi — Wireless vs Mobile Computing

### Point
Wireless Computing dan Mobile Computing adalah dua konsep yang sering dianggap sama, tetapi sebenarnya berbeda secara mendasar.

### Reason
Wireless Computing berfokus pada **media komunikasi tanpa kabel**, sedangkan Mobile Computing berfokus pada **kemampuan perangkat untuk berpindah (mobilitas)** saat digunakan.

### Example
- **Hanya Wireless**: PC desktop menggunakan WiFi (tidak berpindah, tapi tanpa kabel)
- **Hanya Mobile**: Aplikasi offline di smartphone tanpa koneksi internet
- **Keduanya**: Smartphone yang menggunakan 4G/5G saat berpindah tempat

### Point (Penegasan)
Jadi, Wireless = cara koneksi, Mobile = sifat perangkat. Keduanya bisa berdiri sendiri atau digabung.

---

## P2: Mobilitas — Hard vs Soft Handoff

### Point
Hard Handoff dan Soft Handoff adalah dua metode perpindahan koneksi antar jaringan saat perangkat bergerak.

### Reason
- **Hard Handoff**: Koneksi lama diputus sebelum koneksi baru dibuat (break before make)
- **Soft Handoff**: Koneksi lama tetap aktif sampai koneksi baru stabil (make before break)

### Example
- **Hard Handoff**: Umum di GSM → bisa menyebabkan call drop
- **Soft Handoff**: Digunakan di CDMA → lebih stabil untuk voice call

### Point (Penegasan)
Soft Handoff lebih baik untuk voice call karena mengurangi kemungkinan terputus.

---

## P3: Jaringan — WPAN, WLAN, WMAN, WWAN + IEEE

### Point
Setiap jenis jaringan memiliki cakupan dan standar IEEE yang berbeda.

### Reason
Perbedaan utama terletak pada **jarak jangkauan** dan **teknologi yang digunakan**.

### Example
| Jenis | Cakupan | Teknologi | Standar |
|------|--------|----------|--------|
| WPAN | Personal | Bluetooth | IEEE 802.15 |
| WLAN | Lokal | WiFi | IEEE 802.11 |
| WMAN | Kota | WiMAX | IEEE 802.16 |
| WWAN | Luas | 4G/5G | Tidak spesifik IEEE |

**Ad-Hoc vs Infrastructure:**
- Ad-Hoc: langsung antar device tanpa access point
- Infrastructure: melalui access point/router

### Point (Penegasan)
Perbedaan utama jaringan ada pada skala dan infrastrukturnya.

---

## P4: OS Mobile — Arsitektur 4 Lapisan + Sandbox

### Point
OS Mobile memiliki arsitektur berlapis untuk efisiensi dan keamanan.

### Reason
Setiap lapisan memiliki fungsi spesifik:
1. **Kernel** → mengatur hardware
2. **Libraries** → menyediakan fungsi dasar
3. **Application Framework** → penghubung aplikasi dengan sistem
4. **Applications** → aplikasi pengguna

Sandbox digunakan untuk membatasi akses aplikasi.

### Example
- Aplikasi tidak bisa sembarangan akses data aplikasi lain
- Izin (permission) harus diberikan user

### Point (Penegasan)
Sandbox di mobile lebih ketat karena faktor keamanan dan privasi pengguna.

---

## P5: OS Lanjutan — LMK, IPC, Intent

### Point
Android mengelola proses dengan sistem hierarki dan komunikasi antar komponen.

### Reason
- **LMK (Low Memory Killer)**: menghapus proses prioritas rendah saat RAM penuh
- **IPC (Inter-Process Communication)**: komunikasi antar proses
- **Intent**: mekanisme untuk menjalankan komponen lain

### Example
- **Hierarki proses**:
  1. Foreground
  2. Visible
  3. Service
  4. Background
  5. Empty

- **Intent**:
  - Explicit → langsung ke target (misalnya buka Activity tertentu)
  - Implicit → berdasarkan aksi (misalnya share ke aplikasi mana saja)

### Point (Penegasan)
Intent adalah inti komunikasi antar komponen di Android.

---

## P6: Mobile Web — Native vs Hybrid vs PWA

### Point
Pemilihan teknologi pengembangan aplikasi bergantung pada kebutuhan dan budget.

### Reason
- **Native**: performa tinggi, biaya mahal
- **Hybrid**: satu codebase, performa cukup
- **PWA**: berbasis web, paling murah dan cepat

### Example
Kasus: Aplikasi inventaris untuk 2 platform dengan budget terbatas
- Native: mahal (buat Android & iOS terpisah)
- Hybrid: efisien (React Native / Flutter)
- PWA: paling murah (web app)

### Point (Penegasan)
Rekomendasi terbaik: **Hybrid atau PWA**, tergantung kebutuhan fitur (offline, akses device, dll).

---

## Kesimpulan Umum

### Point
Setiap modul membahas aspek penting dalam mobile computing dari dasar hingga implementasi.

### Reason
Pemahaman menyeluruh diperlukan untuk memilih teknologi dan solusi yang tepat.

### Example
- P1–P3: dasar jaringan & komunikasi
- P4–P5: sistem operasi & proses
- P6: implementasi bisnis

### Point (Penegasan)
Menguasai konsep ini membantu dalam pengembangan aplikasi mobile yang efisien, aman, dan sesuai kebutuhan bisnis.

---
