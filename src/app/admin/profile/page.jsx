'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AdminProfilePage() {
  const [adminData, setAdminData] = useState({
    name: '',
    title: '',
    imageUrl: '',
    details: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Update form fields when adminData changes
  useEffect(() => {
    console.log('Admin data changed:', adminData);
  }, [adminData]);

  const fetchAdminData = async () => {
    try {
      const res = await fetch('/api/admin');
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || data.details || 'Failed to fetch admin data');
      }
      
      console.log('Profile: Fetched admin data:', data);
      
      // Set default values if no admin data exists
      setAdminData({
        name: data.name || '',
        title: data.title || '',
        imageUrl: data.imageUrl || '',
        details: data.details || '',
        description: data.description || '',
      });
      setImagePreview(data.imageUrl || '');
    } catch (err) {
      setError(err.message);
      console.error('Fetch admin data error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a function to refresh admin data
  const refreshAdminData = () => {
    setLoading(true);
    fetchAdminData();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    // Validate form fields
    const requiredFields = ['name', 'title', 'details', 'description'];
    const emptyFields = requiredFields.filter(field => !adminData[field] || adminData[field].trim() === '');
    
    if (emptyFields.length > 0) {
      setError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      setSaving(false);
      return;
    }

    try {
      let imageUrl = adminData.imageUrl;

      // If there's a new image, upload it first
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);

        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadRes.ok) {
          const uploadError = await uploadRes.json();
          throw new Error(uploadError.error || 'Failed to upload image');
        }
        
        const { url } = await uploadRes.json();
        imageUrl = url;
      }

      // Update admin data
      const updateRes = await fetch('/api/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...adminData,
          imageUrl,
        }),
      });

      const updateResult = await updateRes.json();
      console.log('Update response:', updateResult);

      if (!updateRes.ok) {
        throw new Error(updateResult.error || updateResult.details || 'Failed to update profile');
      }
      
      // Update the local state with the returned data
      console.log('Updating admin data with:', updateResult.data);
      setAdminData(updateResult.data);
      
      // Also update the image preview if a new image was uploaded
      if (imageUrl !== adminData.imageUrl) {
        setImagePreview(imageUrl);
      }
      
      setImageFile(null); // Clear the image file after successful upload
      setSuccess('Profile updated successfully!');
      
      // Notify other components that admin data has been updated
      localStorage.setItem('adminDataUpdated', Date.now().toString());
      
      // Force a re-render by updating the form data
      setTimeout(() => {
        console.log('Current admin data after update:', adminData);
      }, 100);
    } catch (err) {
      setError(err.message);
      console.error('Profile update error:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Profile</h1>
        <button
          onClick={refreshAdminData}
          disabled={loading}
          className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center space-x-2 disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Refresh</span>
        </button>
      </div>

      {error && (
        <div className="p-4 mb-6 bg-red-50 text-red-700 rounded-md border border-red-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">
                {error}
              </div>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="p-4 mb-6 bg-green-50 text-green-700 rounded-md border border-green-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Success</h3>
              <div className="mt-2 text-sm text-green-700">
                {success}
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <div className="mt-2 flex items-center space-x-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Profile preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-orange-50 file:text-orange-700
                    hover:file:bg-orange-100"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Recommended: Square image, at least 400x400px
                </p>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              key={`name-${adminData.name}`}
              value={adminData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              key={`title-${adminData.title}`}
              value={adminData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <input
              type="text"
              id="details"
              name="details"
              key={`details-${adminData.details}`}
              value={adminData.details}
              onChange={handleChange}
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
              key={`description-${adminData.description}`}
              value={adminData.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
} 