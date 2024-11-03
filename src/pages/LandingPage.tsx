import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">EduPortal</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Welcome to EduPortal
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Your comprehensive course management and registration platform
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: BookOpen,
                title: "Course Registration",
                description: "Easy and quick course registration process"
              },
              {
                icon: Users,
                title: "Faculty Portal",
                description: "Manage courses and student progress"
              },
              {
                icon: GraduationCap,
                title: "Student Dashboard",
                description: "Track your academic journey"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="inline-block"
          >
            <Link
              to="/login"
              className="group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default LandingPage;