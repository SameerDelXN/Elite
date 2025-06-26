import ServicesSection from './components/category';
import FeedbackSection from '@/app/components/feedback';
import AboutUs from './components/aboutus';

export default function Home() {
  return (
    <main>
      <ServicesSection/>
      <FeedbackSection/>
      <AboutUs/>
    </main>
  );
}
