import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Users, BookOpen, ChevronRight } from 'lucide-react';

type Role = 'student' | 'faculty' | 'admin';

const roles: { id: Role; title: string; icon: any; color: string }[] = [
  { id: 'student', title: 'Student Portal', icon: GraduationCap, color: 'bg-blue-500' },
  { id: 'faculty', title: 'Faculty Portal', icon: Users, color: 'bg-purple-500' },
  { id: 'admin', title: 'Admin Portal', icon: BookOpen, color: 'bg-indigo-500' }
];

function Login() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      setIsAnimating(true);
      setTimeout(() => navigate(`/${selectedRole}`), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg max-w-4xl w-full overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          {/* Left Side - Role Selection */}
          <div className="p-8 bg-gray-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Select your role to continue</p>
            </motion.div>

            <div className="space-y-4">
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-4 rounded-lg flex items-center space-x-4 transition-all ${
                    selectedRole === role.id
                      ? 'bg-white shadow-md'
                      : 'hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${role.color}`}>
                    <role.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-800">{role.title}</h3>
                    <p className="text-sm text-gray-500">
                      {role.id === 'student'
                        ? 'Access your courses and grades'
                        : role.id === 'faculty'
                        ? 'Manage your classes'
                        : 'System administration'}
                    </p>
                  </div>
                  {selectedRole === role.id && (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8"
          >
            <div className="mb-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <User className="h-8 w-8 text-indigo-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedRole ? `${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Login` : 'Login'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={false}
                animate={{ opacity: selectedRole ? 1 : 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  required
                  disabled={!selectedRole}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your username"
                />
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: selectedRole ? 1 : 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  disabled={!selectedRole}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  opacity: selectedRole ? 1 : 0.5,
                  scale: isAnimating ? 0.95 : 1,
                }}
                type="submit"
                disabled={!selectedRole}
                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign In
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;