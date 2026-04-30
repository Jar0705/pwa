Wireless Computing adalah komunikasi tanpa kabel, sedangkan Mobile Computing adalah penggunaan perangkat yang dapat berpindah tempat. Wireless belum tentu mobile, dan mobile belum tentu wireless. Contoh wireless saja adalah PC menggunakan Wi-Fi, mobile saja adalah laptop offline di mobil, sedangkan smartphone dengan 4G termasuk keduanya.

Mobilitas dibagi menjadi tiga:

Device Mobility → perangkat berpindah lokasi.
User Mobility → user tetap bisa mengakses layanan dari perangkat berbeda.
Service Mobility → layanan tetap berjalan saat berpindah jaringan.

Pada proses perpindahan jaringan terdapat:

Hard Handoff (Break Before Make) → koneksi lama diputus dulu lalu tersambung ke baru, lebih sederhana tetapi berisiko call drop.
Soft Handoff (Make Before Break) → tersambung ke jaringan baru terlebih dahulu sehingga lebih stabil untuk voice call.

Jenis jaringan nirkabel:

WPAN → IEEE 802.15 (Bluetooth).
WLAN → IEEE 802.11 (Wi-Fi).
WMAN → IEEE 802.16 (WiMAX).
WWAN → jaringan seluler seperti 4G/5G.

Mode jaringan:

Ad-Hoc → perangkat terhubung langsung tanpa Access Point.
Infrastructure → menggunakan Access Point/router sehingga lebih stabil dan mendukung internet.

Arsitektur Android terdiri dari 4 lapisan:

Linux Kernel → mengatur hardware, driver, keamanan, dan memori.
Libraries & Android Runtime → menyediakan library dan menjalankan aplikasi.
Application Framework → menyediakan API Android.
Applications → aplikasi yang digunakan user.

Android menggunakan sandbox agar setiap aplikasi terisolasi sehingga data dan sistem lebih aman dari malware maupun akses ilegal.

Hierarki proses Android:

Foreground Process
Visible Process
Service Process
Background Process
Empty Process

Android memiliki:

LMK (Low Memory Killer) → menghapus proses prioritas rendah saat RAM penuh.
IPC (Inter Process Communication) → komunikasi antar proses/aplikasi.
Intent
Eksplisit → target aplikasi ditentukan langsung.
Implisit → target dipilih sistem.

Pengembangan aplikasi mobile dibagi menjadi:

Native → performa terbaik tetapi mahal karena platform terpisah.
Hybrid → satu codebase untuk banyak platform, biaya lebih murah.
PWA → aplikasi berbasis web yang berjalan di browser.

Untuk aplikasi inventaris dengan dua platform dan budget terbatas, strategi terbaik adalah Hybrid karena lebih hemat biaya, maintenance lebih mudah, dan cukup baik untuk aplikasi bisnis.

Kesalahan umum saat ujian:

Menjawab “lebih baik” tanpa konteks.
Hanya memberi definisi tanpa penjelasan.
Tidak mempertimbangkan aspek bisnis seperti biaya, maintenance, dan kebutuhan user.

(Framework PREP)
Point
Wireless dan Mobile Computing merupakan dasar teknologi komunikasi modern yang memungkinkan perangkat terhubung dan digunakan secara fleksibel di berbagai lokasi.
Reason
Wireless Computing berfokus pada komunikasi tanpa kabel, sedangkan Mobile Computing berfokus pada perangkat yang dapat berpindah tempat saat digunakan. Wireless belum tentu mobile dan mobile belum tentu wireless. Dalam sistem mobile juga terdapat konsep mobilitas seperti Device Mobility, User Mobility, dan Service Mobility agar perangkat, pengguna, maupun layanan tetap dapat berjalan saat berpindah jaringan. Proses perpindahan jaringan disebut handoff, yang terdiri dari Hard Handoff dan Soft Handoff. Soft Handoff lebih baik untuk voice call karena koneksi baru dibuat terlebih dahulu sebelum koneksi lama diputus sehingga komunikasi lebih stabil.
Jaringan wireless dibagi menjadi beberapa kategori berdasarkan cakupan area, yaitu WPAN (IEEE 802.15/Bluetooth), WLAN (IEEE 802.11/Wi-Fi), WMAN (IEEE 802.16/WiMAX), dan WWAN seperti jaringan 4G/5G. Selain itu, terdapat dua mode jaringan yaitu Ad-Hoc yang menghubungkan perangkat secara langsung tanpa Access Point, dan Infrastructure Mode yang menggunakan router atau Access Point sehingga lebih stabil dan mendukung internet.
Pada sistem operasi mobile, khususnya Android, terdapat arsitektur 4 lapisan yaitu Linux Kernel, Libraries & Android Runtime, Application Framework, dan Applications. Android juga menggunakan sandbox agar setiap aplikasi terisolasi demi menjaga keamanan data pengguna. Android memiliki hierarki proses seperti Foreground Process, Visible Process, Service Process, Background Process, dan Empty Process untuk mengatur penggunaan resource. Sistem Android juga menggunakan LMK (Low Memory Killer) untuk menghapus proses prioritas rendah saat RAM penuh, IPC (Inter Process Communication) untuk komunikasi antar proses, serta Intent yang terbagi menjadi Intent Eksplisit dan Implisit untuk komunikasi antar activity maupun aplikasi.
Dalam pengembangan aplikasi mobile terdapat tiga pendekatan utama yaitu Native, Hybrid, dan PWA. Native memiliki performa terbaik tetapi biaya tinggi karena platform Android dan iOS dibuat terpisah. Hybrid menggunakan satu codebase untuk banyak platform sehingga lebih hemat biaya dan maintenance lebih mudah, sedangkan PWA berbasis browser dan lebih ringan tetapi akses hardware terbatas. Framework yang umum digunakan antara lain Kotlin dan Swift untuk Native, Flutter dan React Native untuk Hybrid, serta HTML, CSS, dan JavaScript untuk PWA.
Example
Contoh wireless adalah PC menggunakan Wi-Fi, sedangkan contoh mobile adalah laptop offline di mobil. Smartphone dengan 4G termasuk keduanya. Contoh Soft Handoff terjadi saat panggilan telepon tetap stabil ketika pengguna berpindah BTS. Contoh Infrastructure Mode adalah koneksi Wi-Fi rumah menggunakan router. Pada Android, aplikasi seperti WhatsApp berjalan di sandbox sehingga tidak dapat sembarangan mengakses data aplikasi lain. Dalam pengembangan aplikasi inventaris dua platform dengan budget terbatas, Hybrid menggunakan Flutter atau React Native menjadi solusi yang paling efisien.
Point
Kesimpulannya, Wireless dan Mobile Computing saling berkaitan dalam mendukung komunikasi modern, sementara pemilihan teknologi jaringan, sistem operasi, maupun strategi pengembangan aplikasi harus mempertimbangkan performa, keamanan, biaya, maintenance, dan kebutuhan bisnis agar solusi yang digunakan menjadi efektif dan efisien.
