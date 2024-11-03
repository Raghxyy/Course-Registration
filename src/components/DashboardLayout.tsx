import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  role: string;
}

export default function DashboardLayout({ children, title, role }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-3 text-xl font-semibold text-gray-900">{title}</span>
            </motion.div>
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <LogOut className="h-5 w-5 mr-2" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 capitalize">{role} Dashboard</h1>
        </motion.div>
        {children}
      </main>
    </div>
  );
}