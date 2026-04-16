Pada sistem operasi Android, pengelolaan aplikasi dilakukan melalui mekanisme yang disebut manajemen proses (process management). Sistem ini bertugas mengatur aplikasi mana yang harus diprioritaskan dan mana yang dapat dihentikan ketika sumber daya seperti RAM mulai terbatas. Dalam hal ini, proses dibagi menjadi tiga kategori utama, yaitu foreground, background, dan cached.

Proses foreground merupakan aplikasi yang sedang aktif digunakan oleh pengguna, sehingga memiliki prioritas tertinggi dan hampir tidak pernah dihentikan oleh sistem. Sementara itu, proses background adalah aplikasi yang tidak sedang tampil di layar, namun masih berjalan, misalnya aplikasi pesan yang tetap menerima notifikasi. Di sisi lain, proses cached adalah aplikasi yang sudah tidak aktif dan hanya disimpan sementara di memori untuk mempercepat pembukaan ulang. Proses ini memiliki prioritas paling rendah dan akan menjadi yang pertama dihentikan jika sistem membutuhkan memori tambahan.

Selain pengelolaan proses, Android juga menyediakan mekanisme komunikasi antar aplikasi yang dikenal sebagai Inter Process Communication (IPC). Salah satu implementasi utamanya adalah penggunaan Intent, yang memungkinkan aplikasi untuk berpindah aktivitas atau mengirim data ke aplikasi lain. Intent ini terbagi menjadi dua jenis, yaitu explicit intent dan implicit intent. Explicit intent digunakan untuk memanggil komponen tertentu secara langsung, sedangkan implicit intent memberikan kebebasan kepada sistem untuk memilih aplikasi yang sesuai.

Untuk menjalankan tugas di latar belakang secara efisien, Android menyediakan komponen seperti Service dan WorkManager. Service digunakan untuk proses yang berjalan terus-menerus seperti pemutar musik atau GPS, sedangkan WorkManager digunakan untuk pekerjaan terjadwal seperti sinkronisasi data. Sistem Android juga bersifat event-driven, artinya aplikasi berjalan berdasarkan kejadian seperti klik, notifikasi, atau perubahan sensor.

Selain itu, Android menerapkan sistem keamanan berbasis sandbox, di mana setiap aplikasi berjalan di ruang terpisah sehingga tidak bisa sembarangan mengakses data aplikasi lain.

Framework Android

Framework merupakan lapisan yang menyediakan berbagai API agar aplikasi bisa berinteraksi dengan sistem. Dari tulisan di papan seperti Intent, API, NFC, Service, semuanya termasuk bagian dari framework.

Contoh komponen framework:

Activity Manager → mengatur lifecycle aplikasi
Notification Manager → mengatur notifikasi
Location Manager (GPS) → mengatur lokasi
NFC API → komunikasi jarak dekat
Content Provider → berbagi data antar aplikasi

Framework ini memudahkan developer karena tidak perlu berinteraksi langsung dengan hardware.

4 Layer Mobile OS (Android) + Contoh Komponen di HP

Android memiliki 4 lapisan utama, dan setiap lapisan bisa kita kaitkan langsung dengan komponen nyata di HP:

1. Applications Layer (Lapisan Aplikasi)

Lapisan paling atas, yang langsung digunakan oleh pengguna.

Contoh di HP:

WhatsApp
YouTube
Kamera (Camera App)

Fungsi:

Menyediakan fitur yang digunakan user
Berinteraksi dengan framework
2. Application Framework Layer

Lapisan yang menyediakan layanan/API untuk aplikasi.

Contoh di HP:

Notification Manager → notifikasi WA muncul
Location Manager → Google Maps pakai GPS
Activity Manager → pindah antar aplikasi

Fungsi:

Penghubung aplikasi dengan sistem
Mengatur resource dan lifecycle
3. Libraries & Android Runtime

Berisi library dan runtime yang menjalankan aplikasi.

Contoh di HP:

Android Runtime (ART) → menjalankan aplikasi Android
SQLite → database lokal aplikasi
WebKit / Chromium → browser di HP

Fungsi:

Menyediakan fungsi dasar (database, web, grafik)
Menjalankan kode aplikasi
4. Linux Kernel Layer

Lapisan paling bawah yang berhubungan langsung dengan hardware.

Contoh di HP:

Driver Kamera → mengontrol kamera
Driver WiFi/Bluetooth → koneksi jaringan
Driver Audio → suara dan musik

Fungsi:

Mengatur hardware
Manajemen memori & proses
Keamanan sistem
