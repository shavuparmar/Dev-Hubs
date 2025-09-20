import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../Common/SideBarLayout";
import axios from "axios";
import { Menu } from "@headlessui/react"; // For dropdown menu

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    avatar: "",
    bio: "",
    coursesCompleted: 0,
    projects: 0,
    badges: 0,
    hoursLearned: 0,
  });

  // ✅ 1. Check login status
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");
    if (!storedUser) return navigate("/login");

    try {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser?.id || parsedUser?._id) setUser(parsedUser);
      else navigate("/login");
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  // ✅ 2. Fetch profile
  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/profile/${user.id || user._id}`
        );
        setProfile(res.data);
        setFormData({
          avatar: res.data.avatar || "",
          bio: res.data.bio || "",
          coursesCompleted: res.data.coursesCompleted || 0,
          projects: res.data.projects || 0,
          badges: res.data.badges || 0,
          hoursLearned: res.data.hoursLearned || 0,
        });
      } catch {
        setProfile(null);
        setFormData({
          avatar: "",
          bio: "",
          coursesCompleted: 0,
          projects: 0,
          badges: 0,
          hoursLearned: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["coursesCompleted", "projects", "badges", "hoursLearned"].includes(name)
        ? parseInt(value) || 0
        : value,
    }));
  };

  // ✅ Save profile
  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
        ...formData,
        userId: user.id || user._id,
      });
      setProfile(res.data);
      setEditMode(false);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to save profile.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  // ✅ Delete Account
  const handleDeleteAccount = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This cannot be undone.")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${user.id || user._id}`);
      handleLogout();
    } catch (err) {
      console.error("Failed to delete account", err);
    }
  };

  if (!user)
    return <p className="text-center mt-10 text-gray-500">Checking login status...</p>;

  return (
    <SidebarLayout>
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 mb-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading profile...</p>
        ) : (
          <>
            {/* Header with Menu */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  Options
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } w-full text-left px-4 py-2`}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-red-100 text-red-600" : "text-red-600"
                        } w-full text-left px-4 py-2`}
                        onClick={handleDeleteAccount}
                      >
                        Delete Account
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
              <div className="mb-6 md:mb-0 flex flex-col items-center">
                <img
                  src={formData.avatar || "https://i.pravatar.cc/150?img=3"}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                {editMode && (
                  <input
                    type="text"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                    placeholder="Avatar URL"
                    className="mt-3 border px-3 py-1 rounded w-64 text-center"
                  />
                )}
              </div>

              <div className="flex-1 w-full">
                <h1 className="text-2xl md:text-3xl font-semibold">{user.username}</h1>
                <p className="text-gray-600 mt-1">{user.email}</p>
                {editMode ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Bio"
                    className="mt-4 w-full border px-3 py-2 rounded resize-none"
                  />
                ) : (
                  <p className="mt-4 text-gray-700">{profile?.bio || "No bio yet."}</p>
                )}
              </div>
            </div>

            {/* Learning Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-6">
              {[
                { field: "coursesCompleted", label: "Courses" },
                { field: "projects", label: "Projects" },
                { field: "badges", label: "Badges" },
                { field: "hoursLearned", label: "Hours Learned" },
              ].map((item) => (
                <div
                  key={item.field}
                  className="bg-gray-100 p-4 rounded-lg text-center flex flex-col items-center"
                >
                  {editMode ? (
                    <input
                      type="number"
                      name={item.field}
                      value={formData[item.field]}
                      onChange={handleChange}
                      className="text-2xl font-bold text-gray-700 w-20 text-center bg-white border rounded"
                    />
                  ) : (
                    <p className="text-2xl font-bold text-gray-700">{profile?.[item.field] || 0}</p>
                  )}
                  <span className="text-gray-600 mt-1">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Edit Save Button */}
            <div className="mt-6 flex justify-end">
              {editMode ? (
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </>
        )}
      </div>
    </SidebarLayout>
  );
}
