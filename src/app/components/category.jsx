'use client';
import { useEffect, useState } from 'react';
import { Clock, MessageCircle, Video, Package, CreditCard, PiggyBank, Shield } from 'lucide-react';

const iconMap = { PiggyBank, MessageCircle, Shield, CreditCard }; // icon reference

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const filters = ['All', '1:1 Call', 'Priority DM', 'Package'];
  const filteredServices = activeFilter === 'All' ? services : services.filter(s => s.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* ...Filters... */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((service) => {
          const Icon = iconMap[service.icon] || Package;
          return (
            <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              {/* Badge */}
              {service.badge && (
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${service.badgeColor}`}>
                  {service.badge}
                </div>
              )}
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <div className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                    {service.subtitleType === 'Priority DM' && <MessageCircle className="w-4 h-4" />}
                    {service.subtitleType === 'Video Meeting' && <Video className="w-4 h-4" />}
                    <span>{service.subtitle}</span>
                  </div>
                </div>
                {service.multiplier && (
                  <div className="text-lg font-bold">{service.multiplier}</div>
                )}
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{service.subtitleType}</span>
                </div>
                <div className="text-2xl font-bold">{service.price}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-600">Try selecting a different filter to see available services.</p>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
