import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "EarnFlex",
      position: "Senior Frontend Developer",
      period: "04/2024 - Present",
      location: "Remote",
      achievements: [
        "Developed user-centric web and mobile apps using React, Vue, and React Native",
        "Reduced load times by 25% via performance tuning and optimization",
        "Built reusable UI components and established component library",
        "Mentored junior developers and led code review processes"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      company: "Horizon Digital",
      position: "Frontend Developer",
      period: "03/2023 - 04/2024",
      location: "Islamabad, Pakistan",
      achievements: [
        "Delivered cross-platform applications using React, Flutter, and Vue",
        "Collaborated with designers and backend engineers for seamless integration",
        "Contributed to technical documentation and client demos",
        "Provided post-launch support and feature enhancements"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      company: "TechXperts",
      position: "React Developer",
      period: "02/2021 - 03/2023",
      location: "Islamabad, Pakistan",
      achievements: [
        "Built interactive user interfaces with React and Redux",
        "Integrated RESTful APIs and optimized state management",
        "Improved overall application performance by 20%",
        "Participated in agile development processes and sprint planning"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-16">
                {/* Timeline dot with gradient */}
                <div className={`absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white shadow-lg hidden md:block`}></div>
                
                <div className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-600 mt-2 lg:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;