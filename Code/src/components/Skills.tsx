import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 60 },
        { name: "CSS3", level: 10 },
        { name: "JavaScript", level: 5 },
        { name: "React", level: 0 },
        { name: "TypeScript", level: 0 },
        { name: "Tailwind CSS", level: 0 }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Git & GitHub", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "REST APIs", level: 70 },
        { name: "Database Basics", level: 60 },
        { name: "Deployment", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I'm proficient in and continuously learning. 
            I'm always excited to pick up new skills!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "Python", "MongoDB", "GraphQL", "Docker"].map((tech, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
