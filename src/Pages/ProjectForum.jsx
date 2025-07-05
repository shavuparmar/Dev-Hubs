import { useState } from 'react';
import SidebarLayout from '../Common/SideBarLayout';

const ProjectForum = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [techStack, setTechStack] = useState([]);
  const [techInput, setTechInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Use the correct environment variable for Vite
  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || '';

  const handleAddTech = (e) => {
    e.preventDefault();
    const trimmed = techInput.trim();
    if (trimmed && !techStack.includes(trimmed)) {
      setTechStack([...techStack, trimmed]);
      setTechInput('');
    }
  };

  const handleRemoveTech = (tech) => {
    setTechStack(techStack.filter(t => t !== tech));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!projectName || !description || !projectLink) {
      setError('Please fill all required fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/project-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName, description, projectLink, techStack }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to submit project.');
      }

      setSuccess('Project submitted successfully!');
      setProjectName('');
      setDescription('');
      setProjectLink('');
      setTechStack([]);
      setTechInput('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SidebarLayout>
        <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-xl shadow-md font-sans">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Submit Your Project</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block">
              <span className="text-gray-700 font-medium">
                Project Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">
                Description <span className="text-red-500">*</span>
              </span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your project"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">
                Project Link <span className="text-red-500">*</span>
              </span>
              <input
                type="url"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                placeholder="https://yourproject.com"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Tech Stack (Add tags)</span>
              <div className="flex mt-1 space-x-2">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddTech(e);
                  }}
                  placeholder="Type tech and press Enter"
                  className="flex-grow rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <button
                  onClick={handleAddTech}
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    <span>{tech}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(tech)}
                      aria-label={`Remove ${tech}`}
                      className="hover:bg-blue-700 rounded-full p-0.5"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </label>

            {error && <p className="text-red-600 font-semibold">{error}</p>}
            {success && <p className="text-green-600 font-semibold">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-bold text-white transition ${
                loading ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Project'}
            </button>
          </form>
        </div>
      </SidebarLayout>
    </>
  );
};

export default ProjectForum;
