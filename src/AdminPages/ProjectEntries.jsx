import React, { useEffect, useState } from 'react'
import AdminSideBar from '../Admin/AdminSideBar'
import { FaEye } from 'react-icons/fa'

export default function ProjectEntries() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/project-submissions`)
        if (!res.ok) throw new Error('Failed to fetch projects')
        const data = await res.json()
        setProjects(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [BACKEND_URL])

  return (
    <AdminSideBar>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Project Submissions</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!loading && !error && projects.length === 0 && <p>No projects submitted yet.</p>}

        {!loading && !error && projects.length > 0 && (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Project Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Submitted Date</th>
                <th className="border border-gray-300 px-4 py-2 text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{proj.projectName}</td>
                  {/* Adjusted user display to username or fallback */}
                  <td className="border border-gray-300 px-4 py-2">
                    {proj.user?.username || 'N/A'}
                  </td>
                  {/* Use createdAt instead of submittedAt */}
                  <td className="border border-gray-300 px-4 py-2">
                    {proj.createdAt
                      ? new Date(proj.createdAt).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      aria-label="View project details"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Popup Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg p-6 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
                aria-label="Close details"
              >
                &times;
              </button>

              <h2 className="text-xl font-semibold mb-4">{selectedProject.projectName}</h2>

              <p><strong>Description:</strong></p>
              <p className="mb-4 whitespace-pre-wrap">{selectedProject.description}</p>

              <p><strong>User Name:</strong> {selectedProject.user?.username || 'N/A'}</p>
              <p><strong>User Profile:</strong> {selectedProject.user?.profile || 'N/A'}</p>
              <p>
                <strong>Submitted At:</strong>{' '}
                {selectedProject.createdAt
                  ? new Date(selectedProject.createdAt).toLocaleString()
                  : 'N/A'}
              </p>
              {selectedProject.projectLink && (
                <p className="mt-2">
                  <strong>Project Link:</strong>{' '}
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {selectedProject.projectLink}
                  </a>
                </p>
              )}
              {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                <p className="mt-2">
                  <strong>Tech Stack:</strong> {selectedProject.techStack.join(', ')}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminSideBar>
  )
}
