import SideBarLayout from "../Common/SideBarLayout";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [courses, setCourses] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalCourses: 0,
    totalCompleted: 0,
    totalHours: 0,
    topLanguages: [],
  });
  const [loading, setLoading] = useState(true);

  // 1️⃣ Fetch courses & analytics
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace these URLs with your backend API
        const coursesRes = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/courses`);
        setCourses(coursesRes.data || []);

        const analyticsRes = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/analytics`);
        setAnalytics(analyticsRes.data || {
          totalCourses: coursesRes.data.length,
          totalCompleted: 0,
          totalHours: 0,
          topLanguages: [
            { language: "JavaScript", progress: 50 },
            { language: "Python", progress: 30 },
            { language: "Java", progress: 20 },
          ],
        });
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setCourses([]);
        setAnalytics({
          totalCourses: 0,
          totalCompleted: 0,
          totalHours: 0,
          topLanguages: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SideBarLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Learning Dashboard</h1>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
            <p className="text-3xl font-bold text-purple-600">{analytics.totalCourses}</p>
            <p className="text-gray-600 mt-1 text-center">Total Courses</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
            <p className="text-3xl font-bold text-green-600">{analytics.totalCompleted}</p>
            <p className="text-gray-600 mt-1 text-center">Courses Completed</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
            <p className="text-3xl font-bold text-yellow-500">{analytics.totalHours}</p>
            <p className="text-gray-600 mt-1 text-center">Total Learning Hours</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
            <p className="text-3xl font-bold text-blue-600">{analytics.topLanguages.length}</p>
            <p className="text-gray-600 mt-1 text-center">Languages Learning</p>
          </div>
        </div>

        {/* Top Languages */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Programming Languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {analytics.topLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-800">{lang.language}</h3>
                <div className="mt-2 w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-purple-600"
                    style={{ width: `${lang.progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{lang.progress}% completed</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Courses</h2>
        {loading ? (
          <p className="text-gray-500">Loading courses...</p>
        ) : courses.length === 0 ? (
          <p className="text-gray-500">No courses available. Coming soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition">
                <img
                  src={course.image || "https://via.placeholder.com/400x200.png?text=Course"}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mt-2">{course.description.slice(0, 80)}...</p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-purple-600 h-3 rounded-full"
                        style={{ width: `${course.progress || 0}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{course.progress || 0}% completed</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Challenges / Coming Soon */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coding Challenges</h2>
          <div className="bg-gray-100 border-dashed border-2 border-gray-300 rounded-lg p-10 flex justify-center items-center text-gray-500">
            Coming Soon!
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </SideBarLayout>
  );
}
