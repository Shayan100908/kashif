import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      title: "Frameworks",
      skills: ["React", "React Native", "Vue.js", "Next.js"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "MUI", "Bootstrap", "Ant Design", "Chakra UI", "SASS"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Tools & Others",
      skills: ["Redux", "GitHub", "GitLab", "Bitbucket", "Node.js", "MongoDB"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className={`backdrop-blur-sm bg-gradient-to-br ${category.bgGradient} p-6 rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <h3 className={`text-lg font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-4 text-center`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="backdrop-blur-sm bg-white/80 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default hover:scale-105 border border-white/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;