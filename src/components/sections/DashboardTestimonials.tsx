  'use client';

  import Image from "next/image";
  import { useState } from "react";

  interface Testimonial {
    name: string;
    comment: string;
    booking: string;
    image: string;
  }

  const initialTestimonials: Testimonial[] = [
    {
      name: "Keysha",
      comment: "Kami baru saja membeli produk di sini, pengalaman belanja sangat menyenangkan!",
      booking: "Produk: Tas Wanita Elegan",
      image: "/images/profile/user1.jpg",
    },
    {
      name: "Ricky Fernando",
      comment: "Produk yang saya beli kualitasnya luar biasa, pengiriman cepat!",
      booking: "Produk: Sepatu Sneakers",
      image: "/images/profile/user2.jpg",
    },
    {
      name: "Faisal",
      comment: "Saya sangat puas dengan pengalaman belanja online ini!",
      booking: "Produk: Headphone Bluetooth",
      image: "/images/profile/user3.jpg",
    },
  ];

  const DashboardTestimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);


    return (
      <section className="py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Ulasan Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center gap-4">
              {t.image && (
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              )}
              <p className="italic text-gray-700">“{t.comment}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.booking}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default DashboardTestimonials;
