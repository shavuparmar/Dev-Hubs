import SidebarLayout from "../Common/SideBarLayout";
import softwareData from "../Data/SoftwareData"; // adjust path based on your structure
import { useEffect, useState } from "react";

export default function Software() {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const toolsPerPage = 12;

  // Load tools on mount
  useEffect(() => {
    setTools(softwareData || []);
  }, []);

  // Filter tools when activeCategory or tools changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredTools(tools);
    } else {
      setFilteredTools(tools.filter((tool) => tool.category === activeCategory));
    }
    setCurrentPage(1); // reset page on category change
  }, [activeCategory, tools]);

  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);
  const startIndex = (currentPage - 1) * toolsPerPage;
  const currentTools = filteredTools.slice(startIndex, startIndex + toolsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Dynamically get categories from tools, then add "All" at the front
  const categories = ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))];

  return (
    <SidebarLayout>
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 -mt-5 mb-8">
            Software Tools
          </h1>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentTools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col"
              >
                <img
                  src={tool.icon}
                  alt={`${tool.title} icon`}
                  className="w-12 h-12 mb-3"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{tool.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Tool →
                </a>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-10 space-x-2 flex-wrap gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              aria-label="Previous page"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                  className={`px-4 py-2 rounded ${
                    currentPage === pageNum
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
