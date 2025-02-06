import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');

  const features = [
    { icon: '🎓', title: 'Flexible Learning', text: 'Self-paced courses tailored to your schedule' },
    { icon: '🌍', title: 'Global Community', text: 'Connect with peers and mentors worldwide' },
    { icon: '📜', title: 'Accredited Certifications', text: 'Boost your resume with recognized credentials' },
    { icon: '💡', title: 'Cutting-Edge Content', text: 'Stay ahead with courses in AI, sustainability, and more' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    alert('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen font-sans mt-10">
      {/* Header */}
      <header className="bg-[#2c3e50] text-white py-2 pt-8 text-center">
        <p className="text-xl">Empowering Minds, Enriching Futures</p>
      </header>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Learn Without Limits</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Access world-class courses, expert instructors, and flexible learning paths—anytime, anywhere.
        </p>
        <NavLink to="/courses"><button className="bg-[#e74c3c] text-white px-8 py-3 rounded-lg hover:bg-[#c0392b] transition-colors">
          Start Learning Today
        </button></NavLink>
        <div className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="What do you want to learn? (e.g., Python, Graphic Design, MBA)"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#2c3e50] text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-8">Subscribe for course discounts, free resources, and tips!</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
              required
            />
            <button
              type="submit"
              className="bg-[#e74c3c] text-white px-6 py-3 rounded-lg hover:bg-[#c0392b] transition-colors"
            >
              Get Free eBook
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default Home;