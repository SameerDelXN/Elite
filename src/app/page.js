import HeroSection from '@/app/components/herosection';
import ServicesSection from './components/category';
import FeedbackSection from '@/app/components/feedback';
import AboutUs from './components/aboutus';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 min-h-screen sticky top-0 bg-gray-900">
        {/* Sidebar content */}
      </aside>
      <main className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800">
        <HeroSection />
        {/* <HeroSection /> */}
        {/* Other sections */}
        <ServicesSection/>
        <FeedbackSection/>
        <AboutUs/>
      </main>
    </div>
  );
}
