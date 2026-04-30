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

- **Reason:** Wireless berfokus pada penghapusan kabel (transmisi data), sedangkan Mobile berfokus pada mobilitas fisik pengguna tanpa memutus layanan[cite: 1].
- **Example:**
    - **Hanya Wireless:** Smart TV atau PC Desktop yang terhubung ke Wi-Fi; perangkat tidak berpindah secara fisik namun nirkabel[cite: 1].
    - **Hanya Mobile:** Penggunaan aplikasi pencatat offline di tablet saat berada di pesawat; pengguna bergerak tetapi tidak terhubung jaringan nirkabel[cite: 1].
    - **Keduanya:** Smartphone menggunakan data seluler saat bepergian; pengguna berpindah fisik dan terhubung nirkabel[cite: 1].
- **Point:** Keduanya sering berjalan beriringan tetapi memiliki tujuan teknis yang berbeda[cite: 1].

---

## 2. Mobility & Handover (Hard vs. Soft)
**Point**: Soft Handover merupakan mekanisme yang jauh lebih baik untuk menjaga kualitas layanan suara (voice call) dibandingkan Hard Handover.  

**Reason**: Mekanisme Soft Handover menggunakan prinsip "make-before-break", di mana perangkat terhubung ke pemancar baru sebelum memutuskan hubungan dengan pemancar lama. Hal ini menjamin tidak adanya jeda (latency) yang terasa oleh pengguna. Sebaliknya, Hard Handover menggunakan prinsip "break-before-make" yang sering menyebabkan suara terputus sejenak atau bahkan panggilan terhenti jika perpindahan gagal.  

**Example**: Pada jaringan CDMA atau WCDMA (3G), Soft Handover memungkinkan transisi yang mulus saat Anda menelpon di dalam mobil yang bergerak cepat melintasi area cakupan BTS yang berbeda.

**Point**: Untuk aplikasi yang sensitif terhadap waktu seperti panggilan suara dan video, stabilitas yang ditawarkan Soft Handover adalah standar emas untuk menjaga kenyamanan pengguna.  

---

## 3. Standar IEEE & Topologi Jaringan
**Point**: Klasifikasi jaringan nirkabel ditentukan oleh standar IEEE berdasarkan jangkauan area cakupan dan tujuan fungsionalnya.  

**Reason**: Setiap standar (seperti 802.11 untuk Wi-Fi) dirancang dengan protokol yang berbeda untuk mengoptimalkan kecepatan data, konsumsi daya, dan kekuatan sinyal sesuai jarak tempuh komunikasinya.  

**Example**:

-**WPAN** (Personal): IEEE 802.15 (Bluetooth) untuk menghubungkan perangkat pribadi dalam jarak beberapa meter.  

-**WLAN** (Local): IEEE 802.11 (Wi-Fi) untuk satu gedung atau rumah.  

-**WMAN** (Metropolitan): IEEE 802.16 (WiMAX) untuk cakupan satu kota.  

-**WWAN** (Wide): IEEE 802.20 atau jaringan seluler untuk antar kota/negara.  

Ad-Hoc vs Infrastruktur: Jaringan Infrastruktur sangat bergantung pada titik pusat (Access Point) sebagai pengatur lalu lintas data, sedangkan Ad-Hoc memungkinkan antar perangkat berkomunikasi langsung tanpa perantara, sangat berguna dalam kondisi darurat di mana tidak ada pemancar sinyal pusat.
Point: Pemilihan standar dan topologi yang tepat sangat krusial untuk memastikan efisiensi biaya dan performa sesuai dengan luas wilayah yang ingin dicakup.

---

## 4. Arsitektur 4 Lapisan Android & Sandboxing
**Point:** Android menggunakan arsitektur berlapis untuk pemisahan tugas dan sistem **Sandboxing** ketat guna melindungi privasi data.

**Reason**: Berbeda dengan sistem operasi desktop yang cenderung lebih terbuka, Android menerapkan sistem keamanan berbasis Kernel Linux di mana setiap aplikasi dianggap sebagai "pengguna" yang berbeda dengan User ID (UID) unik. Hal ini mengisolasi setiap aplikasi dalam wadahnya sendiri (sandbox) sehingga kegagalan atau serangan pada satu aplikasi tidak menyebar ke aplikasi lain.  

**Example**:System Apps: Lapisan atas yang bersentuhan langsung dengan pengguna (seperti aplikasi Telepon atau SMS).  Java API Framework: Kumpulan kelas yang digunakan pengembang untuk mengakses fitur ponsel seperti lokasi atau kamera.  Native Libraries & ART: Tempat di mana kode aplikasi dijalankan dan dioptimalkan agar responsif.  Linux Kernel: Lapisan terbawah yang mengatur hardware, memori, dan keamanan sistem secara keseluruhan.  Sandboxing: Aplikasi game yang baru Anda unduh secara teknis tidak dapat membaca data di dalam aplikasi Mobile Banking Anda karena keduanya berada di sandbox yang terpisah dan terisolasi.

**Point**: Arsitektur ini memberikan lapisan perlindungan ganda yang menjaga perangkat tetap stabil meskipun ada aplikasi yang bermasalah di dalamnya.  
- **Kesimpulan:** Sistem *Sandboxing* memastikan aplikasi kalkulator tidak bisa membaca chat WhatsApp Anda tanpa izin, memberikan perlindungan ganda terhadap malware.

---

## 5. LMK, IPC, dan Intent
**Point:** Android mengelola efisiensi memori melalui **Low Memory Killer (LMK)** dan memfasilitasi komunikasi antar aplikasi melalui **Intent**.

**Reason**: Karena RAM pada perangkat mobile terbatas, LMK harus secara agresif mematikan proses yang tidak aktif berdasarkan prioritas (hierarki proses). Agar aplikasi yang berada di sandbox berbeda tetap bisa bekerja sama (misalnya mengirim data), digunakanlah mekanisme IPC yang dijembatani oleh Intent.  

**Example**:Hierarki LMK: Jika RAM penuh saat Anda membuka aplikasi berat, Android akan otomatis menutup aplikasi media sosial yang sudah lama Anda tinggalkan di latar belakang agar sistem tidak macet.  Intent Eksplisit: Digunakan di dalam aplikasi Anda sendiri, misalnya saat Anda menekan tombol "Profil" untuk berpindah halaman secara spesifik.  Intent Implisit: Saat Anda menekan "Kirim Email", sistem akan mencarikan aplikasi email apa pun yang terpasang di HP Anda untuk melakukan tugas tersebut tanpa Anda harus menentukan aplikasinya secara manual.
Point: Mekanisme ini memastikan sistem tetap responsif bagi pengguna sambil tetap memberikan fleksibilitas fungsionalitas antar aplikasi yang tinggi.

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
