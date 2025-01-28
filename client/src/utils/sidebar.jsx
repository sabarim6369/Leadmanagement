import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglesidebar = () => {
        setIsOpen(!isOpen);
    };
    const[select,setselect]=useState(()=>{
        const path=window.location.pathname;
        if(path==="/dashboard") return 0;
        if(path==="/profile") return 1;
        if(path==="/telecallers") return 2;
        if(path==="/report") return 3;
        if(path==="/messages") return 4;
        if(path==="/settings") return 5;
        if(path==="/history") return 6;
    })
    const navigate = useNavigate();
    useEffect(() => {
        const currentPath = window.location.pathname;
    
        
        switch (select) {
          case 0:
            if (currentPath !== "/dashboard") navigate("/dashboard");
            break;
          case 1:
            if (currentPath !== "/profile") navigate("/profile");
            break;
          case 2:
            if (currentPath !== "/telecallers") navigate("/telecallers");
            break;
          case 3:
            if (currentPath !== "/report") navigate("/report");
            break;
          case 4:
            if (currentPath !== "/messages") navigate("/messages");
            break;
          case 5:
            if (currentPath !== "/settings") navigate("/settings");
            break;
          case 6:
            if (currentPath !== "/history") navigate("/history");
            break;
          default:
            break;
        }
      }, [select, navigate]);
    
    return (
        <>
            <div className="relative h-screen m-0 p-0">
                <button
                    className={`lg:hidden absolute top-4 left-4 p-2 rounded-full mt-1 ${
                        isOpen ? 'text-white' : 'text-white'
                    } z-20`}
                    onClick={togglesidebar}
                >
                   <i className='fa fa-bars'></i>
                </button>
                <div
                    className={`w-[250px] h-full bg-[rgba(23,24,33,1)] fixed top-0 left-0 z-10 transition-all duration-300 ease-in-out ${
                        isOpen ? 'transform-none w-[160px]' : '-translate-x-full'
                    } lg:translate-x-0 border-r border-gray-500`}
                >
                    <div className="absolute top-20 left-5 flex flex-col space-y-10">
                        <div onClick={()=>setselect(0)}className={`flex items-center cursor-pointer ${select===0?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-cogs fa-2x mr-4 text-grey group-hover:text-blue-500 ${select===0?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===0?'font-bold text-black':'text-white'}`}>Dashboard</h2>
                        </div>
                        <div onClick={()=>setselect(1)} className={`flex items-center cursor-pointer ${select===1?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-user fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===1?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===1?'font-bold text-black':'text-white'}`}>Profile</h2>
                        </div>
                        <div onClick={()=>setselect(2)} className={`flex items-center cursor-pointer ${select===2?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-phone fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===2?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===2?'font-bold text-black':'text-white'}`}>Telecallers</h2>
                        </div>
                        <div onClick={()=>setselect(3)} className={`flex items-center cursor-pointer ${select===3?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-chart-line fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===3?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===3?'font-bold text-black':'text-white'}`}>Report</h2>
                        </div>
                        <div onClick={()=>setselect(4)} className={`flex items-center cursor-pointer ${select===4?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-comments fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===4?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===4?'font-bold text-black':'text-white'}`}>Messages</h2>
                        </div>
                        <div onClick={()=>setselect(5)} className={`flex items-center cursor-pointer ${select===5?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-cogs fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===5?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===5?'font-bold text-black':'text-white'}`}>Settings</h2>
                        </div>
                        <div onClick={()=>setselect(6)} className={`flex items-center cursor-pointer ${select===6?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-history fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===6?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===6?'font-bold text-black':'text-white'}`}>History</h2>
                        </div>
                        <div onClick={()=>setselect(7)} className={`flex items-center cursor-pointer ${select===7?'bg-mint-green p-3 rounded':'text-white'}`}>
                            <i className={`fas fa-sign-out-alt fa-2x mr-4 text-gray-500 group-hover:text-blue-500 ${select===7?'text-black':'text-grey'}`}></i>
                            <h2 className={`text-white text-2xl  ${select===7?'font-bold text-black':'text-white'}`}>Signout</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
