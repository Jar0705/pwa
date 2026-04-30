# Dokumentasi Komprehensif: Konsep Komputasi Bergerak & Strategi Aplikasi

Dokumen ini menyajikan analisis mendalam mengenai infrastruktur jaringan nirkabel, mekanisme internal sistem operasi Android, hingga strategi manajerial pengembangan aplikasi.

---

## 1. Wireless vs. Mobile Computing
**Point:** Perbedaan mendasar terletak pada **media transmisi** (nirkabel) versus **kapabilitas mobilitas** (perpindahan pengguna).
Dalam konteks Mobile Computing, pemahaman mengenai Media Transmisi dan Kapabilitas Mobilitas sangat penting untuk membedakan aspek infrastruktur dan aspek penggunaan.

Berikut adalah penjelasan mendalam mengenai kedua aspek tersebut:

**1. Media Transmisi (Wireless Connectivity)**
Media transmisi mengacu pada jalur atau perantara yang digunakan untuk mengirimkan data dari satu titik ke titik lain tanpa menggunakan kabel fisik.

-**Cara Kerja**: Data dikirimkan melalui gelombang elektromagnetik (seperti gelombang radio, mikrowave, atau inframerah) yang merambat di udara.  

-**Fokus Utama**: Menghilangkan ketergantungan pada kabel tembaga atau serat optik (fiber optic) untuk menghubungkan perangkat ke jaringan.  

-**Contoh Teknologi**: Wi-Fi (IEEE 802.11), Bluetooth (IEEE 802.15), dan koneksi satelit.  

-**Karakteristik**: Meskipun nirkabel, perangkat bisa saja tetap bersifat statis (tidak berpindah), seperti antena pemancar internet di atap gedung.

**2. Kapabilitas Mobilitas (User Mobility)**
Kapabilitas mobilitas mengacu pada kemampuan sistem atau pengguna untuk tetap melakukan proses komputasi, mengakses data, dan menjalankan aplikasi sambil berpindah lokasi secara fisik.

-**Cara Kerja**: Sistem mobile dirancang untuk menangani perubahan titik akses atau "handover" saat pengguna berpindah dari satu area cakupan pemancar ke pemancar lainnya tanpa memutus koneksi.

-**Fokus Utama**: Portabilitas perangkat dan kontinuitas layanan (layanan tetap aktif meski pengguna sedang di dalam kendaraan atau berjalan kaki).

-**Aspek Penting**: Melibatkan perangkat keras yang ringkas (smartphone/tablet), manajemen baterai, dan sistem operasi yang mampu beradaptasi dengan perubahan sinyal.

-**Karakteristik**: Mobilitas memungkinkan komputasi terjadi di mana saja dan kapan saja (ubiquitous computing).

**Point:** Perbedaan mendasar terletak pada **media transmisi** versus **kapabilitas pengguna**[cite: 1].

- **Reason:** Wireless berfokus pada penghapusan kabel (transmisi data), sedangkan Mobile berfokus pada mobilitas fisik pengguna tanpa memutus layanan[cite: 1].
- **Example:**
    - **Hanya Wireless:** Smart TV atau PC Desktop yang terhubung ke Wi-Fi; perangkat tidak berpindah secara fisik namun nirkabel[cite: 1].
    - **Hanya Mobile:** Penggunaan aplikasi pencatat offline di tablet saat berada di pesawat; pengguna bergerak tetapi tidak terhubung jaringan nirkabel[cite: 1].
    - **Keduanya:** Smartphone menggunakan data seluler saat bepergian; pengguna berpindah fisik dan terhubung nirkabel[cite: 1].
- **Point:** Keduanya sering berjalan beriringan tetapi memiliki tujuan teknis yang berbeda[cite: 1].

## 2. Mobility & Handover (Hard vs. Soft)
**Point:** **Soft Handover** merupakan mekanisme yang jauh lebih baik untuk menjaga kualitas layanan suara (*voice call*).

- **Penjelasan:** Mekanisme *Soft Handover* menggunakan prinsip **"make-before-break"**, di mana perangkat terhubung ke pemancar (BTS) baru sebelum memutuskan hubungan dengan pemancar lama. Hal ini menjamin tidak adanya jeda (*latency*) yang terasa. Sebaliknya, *Hard Handover* menggunakan prinsip **"break-before-make"** yang menyebabkan pemutusan sesaat, sering kali mengakibatkan suara terputus atau *dropped call*.
- **Contoh Kasus:** Pada jaringan 3G/WCDMA, *Soft Handover* memungkinkan transisi mulus saat pengguna menelpon di dalam kendaraan yang bergerak cepat melintasi berbagai zona pemancar.
- **Kesimpulan:** Untuk aplikasi real-time seperti telepon atau video call, stabilitas *Soft Handover* adalah standar utama untuk kenyamanan pengguna.

---

## 3. Standar IEEE & Topologi Jaringan
**Point:** Klasifikasi jaringan ditentukan oleh standar IEEE berdasarkan jangkauan cakupan dan tujuan fungsionalnya.

- **Daftar Standar:**
    - **WPAN (Personal):** IEEE 802.15 (Bluetooth) untuk koneksi jarak sangat dekat (headset/wearable).
    - **WLAN (Local):** IEEE 802.11 (Wi-Fi) untuk akses internet di dalam gedung atau rumah.
    - **WMAN (Metropolitan):** IEEE 802.16 (WiMAX) untuk cakupan nirkabel skala kota.
    - **WWAN (Wide Area):** IEEE 802.20 atau standar seluler (4G/5G) untuk area luas antar wilayah.
- **Topologi Ad-Hoc vs Infrastruktur:** Jaringan **Infrastruktur** bergantung pada titik pusat kendali (Access Point), sedangkan **Ad-Hoc** memungkinkan antar perangkat berkomunikasi langsung tanpa perantara pusat, sangat berguna dalam situasi darurat atau area tanpa sinyal pusat.
- **Kesimpulan:** Pemilihan standar menentukan efisiensi biaya dan performa sesuai dengan luas cakupan geografis.

---

## 4. Arsitektur 4 Lapisan Android & Sandboxing
**Point:** Android menggunakan arsitektur berlapis untuk pemisahan tugas dan sistem **Sandboxing** ketat guna melindungi privasi data.

- **Penjelasan:** Berbeda dengan desktop, Android menerapkan keamanan berbasis Kernel Linux di mana setiap aplikasi dianggap sebagai pengguna (User ID) yang berbeda. Hal ini mengisolasi setiap aplikasi dalam wadahnya sendiri (sandbox) sehingga serangan pada satu aplikasi tidak dapat menyebar ke aplikasi lain secara otomatis.
- **4 Lapisan Utama:**
    1. **System Apps:** Aplikasi tingkat atas yang berinteraksi langsung dengan pengguna (SMS, Kontak).
    2. **Java API Framework:** Alat bagi developer untuk mengakses fitur ponsel (Kamera, Lokasi).
    3. **Native Libraries & ART:** Tempat eksekusi kode (Android Runtime) agar aplikasi berjalan cepat dan efisien.
    4. **Linux Kernel:** Pengelola hardware, memori, dan keamanan tingkat rendah.
- **Kesimpulan:** Sistem *Sandboxing* memastikan aplikasi kalkulator tidak bisa membaca chat WhatsApp Anda tanpa izin, memberikan perlindungan ganda terhadap malware.

---

## 5. LMK, IPC, dan Intent
**Point:** Android mengelola efisiensi memori melalui **Low Memory Killer (LMK)** dan memfasilitasi komunikasi antar aplikasi melalui **Intent**.

- **Penjelasan:** Karena RAM terbatas, **LMK** akan mematikan proses yang tidak aktif berdasarkan prioritas. Agar aplikasi yang terisolasi di sandbox berbeda tetap bisa bekerja sama, digunakanlah mekanisme **IPC** (Inter-Process Communication) yang dijembatani oleh **Intent**.
- **Contoh Kasus:**
    - **Hierarki LMK:** Saat RAM penuh, Android akan menutup aplikasi media sosial yang sudah lama tidak dibuka (Background) agar game yang sedang Anda mainkan (Foreground) tetap lancar.
    - **Intent Eksplisit:** Digunakan untuk berpindah halaman di dalam satu aplikasi secara spesifik (misal: klik tombol "Profil").
    - **Intent Implisit:** Saat klik "Kirim Email", sistem menawarkan pilihan aplikasi (Gmail atau Outlook) tanpa developer harus menentukan aplikasinya di dalam kode.
- **Kesimpulan:** Kombinasi ini memastikan perangkat tetap responsif meski sumber daya hardware terbatas.

---

## 6. Strategi Pengembangan: Inventaris 2 Platform
**Point:** Strategi **Hybrid (Cross-Platform)** adalah pilihan paling logis untuk aplikasi inventaris dengan budget terbatas.

### Analisis Berdasarkan Kriteria:
| Kriteria | Penjelasan Strategi Hybrid |
| :--- | :--- |
| **Akses** | Memiliki akses kamera/scanner yang sangat baik melalui *bridge* (penting untuk barcode). |
| **Performa** | Sangat halus dan responsif, cukup kuat untuk menangani ribuan data inventaris. |
| **Biaya** | Sangat efisien karena hanya butuh **satu basis kode** untuk Android & iOS sekaligus. |
| **Distribusi** | Bisa dipublikasikan secara profesional melalui Google Play Store dan App Store. |

- **Pilihan Tepat:** Dibandingkan Native yang mahal (butuh 2 tim) atau PWA yang lemah dalam akses hardware di iOS, **Hybrid** (seperti Flutter atau React Native) memberikan keseimbangan terbaik antara fungsionalitas teknis dan penghematan anggaran bagi klien.

---
*Dibuat untuk keperluan dokumentasi teknis dan panduan pengembangan sistem.*
