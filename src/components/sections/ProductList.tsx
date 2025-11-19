"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { useCartStore } from "@/lib/store/cart";
import { useRouter } from "next/navigation";
import { useBuyNowStore } from "@/lib/store/buynow";

const ProductList = () => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const router = useRouter();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = useCartStore((state) => state.addToCart);

  const setBuyNowProduct = useBuyNowStore((state) => state.setBuyNowProduct);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError || !data)
    return <p className="p-6 text-red-500">Gagal mengambil data.</p>;

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-2xl font-semibold">Semua Produk kami</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item: Product) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-40 object-contain bg-gray-100"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-blue-600 font-semibold mt-2">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center items-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
                <p className="text-gray-500">{selectedProduct.category}</p>
                <p className="text-2xl font-semibold text-primary">
                  ${selectedProduct.price}
                </p>
                <p className="text-gray-700">{selectedProduct.description}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(selectedProduct);
                      router.push("/cart");
                    }}
                    className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setBuyNowProduct(selectedProduct);
                      router.push("/cart/buynow");
                    }}
                    className="border border-primary text-primary px-6 py-2 mt-4 rounded-lg hover:bg-primary/10 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList;
