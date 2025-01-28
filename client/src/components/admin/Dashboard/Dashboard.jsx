import React from 'react';
import Sidebar from '../../../utils/sidebar';
import Callssummary from './Callssummary';
import Toptelecallers from './Toptelecallers';
import Fulfilment from './Fulfilment';
import LeadStatus from './LeadStatus';
import Callinsights from './Callinsights';
import { useState,useEffect } from 'react';
import Addpopup from './popups/addpopup';
import Toolmodal from './popups/Toolmodal';
import axios from 'axios'
const Dashboard = () => {
  const [opentools, setopentools] = useState(false);
  const [popup, setispopupopen] = useState(false);
  const [type, settype] = useState("");
  const add = async(data) => {
    console.log(data);
    setopentools(!opentools)
    if (data === "admin") {
      setispopupopen(true);
      settype("admin");
    } else {
      setispopupopen(true);
      settype("telecaller");
    }
  };
  const openmodel = () => {
    setopentools(!opentools);
  };
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="lg:w-[250px] w-0">
        <Sidebar />
      </div>

      <div className="flex-grow p-4 md:p-6 overflow-auto">
        <div className="flex">
          <div className="p-2 relative w-full max-w-[300px] ml-8 md:max-w-[500px] md:ml-0">
            <i className="fa fa-search text-2xl text-white absolute left-4 top-1/2 transform -translate-y-1/2"></i>
            <input
              className="p-2 pl-12 rounded-xl bg-gray-700 text-white w-full"
              placeholder="Search here..."
            />
          </div>
          <div
            className="hidden sm:block text-white ml-auto mr-3 cursor-pointer"
            onClick={openmodel}
          >
            <i className="fa fa-bars"></i>
          </div>
        </div>
       <Toolmodal
       opentools={opentools}
       add={add}
       />
        <Callssummary />

        <div className="flex flex-col lg:flex-row w-full mt-4 gap-4">
          <Toptelecallers />
          <Fulfilment />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
          <LeadStatus />
          <Callinsights />
        </div>
      </div>

      <Addpopup popup={popup} setispopupopen={setispopupopen} type={type} />
    </div>
  );
};

export default Dashboard;