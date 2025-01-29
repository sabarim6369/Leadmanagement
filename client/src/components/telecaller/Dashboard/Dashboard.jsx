import React from 'react';
import Sidebar from '../../../utils/sidebar';
import Todayscalls from './Todayscalls';
import Fullfilment from './Fullfilment';
import Toptelecallers from './Toptelecallers';
import LeadStatus from './Leadstatus';
import Callinsights from './Callinsights';
const TelecallersDashboard = () => {
  
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="lg:w-[250px] w-0">
        <Sidebar />
      </div>

      <div className="flex-grow p-4 md:p-6 overflow-auto">
        <div className="p-2 relative w-full max-w-[500px]">
          <i className="fa fa-search text-2xl text-white absolute left-4 top-1/2 transform -translate-y-1/2"></i>
          <input
            className="p-2 pl-12 rounded-xl bg-gray-700 text-white w-full"
            placeholder="Search here..."
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-4">
         <Todayscalls/>
          <Fullfilment/>
        </div>

        <div className="flex flex-col lg:flex-row w-full mt-4 gap-4">
         <Toptelecallers/>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
          <LeadStatus/>

         <Callinsights/>
        </div>
      </div>
    </div>
  );
};

export default TelecallersDashboard;