'use client';

import { Linkedin, Star, Users, Award, ArrowRight, CheckCircle, Shield, Clock, TrendingUp, Sparkles, Zap, Trophy, ExternalLink, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  // Static advertisement images
  const staticAdImages = [
    { 
      id: 1, 
      src: 'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Personal+Loans+%7C+Quick+Approval',
      
    },
    
    
  ];

  // Bank icons data
  const bankIcons = [
    { name: 'HDFC', logo: '/bank/HDFC.png' },
    { name: 'ICICI', logo: '/bank/icici-bank-vector-logo.png' },
    { name: 'Axis', logo: '/bank/Axis_Bank_Logo.svg.png' },
    { name: 'Kotak', logo: '/bank/images.png' },
    { name: 'YES Bank', logo: '/bank/yes.png' },
    { name: 'PNB', logo: '/bank/pnb.png' },
   
   
    { name: 'IndusInd', logo: '/bank/ind-card-1.jpg' },
    { name: 'Federal', logo: '/bank/fed.png' },
    { name: 'Fibe', logo: '/bank/Fibe_Logo.jpg' },
    { name: 'Finnable', logo: '/bank/finnable.png' },
    { name: 'Bajaj Finserv', logo: '/bank/Bajaj_Finserv_Logo.svg.png' },
    { name: 'IDFC First', logo: '/bank/idfc-first-bank8846.jpg' },
    { name: 'Bandhan', logo: '/bank/bandhan-bank3983.jpg' },
  ];

  const [adImages, setAdImages] = useState(staticAdImages);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    // Fetch the latest hero ads from the API (now supports multiple images)
    const fetchAd = () => {
      fetch('/api/hero-ad')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.heroAdImages) && data.heroAdImages.length > 0) {
            // Map dynamic images to the same format as staticAdImages
            const dynamicAds = data.heroAdImages.map((img, idx) => ({
              id: `dynamic-${idx}`,
              src: img,
             
              offer: ''
            }));
            setAdImages([
              ...dynamicAds,
              ...staticAdImages
            ]);
          } else {
            setAdImages(staticAdImages);
          }
        })
        .catch(() => setAdImages(staticAdImages));
    };
    fetchAd();
    const interval = setInterval(fetchAd, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll advertisement images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(interval);
  }, [adImages.length]);

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length);
  };

  const prevAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex - 1 + adImages.length) % adImages.length);
  };

  const router = useRouter();

  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient orbs - Responsive sizes */}
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-300/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-br from-purple-300/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-300/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating geometric elements - Responsive positioning */}
        <div className="hidden sm:block absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-blue-300/40 rotate-45 animate-spin" style={{ animationDuration: '25s' }} />
        <div className="hidden sm:block absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-2 border-purple-300/40 rotate-12 animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 z-10">
        
        {/* Main Layout - Stack on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          
          {/* Advertisement Section - Full width on mobile, 2/3 on larger screens */}
          <div className="flex-1 lg:w-2/3">
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden group hover:shadow-blue-500/25 transition-all duration-700">
              
              {/* Main Advertisement Carousel - Responsive Height */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] overflow-hidden">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentAdIndex * 100}%)` }}
                >
                  {adImages.map((image, index) => (
                    <div key={image.id} className="w-full flex-shrink-0 relative group/slide">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-fit transition-transform duration-700 group-hover/slide:scale-105"
                      />
                      
                      {/* Enhanced overlay with detailed info - Responsive text sizes */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                        <div className="text-white space-y-2 sm:space-y-4 md:space-y-6">
                          {/* Offer badge - Responsive sizing */}
                          {/* <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold animate-pulse">
                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 animate-bounce" />
                            {image.offer}
                          </div> */}
                          
                          {/* <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-1 sm:mb-2 md:mb-4">{image.title}</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold opacity-95 mb-2 sm:mb-4 md:mb-6">{image.subtitle}</p>
                            
                            
                            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold">✓ Quick Approval</span>
                              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold">✓ Best Rates</span>
                              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold">✓ Expert Guidance</span>
                            </div>
                            
                            
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 sm:gap-3 md:gap-4 transform hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl">
                              Apply Now
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Navigation - Responsive sizing */}
                <button 
                  onClick={prevAd}
                  className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-full shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
                
                <button 
                  onClick={nextAd}
                  className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-full shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Enhanced Progress Dots - Responsive sizing */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4">
                  {adImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAdIndex(index)}
                      className={`h-2 sm:h-3 md:h-4 rounded-full transition-all duration-500 ${
                        index === currentAdIndex 
                          ? 'bg-white w-6 sm:w-8 md:w-10 shadow-md sm:shadow-lg' 
                          : 'bg-white/50 w-2 sm:w-3 md:w-4 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Advertisement Footer with Quick Stats - Responsive grid */}
              {/* <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 text-center">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-blue-600 mb-1 sm:mb-2">₹100Cr+</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Loans Disbursed</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-purple-600 mb-1 sm:mb-2">10K+</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Happy Clients</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-pink-600 mb-1 sm:mb-2">4.9★</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Client Rating</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact and LinkedIn Section - Full width on mobile, 1/3 on larger screens */}
          <div className="lg:w-1/3 flex flex-col gap-4 sm:gap-6">
            {/* Admin Login Button */}
            <button
              onClick={() => router.push('/signin')}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 mb-2 sm:mb-4 text-sm sm:text-base md:text-lg shadow-md flex items-center justify-center gap-2"
              style={{ marginBottom: '0.5rem' }}
            >
              Admin Login
            </button>
            {/* Contact Information Card - Responsive padding */}
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 hover:shadow-md transition-all duration-500 flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
                Quick Contact
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-green-600" />
                  <span className="font-semibold text-sm sm:text-base md:text-lg">+91 8669012275</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-blue-600" />
                  <span className="font-semibold text-sm sm:text-base">khondgaurav055@elitepune.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-red-600" />
                  <span className="font-semibold text-sm sm:text-base">Pune, Maharashtra</span>
                </div>
              </div>
              
              {/* Responsive button */}
              <a href="tel:8669012275">
  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
    Call Now
  </button>
</a>

            </div>

            {/* LinkedIn Connection Card - Responsive padding */}
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 hover:shadow-md transition-all duration-500 flex-1">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4 rounded-full w-fit mx-auto">
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Follow Us</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Get financial tips & updates</p>
                </div>
                
                <a 
                  href="https://www.facebook.com/gaurav.khond.2025?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm sm:text-base md:text-lg"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4 text-gray-500 text-sm sm:text-base">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">1K+</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Partners Section - Bottom (Full Width) */}
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-6 sm:py-8 overflow-hidden">
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">Our Banking Partners</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Trusted by leading financial institutions</p>
            </div>
            
            {/* Moving bank icons container - Responsive sizing, prevent horizontal scroll */}
            <div className="relative overflow-x-auto overflow-y-visible w-full max-w-full">
              <div className="flex animate-scroll min-w-fit md:min-w-0 w-full" style={{maxWidth: '100vw'}}>
                {/* First set of bank icons */}
                {bankIcons.map((bank, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 p-2 sm:p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    style={{maxWidth: '120px'}}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <img 
                        src={bank.logo} 
                        alt={bank.name}
                        className="w-full h-full object-contain rounded-md group-hover:scale-110 transition-transform duration-300"
                        style={{maxWidth: '100%', height: 'auto'}}
                      />
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-center mt-1 sm:mt-2 md:mt-3 font-semibold text-gray-700">
                      {bank.name}
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop, only on md+ screens */}
                <div className="hidden md:flex">
                  {bankIcons.map((bank, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 p-2 sm:p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                      style={{maxWidth: '120px'}}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                        <img 
                          src={bank.logo} 
                          alt={bank.name}
                          className="w-full h-full object-contain rounded-md group-hover:scale-110 transition-transform duration-300"
                          style={{maxWidth: '100%', height: 'auto'}}
                        />
                      </div>
                      <div className="text-xs sm:text-sm md:text-base text-center mt-1 sm:mt-2 md:mt-3 font-semibold text-gray-700">
                        {bank.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for bank icons animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: none !important;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}