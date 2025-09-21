import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  LogOut, 
  Home, 
  BarChart3, 
  CheckCircle, 
  Clock, 
  Cube, 
  Smartphone,
  QrCode,
  CreditCard,
  User,
  Building,
  Palette,
  Hammer,
  Eye
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import QRCode from 'qrcode';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  // Mock data for charts
  const progressData = [
    { name: 'Soil Testing', progress: 100, color: '#10b981' },
    { name: 'Material Depiction', progress: 85, color: '#f59e0b' },
    { name: 'Construction', progress: 60, color: '#3b82f6' },
    { name: 'Interior Design', progress: 30, color: '#8b5cf6' }
  ];

  const pieData = [
    { name: 'Completed', value: 45, color: '#10b981' },
    { name: 'In Progress', value: 35, color: '#f59e0b' },
    { name: 'Pending', value: 20, color: '#ef4444' }
  ];

  const timelineData = [
    { step: 'Plan Approved', status: 'completed', date: '2024-01-15' },
    { step: 'Soil Testing', status: 'completed', date: '2024-01-22' },
    { step: 'Foundation', status: 'completed', date: '2024-02-10' },
    { step: 'Structure', status: 'in-progress', date: '2024-03-01' },
    { step: 'Interior', status: 'pending', date: '2024-04-15' },
    { step: 'Final Handover', status: 'pending', date: '2024-05-30' }
  ];

  const handlePayNow = async () => {
    try {
      const qrData = `NDOC-PROJECTION-${user?.tokenNumber}-${Date.now()}`;
      const qrUrl = await QRCode.toDataURL(qrData, {
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(qrUrl);
      setShowPaymentSuccess(true);
      setShowQRCode(true);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'in-progress':
        return <Clock className="text-amber-500" size={20} />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-slate-300" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-amber-500';
      default:
        return 'bg-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className="text-amber-500 mr-3" size={24} />
              <h1 className="text-xl font-serif font-bold text-slate-800 dark:text-white">
                Project Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-800 dark:text-white">{user?.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user?.projectId}</p>
              </div>
              <button
                onClick={logout}
                className="flex items-center text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-2">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Here's an overview of your project progress and available services.
          </p>
        </motion.div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {progressData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.name}</h3>
                <div className="text-2xl">
                  {item.name === 'Soil Testing' && '🧪'}
                  {item.name === 'Material Depiction' && '🏗️'}
                  {item.name === 'Construction' && '🔨'}
                  {item.name === 'Interior Design' && '🎨'}
                </div>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-slate-800 dark:text-white">{item.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${item.progress}%`, 
                    backgroundColor: item.color 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Progress Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Project Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Project Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Project Timeline</h3>
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-center mb-6 last:mb-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 mr-4">
                  {getStatusIcon(item.status)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-slate-800 dark:text-white">{item.step}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{item.date}</span>
                  </div>
                  <div className="mt-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getStatusColor(item.status)} transition-all duration-500`}
                      style={{ 
                        width: item.status === 'completed' ? '100%' : 
                               item.status === 'in-progress' ? '60%' : '0%' 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 2D to 3D Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <Cube className="text-blue-500 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">2D → 3D Conversion</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              View your architectural plans in stunning 3D visualization.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
              View 3D Model
            </button>
          </motion.div>

          {/* AR Interior Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <Smartphone className="text-purple-500 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">AR Interior Demo</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Experience your interior design in augmented reality.
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
              Launch AR Viewer
            </button>
          </motion.div>

          {/* Life-Size Projection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <Eye className="text-amber-500 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Life-Size Projection</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
              Experience your project in life-size projection at our warehouse.
            </p>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">₹5,000</div>
            <button
              onClick={handlePayNow}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
            >
              <CreditCard className="mr-2" size={18} />
              Pay Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md w-full text-center"
          >
            <div className="mb-6">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Payment Successful!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You are booked for 5 visual meetings at our warehouse. Show this QR code on arrival.
              </p>
            </div>
            
            {qrCodeUrl && (
              <div className="mb-6">
                <img src={qrCodeUrl} alt="QR Code" className="mx-auto mb-4" />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Booking ID: NDOC-PROJ-{user?.tokenNumber}
                </p>
              </div>
            )}
            
            <button
              onClick={() => setShowQRCode(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;