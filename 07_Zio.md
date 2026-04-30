# Ringkasan Materi: Wireless & Mobile Computing (Modul 1-6)

Dokumen ini berisi penjelasan komprehensif mengenai konsep kunci Wireless dan Mobile Computing berdasarkan materi perkuliahan, disusun menggunakan metode **PREP** (Point, Reason, Example, Point) dan **APBDP** (Alur, Poin, Bukti, Dampak, Penutup) untuk persiapan ujian yang optimal.

---

## 1. Strategi Pengembangan Aplikasi: Native vs Hybrid vs PWA

### Penjelasan dengan Metode PREP
* **Point (Titik Utama):** Pemilihan strategi pengembangan aplikasi harus didasarkan pada dimensi teknis dan batasan bisnis, bukan sekadar mengikuti tren.
* **Reason (Alasan):** Setiap pendekatan memiliki trade-off yang kontras. Native menawarkan akses hardware penuh dan performa maksimal namun biaya tim 2x lipat. PWA sangat efisien secara biaya dan distribusi (via URL) namun akses hardware terbatas.
* **Example (Contoh):** Jika klien membutuhkan aplikasi inventaris untuk 2 platform dengan budget terbatas, **PWA** atau **Hybrid** adalah rekomendasi utama. Namun, jika kebutuhannya adalah game AR dengan grafis tinggi, **Native** wajib dipilih.
* **Point (Kembali ke Titik Utama):** Jadi, efisiensi pengembangan harus selalu diseimbangkan dengan kebutuhan performa aplikasi di tangan pengguna.

---

## 2. Mekanisme Mobilitas: Hard vs Soft Handoff

### Penjelasan dengan Metode APBDP
* **Alur (Konteks):** Ketika sebuah perangkat mobile berpindah antar sel cakupan (BTS), sesi aktif harus dialihkan agar tidak terputus.
* **Poin:** Terdapat perbedaan fundamental antara mekanisme *Hard* dan *Soft Handoff*.
* **Bukti:** * **Hard Handoff:** Memutus koneksi dengan BTS lama sebelum menyambung ke BTS baru (*break-before-make*).
    * **Soft Handoff:** Menyambung ke BTS baru sebelum memutus yang lama (*make-before-break*), sehingga perangkat terhubung ke dua BTS sekaligus untuk sesaat.
* **Dampak:** *Soft Handoff* jauh lebih baik untuk **voice call** karena menghilangkan jeda transmisi yang biasanya menyebabkan suara terputus (latency).
* **Penutup:** Pemilihan mekanisme handoff menentukan kualitas layanan (QoS) pada jaringan seluler.

---

## 3. Arsitektur Jaringan dan Standar IEEE

Berikut adalah ringkasan standar IEEE untuk klasifikasi jaringan nirkabel:

| Kategori | Standar IEEE | Cakupan |
| :--- | :--- | :--- |
| **WPAN** | 802.15 | Personal (Bluetooth, Zigbee) |
| **WLAN** | 802.11 | Lokal (Wi-Fi) |
| **WMAN** | 802.16 | Metropolitan (WiMAX) |
| **WWAN** | Seluler | Luas (GSM/LTE/5G) |

**Kunci Perbedaan Mode:**
* **Infrastructure Mode:** Menggunakan Access Point (AP) sebagai pusat koordinasi.
* **Ad-Hoc Mode:** Komunikasi langsung antar perangkat tanpa infrastruktur pusat.

---

## 4. Sistem Operasi Mobile: Sandboxing & Manajemen Memori

### Mengapa Sandboxing di Mobile Lebih Ketat?
Sandboxing di mobile jauh lebih ketat dibanding desktop karena perangkat mobile menyimpan data yang sangat sensitif (lokasi real-time, kontak, SMS, pembayaran). Isolasi aplikasi memastikan bahwa kegagalan atau serangan pada satu aplikasi tidak dapat merambat ke aplikasi lain atau sistem inti.

### Hierarki Proses Android (Low Memory Killer - LMK):
Karena keterbatasan resource, OS mematikan proses dari prioritas terendah:
1. **Foreground Process:** Aplikasi yang sedang berinteraksi dengan pengguna (Prioritas tertinggi).
2. **Visible Process:** Aplikasi yang terlihat tapi tidak difokus (misal: di balik dialog).
3. **Service Process:** Menjalankan tugas latar belakang penting (misal: musik).
4. **Cached/Background Process:** Aplikasi yang tidak terlihat, paling pertama dimatikan jika RAM penuh.

---

## 5. Koneksi Antar Konsep (Analisis Kritis)

1. **Jaringan → OS → Aplikasi:** Latensi tinggi dan bandwidth terbatas pada jaringan nirkabel memaksa OS untuk mengimplementasikan manajemen background job yang ketat agar aplikasi tetap responsif.
2. **Handoff → Data Consistency:** Saat handoff terjadi, risiko kehilangan data meningkat. Inilah mengapa konsep **Offline-First** (sinkronisasi data saat koneksi stabil kembali) menjadi krusial dalam pengembangan mobile.
3. **Intent (Eksplisit vs Implisit):**
    * **Eksplisit:** Langsung menunjuk kelas/aplikasi tertentu.
    * **Implisit:** Memberikan "niat" (misal: "kirim gambar") dan membiarkan OS memilih aplikasi yang cocok.

---
*Generated for Repository: Persiapan UTS Wireless & Mobile Computing*
