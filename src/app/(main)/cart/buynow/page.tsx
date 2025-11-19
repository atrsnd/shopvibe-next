"use client";

import Image from "next/image";
import { useBuyNowStore } from "@/lib/store/buynow";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckoutPage = () => {
  const { product, clearCheckout } = useBuyNowStore();
  const router = useRouter();

  useEffect(() => {
    if (!product) router.push("/products");
  }, [product]);

  if (!product) return null;

  const totalPrice = product.price;

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="bg-white rounded-xl shadow-md p-6 flex gap-6">
          <Image
            src={product.image}
            alt={product.title}
            width={180}
            height={180}
            className="object-contain"
          />

          <div className="flex-1">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-primary text-2xl font-bold mt-3">${product.price}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
        </div>

        <div className="flex justify-end items-center mt-8 gap-6">
          <span className="text-2xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Bayar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
