import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kashif.devfe@gmail.com',
      href: 'mailto:kashif.devfe@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 313 9782712',
      href: 'tel:+923139782712',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: null,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/KashifMhmd',
      label: 'GitHub',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kashifse',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800',
    },
    // Twitter removed
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-cyan-800 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Box */}
          <div className="backdrop-blur-sm bg-white/70 p-8 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map(
                ({ icon: Icon, label, value, href, gradient }) => (
                  <div
                    key={label}
                    className="flex items-center space-x-4 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 font-medium`}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, gradient }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="backdrop-blur-sm bg-white/70 p-10 rounded-2xl shadow-lg border border-white/30 flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-cyan-800 bg-clip-text text-transparent mb-8">
              Let's Chat on WhatsApp
            </h3>
            <a
              href="https://wa.me/923139782712"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <MessageCircle size={20} />
              Message Me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
