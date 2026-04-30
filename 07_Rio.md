✅ P1 — Wireless vs Mobile Computing
P (Point)

Wireless Computing adalah komputasi menggunakan komunikasi tanpa kabel, sedangkan Mobile Computing adalah komputasi yang memungkinkan perangkat tetap digunakan saat pengguna berpindah lokasi.

R (Reason)

Wireless berfokus pada teknologi komunikasi seperti WiFi, Bluetooth, dan jaringan seluler. Mobile computing menekankan mobilitas pengguna, efisiensi energi, adaptasi jaringan, serta kemampuan sistem bekerja di lingkungan dinamis.

Keduanya berbeda karena konektivitas tidak selalu berarti mobilitas, dan mobilitas tidak selalu membutuhkan koneksi jaringan.

E (Example)

Komputer desktop dengan WiFi merupakan wireless tetapi tidak mobile. Laptop yang digunakan di perjalanan tanpa internet merupakan mobile tetapi tidak wireless. Smartphone dengan jaringan 4G merupakan kombinasi keduanya.

P (Reinforcement)

Wireless menjawab cara koneksi perangkat, sedangkan mobile menjawab kemampuan perangkat beroperasi saat berpindah.

APBDP (Analisis Problem Berbasis Domain Praktis)

Dalam implementasi bisnis, perbedaan ini penting saat merancang sistem. Sistem kasir restoran menggunakan WiFi termasuk wireless computing, tetapi belum tentu mobile. Sebaliknya, aplikasi kurir pengiriman membutuhkan mobile computing karena pekerja terus berpindah lokasi. Kesalahan memahami konsep ini dapat menyebabkan desain sistem tidak sesuai kebutuhan operasional.

✅ P2 — Mobilitas dan Handover
P (Point)

Hard Handoff memutus koneksi lama sebelum membuat koneksi baru, sedangkan Soft Handoff mempertahankan koneksi selama perpindahan jaringan sehingga komunikasi tetap stabil.

R (Reason)

Hard Handoff menggunakan prinsip break before make yang menyebabkan jeda komunikasi. Soft Handoff menggunakan make before break sehingga perangkat sementara terhubung ke lebih dari satu base station.

E (Example)

Saat pengguna melakukan panggilan telepon di kendaraan yang bergerak cepat, Hard Handoff dapat menyebabkan suara terputus. Soft Handoff menjaga kualitas suara tetap stabil tanpa gangguan.

P (Reinforcement)

Soft Handoff lebih ideal untuk layanan real-time karena menjaga kontinuitas komunikasi.

APBDP (Analisis Problem Berbasis Domain Praktis)

Pada layanan ride-hailing atau ambulans darurat, koneksi suara tidak boleh terputus. Operator jaringan harus mengimplementasikan Soft Handoff untuk menjaga kualitas layanan. Jika menggunakan Hard Handoff, risiko kehilangan komunikasi dapat berdampak langsung pada keselamatan atau kualitas layanan pelanggan.

✅ P3 — WPAN, WLAN, WMAN, WWAN dan IEEE
P (Point)

Jaringan nirkabel diklasifikasikan berdasarkan cakupan area komunikasi dan standar teknologi yang digunakan.

R (Reason)

WPAN digunakan untuk komunikasi personal jarak dekat. WLAN digunakan pada lingkungan lokal seperti kantor atau kampus. WMAN melayani area kota, sedangkan WWAN mencakup wilayah sangat luas melalui jaringan operator seluler. Standar IEEE memastikan interoperabilitas perangkat.

Mode Ad-Hoc memungkinkan komunikasi langsung antar perangkat, sedangkan Infrastructure membutuhkan access point sebagai pusat komunikasi.

E (Example)

Bluetooth smartwatch merupakan WPAN. WiFi kampus adalah WLAN. Internet kota berbasis WiMAX termasuk WMAN. Jaringan 4G dan 5G operator merupakan WWAN. Hotspot langsung antar laptop adalah Ad-Hoc, sedangkan WiFi rumah adalah Infrastructure.

P (Reinforcement)

Perbedaan jenis jaringan menentukan desain arsitektur komunikasi dan kebutuhan infrastruktur.

APBDP (Analisis Problem Berbasis Domain Praktis)

Perusahaan logistik menggunakan WPAN untuk scanner barcode, WLAN untuk gudang, dan WWAN untuk pelacakan kendaraan di lapangan. Pemilihan jaringan yang salah dapat menyebabkan biaya operasional tinggi atau performa sistem tidak optimal.

✅ P4 — Arsitektur OS Mobile dan Sandbox
P (Point)

OS mobile menggunakan arsitektur berlapis dengan sandboxing ketat untuk menjaga keamanan sistem dan data pengguna.

R (Reason)

Lapisan kernel mengelola hardware dan proses. Library menyediakan fungsi sistem. Application framework menyediakan layanan untuk developer. Lapisan aplikasi menjadi antarmuka pengguna.

Sandbox membatasi setiap aplikasi agar berjalan dalam lingkungan terisolasi sehingga tidak dapat mengakses data aplikasi lain tanpa izin pengguna.

E (Example)

Aplikasi media sosial tidak dapat membaca file galeri atau lokasi tanpa permission. Setiap aplikasi memiliki ruang penyimpanan sendiri.

P (Reinforcement)

Keamanan mobile OS lebih ketat karena perangkat menyimpan data pribadi dan selalu terhubung ke internet.

APBDP (Analisis Problem Berbasis Domain Praktis)

Dalam pengembangan aplikasi perbankan mobile, sandbox sangat penting untuk mencegah pencurian data finansial. Tanpa isolasi aplikasi, malware dapat mengakses OTP, PIN, atau informasi rekening pengguna sehingga meningkatkan risiko fraud digital.

✅ P5 — LMK, IPC, dan Intent
P (Point)

Android mengelola aplikasi melalui sistem prioritas proses, komunikasi antar proses, serta mekanisme Intent sebagai penghubung antar komponen aplikasi.

R (Reason)

Karena perangkat mobile memiliki keterbatasan RAM, Android menggunakan Low Memory Killer untuk menghapus proses dengan prioritas rendah terlebih dahulu. IPC memungkinkan pertukaran data antar aplikasi secara aman. Intent memungkinkan aplikasi meminta layanan aplikasi lain tanpa integrasi langsung.

E (Example)

Saat pengguna membagikan foto dari galeri ke aplikasi chat, Android menggunakan Intent implisit untuk memilih aplikasi tujuan.

P (Reinforcement)

Intent menjadikan Android ekosistem terbuka di mana aplikasi dapat bekerja sama secara modular.

APBDP (Analisis Problem Berbasis Domain Praktis)

Developer aplikasi e-commerce memanfaatkan Intent untuk membuka kamera, pembayaran digital, atau peta navigasi tanpa membuat fitur dari nol. Hal ini mempercepat pengembangan aplikasi dan menurunkan biaya produksi software.

✅ P6 — Native vs Hybrid vs PWA
P (Point)

Untuk aplikasi inventaris multi platform dengan anggaran terbatas, pendekatan PWA merupakan strategi paling efisien.

R (Reason)

Aplikasi native membutuhkan pengembangan terpisah untuk setiap platform sehingga biaya tinggi. Hybrid mengurangi biaya namun tetap membutuhkan packaging aplikasi. PWA menggunakan teknologi web tunggal yang dapat berjalan di berbagai perangkat melalui browser sekaligus dapat diinstal seperti aplikasi.

E (Example)

Aplikasi inventaris gudang yang hanya membutuhkan input barang, monitoring stok, dan laporan dapat berjalan optimal menggunakan PWA tanpa perlu membuat aplikasi Android dan iOS terpisah.

P (Reinforcement)

PWA memberikan keseimbangan terbaik antara biaya, fleksibilitas, dan kecepatan pengembangan.

APBDP (Analisis Problem Berbasis Domain Praktis)

Startup dengan dana terbatas dapat meluncurkan sistem inventaris lebih cepat menggunakan PWA sehingga waktu masuk pasar menjadi lebih singkat. Perusahaan dapat memvalidasi model bisnis terlebih dahulu sebelum berinvestasi pada aplikasi native yang lebih mahal.
