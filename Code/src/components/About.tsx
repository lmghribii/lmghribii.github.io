import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Finding creative solutions to complex challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborating effectively with others"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a dedicated web development student with a passion for creating 
            digital experiences that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I started my web development journey as a student, driven by curiosity 
                and a desire to build things that make a difference. Every day brings 
                new learning opportunities and challenges that help me grow.
              </p>
              <p>
                My focus is on creating clean, responsive websites using modern 
                technologies like React, TypeScript, and Tailwind CSS. I believe 
                in writing code that's not just functional, but also maintainable 
                and scalable.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or helping fellow students 
                with their coding challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
