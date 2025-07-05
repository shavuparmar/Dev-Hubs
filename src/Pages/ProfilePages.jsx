import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SidebarLayout from '../Common/SideBarLayout'
import axios from 'axios'

export default function ProfilePages() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({})

  // Check login status
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser && storedUser._id) {
      setUserId(storedUser._id)
    } else {
      navigate('/profile') // redirect to login if user not found
    }
  }, [navigate])

  // Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${userId}`)
        setProfile(res.data)
        setFormData(res.data)
      } catch (err) {
        console.log('Profile not found. You can create one.')
        setProfile(null)
        setFormData({
          avatar: '',
          bio: '',
          posts: 0,
          followers: 0,
          following: 0,
        })
      } finally {
        setLoading(false)
      }
    }

    if (userId) {
      fetchProfile()
    }
  }, [userId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: ['posts', 'followers', 'following'].includes(name)
        ? parseInt(value) || 0
        : value,
    }))
  }

  const handleSave = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
        ...formData,
        userId,
      })
      setProfile(res.data)
      setEditMode(false)
      setError(null)
    } catch (err) {
      setError('Failed to save profile.')
    }
  }

  const user = JSON.parse(localStorage.getItem('user')) || {}

  return (
    <SidebarLayout>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 mb-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading profile...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
              <button
                onClick={() => {
                  setEditMode((prev) => !prev)
                  if (editMode) setFormData(profile)
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                {editMode ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
              <div className="mb-6 md:mb-0">
                <img
                  src={editMode ? formData.avatar || 'https://i.pravatar.cc/150?img=3' : profile?.avatar || 'https://i.pravatar.cc/150?img=3'}
                  alt="Profile avatar"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                {editMode && (
                  <input
                    type="text"
                    name="avatar"
                    value={formData.avatar || ''}
                    onChange={handleChange}
                    placeholder="Avatar URL"
                    className="mt-2 border rounded px-2 py-1 w-full"
                  />
                )}
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-semibold text-gray-900">{user.username || 'No username'}</h1>
                <p className="text-gray-600 mt-2">{user.email || 'No email'}</p>
                {editMode ? (
                  <textarea
                    name="bio"
                    value={formData.bio || ''}
                    onChange={handleChange}
                    placeholder="Bio"
                    className="mt-4 w-full border rounded px-3 py-2"
                  />
                ) : (
                  <p className="mt-4 text-gray-700 leading-relaxed">{profile?.bio || 'No bio available.'}</p>
                )}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {['posts', 'followers', 'following'].map((field) => (
                <div key={field} className="bg-gray-100 p-4 rounded-lg text-center">
                  {editMode ? (
                    <input
                      type="number"
                      name={field}
                      value={formData[field] || 0}
                      onChange={handleChange}
                      className="text-2xl font-bold text-gray-700 text-center w-full bg-white border rounded"
                    />
                  ) : (
                    <p className="text-2xl font-bold text-gray-700">{profile?.[field] || 0}</p>
                  )}
                  <p className="text-gray-600 mt-1 capitalize">{field}</p>
                </div>
              ))}
            </div>

            {editMode && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </SidebarLayout>
  )
}
