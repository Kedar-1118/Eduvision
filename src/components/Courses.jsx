import { useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Learn modern web development with React, Node.js, and MongoDB',
    duration: '8 weeks',
    instructor: 'John Doe',
    price: '₹299'
  },
  {
    id: 2,
    title: 'AI/ML Fundamentals',
    description: 'Introduction to Artificial Intelligence and Machine Learning',
    duration: '6 weeks',
    instructor: 'Jane Smith',
    price: '₹399'
  },
  {
    id: 3,
    title: 'Data Structures and Algorithms',
    description: 'Master problem-solving with advanced data structures and algorithms',
    duration: '12 weeks',
    instructor: 'Robert Brown',
    price: '₹349'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Learn how to build native and cross-platform mobile applications',
    duration: '8 weeks',
    instructor: 'Emily Davis',
    price: '₹299'
  },
  {
    id: 5,
    title: 'Cybersecurity Essentials',
    description: 'Protect systems and networks against security threats',
    duration: '10 weeks',
    instructor: 'Chris Lee',
    price: '₹499'
  },
  {
    id: 6,
    title: 'Blockchain Development',
    description: 'Develop smart contracts and decentralized applications',
    duration: '9 weeks',
    instructor: 'Sandra Adams',
    price: '₹549'
  },
  {
    id: 7,
    title: 'UI/UX Design Masterclass',
    description: 'Create user-friendly designs with Figma and Adobe XD',
    duration: '6 weeks',
    instructor: 'Tom Wilson',
    price: '₹299'
  },
  {
    id: 8,
    title: 'DevOps and Cloud Automation',
    description: 'Automate infrastructure and deployment pipelines using DevOps practices',
    duration: '10 weeks',
    instructor: 'Rachel Garcia',
    price: '₹449'
  },
  {
    id: 9,
    title: 'Digital Marketing Strategies',
    description: 'Learn SEO, content marketing, and social media advertising',
    duration: '5 weeks',
    instructor: 'Nancy Turner',
    price: '₹199'
  },
  {
    id: 10,
    title: 'Big Data Analytics',
    description: 'Analyze large-scale datasets using modern analytics tools',
    duration: '12 weeks',
    instructor: 'Victor Lopez',
    price: '₹599'
  },
  {
    id: 11,
    title: 'Game Development with Unity',
    description: 'Build and design immersive games with Unity and C#',
    duration: '8 weeks',
    instructor: 'Diana Clark',
    price: '₹349'
  },
  {
    id: 12,
    title: 'Ethical Hacking and Penetration Testing',
    description: 'Identify and exploit vulnerabilities in systems legally',
    duration: '7 weeks',
    instructor: 'Kevin White',
    price: '₹499'
  },
  {
    id: 13,
    title: 'Project Management Professional (PMP) Prep',
    description: 'Prepare for the PMP certification exam with expert guidance',
    duration: '6 weeks',
    instructor: 'Peter Hall',
    price: '₹399'
  },
  {
    id: 14,
    title: 'Data Science with Python',
    description: 'Analyze data and build predictive models using Python',
    duration: '10 weeks',
    instructor: 'Olivia King',
    price: '₹549'
  },
  {
    id: 15,
    title: 'Cloud Computing',
    description: 'Master AWS and cloud infrastructure management',
    duration: '10 weeks',
    instructor: 'Mike Johnson',
    price: '₹499'
  },
  {
    id: 16,
    title: 'Web3 and Decentralized Applications',
    description: 'Build secure and scalable decentralized applications on Web3',
    duration: '9 weeks',
    instructor: 'Angela Martinez',
    price: '₹599'
  },
  {
    id: 17,
    title: 'Computer Vision with OpenCV',
    description: 'Implement computer vision solutions using OpenCV and Python',
    duration: '8 weeks',
    instructor: 'Ethan Collins',
    price: '₹349'
  },
  {
    id: 18,
    title: 'Machine Learning with TensorFlow',
    description: 'Train and deploy machine learning models using TensorFlow',
    duration: '12 weeks',
    instructor: 'Isabella Reed',
    price: '₹649'
  },
  {
    id: 19,
    title: 'Cloud Native Development with Kubernetes',
    description: 'Deploy containerized applications using Kubernetes',
    duration: '11 weeks',
    instructor: 'James Morgan',
    price: '₹599'
  },
  {
    id: 20,
    title: 'Python for Beginners',
    description: 'Learn Python programming from scratch',
    duration: '6 weeks',
    instructor: 'Emma Thompson',
    price: '₹199'
  },
  {
    id: 21,
    title: 'Financial Analytics with Excel',
    description: 'Gain insights from financial data using advanced Excel functions',
    duration: '5 weeks',
    instructor: 'Liam Hernandez',
    price: '₹199'
  },
  {
    id: 22,
    title: 'Software Testing and QA',
    description: 'Ensure software quality through manual and automated testing',
    duration: '7 weeks',
    instructor: 'Sophia Allen',
    price: '₹349'
  },
  {
    id: 23,
    title: 'Deep Learning with PyTorch',
    description: 'Build and train deep learning models using PyTorch',
    duration: '10 weeks',
    instructor: 'Daniel Walker',
    price: '₹649'
  },
  {
    id: 24,
    title: 'Internet of Things (IoT) Development',
    description: 'Design and build IoT solutions with sensors and cloud integration',
    duration: '9 weeks',
    instructor: 'Mia Martinez',
    price: '₹549'
  },
  {
    id: 25,
    title: 'JavaScript Essentials',
    description: 'Learn JavaScript fundamentals and modern ES6+ concepts',
    duration: '6 weeks',
    instructor: 'Lucas Green',
    price: '₹249'
  },
  {
    id: 26,
    title: 'Network Engineering Fundamentals',
    description: 'Understand network protocols and routing concepts',
    duration: '8 weeks',
    instructor: 'Ella Foster',
    price: '₹399'
  },
  {
    id: 27,
    title: 'AI for Healthcare',
    description: 'Apply AI techniques to solve healthcare challenges',
    duration: '10 weeks',
    instructor: 'Nathan Turner',
    price: '₹699'
  },
  {
    id: 28,
    title: 'Backend Development with Node.js',
    description: 'Build robust APIs and server-side applications with Node.js',
    duration: '8 weeks',
    instructor: 'Ava Bailey',
    price: '₹349'
  },
  {
    id: 29,
    title: 'Introduction to Robotics',
    description: 'Build and program simple robots using Arduino and sensors',
    duration: '7 weeks',
    instructor: 'Mason Rivera',
    price: '₹449'
  },
  {
    id: 30,
    title: 'Natural Language Processing (NLP)',
    description: 'Process and analyze text data using NLP techniques',
    duration: '9 weeks',
    instructor: 'Zoe Carter',
    price: '₹599'
  }
];


export default function CourseCatalog() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 mt-10">
      <h1 className="text-4xl font-bold text-center mb-12">Course Catalog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => setSelectedCourse(course)}
            className="bg-gray-800 rounded-lg p-6 cursor-pointer transform transition hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-400">{course.title}</h3>
            <p className="text-gray-300 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400">{course.price}</span>
              <span className="text-sm text-gray-400">{course.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4 text-purple-400">
              {selectedCourse.title}
            </h2>
            <p className="text-gray-300 mb-4">{selectedCourse.description}</p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-bold">Duration:</span> {selectedCourse.duration}
              </p>
              <p className="text-gray-400">
                <span className="font-bold">Instructor:</span> {selectedCourse.instructor}
              </p>
              <p className="text-gray-400">
                <span className="font-bold">Price:</span> {selectedCourse.price}
              </p>
            </div>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors" >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}