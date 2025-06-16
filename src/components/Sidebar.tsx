import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, FolderOpen, Mail, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { id: 'hero', label: 'Home', icon: Home, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'about', label: 'About', icon: User, gradient: 'from-purple-500 to-pink-500' },
    { id: 'experience', label: 'Experience', icon: Briefcase, gradient: 'from-green-500 to-emerald-500' },
    { id: 'skills', label: 'Skills', icon: Code, gradient: 'from-orange-500 to-red-500' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, gradient: 'from-indigo-500 to-purple-500' },
    { id: 'contact', label: 'Contact', icon: Mail, gradient: 'from-cyan-500 to-blue-500' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden backdrop-blur-sm bg-white/80 shadow-lg rounded-full p-3 hover:bg-white/90 transition-all duration-300 border border-white/30"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 backdrop-blur-md bg-white/80 shadow-xl transform transition-transform duration-300 z-40 border-r border-white/30 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50"></div>
        
        <div className="p-8 relative z-10">
          <div className="mb-8">
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Kashif Muhammad</h2>
            <p className="text-sm text-gray-600">Senior Frontend Developer</p>
          </div>
          
          <nav className="space-y-2">
            {navigation.map(({ id, label, icon: Icon, gradient }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group ${
                  activeSection === id
                    ? `bg-gradient-to-r ${gradient} text-white shadow-lg scale-105`
                    : 'text-gray-700 hover:bg-white/60 backdrop-blur-sm'
                }`}
              >
                <Icon size={18} className={activeSection === id ? 'text-white' : `text-gray-600 group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;