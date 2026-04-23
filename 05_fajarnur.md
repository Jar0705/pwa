Dalam wireless dan mobile computing, sistem operasi pada perangkat mobile mengatur penggunaan sumber daya seperti CPU, memori, dan baterai agar tetap efisien. Aplikasi dibagi menjadi foreground (aktif digunakan), background (berjalan di belakang), dan cache (disimpan sementara). Sistem dapat menghentikan proses tertentu (killer process) untuk menghemat resource.

Komunikasi antar aplikasi dilakukan melalui IPC seperti intent, sementara pengolahan data dan tugas latar belakang didukung oleh komponen seperti WorkManager dan database lokal. Perangkat mobile juga memanfaatkan sensor seperti GPS dan teknologi seperti NFC untuk meningkatkan fungsi aplikasi.

Selain itu, aspek keamanan dan optimasi sangat penting, termasuk mencegah exploit serta mengatur penggunaan energi agar baterai lebih hemat. Secara keseluruhan, mobile computing berfokus pada efisiensi, performa, dan pengalaman pengguna dalam lingkungan yang terbatas sumber daya.

menggunakan framework prep:

Point:
Dalam wireless dan mobile computing, sistem operasi mobile dirancang untuk mengelola sumber daya secara efisien agar aplikasi tetap berjalan optimal meskipun memiliki keterbatasan seperti memori dan baterai.

Reason:
Hal ini dilakukan dengan membagi proses menjadi foreground, background, dan cache, serta menggunakan mekanisme seperti killer process untuk menghentikan aplikasi yang tidak diperlukan. Selain itu, komunikasi antar aplikasi menggunakan IPC (intent), dan sistem juga memanfaatkan sensor seperti GPS serta teknologi seperti NFC. Optimasi dan keamanan juga penting untuk menjaga performa dan mencegah penyalahgunaan sistem.

Example:
Contohnya, saat pengguna membuka aplikasi peta, aplikasi tersebut menjadi foreground dan menggunakan GPS secara aktif. Sementara itu, aplikasi lain seperti musik dapat berjalan di background, dan aplikasi yang sudah ditutup akan masuk ke cache. Jika memori penuh, sistem akan otomatis menutup aplikasi cache terlebih dahulu.

Point (penegasan):
Dengan mekanisme tersebut, sistem mobile mampu menjaga keseimbangan antara performa, efisiensi energi, dan pengalaman pengguna dalam lingkungan wireless yang dinamis.


1. Wireless Mobile Computing
P (Point)
Wireless Mobile Computing adalah teknologi yang memungkinkan perangkat mobile (HP, laptop, tablet) untuk mengakses data dan sistem tanpa kabel melalui jaringan nirkabel.
R (Reason)
Teknologi ini penting karena:
Mobilitas tinggi → bisa akses data kapan saja & di mana saja
Mendukung kerja real-time (contoh: POS, ojek online, e-commerce)
Tidak tergantung jaringan kabel (fleksibel & scalable)
Komponen utama:
Perangkat mobile (smartphone, tablet)
Jaringan wireless (WiFi, 4G/5G)
Backend/server/cloud
E (Example)
Contoh:
Aplikasi kasir berbasis mobile (POS yang lagi lu buat)
Gojek / Grab (tracking real-time)
Mobile banking
P (Point – penegasan)
Jadi, wireless mobile computing adalah fondasi utama dari semua aplikasi mobile modern karena memungkinkan komunikasi data secara fleksibel dan real-time.
2. Teknologi Mobile Web App
P (Point)
Mobile Web App adalah aplikasi yang diakses melalui browser di HP tanpa harus install dari Play Store/App Store.
R (Reason)
Kelebihan:
Tidak perlu install → hemat storage
Bisa langsung diakses via URL
Update mudah (cukup update server)
Kekurangan:
Akses hardware terbatas (kamera, NFC, dll)
Performa tidak secepat native
Teknologi yang digunakan:
HTML, CSS, JavaScript
Framework: Bootstrap, React, Vue
API backend (PHP, Laravel, Node.js)
E (Example)
Contoh:
Website e-commerce versi mobile
Sistem inventaris berbasis web
Dashboard admin berbasis browser
P (Point – penegasan)
Mobile Web App cocok untuk aplikasi ringan, cepat diakses, dan tidak butuh fitur hardware kompleks.
3. Aplikasi Mobile (Native App)
P (Point)
Aplikasi Mobile (Native App) adalah aplikasi yang diinstall di perangkat dan dibuat khusus untuk OS tertentu (Android/iOS).
R (Reason)
Kelebihan:
Performa tinggi
Bisa akses hardware penuh (kamera, GPS, NFC)
UI/UX lebih smooth
Kekurangan:
Harus install
Perlu maintenance beda platform (Android & iOS)
Teknologi:
Android: Kotlin / Java
iOS: Swift
Database: SQLite / Firebase
E (Example)
Contoh:
WhatsApp
TikTok
Mobile banking
P (Point – penegasan)
Native app cocok untuk aplikasi berat, real-time, dan butuh akses penuh ke device.
4. Hybrid App
(Biar lengkap sesuai papan tulis lu)
P (Point)
Hybrid App adalah gabungan antara web app dan native app.
R (Reason)
Kelebihan:
1 codebase → bisa Android & iOS
Lebih cepat develop dibanding native
Kekurangan:
Performa di bawah native
Kadang ada keterbatasan fitur
Teknologi:
React Native
Flutter
Ionic
E (Example)
Aplikasi startup MVP
Aplikasi POS sederhana lintas platform
P (Point – penegasan)
Hybrid cocok untuk efisiensi development dengan tetap mendekati performa native.
