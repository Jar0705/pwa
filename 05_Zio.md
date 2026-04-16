Pada sistem operasi Android, pengelolaan aplikasi dilakukan melalui mekanisme yang disebut manajemen proses (process management). Sistem ini bertugas mengatur aplikasi mana yang harus diprioritaskan dan mana yang dapat dihentikan ketika sumber daya seperti RAM mulai terbatas. Dalam hal ini, proses dibagi menjadi tiga kategori utama, yaitu foreground, background, dan cached.

Proses foreground merupakan aplikasi yang sedang aktif digunakan oleh pengguna, sehingga memiliki prioritas tertinggi dan hampir tidak pernah dihentikan oleh sistem. Sementara itu, proses background adalah aplikasi yang tidak sedang tampil di layar, namun masih berjalan, misalnya aplikasi pesan yang tetap menerima notifikasi. Di sisi lain, proses cached adalah aplikasi yang sudah tidak aktif dan hanya disimpan sementara di memori untuk mempercepat pembukaan ulang. Proses ini memiliki prioritas paling rendah dan akan menjadi yang pertama dihentikan jika sistem membutuhkan memori tambahan.

Selain pengelolaan proses, Android juga menyediakan mekanisme komunikasi antar aplikasi yang dikenal sebagai Inter Process Communication (IPC). Salah satu implementasi utamanya adalah penggunaan Intent, yang memungkinkan aplikasi untuk berpindah aktivitas atau mengirim data ke aplikasi lain. Intent ini terbagi menjadi dua jenis, yaitu explicit intent, yang digunakan untuk memanggil komponen tertentu secara langsung, dan implicit intent, yang memberikan kebebasan kepada sistem untuk memilih aplikasi yang sesuai dengan kebutuhan.

Untuk menjalankan tugas di latar belakang secara efisien, Android menyediakan komponen seperti WorkManager dan Service. WorkManager biasanya digunakan untuk pekerjaan yang terjadwal atau tertunda, seperti sinkronisasi data atau pengiriman laporan. Sementara itu, Service digunakan untuk menjalankan proses yang terus berjalan di latar belakang, seperti pemutar musik atau pelacakan lokasi menggunakan GPS.

Sistem Android juga menerapkan konsep event-driven, di mana seluruh aktivitas aplikasi dipicu oleh suatu kejadian atau peristiwa, seperti sentuhan pengguna, notifikasi masuk, atau perubahan sensor. Pendekatan ini membuat sistem lebih efisien karena tidak semua proses berjalan terus-menerus, melainkan hanya aktif ketika diperlukan.

Dalam menentukan prioritas aplikasi, sistem juga mempertimbangkan faktor lain seperti notifikasi aktif, penggunaan sensor (misalnya GPS atau musik), serta aktivitas pengguna. Aplikasi yang masih memberikan layanan penting kepada pengguna akan tetap dipertahankan meskipun berjalan di latar belakang.

Android juga menerapkan sistem keamanan data berbasis sandbox, di mana setiap aplikasi berjalan dalam ruang terisolasi. Hal ini mencegah aplikasi mengakses data aplikasi lain tanpa izin, sehingga keamanan dan privasi pengguna tetap terjaga.

Penjelasan Framework (Framework Layer Android)

Berdasarkan konteks tulisan di papan (seperti “Intent”, “API”, “NFC”, “Service”, “Manager”), hal tersebut merujuk pada Android Framework, yaitu lapisan yang menjadi penghubung antara aplikasi dengan sistem operasi (kernel).

Framework Android menyediakan berbagai API (Application Programming Interface) yang memudahkan developer dalam membuat aplikasi tanpa harus berinteraksi langsung dengan hardware.

Beberapa komponen penting dalam framework Android antara lain:

Activity Manager
Mengatur siklus hidup aplikasi dan perpindahan antar activity.
Window Manager
Mengatur tampilan antarmuka (UI) di layar.
Content Provider
Mengelola dan berbagi data antar aplikasi secara aman.
Resource Manager
Mengatur resource seperti gambar, string, layout, dll.
Notification Manager
Mengatur notifikasi yang muncul ke pengguna.
Location Manager (GPS)
Mengelola akses lokasi perangkat.
Telephony & NFC API
Digunakan untuk komunikasi seperti telepon, SMS, dan NFC.
Service & Background Processing
Mengatur proses yang berjalan di latar belakang.

Framework ini bekerja dengan konsep abstraksi, artinya developer cukup memanggil fungsi yang sudah tersedia tanpa perlu memahami detail implementasi di level bawah (kernel atau hardware).
