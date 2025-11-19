"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";

const RecommendedProducts = () => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError || !data) return <p className="p-6 text-red-500">Failed to load products.</p>;

  const recommended = data.slice(0, 6);

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Recommended For You</h2>
          <Link href="/products" className="text-primary hover:underline">
            See All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {recommended.map((item: Product) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
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

              <p className="text-blue-600 font-semibold mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecommendedProducts;
