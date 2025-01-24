
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AvenLogo from './Aven.png';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white shadow-md">
            <div className="p-4 flex items-center">
                <img src={AvenLogo} alt="Aventisia Logo" />
            </div>
            <nav className="mt-10">
            
                <div className="px-4 py-2">
                    <h2 className="text-sm font-semibold text-gray-600">Model Library</h2>
                    <div className="mt-2">
                        <a href="/model-library" className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                            <i className="fas fa-th mr-2"></i>
                            <span>Model Library</span>
                        </a>
                    </div>
                </div>

               
                <div className="px-4 py-2 mt-6">
                    <h2 className="text-sm font-semibold text-gray-600">Extraction Builder</h2>
                    <div className="mt-2">
                        <a href="/label-data" className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                            <i className="fas fa-th mr-2"></i>
                            <span>Label Data</span>
                        </a>
                        <a href="/model" className="flex items-center px-4 py-2 mt-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                            <i className="fas fa-layer-group mr-2"></i>
                            <span>Model</span>
                        </a>
                        <a href="/test" className="flex items-center px-4 py-2 mt-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                            <i className="fas fa-file-alt mr-2"></i>
                            <span>Test</span>
                        </a>
                    </div>
                </div>

                <div className="px-4 py-2 mt-6">
                    <h2 className="text-sm font-semibold text-gray-600">Help</h2>
                    <div className="mt-2">
                        <a href="/settings" className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                            <i className="fas fa-cog mr-2"></i>
                            <span>Setting</span>
                        </a>
                        <a href="/support" className="flex items-center px-4 py-2 mt-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md">
                            <i className="fas fa-life-ring mr-2"></i>
                            <span>Support</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
