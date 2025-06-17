"use client";

import { useState, useEffect } from 'react';
import { Star, User, Calendar, Filter } from 'lucide-react';

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    feedback: '',
    category: 'general'
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('/api/feedback');
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newFeedback = await response.json();
        setFeedbacks([newFeedback, ...feedbacks]);
        setFormData({
          name: '',
          email: '',
          rating: 5,
          feedback: '',
          category: 'general'
        });
        setShowForm(false);
        alert('Feedback submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  const openModal = (feedback) => {
    setSelectedFeedback(feedback);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFeedback(null);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = feedbacks.length > 0 
    ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(1)
    : 0;

  const filteredFeedbacks = feedbacks.filter(feedback => {
    if (filter === 'all') return true;
    return feedback.category === filter;
  });

  const getCategoryStats = () => {
    const categories = ['friendly', 'helpful', 'insightful'];
    return categories.map(cat => ({
      name: cat,
      count: feedbacks.filter(f => f.category === cat).length
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Ratings and Feedback</h1>
        <p className="text-gray-600">Share your experience and read what others have to say</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Flower Icon Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex justify-center mb-4">
            <div className="text-6xl">🌸</div>
          </div>
        </div>

        {/* Rating Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-gray-800 mb-1">
            {averageRating}/5
          </div>
          <div className="text-sm text-gray-600 mb-2">
            {feedbacks.length} RATINGS
          </div>
          <div className="flex justify-center">
            {renderStars(Math.round(averageRating))}
          </div>
        </div>

        {/* Testimonials Count */}
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-gray-800 mb-1">
            {feedbacks.length}
          </div>
          <div className="text-sm text-gray-600">
            TESTIMONIALS
          </div>
        </div>

        {/* Add Feedback Button */}
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add Feedback
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {getCategoryStats().map(({ name, count }) => (
            <button
              key={name}
              onClick={() => setFilter(name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-1" />
              {count} {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          ))}
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All ({feedbacks.length})
          </button>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {filteredFeedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => openModal(feedback)}
          >
            <div className="flex items-center mb-3">
              {renderStars(feedback.rating)}
              <span className="ml-2 text-sm font-medium text-gray-600">
                {feedback.rating}/5
              </span>
            </div>
            <p className="text-gray-800 mb-4 line-clamp-3">
              {feedback.feedback}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{feedback.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                {feedback.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredFeedbacks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No feedback found for this category.</p>
        </div>
      )}

      {/* Feedback Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= formData.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">General</option>
                  <option value="friendly">Friendly</option>
                  <option value="helpful">Helpful</option>
                  <option value="insightful">Insightful</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Feedback *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.feedback}
                  onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your experience..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Feedback
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Feedback Detail Modal */}
      {showModal && selectedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Feedback Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center mb-3">
                {renderStars(selectedFeedback.rating)}
                <span className="ml-2 text-lg font-medium text-gray-600">
                  {selectedFeedback.rating}/5
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                {selectedFeedback.feedback}
              </p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{selectedFeedback.name}</p>
                    {selectedFeedback.email && (
                      <p className="text-sm text-gray-500">{selectedFeedback.email}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(selectedFeedback.createdAt).toLocaleDateString()}
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {selectedFeedback.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;
