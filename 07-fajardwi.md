# Ringkasan Konsep Komputasi Bergerak (Mobile Computing)

Dokumen ini berisi penjelasan teknis mengenai perbedaan antara wireless dan mobile computing, mekanisme handover, standar IEEE, arsitektur sistem, serta strategi pengembangan aplikasi.

## 1. Wireless vs. Mobile Computing
**Point:** Perbedaan mendasar terletak pada **media transmisi** versus **kapabilitas pengguna**.

- **Reason:** Wireless berfokus pada penghapusan kabel, sedangkan Mobile berfokus pada mobilitas fisik pengguna tanpa memutus layanan.
- **Example:**
    - **Hanya Wireless:** Smart TV atau PC Desktop yang terhubung ke Wi-Fi (statis namun nirkabel).
    - **Hanya Mobile:** Penggunaan aplikasi pencatat offline di tablet saat di pesawat (bergerak tanpa koneksi).
    - **Keduanya:** Smartphone menggunakan 4G/5G saat bepergian (nirkabel dan bergerak).
- **Point:** Keduanya sering berjalan beriringan tetapi memiliki tujuan teknis yang berbeda.

## 2. Mobility & Handover
**Point:** **Soft Handover** adalah pilihan terbaik untuk layanan *Voice Call*.

- **Reason:** Soft handover menggunakan prinsip *make-before-break* (terhubung ke sel baru sebelum memutus sel lama), meminimalisir risiko paket hilang (*packet loss*). Hard handover menggunakan *break-before-make* yang menyebabkan jeda (latency).
- **Example:** Jaringan WCDMA (3G) menggunakan Soft Handover untuk menjaga kontinuitas suara, sedangkan Wi-Fi tradisional sering mengalami *disconnection* singkat saat berpindah Access Point (Hard Handover).
- **Point:** Untuk stabilitas layanan real-time, mekanisme Soft Handover lebih unggul.

## 3. Standar IEEE & Topologi
**Point:** Cakupan area menentukan standar IEEE yang digunakan.

- **Daftar Standar:**
    - **WPAN:** IEEE 802.15 (Bluetooth)
    - **WLAN:** IEEE 802.11 (Wi-Fi)
    - **WMAN:** IEEE 802.16 (WiMAX)
    - **WWAN:** IEEE 802.20 (Mobile Broadband)
- **Reason (Ad-Hoc vs Infrastruktur):** Ad-Hoc tidak memiliki pusat kendali (desentralisasi), sedangkan Infrastruktur bergantung pada Access Point (sentralisasi).
- **Point:** Pemilihan arsitektur bergantung pada kebutuhan skalabilitas dan ketersediaan infrastruktur tetap.

## 4. Arsitektur 4 Lapisan & Sandboxing
**Point:** Android menggunakan model keamanan berbasis kernel untuk mengisolasi aplikasi.

- **Lapisan:**
    1. **System Apps:** Aplikasi tingkat atas.
    2. **Java API Framework:** Abstraksi fitur sistem.
    3. **Native Libraries & ART:** Eksekusi kode rendah dan runtime.
    4. **Linux Kernel:** Manajemen resource hardware.
- **Reason (Sandboxing):** Android menerapkan sandboxing lebih ketat daripada desktop karena setiap aplikasi dianggap sebagai "User" berbeda di Linux (UID unik), sehingga data satu aplikasi tidak dapat diakses aplikasi lain secara default.
- **Point:** Ini memitigasi dampak dari serangan malware di perangkat mobile.

## 5. LMK, IPC, & Intent
**Point:**
Android menggunakan sistem hierarki proses melalui **Low Memory Killer (LMK)** untuk menjaga stabilitas sistem, serta menggunakan **Intent** sebagai mekanisme utama komunikasi antar komponen.

**Reason:**
* **LMK (Low Memory Killer):** Perangkat mobile memiliki sumber daya RAM yang terbatas. LMK berfungsi mematikan proses berdasarkan prioritas untuk memastikan aplikasi yang sedang aktif (foreground) mendapatkan memori yang cukup.
* **IPC (Inter-Process Communication):** Karena setiap aplikasi berjalan di dalam sandbox yang terisolasi, IPC (melalui driver *Binder*) diperlukan agar aplikasi dapat berkomunikasi satu sama lain secara aman.
* **Intent:** Merupakan abstraksi pesan untuk meminta tindakan dari komponen lain (Activity, Service, Broadcast Receiver).

**Example:**
* **Hierarki LMK:** Saat sistem kehabisan memori, proses yang berada di *Background* (aplikasi yang sudah lama tidak dibuka) akan dimatikan terlebih dahulu sebelum proses *Foreground* (aplikasi yang sedang dilihat pengguna).
* **Intent Eksplisit:** Mengarahkan pengguna dari `LoginActivity` ke `DashboardActivity` di dalam kode yang sama dengan menyebutkan nama kelas tujuannya secara spesifik.
* **Intent Implisit:** Memanggil aksi `ACTION_VIEW` dengan data URL. Sistem akan mencari aplikasi mana saja yang bisa membuka link tersebut (seperti Chrome atau Browser bawaan) tanpa menyebutkan nama aplikasinya secara spesifik.

**Point:**
Kombinasi antara manajemen proses yang agresif (LMK) dan sistem perpesanan yang fleksibel (Intent) memungkinkan Android tetap efisien dalam penggunaan baterai dan memori, namun tetap interaktif bagi pengguna.
## 6. Rekomendasi Strategi: Inventaris 2 Platform
## Perbandingan Strategi Pengembangan

| Kriteria | Native | Hybrid (Cross-Platform) | PWA (Progressive Web App) |
| :--- | :--- | :--- | :--- |
| **Biaya & Waktu** | Tinggi (Butuh 2 tim/codebase) | **Efisien** (1 codebase untuk 2 platform) | Paling Rendah (Berbasis web) |
| **Akses Hardware** | Full & Optimal | **Sangat Baik** (Akses Kamera/Scanner) | Terbatas (Terutama di iOS) |
| **Distribusi** | Play Store & App Store | **Play Store & App Store** | URL / Browser |
| **Performa** | Maksimal | Tinggi (Mendekati Native) | Menengah |
| **Offline Mode** | Sangat Baik | Sangat Baik | Terbatas |

## Analisis Rekomendasi: Hybrid (Cross-Platform)

Berdasarkan kebutuhan klien untuk aplikasi **inventaris** dengan **budget terbatas**, strategi **Hybrid** adalah pilihan yang paling logis karena:

1.  **Single Codebase:** Pengembangan hanya dilakukan satu kali menggunakan framework seperti Flutter atau React Native, namun hasilnya dapat dipublikasikan ke Android dan iOS sekaligus.
2.  **Fungsionalitas Kritis:** Aplikasi inventaris membutuhkan akses stabil ke kamera untuk pemindaian barcode/QR Code. Hybrid menyediakan API yang jauh lebih matang dibandingkan PWA dalam hal integrasi hardware.
3.  **Maintenance:** Pemeliharaan aplikasi jauh lebih mudah dan murah karena perbaikan bug atau penambahan fitur hanya dilakukan pada satu basis kode.
4.  **Keseimbangan:** Memberikan pengalaman pengguna (UX) yang profesional seperti aplikasi native dengan biaya yang mendekati pengembangan web.

---
*Dokumen ini disusun untuk memberikan pertimbangan teknis dan manajerial dalam pengambilan keputusan pengembangan software.*
