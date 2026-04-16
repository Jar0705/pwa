1. Killer Proses (Manajemen Memori)
Bagian ini membahas bagaimana sistem operasi (Android Runtime) mengelola sumber daya dan memutuskan proses mana yang akan dihentikan ("dibunuh") ketika memori RAM penuh.

- Foreground: Proses yang sedang berinteraksi langsung dengan pengguna (aplikasi yang sedang terbuka di layar). Ini memiliki prioritas tertinggi dan terakhir untuk dihentikan.

- Background: Aplikasi yang tidak terlihat oleh pengguna. Sistem akan menghentikan proses ini lebih dulu jika butuh memori. Di catatan terdapat tulisan "Peristiwa siapa mati dulu", yang merujuk pada hierarki prioritas ini.

- Cache: Data sementara yang disimpan agar aplikasi lebih cepat saat dibuka kembali. Ini adalah kategori pertama yang akan dibersihkan oleh sistem karena tidak berdampak langsung pada fungsionalitas aplikasi yang sedang berjalan.

- Interaksi GPS & Music: Catatan ini menunjukkan pengecualian. Meskipun aplikasi berada di background, jika sedang menggunakan layanan aktif seperti navigasi GPS atau memutar musik, sistem akan memberinya prioritas lebih tinggi agar tidak mati tiba-tiba.

2. Komunikasi Antar Proses (IPC)
Bagian ini menjelaskan bagaimana satu komponen aplikasi berkomunikasi dengan komponen lain, baik di dalam aplikasi yang sama maupun aplikasi yang berbeda.

- Intent: Mekanisme utama di Android untuk meminta aksi dari komponen lain.

- Eksplisit: Digunakan untuk memanggil komponen spesifik (misalnya, berpindah dari MainActivity ke DetailActivity).

- Implisit: Digunakan saat aplikasi meminta aksi umum (misalnya, "Buka NFC" atau "Buka Galeri"), di mana sistem akan mencari aplikasi mana pun yang bisa menangani permintaan tersebut.

- WorkManager: API untuk menjadwalkan tugas di latar belakang (background tasks) yang harus tetap berjalan meskipun aplikasi ditutup atau perangkat di-restart (misalnya, sinkronisasi data ke server).

3. Keamanan Data & Event Driven
- Keamanan Data: Terdapat catatan mengenai FBE (File-Based Encryption). Ini adalah standar keamanan Android di mana file yang berbeda dienkripsi dengan kunci yang berbeda pula, memungkinkan fitur seperti "Direct Boot" (aplikasi tertentu bisa berjalan meski ponsel belum dibuka kuncinya setelah restart).

- Event-Driven: Arsitektur di mana aliran program ditentukan oleh peristiwa atau "event" (seperti klik tombol, sensor, atau pesan dari sistem).

4. Optimasi (Aktif vs Pasif)
Bagian ini berkaitan dengan efisiensi penggunaan sumber daya perangkat:
- Optimasi Aktif: Aplikasi secara sadar melakukan tindakan untuk menghemat energi (misalnya, mengurangi frekuensi update lokasi).

- Optimasi Pasif: Memanfaatkan data yang sudah ada tanpa meminta sumber daya baru (misalnya, aplikasi cuaca yang menunggu data lokasi dari Google Maps daripada menyalakan GPS sendiri).

- Battery & Apps: Fokus utamanya adalah memastikan aplikasi tetap lancar tanpa menguras baterai secara berlebihan, sering kali melalui manajemen wakelocks dan job scheduling.

Tentu, mari kita bedah isi papan tulis tersebut menggunakan kerangka PREP (Point, Reason, Example, Point) agar penjelasannya lebih terstruktur dan profesional.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
_P: Point (Poin Utama)
 Isi papan tulis tersebut adalah ringkasan teknis mengenai Arsitektur dan Manajemen Sistem Operasi Android. Fokus utamanya adalah bagaimana sistem mengelola siklus hidup aplikasi (Lifecycle), komunikasi antar komponen (Interprocess Communication), dan optimasi sumber daya perangkat (Baterai dan Memori).

_R: Reason (Alasan/Latar Belakang)
 Konsep-konsep ini sangat krusial bagi pengembang aplikasi karena Android bekerja dalam lingkungan dengan sumber daya terbatas (RAM dan Baterai).
 Manajemen Proses: Perlu dipahami agar aplikasi tidak tiba-tiba tertutup saat dibutuhkan pengguna.
 IPC (Intent): Diperlukan karena aplikasi Android bersifat modular; satu bagian aplikasi harus bisa "berbicara" dengan bagian lain atau aplikasi luar.
 Keamanan (FBE): Menjadi standar untuk melindungi data privasi pengguna di tingkat sistem file.

_E: Example (Contoh Konkret)
 Berdasarkan catatan di papan tulis, berikut adalah breakdown detailnya:

 Killer Proses (Hierarki Penghentian):
 Foreground: Saat Anda sedang mengetik di WhatsApp, aplikasi ini ada di "depan" dan tidak akan dimatikan.
 Background: Anda membuka Instagram lalu pindah ke Chrome. Instagram menjadi proses background.
 Pengecualian (GPS/Music): Jika Anda mendengarkan Spotify lalu membuka aplikasi lain, Spotify tidak dimatikan karena ada Foreground Service yang aktif.

 Komunikasi via Intent:
 Eksplisit: Menekan tombol "Profil" di aplikasi dan langsung diarahkan ke halaman profil.
 Implisit: Menekan tombol "Bagikan", lalu muncul pilihan aplikasi (WA, Email, IG). Ini adalah sistem yang mencari siapa yang bisa menangani perintah tersebut.

 Optimasi Aktif vs Pasif:
 Aktif: Aplikasi secara rutin mengecek lokasi GPS setiap 5 menit (boros baterai).
 Pasif: Aplikasi hanya mengambil data lokasi jika ada aplikasi lain (seperti Google Maps) yang kebetulan sedang menyalakan GPS.

_P: Point (Kesimpulan Kembali)
 Secara komprehensif, papan tulis ini merangkum "Aturan Main" dalam pengembangan Android. Seorang pengembang yang baik harus mampu menyeimbangkan antara fungsionalitas aplikasi dengan efisiensi sistem. Dengan memahami Killer Proses, penggunaan Intent yang tepat, dan penerapan File-Based Encryption, aplikasi yang dihasilkan akan menjadi stabil, aman, dan hemat baterai.
