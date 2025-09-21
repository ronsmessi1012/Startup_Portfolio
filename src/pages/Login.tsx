import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [tokenNumber, setTokenNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = login(tokenNumber.trim());
    
    if (!success) {
      setError('Invalid Token Number');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
           style={{ backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <LogIn className="text-white" size={32} />
          </motion.div>
          
          <h1 className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-2">
            Client Portal
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Enter your token number to access your project dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="tokenNumber" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Token Number
            </label>
            <input
              type="text"
              id="tokenNumber"
              value={tokenNumber}
              onChange={(e) => setTokenNumber(e.target.value)}
              placeholder="Enter your token number"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-800 focus:ring-opacity-50 transition-colors"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
            >
              <AlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            ) : (
              <>
                <LogIn className="mr-2" size={20} />
                Access Dashboard
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Demo Token: <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">ndoc01</code>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;