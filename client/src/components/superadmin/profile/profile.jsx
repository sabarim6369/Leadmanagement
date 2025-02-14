import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiUsers, 
  FiTarget, 
  FiShield, 
  FiRefreshCw,
  FiLock,
  FiX,
  FiCheck,
  FiEdit2
} from "react-icons/fi";
import Sidebar from "../../../utils/sidebar";

const SuperadminProfile = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isHovering, setIsHovering] = useState(null);

  const handleChangePassword = () => {
    console.log("New Password:", newPassword);
    setShowPasswordForm(false);
    setNewPassword("");
  };

  const stats = [
    { label: "Total Users", value: 150, icon: FiUsers },
    { label: "Total Leads", value: 320, icon: FiTarget },
    { label: "Active Admins", value: 5, icon: FiShield },
    { label: "System Updates", value: "Yes", icon: FiRefreshCw },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="lg:w-[250px] w-0">
        <Sidebar />
      </div>

      <div className="flex-1 p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
            {/* Header Section */}
            <div className="relative flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Profile Dashboard
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                <FiLock className="w-4 h-4" />
                Change Password
              </motion.button>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
                  S
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 cursor-pointer"
                >
                  <FiEdit2 className="w-6 h-6" />
                </motion.div>
              </motion.div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Super Admin</h2>
                <p className="text-gray-400 text-lg mb-4">superadmin@example.com</p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    Active
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Full Access
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setIsHovering(index)}
                  onHoverEnd={() => setIsHovering(null)}
                  className="relative bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
                >
                  <motion.div
                    animate={{
                      scale: isHovering === index ? 1.1 : 1,
                      color: isHovering === index ? "#60A5FA" : "#9CA3AF"
                    }}
                    className="absolute top-4 right-4"
                  >
                    <stat.icon className="w-6 h-6" />
                  </motion.div>
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Password Change Form */}
            <AnimatePresence>
              {showPasswordForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                    <h3 className="text-xl font-semibold mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleChangePassword}
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-lg font-medium"
                        >
                          <FiCheck className="w-5 h-5" />
                          Save Changes
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowPasswordForm(false)}
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium"
                        >
                          <FiX className="w-5 h-5" />
                          Cancel
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuperadminProfile;