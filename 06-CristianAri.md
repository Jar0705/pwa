<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WMC dan Framework PREP</title>

<style>

body{
    font-family: Arial, Helvetica, sans-serif;
    margin:0;
    background:linear-gradient(135deg,#667eea,#764ba2);
    color:#333;
}

header{
    text-align:center;
    padding:30px;
    color:white;
}

.container{
    width:90%;
    max-width:1000px;
    margin:auto;
}

.card{
    background:white;
    padding:25px;
    margin:20px 0;
    border-radius:12px;
    box-shadow:0 6px 15px rgba(0,0,0,0.2);
}

h2{
    color:#5a4bff;
}

.prep{
    background:#f4f6ff;
    padding:15px;
    border-left:6px solid #5a4bff;
    margin-top:10px;
    border-radius:8px;
}

pre{
    background:#111;
    color:#00ffcc;
    padding:15px;
    border-radius:8px;
    overflow:auto;
}

footer{
    text-align:center;
    padding:20px;
    color:white;
}

</style>
</head>

<body>

<header>
<h1>Web & Mobile Computing (WMC)</h1>
<p>Teknologi Mobile App dan Framework PREP</p>
</header>

<div class="container">

<!-- WMC -->
<div class="card">
<h2>📱 Web & Mobile Computing (WMC)</h2>

<p>
Web & Mobile Computing (WMC) adalah konsep pengembangan aplikasi
yang dapat diakses melalui web maupun perangkat mobile sehingga
pengguna dapat mengakses sistem kapan saja dan dimana saja.
</p>

<ul>
<li>Multi Platform</li>
<li>Realtime System</li>
<li>Berbasis Internet & Cloud</li>
</ul>
</div>

<!-- MOBILE APP -->
<div class="card">
<h2>⚙️ Teknologi Mobile Application</h2>

<h3>1. Native Application</h3>
<p>
Aplikasi dibuat khusus untuk Android atau iOS dengan performa tinggi
dan akses hardware penuh seperti kamera, GPS, dan sensor.
</p>

<h3>2. Hybrid Application</h3>
<p>
Hybrid App menggabungkan teknologi web dan mobile sehingga satu kode
dapat berjalan pada berbagai platform.
</p>

<h3>3. Progressive Web App (PWA)</h3>
<p>
PWA adalah website yang dapat di-install seperti aplikasi mobile
dan mampu berjalan secara offline menggunakan service worker.
</p>

</div>

<!-- PREP -->
<div class="card">
<h2>🧠 Framework PREP</h2>

<p>
Framework PREP digunakan untuk menjelaskan solusi teknologi secara
terstruktur.
</p>

<div class="prep">
<h3>P — Point</h3>
<p>PWA merupakan solusi efektif dalam pengembangan aplikasi WMC modern.</p>
</div>

<div class="prep">
<h3>R — Reason</h3>
<p>PWA berjalan multi platform tanpa membuat aplikasi Android dan iOS terpisah.</p>
</div>

<div class="prep">
<h3>E — Example</h3>
<p>Contoh: e-commerce, absensi online, katalog produk berbasis web.</p>
</div>

<div class="prep">
<h3>P — Point (Reinforce)</h3>
<p>PWA efisien, cepat dikembangkan, dan cocok untuk WMC.</p>
</div>

</div>

<!-- IMPLEMENTASI CODE -->
<div class="card">
<h2>💻 Contoh Implementasi Teknologi Mobile App</h2>

<h3>Native App (Android - Kotlin)</h3>
<pre><code>
fun main(){
    println("Hello Mobile App Native Android")
}
</code></pre>

<h3>Hybrid App (HTML + JavaScript)</h3>
<pre><code>
<button onclick="showMessage()">Klik</button>

<script>
function showMessage(){
    alert("Hybrid Mobile App");
}
</script>
</code></pre>

<h3>Progressive Web App (Service Worker)</h3>
<pre><code>
// service-worker.js
self.addEventListener("install", function(event){
    console.log("PWA Installed");
});
</code></pre>

</div>

<!-- PREP DALAM CODE -->
<div class="card">
<h2>🧠 Framework PREP dalam Coding</h2>

<pre><code>
// P - Point
// PWA cocok untuk aplikasi modern

// R - Reason
// karena multi platform

// E - Example
// contoh: aplikasi e-commerce

// P - Point
// sehingga PWA efisien dalam WMC
</code></pre>

</div>

<!-- KESIMPULAN -->
<div class="card">
<h2>⭐ Kesimpulan</h2>

<p>
WMC menggabungkan teknologi web dan mobile untuk menghasilkan aplikasi modern.
Teknologi mobile terdiri dari Native, Hybrid, dan PWA.
Framework PREP membantu menjelaskan solusi secara logis,
terstruktur, dan mudah dipahami.
</p>

</div>

</div>

<footer>
Tugas WMC - Mobile Computing
</footer>

</body>
</html>
