'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORY_OPTIONS = [
  'All',
  '1:1 Call',
  'Priority DM',
  'Package',
  'Best Deal',
  'Banking Loan Program',
  '𝐀𝐬𝐤 𝐮𝐬 𝐚𝐧𝐲𝐭𝐡𝐢𝐧𝐠',
];

export default function NewServicePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Convert features string to array
      const features = formData.features
        ? formData.features.split(',').map(f => f.trim())
        : [];

      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, features }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to create service');
      }

      router.push('/admin/services');
    } catch (error) {
      console.error('Error creating service:', error);
      setError(error.message || 'Failed to create service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Service</h1>

      {error && (
        <div className="p-4 mb-6 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            >
              <option value="">Select category</option>
              {CATEGORY_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Or enter custom category"
              className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="badge" className="block text-sm font-medium text-gray-700">
              Badge (e.g. Best Deal, x, 1, Package)
            </label>
            <input
              type="text"
              id="badge"
              name="badge"
              value={formData.badge}
              onChange={handleChange}
              placeholder="e.g. Best Deal, x, 1, Package"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="badgeColor" className="block text-sm font-medium text-gray-700">
              Badge Color (e.g. green, red, blue)
            </label>
            <input
              type="text"
              id="badgeColor"
              name="badgeColor"
              value={formData.badgeColor}
              onChange={handleChange}
              placeholder="e.g. green, red, blue"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title (Service Name)
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Service Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Service description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="e.g. 1 product, 1 call, etc."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="subtitleType" className="block text-sm font-medium text-gray-700">
              Subtitle Type (e.g. product, offer)
            </label>
            <input
              type="text"
              id="subtitleType"
              name="subtitleType"
              value={formData.subtitleType}
              onChange={handleChange}
              placeholder="e.g. product, offer"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
              Icon (emoji)
            </label>
            <input
              type="text"
              id="icon"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              placeholder="e.g. 📞, 💬, 🏦"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g. 99"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="multiplier" className="block text-sm font-medium text-gray-700">
              Multiplier (e.g. 1 product)
            </label>
            <input
              type="text"
              id="multiplier"
              name="multiplier"
              value={formData.multiplier}
              onChange={handleChange}
              placeholder="e.g. 1 product"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
              Features (comma separated)
            </label>
            <input
              type="text"
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              placeholder="e.g. Fast response, Expert help"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Adding...' : 'Add Service'}
          </button>
        </div>
      </form>
    </div>
  );
} 