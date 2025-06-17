import HeroSection from '@/app/components/herosection';
import ServicesSection from '@/app/components/category';
import FeedbackSection from '@/app/components/feedback';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <HeroSection /> */}
      {/* Other sections */}
      <ServicesSection/>
      <FeedbackSection/>

    </main>
  );
}
