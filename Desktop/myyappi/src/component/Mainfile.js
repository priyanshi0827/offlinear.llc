import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Createmodel from './Createmodel';
const dummyData = [
  { id: 1, name: 'Blonde Drizzle', type: 'Extraction', description: 'Edit Customer...', createdOn: '29/02/2024', lastTrainedOn: '29/02/2024', status: 'Active' },
  { id: 2, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 3, name: 'Abhishek saini', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 4, name: 'Deepak sharma ', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 5, name: 'Virat Kholi ', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 6, name: 'Abhishek Bachhan', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 7, name: 'Hritik Roshan ', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 8, name: 'Ranveer singh', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 9, name: 'Ranbir Kapoor', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 10, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 11, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 12, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 13, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 14, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 15, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },
  { id: 16, name: 'Dark Roast', type: 'Classification', description: 'Analyze Customer...', createdOn: '12/03/2024', lastTrainedOn: '12/03/2024', status: 'Inactive' },

];

const App = () => {
  const [data, setData] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  const [showModal, setShowModal] = useState(false);
  const [newModel, setNewModel] = useState(false ,{ name: '', type: '', description: '' });

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewModel({ ...newModel, [name]: value });
  };
  
    const handleSaveModel = (newModel) => {
      console.log('New Model Data:', newModel);
      setShowModal(false);


  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-md">
     
        <Sidebar /> 
      </aside>

      <main className="flex-1 p-6">
      
        <Header />
        <header className="flex items-center justify-between mb-6">
          
        </header>

    
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Model Library</h2>
             <button  onClick={()=> setShowModal(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md"> 
              + Create New Model
            </button>
            
            

          </div>
         
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Createmodel onClose={() => setShowModal(false)} onSave={handleSaveModel} />
          </div>
        )}

{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <Createmodel onClose={() => setShowModal(false)} onSave={handleSaveModel} />
  </div>
)}


          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by Name, ID"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button className="ml-4 bg-gray-100 text-gray-600 px-4 py-2 rounded-md flex items-center">
              <i className="fas fa-filter mr-2"></i> Filters
            </button>
            <div className="ml-4 bg-gray-100 text-gray-600 px-4 py-2 rounded-md flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i> April 11 - April 24
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="py-2 cursor-pointer" onClick={() => handleSort('name')}>Model Name <i className="fas fa-sort"></i></th>
                <th className="py-2 cursor-pointer" onClick={() => handleSort('type')}>Model Type <i className="fas fa-sort"></i></th>
                <th className="py-2">Description</th>
                <th className="py-2 cursor-pointer" onClick={() => handleSort('createdOn')}>Created On <i className="fas fa-sort"></i></th>
                <th className="py-2 cursor-pointer" onClick={() => handleSort('lastTrainedOn')}>Last Trained On <i className="fas fa-sort"></i></th>
                <th className="py-2 cursor-pointer" onClick={() => handleSort('status')}>Status <i className="fas fa-sort"></i></th>
                <th className="py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.type}</td>
                  <td className="py-2">{item.description}</td>
                  <td className="py-2">{item.createdOn}</td>
                  <td className="py-2">{item.lastTrainedOn}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2">
                    <button className="text-gray-600">
                      <i className="fas fa-ellipsis-h"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-600">
              Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {filteredData.length} results
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 bg-gray-200 rounded-full"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="px-2 py-1">{currentPage}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
                className="px-2 py-1 bg-gray-200 rounded-full"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;






