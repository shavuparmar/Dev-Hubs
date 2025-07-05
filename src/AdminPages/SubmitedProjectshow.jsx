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
      <div className="p-6 max-w-full overflow-x-auto">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Project Submissions</h1>

        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && <p className="text-red-600 text-center font-semibold">{error}</p>}

        {!loading && !error && (
          <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Project Name</th>
                {/* Username column removed here */}
                <th className="border border-gray-300 px-4 py-3 text-left">Submitted Date</th>
                <th className="border border-gray-300 px-4 py-3 text-center w-16">View</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-500 italic">
                    No projects found.
                  </td>
                </tr>
              )}
              {projects.map((proj) => (
                <tr key={proj._id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedProject(proj)}>
                  <td className="border border-gray-300 px-4 py-2">{proj.projectName}</td>
                  {/* Username column removed here */}
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(proj.submittedAt || proj.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(proj)
                      }}
                      aria-label="View project details"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye size={18} />
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
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl leading-none"
                aria-label="Close details"
              >
                &times;
              </button>

              <h2 className="text-2xl font-semibold mb-4">{selectedProject.projectName}</h2>

              <p className="mb-4 whitespace-pre-wrap">{selectedProject.description}</p>

              <p className="mb-2">
                <strong>Project Link: </strong>
                <a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {selectedProject.projectLink}
                </a>
              </p>

              {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                <p className="mb-4">
                  <strong>Tech Stack:</strong> {selectedProject.techStack.join(', ')}
                </p>
              )}

              <hr className="my-4" />

              <h3 className="text-xl font-semibold mb-2">User Details</h3>
              <p><strong>Name:</strong> {selectedProject.user?.name || 'N/A'}</p>
              <p><strong>Profile:</strong> {selectedProject.user?.profile || 'N/A'}</p>

              <p className="mt-4 text-gray-600 text-sm">
                Submitted At:{' '}
                {new Date(selectedProject.submittedAt || selectedProject.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </AdminSideBar>
  )
}
