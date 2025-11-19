🛍️ ShopVibe – E-Commerce Frontend (Next.js 14 + Zustand + React Query)

Proyek ini adalah aplikasi e-commerce sederhana yang dibangun menggunakan Next.js 14 App Router, Zustand untuk state management, dan React Query untuk data fetching. Aplikasi ini menggunakan FakeStore API sebagai sumber data produk.

Fitur utama meliputi daftar produk, detail produk, keranjang belanja (cart), checkout, serta alur khusus Buy Now yang terpisah dari checkout keranjang.

📌 Fitur Utama
1. Product Listing
Menampilkan semua produk dari FakeStore API
Modal detail produk (popup) ketika kartu produk diklik
Tombol Add to Cart
Tombol Buy Now dengan alur pembayaran cepat
2. Cart Page
Menampilkan produk yang ditambahkan ke keranjang

Menambah/mengurangi jumlah item

Menghapus item dari keranjang

Total harga otomatis

Tombol Checkout menuju halaman pembayaran

3. Buy Now Flow

Memilih satu produk untuk dibeli langsung

Menampilkan halaman khusus Buy Now sebelum Checkout

Pisah dari keranjang untuk menghindari konflik data

4. Checkout

Bisa berasal dari keranjang atau Buy Now

Menampilkan list produk yang dibeli

Menghitung total harga

UI siap untuk integrasi payment gateway
