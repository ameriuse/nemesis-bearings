import Hero from '@/components/home/Hero';
import QuickSearch from '@/components/home/QuickSearch';
import CategoryGrid from '@/components/home/CategoryGrid';
import WhyNemesis from '@/components/home/WhyNemesis';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import QualitySection from '@/components/home/QualitySection';
import ResourcesSection from '@/components/home/ResourcesSection';
import IndustriesSection from '@/components/home/IndustriesSection';

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="max-w-[1400px] mx-auto px-4">
        <QuickSearch />
      </div>

      <CategoryGrid />

      <FeaturedProducts />

      <WhyNemesis />

      <QualitySection />

      <ResourcesSection />

      <IndustriesSection />
    </>
  );
}
