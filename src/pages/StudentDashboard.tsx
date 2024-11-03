import { motion } from 'framer-motion';
import { Book, Clock, CheckCircle } from 'lucide-react';

const courses = [
  { id: 1, name: "Introduction to Computer Science", code: "CS101", credits: 3, status: "Available" },
  { id: 2, name: "Data Structures", code: "CS201", credits: 4, status: "Registered" },
  { id: 3, name: "Web Development", code: "CS301", credits: 3, status: "Available" },
];

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Course Registration</h1>
          <p className="text-gray-600 mt-2">Select your courses for the semester</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-gray-600 mt-1">Course Code: {course.code}</p>
                  <p className="text-gray-600">Credits: {course.credits}</p>
                </div>
                {course.status === "Registered" ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Clock className="h-6 w-6 text-blue-500" />
                )}
              </div>

              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2 px-4 rounded-md ${
                    course.status === "Registered"
                      ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  } transition-colors`}
                  disabled={course.status === "Registered"}
                >
                  {course.status === "Registered" ? "Registered" : "Register"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Registered Courses</h2>
          <div className="space-y-4">
            {courses
              .filter(course => course.status === "Registered")
              .map(course => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center space-x-4">
                    <Book className="h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="font-medium">{course.name}</p>
                      <p className="text-sm text-gray-600">{course.code}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{course.credits} credits</span>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StudentDashboard;