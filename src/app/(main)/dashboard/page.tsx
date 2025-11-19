import DashboardFeatures from "@/components/sections/DashboardFeatures";
import Hero from "@/components/layout/Hero";
import DashboardTestimonials from "@/components/sections/DashboardTestimonials";
import RecommendedProducts from "@/components/sections/RecommendedProducts";

const DashboardPage = () => {
  return (
    <div>
      <Hero />
      <DashboardFeatures />
      <RecommendedProducts />
      <DashboardTestimonials />
    </div>
  );
};

export default DashboardPage;
