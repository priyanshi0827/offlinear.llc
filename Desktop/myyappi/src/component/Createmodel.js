import React, { useState } from 'react';
import { X } from 'lucide-react';

const CreateModel = ({ onClose, onSave }) => {
  const [modelData, setModelData] = useState({
    name: '',
    type: '',
    llm: 'Neural (recommended)', 
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModelData({ ...modelData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(modelData); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Create New Model</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Model Name</label>
          <input
            type="text"
            name="name"
            value={modelData.name}
            onChange={handleInputChange}
            placeholder="Enter Model Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Model Type</label>
          <select
            name="type"
            value={modelData.type}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="" disabled>Select</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">LLM</label>
          <input
            type="text"
            name="llm"
            value={modelData.llm}
            onChange={handleInputChange}
            readOnly
            className="w-full px-3 py-2 border bg-gray-100 rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Model Description</label>
          <textarea
            name="description"
            value={modelData.description}
            onChange={handleInputChange}
            placeholder="Enter Model Description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateModel;

