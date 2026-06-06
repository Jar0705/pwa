Wireless Computing adalah komunikasi tanpa kabel, sedangkan Mobile Computing adalah penggunaan perangkat yang dapat berpindah tempat. Wireless belum tentu mobile, dan mobile belum tentu wireless. Contoh wireless saja adalah PC menggunakan Wi-Fi, mobile saja adalah laptop offline di mobil, sedangkan smartphone dengan 4G termasuk keduanya.

Mobilitas dibagi menjadi tiga:
1. Device Mobility → perangkat berpindah lokasi.
2. User Mobility → user tetap bisa mengakses layanan dari perangkat berbeda.
3. Service Mobility → layanan tetap berjalan saat berpindah jaringan.

Pada proses perpindahan jaringan terdapat:
1. Hard Handoff (Break Before Make) → koneksi lama diputus dulu lalu tersambung ke baru, lebih sederhana tetapi berisiko caxll drop.
2. Soft Handoff (Make Before Break) → tersambung ke jaringan baru terlebih dahulu sehingga lebih stabil untuk voice call.

Jenis jaringan nirkabel:
1. WPAN → IEEE 802.15 (Bluetooth).
2. WLAN → IEEE 802.11 (Wi-Fi).
3. WMAN → IEEE 802.16 (WiMAX).
4. WWAN → jaringan seluler seperti 4G/5G.

Mode jaringan:
1. Ad-Hoc → perangkat terhubung langsung tanpa Access Point.
2. Infrastructure → menggunakan Access Point/router sehingga lebih stabil dan mendukung internet.

Arsitektur Android terdiri dari 4 lapisan:
1. Linux Kernel → mengatur hardware, driver, keamanan, dan memori.
2. Libraries & Android Runtime → menyediakan library dan menjalankan aplikasi.
3. Application Framework → menyediakan API Android.
4. Applications → aplikasi yang digunakan user.

Android menggunakan sandbox agar setiap aplikasi terisolasi sehingga data dan sistem lebih aman dari malware maupun akses ilegal.

Hierarki proses Android:
1. Foreground Process
2. Visible Process
3. Service Process
4. Background Process
5. Empty Process

Android memiliki:
1. LMK (Low Memory Killer) → menghapus proses prioritas rendah saat RAM penuh.
2. IPC (Inter Process Communication) → komunikasi antar proses/aplikasi.
> Intent
1. Eksplisit → target aplikasi ditentukan langsung.
2. Implisit → target dipilih sistem.

Pengembangan aplikasi mobile dibagi menjadi:
1. Native → performa terbaik tetapi mahal karena platform terpisah.
2. Hybrid → satu codebase untuk banyak platform, biaya lebih murah.
3. PWA → aplikasi berbasis web yang berjalan di browser.
Untuk aplikasi inventaris dengan dua platform dan budget terbatas, strategi terbaik adalah Hybrid karena lebih hemat biaya, maintenance lebih mudah, dan cukup baik untuk aplikasi bisnis.

Kesalahan umum saat ujian:
1. Menjawab “lebih baik” tanpa konteks.
2. Hanya memberi definisi tanpa penjelasan.
3. Tidak mempertimbangkan aspek bisnis seperti biaya, maintenance, dan kebutuhan user.

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

Ringkasan Wireless & Mobile Computing (Framework PREP + APBDP)
A — Apa
Wireless Computing adalah komunikasi tanpa kabel, sedangkan Mobile Computing adalah penggunaan perangkat yang dapat berpindah tempat sambil tetap digunakan. Wireless belum tentu mobile dan mobile belum tentu wireless. Contohnya, PC dengan Wi-Fi termasuk wireless, laptop offline termasuk mobile, sedangkan smartphone dengan 4G/5G termasuk keduanya.

Dalam mobile computing terdapat konsep mobilitas:
1. Device Mobility → perangkat berpindah lokasi.
2. User Mobility → pengguna dapat mengakses layanan dari perangkat berbeda.
3. Service Mobility → layanan tetap berjalan saat jaringan berubah.
   
P — Penyebab / Point
Teknologi wireless dan mobile berkembang karena kebutuhan komunikasi yang fleksibel, cepat, dan dapat diakses di mana saja. Untuk menjaga koneksi tetap stabil saat perangkat berpindah jaringan digunakan proses handoff:

1. Hard Handoff → koneksi lama diputus terlebih dahulu sebelum tersambung ke jaringan baru.
2. Soft Handoff → koneksi baru dibuat terlebih dahulu sehingga lebih stabil untuk voice call.

Jenis jaringan wireless dibagi berdasarkan cakupan area:
1. WPAN → IEEE 802.15 (Bluetooth)
2. WLAN → IEEE 802.11 (Wi-Fi)
3. WMAN → IEEE 802.16 (WiMAX)
4. WWAN → jaringan seluler 4G/5G

Mode jaringan:
1. Ad-Hoc → koneksi langsung antar perangkat tanpa Access Point.
2. Infrastructure → menggunakan router/Access Point sehingga lebih stabil dan mendukung internet.
   
B — Bukti / Reason
Pada Android, sistem operasi dibuat berlapis agar pengelolaan perangkat lebih aman dan efisien:
1. Linux Kernel → mengatur hardware, keamanan, driver, dan memori.
2. Libraries & Android Runtime → menyediakan library dan menjalankan aplikasi.
3. Application Framework → menyediakan API Android.
4. Applications → aplikasi pengguna.

Android menggunakan sandbox agar aplikasi saling terisolasi sehingga keamanan data lebih terjaga. Android juga memiliki:
1. Foreground, Visible, Service, Background, dan Empty Process untuk mengatur prioritas proses.
2. LMK (Low Memory Killer) untuk menghapus proses prioritas rendah saat RAM penuh.
3. IPC (Inter Process Communication) untuk komunikasi antar proses.
4. Intent Eksplisit dan Implisit untuk komunikasi antar aplikasi atau activity.

Dalam pengembangan aplikasi mobile terdapat:
1. Native → performa tinggi tetapi mahal.
2. Hybrid → satu codebase untuk banyak platform dan lebih hemat biaya.
3. PWA → aplikasi berbasis browser dengan akses hardware terbatas.

Framework yang umum digunakan:
1. Native → Kotlin dan Swift.
2. Hybrid → Flutter dan React Native.
3. PWA → HTML, CSS, JavaScript.
   
D — Dampak / Example
Wireless dan Mobile Computing mempermudah aktivitas sehari-hari seperti penggunaan smartphone, Wi-Fi rumah, video call, mobile banking, dan aplikasi bisnis. Soft Handoff membuat panggilan tetap stabil saat pengguna berpindah BTS. Infrastructure Mode membuat koneksi internet lebih stabil dibanding Ad-Hoc.
Dalam pengembangan aplikasi inventaris dengan dua platform dan budget terbatas, Hybrid menggunakan Flutter atau React Native menjadi solusi paling efisien karena biaya lebih murah, pengembangan lebih cepat, dan maintenance lebih mudah.

P — Penutup / Point
Kesimpulannya, Wireless dan Mobile Computing merupakan teknologi penting dalam komunikasi modern. Pemilihan jaringan, sistem operasi, maupun strategi pengembangan aplikasi harus mempertimbangkan performa, keamanan, biaya, maintenance, dan kebutuhan pengguna agar solusi yang digunakan menjadi efektif, efisien, dan sesuai kebutuhan bisnis.

#2
Ringkasan Wireless & Mobile Computing Menggunakan Framework PREP
Point:
Wireless dan Mobile Computing merupakan teknologi penting dalam komunikasi modern karena memungkinkan perangkat tetap terhubung dan digunakan secara fleksibel di berbagai tempat.
Reason:
Wireless Computing adalah komunikasi tanpa kabel, sedangkan Mobile Computing adalah penggunaan perangkat yang dapat berpindah tempat sambil tetap digunakan. Keduanya berbeda karena wireless belum tentu mobile dan mobile belum tentu wireless. Dalam mobile computing terdapat konsep mobilitas yaitu Device Mobility, User Mobility, dan Service Mobility agar perangkat, pengguna, dan layanan tetap dapat berjalan walaupun berpindah lokasi atau jaringan.
Perpindahan jaringan menggunakan mekanisme handoff, yaitu Hard Handoff dan Soft Handoff. Hard Handoff memutus koneksi lama terlebih dahulu sebelum tersambung ke jaringan baru sehingga lebih sederhana tetapi berisiko call drop. Soft Handoff menghubungkan perangkat ke jaringan baru sebelum memutus koneksi lama sehingga lebih stabil untuk voice call.
Jaringan wireless juga dibagi berdasarkan cakupan area, yaitu:
1. WPAN → IEEE 802.15 (Bluetooth)
2. WLAN → IEEE 802.11 (Wi-Fi)
3. WMAN → IEEE 802.16 (WiMAX)
4. WWAN → jaringan seluler seperti 4G/5G
Selain itu terdapat dua mode jaringan:
1. Ad-Hoc → perangkat terhubung langsung tanpa Access Point.
2. Infrastructure Mode → menggunakan Access Point/router sehingga lebih stabil dan mendukung internet.
Pada sistem operasi Android terdapat empat lapisan:
1. Linux Kernel
2. Libraries & Android Runtime
3. Application Framework
4. Applications
Android menggunakan sandbox untuk membatasi akses antar aplikasi demi menjaga keamanan data pengguna. Android juga memiliki hierarki proses seperti Foreground Process, Visible Process, Service Process, Background Process, dan Empty Process untuk mengatur penggunaan resource. Sistem Android dilengkapi LMK (Low Memory Killer) untuk menghapus proses prioritas rendah saat RAM penuh, IPC (Inter Process Communication) untuk komunikasi antar proses, serta Intent Eksplisit dan Implisit untuk komunikasi antar aplikasi maupun activity.
Dalam pengembangan aplikasi mobile terdapat tiga strategi:
1. Native → performa terbaik tetapi biaya tinggi.
2. Hybrid → satu codebase untuk banyak platform sehingga lebih hemat biaya dan maintenance.
3. PWA → aplikasi berbasis browser yang ringan tetapi akses hardware terbatas.
Example
Contoh wireless adalah PC menggunakan Wi-Fi, sedangkan laptop offline termasuk mobile. Smartphone dengan 4G/5G termasuk keduanya. Soft Handoff dapat dilihat ketika panggilan telepon tetap stabil saat pengguna berpindah BTS. Contoh Infrastructure Mode adalah koneksi Wi-Fi rumah menggunakan router. Pada Android, aplikasi seperti WhatsApp berjalan di sandbox sehingga tidak dapat mengakses data aplikasi lain secara bebas. Dalam pengembangan aplikasi inventaris dua platform dengan budget terbatas, Hybrid menggunakan Flutter atau React Native menjadi pilihan yang efisien karena lebih murah dan lebih cepat dikembangkan.
Point
Kesimpulannya, Wireless dan Mobile Computing saling mendukung dalam membangun sistem komunikasi modern. Pemilihan jaringan, sistem operasi, maupun strategi pengembangan aplikasi harus mempertimbangkan performa, keamanan, biaya, maintenance, dan kebutuhan pengguna agar solusi yang digunakan menjadi efektif dan efisien.

Ringkasan Wireless & Mobile Computing Menggunakan Framework PREP + APBDP
A (Apa) / Point
Wireless dan Mobile Computing merupakan teknologi penting dalam komunikasi modern karena memungkinkan perangkat tetap terhubung dan digunakan secara fleksibel di berbagai tempat. Wireless Computing adalah komunikasi tanpa kabel, sedangkan Mobile Computing adalah penggunaan perangkat yang dapat berpindah tempat sambil tetap digunakan. Wireless belum tentu mobile dan mobile belum tentu wireless.

P (Penyebab) / Reason
Perkembangan teknologi mobile terjadi karena kebutuhan komunikasi yang cepat, fleksibel, dan dapat diakses di mana saja. Dalam mobile computing terdapat konsep mobilitas:
1. Device Mobility → perangkat berpindah lokasi.
2. User Mobility → pengguna dapat mengakses layanan dari perangkat berbeda.
3. Service Mobility → layanan tetap berjalan walaupun jaringan berubah.

Perpindahan jaringan menggunakan mekanisme handoff:
1. Hard Handoff → koneksi lama diputus sebelum tersambung ke jaringan baru sehingga lebih sederhana tetapi berisiko call drop.
2. Soft Handoff → perangkat tersambung ke jaringan baru terlebih dahulu sehingga lebih stabil untuk voice call.

Jaringan wireless dibagi berdasarkan cakupan area:
1. WPAN → IEEE 802.15 (Bluetooth)
2. WLAN → IEEE 802.11 (Wi-Fi)
3. WMAN → IEEE 802.16 (WiMAX)
4. WWAN → jaringan seluler seperti 4G/5G

Mode jaringan:
1. Ad-Hoc → perangkat terhubung langsung tanpa Access Point.
2. Infrastructure Mode → menggunakan Access Point/router sehingga lebih stabil dan mendukung internet.

B (Bukti) / Reason
Pada sistem operasi Android terdapat empat lapisan:
1. Linux Kernel
2. Libraries & Android Runtime
3. Application Framework
4. Applications

Android menggunakan sandbox untuk membatasi akses antar aplikasi demi menjaga keamanan data pengguna. Android juga memiliki hierarki proses:
1. Foreground Process
2. Visible Process
3. Service Process
4. Background Process
5. Empty Process

Sistem Android dilengkapi:
1. LMK (Low Memory Killer) → menghapus proses prioritas rendah saat RAM penuh.
2. IPC (Inter Process Communication) → komunikasi antar proses/aplikasi.
3. Intent Eksplisit dan Implisit → komunikasi antar aplikasi maupun activity.

Dalam pengembangan aplikasi mobile terdapat tiga strategi:
1. Native → performa terbaik tetapi biaya tinggi.
2. Hybrid → satu codebase untuk banyak platform sehingga lebih hemat biaya dan maintenance.
3. PWA → aplikasi berbasis browser yang ringan tetapi akses hardware terbatas.

Framework yang umum digunakan:
1. Native → Kotlin dan Swift.
2. Hybrid → Flutter dan React Native.
3. PWA → HTML, CSS, dan JavaScript.

D (Dampak) / Example
Wireless dan Mobile Computing memberikan dampak besar pada kehidupan sehari-hari seperti komunikasi real-time, mobile banking, e-learning, media sosial, dan aplikasi bisnis. Soft Handoff membuat panggilan telepon tetap stabil saat pengguna berpindah BTS. Infrastructure Mode membuat koneksi internet rumah lebih stabil dibanding Ad-Hoc. Android sandbox meningkatkan keamanan data pengguna dari malware dan akses ilegal.
Dalam pengembangan aplikasi inventaris dua platform dengan budget terbatas, Hybrid menggunakan Flutter atau React Native menjadi solusi paling efisien karena lebih murah, lebih cepat dikembangkan, dan maintenance lebih mudah dibanding Native.
P (Penutup) / Point
Kesimpulannya, Wireless dan Mobile Computing saling mendukung dalam membangun sistem komunikasi modern. Pemilihan teknologi jaringan, sistem operasi, maupun strategi pengembangan aplikasi harus mempertimbangkan performa, keamanan, biaya, maintenance, dan kebutuhan pengguna agar solusi yang digunakan menjadi efektif, efisien, dan sesuai kebutuhan bisnis.
