'use client';
import { useEffect, useState } from 'react';
import { Clock, MessageCircle, Video, Package, CreditCard, PiggyBank, Shield, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

const iconMap = { PiggyBank, MessageCircle, Shield, CreditCard, Package };

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const filters = ['All', '1:1 Call', 'Priority DM', 'Package'];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (res.ok) {
          const data = await res.json();
          setServices(data);
        } else {
          console.error('Failed to fetch services');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices = activeFilter === 'All'
    ? services
    : services.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Dark Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)]"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Dark Theme Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 mb-8 hover:bg-slate-700/80 transition-all duration-300">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <Star className="w-3 h-3 text-emerald-300 fill-emerald-300" />
              <Star className="w-2 h-2 text-emerald-200 fill-emerald-200" />
            </div>
            <span className="text-sm font-semibold text-slate-200">Premium Services</span>
            <Zap className="w-4 h-4 text-blue-400" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Elevate Your
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Unlock premium features and personalized services designed to accelerate your journey to success
          </p>
        </div>

        {/* Dark Theme Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/80 text-slate-200 hover:text-white shadow-sm hover:shadow-md border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-700/80'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{filter}</span>
              
              {activeFilter !== filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-slate-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Dark Theme Loader */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="text-slate-300 text-lg font-medium">Loading premium services...</p>
          </div>
        )}

        {/* Dark Theme Services Grid */}
        {!loading && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const Icon = iconMap[service.icon] || Package;
                return (
                  <div
                    key={service._id || service.id}
                    className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-2"
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-transparent to-emerald-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Dark Theme Badge */}
                    {service.badge && (
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold mb-6 bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 shadow-sm`}>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {service.badge}
                      </div>
                    )}

                    {/* Dark Theme Card Header */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative p-4 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl group-hover:from-slate-600/60 group-hover:to-slate-500/60 transition-all duration-300 border border-slate-600/30">
                            <Icon className="w-6 h-6 text-slate-300 group-hover:text-slate-100 transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                      {service.multiplier && (
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                          {service.multiplier}
                        </div>
                      )}
                    </div>

                    {/* Dark Theme Subtitle */}
                    <div className="flex items-center gap-3 mb-8 relative z-10">
                      <div className="p-2 bg-slate-700/50 rounded-lg border border-slate-600/30 group-hover:bg-slate-600/60 transition-colors duration-300">
                        {service.subtitleType === 'Priority DM' && <MessageCircle className="w-5 h-5 text-blue-400" />}
                        {service.subtitleType === 'Video Meeting' && <Video className="w-5 h-5 text-purple-400" />}
                        {service.subtitleType === 'Package' && <Package className="w-5 h-5 text-emerald-400" />}
                      </div>
                      <span className="text-slate-300 font-medium group-hover:text-slate-200 transition-colors duration-300">
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Dark Theme Footer */}
                    <div className="flex justify-end pt-6 border-t border-slate-700/50 relative z-10">
                      <button className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] group/btn">
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Dark Theme Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>

            {/* Dark Theme Empty State */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-slate-800/60 rounded-2xl border border-slate-700/50"></div>
                  <Package className="w-12 h-12 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">No services found</h3>
                <p className="text-slate-300 text-lg max-w-md mx-auto">
                  Try selecting a different category to explore our comprehensive range of premium services.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;