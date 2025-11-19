import { ShoppingCart, MessageCircle, Search } from "lucide-react";
import { JSX } from "react";

interface FeatureItem {
  icon: JSX.Element;
  text: string;
}

const DashboardFeatures: React.FC = () => {
  const items: FeatureItem[] = [
    {
      icon: <Search className="w-10 h-10 text-accent" />,
      text: "Cari produk sesuai kategori atau kebutuhanmu",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-accent" />,
      text: "Hubungi penjual untuk menanyakan detail produk",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-accent" />,
      text: "Tambahkan ke keranjang dan checkout dengan mudah",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 py-14">
      <h2 className="text-2xl font-semibold text-center">Fitur Toko Kami</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl p-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-sm p-8 flex flex-col justify-center items-center text-center gap-8 min-h-[260px] md:min-h-[230px]"
          >
            {item.icon}
            <p className="text-accent text-md leading-relaxed font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardFeatures;
