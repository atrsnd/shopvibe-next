import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-xl font-semibold mb-3">ShopVibe</h3>
          <p className="text-sm text-gray-600">
            Belanja kebutuhanmu tanpa ribet. Kami menyediakan berbagai produk 
            pilihan dengan kualitas terbaik dan harga yang bersahabat.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Layanan Pelanggan</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#">Bantuan</Link>
            </li>
            <li>
              <Link href="#">Cara Belanja</Link>
            </li>
            <li>
              <Link href="#">Pengiriman</Link>
            </li>
            <li>
              <Link href="#">Pengembalian Barang</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Informasi</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#">Tentang Kami</Link>
            </li>
            <li>
              <Link href="#">Kebijakan Privasi</Link>
            </li>
            <li>
              <Link href="#">Syarat & Ketentuan</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Ikuti Kami</h4>
          <div className="flex items-center space-x-4 text-gray-600">
            <a href="#" className="hover:text-primary">
              Instagram
            </a>
            <a href="#" className="hover:text-primary">
              Facebook
            </a>
            <a href="#" className="hover:text-primary">
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 ShopVibe. Semua hak dilindungi.
      </div>
    </footer>
  );
}
