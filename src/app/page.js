import HeroSection from '@/app/components/herosection';
import ServicesSection from './components/category';
import FeedbackSection from '@/app/components/feedback';
import AboutUs from './components/aboutus';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <HeroSection /> */}
    
      <ServicesSection/>
      <FeedbackSection/>
      <AboutUs/>
    </main>
  );
}
