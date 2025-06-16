import React from 'react';
import { Code, Users, Rocket, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring developers and leading frontend initiatives",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Delivering pixel-perfect UI/UX experiences",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30"></div>
      
      {/* Floating Gradient Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-sm bg-white/70 p-8 rounded-2xl shadow-lg border border-white/20">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Results-driven Senior Frontend Developer with 4+ years of experience building fast, 
              responsive, and scalable applications. Proficient in React, Vue, React Native, and TypeScript.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I focus on clean code, performance optimization, and creating pixel-perfect UI/UX experiences. 
              Adept at leading development teams, mentoring junior developers, and delivering top-tier 
              software solutions in agile environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in Islamabad, Pakistan, I'm passionate about staying current with emerging technologies 
              and best practices in frontend development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description, gradient }) => (
              <div key={title} className="backdrop-blur-sm bg-white/70 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;