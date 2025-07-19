import Hero from '@/components/home/Hero';
import QuickLinks from '@/components/home/QuickLinks';
import NewsSection from '@/components/home/NewsSection';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <NewsSection />
      <Testimonials />
    </>
  );
}