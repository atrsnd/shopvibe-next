"use client";

import { useCartStore } from "@/lib/store/cart";
import Image from "next/image";
import { useState } from "react";

const Checkout = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "credit",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.email || !form.address) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    alert("Checkout berhasil! Terima kasih sudah berbelanja.");
    clearCart();
  };

  return (
    <section className="py-10 bg-gray-50 min-h-screen pt-30">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          <div className="flex flex-col gap-4">

            <div>
              <label className="font-medium">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInput}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="font-medium">Alamat</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleInput}
                className="w-full mt-1 px-4 py-2 border rounded-lg h-24"
                placeholder="Alamat lengkap pengiriman"
              />
            </div>

            <div>
              <label className="font-medium">Metode Pembayaran</label>
              <select
                name="payment"
                value={form.payment}
                onChange={(e) =>
                  setForm({ ...form, payment: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 border rounded-lg"
              >
                <option value="credit">Kartu Kredit</option>
                <option value="bank">Transfer Bank</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            <button
              onClick={handleOrder}
              className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Place Order
            </button>

          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h3>

          <div className="flex flex-col gap-4">
            {cart.length === 0 && <p className="text-gray-500">Keranjang kosong.</p>}

            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="rounded-md object-contain bg-gray-100"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.quantity} x ${item.price}</p>
                  <p className="font-medium">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <p className="text-lg font-semibold mt-2">
              Total: <span className="text-primary">${total.toFixed(2)}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Checkout;
