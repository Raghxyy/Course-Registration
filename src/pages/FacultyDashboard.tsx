import { BookOpen, Users, ClipboardList } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import StatCard from '../components/StatCard';
import { motion } from 'framer-motion';

const courses = [
  { id: 1, name: "Advanced Algorithms", code: "CS401", students: 45, schedule: "Mon/Wed 10:00 AM" },
  { id: 2, name: "Database Systems", code: "CS402", students: 38, schedule: "Tue/Thu 2:00 PM" },
  { id: 3, name: "Machine Learning", code: "CS403", students: 42, schedule: "Mon/Wed 2:00 PM" },
];

function FacultyDashboard() {
  return (
    <DashboardLayout title="Faculty Portal" role="faculty">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Active Courses"
          value={3}
          icon={BookOpen}
          color="bg-indigo-500"
          delay={0.1}
        />
        <StatCard
          title="Total Students"
          value={125}
          icon={Users}
          color="bg-green-500"
          delay={0.2}
        />
        <StatCard
          title="Pending Grades"
          value={28}
          icon={ClipboardList}
          color="bg-yellow-500"
          delay={0.3}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h2 className="text-xl font-semibold mb-6">My Courses</h2>
        <div className="grid gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Course Code: {course.code}</p>
                  <p className="text-sm text-gray-600">Schedule: {course.schedule}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-indigo-600">{course.students}</p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Manage Grades
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

export default FacultyDashboard;