import React from "react";
import Sidebar from "../../../utils/sidebar";

const telecaller = {
  name: "John Doe",
  username: "johndoe123",
  email: "johndoe@example.com",
  phone: "+1 234 567 890",
  avatar: "https://i.pravatar.cc/150?img=12",
  totalCalls: 157,
  createdAt: "2023-05-10",
  role: "Senior Telecaller",
};

const TelecallerProfile = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="lg:w-[250px] w-0">
        <Sidebar />
      </div>
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="relative bg-gray-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700 backdrop-blur-md">
          <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {telecaller.role}
          </div>

          <div className="flex flex-col items-center">
            <img
              src={telecaller.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-all"
            />
            <h2 className="mt-4 text-2xl font-semibold">{telecaller.name}</h2>
            <p className="text-gray-400">@{telecaller.username}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg shadow-md">
              <span className="text-blue-400">📧</span>
              <p className="text-gray-300">{telecaller.email}</p>
            </div>

            <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg shadow-md">
              <span className="text-green-400">📞</span>
              <p className="text-gray-300">{telecaller.phone}</p>
            </div>

            <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg shadow-md">
              <span className="text-yellow-400">📊</span>
              <p className="text-gray-300">Total Calls: {telecaller.totalCalls}</p>
            </div>

            <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg shadow-md">
              <span className="text-red-400">📅</span>
              <p className="text-gray-300">Joined: {new Date(telecaller.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecallerProfile;
