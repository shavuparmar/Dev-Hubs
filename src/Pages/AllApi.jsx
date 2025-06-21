import SidebarLayout from '../Common/SideBarLayout';
import apiData from '../Data/All_API';
import { useState, useEffect } from 'react';

export default function APIPages() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [filteredAPIs, setFilteredAPIs] = useState(apiData);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  // Unique categories and pricing types dynamically from data
  const categories = ['All', ...Array.from(new Set(apiData.map(api => api.category)))];
  const pricingTypes = ['All', ...Array.from(new Set(apiData.map(api => api.pricing)))];

  useEffect(() => {
    let filtered = apiData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(api => api.category === selectedCategory);
    }

    if (selectedPricing !== 'All') {
      filtered = filtered.filter(api => api.pricing === selectedPricing);
    }

    setFilteredAPIs(filtered);
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [selectedCategory, selectedPricing]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAPIs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAPIs = filteredAPIs.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SidebarLayout>
      <div className="heading mb-10">
        <h1 className="text-center text-3xl font-bold mt-5">API</h1>
      </div>

      {/* Filters container */}
      <div className="flex justify-between px-4 md:px-10 mb-6 items-center max-w-[1280px] mx-auto flex-wrap gap-4">
        <div className="text-lg font-semibold">
          Total APIs: {filteredAPIs.length}
        </div>

        {/* Category selector */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Pricing selector */}
        <select
          value={selectedPricing}
          onChange={(e) => setSelectedPricing(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pricingTypes.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      {/* APIs Grid */}
      <div className="Maincontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-10 max-w-[1280px] mx-auto">
        {currentAPIs.map((api, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-md rounded-lg p-6 text-center bg-white flex flex-col"
          >
            {api.image && (
              <img
                src={api.image}
                alt={`${api.title} icon`}
                className="w-20 h-20 mx-auto mb-4 object-contain"
                loading="lazy"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{api.title}</h2>
            <p className="text-gray-700 mb-2 flex-grow">{api.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              Category: <span className="font-medium">{api.category}</span> | Pricing: <span className="font-medium">{api.pricing}</span>
            </p>
            <a
              href={api.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 mt-auto"
            >
              Visit
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 my-10 flex-wrap px-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          aria-label="Previous page"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`px-4 py-2 rounded ${
                currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {page}
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
    </SidebarLayout>
  );
}
