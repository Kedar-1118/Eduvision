import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-6">About Eduvision</h1>
      <p className="text-lg text-center max-w-3xl mb-4">
        Welcome to Eduvision, your ultimate destination for high-quality and engaging educational content.
        We are dedicated to making learning accessible, fun, and impactful for students of all ages.
        Our mission is to provide resources that help learners achieve their full potential through interactive
        and personalized experiences.
      </p>
      <p className="text-lg text-center max-w-3xl mb-4">
        With Eduvision, educators and students can explore a wide variety of subjects, quizzes, and learning materials.
        We are passionate about innovation in education and strive to create tools that empower the learning journey.
      </p>
      <p className="text-lg text-center max-w-3xl">
        Join us in our mission to transform education, one student at a time.
      </p>
    </div>
  );
};

export default AboutUs;