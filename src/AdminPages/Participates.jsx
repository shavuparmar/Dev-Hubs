import { useEffect, useState } from 'react';
import SideBar from '../Admin/AdminSideBar';

const BACKEND_URL = 'http://localhost:4000/entries';

export default function Participate() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    setError('');
    setStatus('');
    try {
      const res = await fetch(BACKEND_URL);
      if (!res.ok) throw new Error('Failed to fetch entries');
      const data = await res.json();
      setEntries(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;

    setStatus('');
    setError('');
    try {
      const res = await fetch(`${BACKEND_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete entry');
      setStatus('✅ Deleted successfully!');
      fetchEntries();
    } catch (err) {
      setError(`❌ ${err.message}`);
    }
  };

  return (
    <SideBar>
      <main className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded mt-12">
        <h2 className="text-2xl font-bold mb-6">Admin Panel - View & Delete Entries</h2>

        {status && <p className="mb-4 text-green-700" role="alert">{status}</p>}
        {error && <p className="mb-4 text-red-700" role="alert">{error}</p>}

        {loading ? (
          <p>Loading entries...</p>
        ) : entries.length === 0 ? (
          <p>No entries found.</p>
        ) : (
          <table
            className="w-full border-collapse border border-gray-300"
            aria-label="Entries table"
          >
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left">Name</th>
                <th className="border border-gray-300 p-2 text-left">Email</th>
                <th className="border border-gray-300 p-2 text-left">Message</th>
                <th className="border border-gray-300 p-2 text-left">Created At</th>
                <th className="border border-gray-300 p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(({ _id, name, email, message, createdAt }) => (
                <tr key={_id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{name}</td>
                  <td className="border border-gray-300 p-2">
                    <a
                      href={`mailto:${email}?subject=Regarding Your Submission&body=Hi ${name},%0D%0A%0D%0AThank you for your message: "${message}"`}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {email}
                    </a>
                  </td>
                  <td className="border border-gray-300 p-2">{message}</td>
                  <td className="border border-gray-300 p-2">
                    {new Date(createdAt).toLocaleString()}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleDelete(_id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      aria-label={`Delete entry from ${name}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </SideBar>
  );
}
