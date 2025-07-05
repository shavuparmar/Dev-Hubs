import React, { useState } from 'react';
import SidebarLayout from '../Common/SideBarLayout';
import Footer from './Footer';

export default function ForumPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Replace this URL with your backend endpoint
  const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/entries`;





  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('❗ Please fill all fields');
      return;
    }

    setStatus('Submitting...');

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.result === 'success') {
          setStatus('✅ Thanks for participating!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('❌ Submission failed. Please try again.');
          console.error('Backend response error:', result);
        }
      } else {
        setStatus('❌ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('❌ Error submitting form. Try again later.');
    }
  };

  return (
    <SidebarLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Participate in Developer Discussions
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Ask questions, share your knowledge on our open forums
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-medium text-gray-700">
                Your Question or Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to ask or share?"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-200 font-semibold"
            >
              Submit
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center font-medium text-gray-700">{status}</p>
          )}
        </div>
      </div>

      <Footer />
    </SidebarLayout>
  );
}
