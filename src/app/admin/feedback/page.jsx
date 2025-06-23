'use client';

import { useEffect, useState } from 'react';

export default function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/feedback');
      if (!res.ok) throw new Error('Failed to fetch feedback');
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      setError(err.message || 'Error fetching feedback');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this feedback?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/feedback/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete feedback');
      setFeedbacks(feedbacks.filter(fb => fb._id !== id));
    } catch (err) {
      alert(err.message || 'Error deleting feedback');
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 bg-red-100 text-red-700 rounded">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Feedback Management</h1>
      {feedbacks.length === 0 ? (
        <div className="text-gray-500">No feedback found.</div>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map(fb => (
            <li key={fb._id} className="p-4 bg-white rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold">{fb.name || 'Anonymous'}</div>
                <div className="text-gray-600 text-sm">{fb.email}</div>
                <div className="mt-2">{fb.message}</div>
                <div className="text-xs text-gray-400 mt-1">{new Date(fb.createdAt).toLocaleString()}</div>
              </div>
              <button
                onClick={() => handleDelete(fb._id)}
                disabled={deletingId === fb._id}
                className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                {deletingId === fb._id ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 