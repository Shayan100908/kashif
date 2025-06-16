import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'EarnFlex',
      description:
        'A real-time workforce management platform. Built cross-platform UIs and optimized performance for scalable staffing solutions.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      liveLink: 'https://earnflex.app',
      codeLink: '#',
    },
    {
      title: 'Vertech',
      description:
        'A tech solutions hub. Led frontend efforts using Vue and TypeScript for a smooth admin dashboard experience.',
      technologies: ['Vue.js', 'TypeScript', 'Element UI', 'Vuex'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      liveLink: 'https://www.vertech.com/',
      codeLink: '#',
    },
    {
      title: 'Barber2ME',
      description:
        'An on-demand barber booking app. Developed the full mobile UI using React Native with smooth booking flow and real-time scheduling.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Maps API'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      liveLink: 'https://apps.apple.com/gb/app/barber2me/id1629404711',
      codeLink: '#',
    },
    {
      title: 'Driverly',
      description:
        'Driver hiring and tracking solution. Built frontend features like driver maps, bookings, and chat in React Native.',
      technologies: ['React Native', 'Socket.io', 'Google Maps', 'Redux'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      liveLink: 'https://www.driverly.co.uk',
      codeLink: '#',
    },
    {
      title: 'Gturbo',
      description:
        'A performance auto parts e-commerce site. Implemented responsive UI for turbocharger product listings and shopping flow.',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'React'],
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      liveLink:
        'https://gturbo.com.au/shop/?utm_term=&utm_campaign=PMAX+01+-+Turbos&utm_source=adwords&utm_medium=ppc&hsa_acc=9617314709&hsa_cam=21004649933&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3',
      codeLink: '#',
    },
    {
      title: 'Blissiree',
      description:
        'A mental wellness platform. Built responsive and interactive user interfaces for therapy modules and appointment scheduling.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      liveLink: 'https://blissiree.com/',
      codeLink: '#',
    },
    {
      title: 'AEON Bank',
      description:
        'A modern digital banking platform. Worked on secure, responsive UI components and optimized accessibility and performance.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      gradient: 'from-gray-700 to-gray-900',
      bgGradient: 'from-gray-100 to-gray-300',
      liveLink: 'https://www.aeonbank.com.my/',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/50 to-pink-50/50"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-pink-800 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-white/30"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`backdrop-blur-sm bg-gradient-to-r ${project.bgGradient} px-3 py-1 rounded-lg text-sm font-medium text-gray-700 border border-white/50 hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 font-medium`}
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors hover:scale-105 duration-200">
                    <Code size={16} />
                    <span>View Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
