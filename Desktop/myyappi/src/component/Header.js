
import React from 'react';
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
     
      <div className="text-xl text-gray-800">AI/ML Model Builder</div>

      
      <div className="flex-1 flex justify-center">
        <div className="relative" style={{ width: 'calc(100% - 8cm)', marginLeft: '3cm' }}>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-24 py-2 rounded-full bg-gray-100 text-gray-600 focus:outline-none w-full"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-400">
            <span>⌘</span> <span>K</span>
          </span>
        </div>
      </div>

      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <i className="fas fa-bell text-gray-600"></i>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
        </div>
        <i className="fas fa-heart text-gray-600"></i>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="text-gray-800">
            <div className="font-semibold">Neurotic Spy</div>
            <div className="text-sm text-gray-500">neurotic@taildo.com</div>
          </div>
          <i className="fas fa-chevron-down text-gray-600"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;