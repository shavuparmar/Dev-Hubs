import React, { useState } from "react";
import SidebarLayout from "../Common/SideBarLayout";

export default function SubmitProject() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, send formData to your backend or API endpoint
    alert("Thanks for your submission! We'll review it shortly.");
    setFormData({ name: "", description: "", link: "" });
  };

  return (
    <>
   
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-100 rounded">
      <h2 className="text-xl mb-4">Submit Your Project</h2>
      <label>
        Project Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-3"
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-3"
        />
      </label>
      <label>
        Project Link (GitHub or Website):
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-3"
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
    
    </>
  );
}
