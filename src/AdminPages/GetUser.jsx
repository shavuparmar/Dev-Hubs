import React, { useEffect, useState } from 'react';
import AdminSideBar from '../Admin/AdminSideBar';

export default function GetUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || '';

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/users`);
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user handler
  const handleDelete = async (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user? This action cannot be undone.');
    if (!confirmed) return;

    setDeletingId(userId);
    try {
      const res = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Delete failed');
      }
      setUsers(users.filter(u => u._id !== userId));
      alert('User deleted successfully');
    } catch (err) {
      alert(err.message || 'Failed to delete user');
    } finally {
      setDeletingId(null);
    }
  };

  // Open modal with user details
  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <AdminSideBar>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">Users</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {loading ? (
          <p className="text-gray-700">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-700">No users found.</p>
        ) : (
          <div className="overflow-x-auto shadow rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map(user => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end space-x-3">
                      <button
                        onClick={() => openModal(user)}
                        aria-label={`View details for ${user.username}`}
                        className="text-blue-600 hover:text-blue-900 transition"
                      >
                        {/* Eye icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleDelete(user._id)}
                        disabled={deletingId === user._id}
                        className={`text-red-600 hover:text-red-900 transition ${
                          deletingId === user._id ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-label={`Delete ${user.username}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal for user details */}
        {showModal && selectedUser && (
          <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">User Details</h2>

              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Username:</span> {selectedUser.username}</p>
                <p><span className="font-semibold">Email:</span> {selectedUser.email}</p>
                {selectedUser.createdAt && (
                  <p><span className="font-semibold">Created At:</span> {new Date(selectedUser.createdAt).toLocaleString()}</p>
                )}
                {/* Add more user fields if available */}
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminSideBar>
  );
}
