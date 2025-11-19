"use client";

import Image from "next/image";
import { useCartStore } from "@/lib/store/cart";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, increment, decrement, removeFromCart } = useCartStore();
  const router = useRouter();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    router.push("/cart/checkout");
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen pt-30">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Keranjang kosong.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-center gap-6"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increment(item.id)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  Hapus
                </button>
              </div>
            ))}

            <div className="flex justify-end mt-6 gap-4 items-center">
              <span className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </span>

              <button
                onClick={goToCheckout}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
