"use client";

import { useState } from "react";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen pt-30">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Ada pertanyaan atau ingin informasi lebih lanjut? Kirim pesan kepada kami!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Kontak */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-6">
            {submitted && (
              <p className="text-green-600 font-medium">Terima kasih! Pesan Anda telah dikirim.</p>
            )}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Pesan Anda"
              rows={5}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              Kirim Pesan
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Alamat</h3>
              <p>Jl. Contoh No.123, Kota Malang, Indonesia</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p>support@vnue.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Telepon</h3>
              <p>+62 812-3456-7890</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Social Media</h3>
              <p>Instagram | Facebook | Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
