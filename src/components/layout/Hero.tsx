"use client";

const Hero = () => {

  return (
    <section
      className="bg-cover bg-center min-h-screen flex flex-col items-start justify-center px-6 md:px-8 pt-40 gap-8 pb-10"
      style={{ backgroundImage: "url('/bg-dashboard.jpg')" }}
    >
      <div className="text-white space-y-5 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Temukan produk pilihan terbaik,{" "}
          <span className="italic">belanja mudah</span>{" "}
          hanya di{" "}
          <span className="text-primary font-semibold">ShopVibe.</span>
        </h1>

        <p className="text-sm md:text-base opacity-90">
          Dari kebutuhan harian sampai barang trendi, semuanya hadir dalam satu
          tempat.
        </p>

        <p className="text-sm md:text-base opacity-90">
          Kami menghadirkan pengalaman berbelanja yang cepat, aman, dan nyaman
          untuk kamu.
        </p>
      </div>
    </section>
  );
};

export default Hero;
