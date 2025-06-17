'use client';
import { useState } from 'react';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    category: '',
    badge: '',
    badgeColor: '',
    title: '',
    description: '',
    subtitle: '',
    subtitleType: '',
    icon: '',
    price: '',
    multiplier: '',
    features: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const features = formData.features ? formData.features.split(',').map(f => f.trim()) : [];
    await fetch('/api/services', {
      method: 'POST',
      body: JSON.stringify({ ...formData, features }),
    });
    alert('Service added!');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      <div className="grid gap-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        ))}
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
