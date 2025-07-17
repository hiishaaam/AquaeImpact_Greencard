import React, { useState, useEffect } from "react";
import FooterSection from "./components/FooterSection";
import MainContentSection from "./components/MainContentSection";
import NavigationBarSection from "./components/NavigationBarSection";

export default function GreenCredits() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gradient-to-br from-[#e8f5f2] via-white to-[#f0f9f6]'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
                alt="AQUAE.Impact Logo" 
                className="w-12 h-12"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-[#1e4632] to-[#3a7d5d] bg-clip-text text-transparent">
                AQUAE.Impact
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {['Home', 'Who We Are', 'What We Do', 'Resources'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#1e4632] dark:hover:text-[#97edd2] transition-colors duration-200 font-semibold text-lg"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Theme Toggle & CTA */}
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200"
              >
                {isDark ? (
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              <button className="px-8 py-3 bg-gradient-to-r from-[#1e4632] to-[#3a7d5d] text-white rounded-full font-semibold text-lg hover:from-[#17603e] hover:to-[#97edd2] transition-all duration-300 hover:scale-105 shadow-lg">
                Green Credits
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b453b] via-[#1e4632] to-[#3a7d5d] opacity-90">
          <div className="absolute inset-0 bg-[url('/green_credit.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#97edd2]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#3a7d5d]/30 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-md animate-ping"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#97edd2] to-white bg-clip-text text-transparent">
                GREEN CREDITS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              The ALCI system ensures that every issued credit is backed by insurance. 
              Transform your carbon footprint into valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#97edd2] to-[#3a7d5d] text-[#0b453b] rounded-full font-bold text-lg hover:from-[#3a7d5d] hover:to-[#97edd2] transition-all duration-300 hover:scale-105 shadow-xl">
                Buy Credits
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b453b] dark:text-[#97edd2] mb-6">
              Why Choose Green Credits?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative approach combines environmental responsibility with financial opportunity, 
              creating a sustainable future for businesses and the planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1e4632] to-[#3a7d5d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0b453b] dark:text-[#97edd2] mb-4">
                Asset-Backed Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every credit is backed by real assets, ensuring long-term value and stability 
                for your investment portfolio.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3a7d5d] to-[#97edd2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0b453b] dark:text-[#97edd2] mb-4">
                Global Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Internationally recognized credits that comply with global regulatory standards 
                and carbon offset protocols.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#97edd2] to-[#1e4632] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0b453b] dark:text-[#97edd2] mb-4">
                Insurance Guaranteed
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Full insurance coverage through Lloyd's of London syndicates, 
                protecting your investment with world-class security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#E8F5F2' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leaf-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 2C8 2 6 3 5 5C4 7 5 9 7 10C5 11 4 13 5 15C6 17 8 18 10 18C12 18 14 17 15 15C16 13 15 11 13 10C15 9 16 7 15 5C14 3 12 2 10 2Z" fill="#0B453B"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#leaf-pattern)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0B453B] mb-8 font-serif uppercase tracking-wide">
              TO BUY AND ALCI CREDITS
            </h2>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
            {/* Toggle Buttons */}
            <div className="mb-12">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-[#0B453B] rounded-full p-1 shadow-lg">
                  <div className="flex">
                    <button className="flex-1 py-4 px-6 bg-[#0B453B] text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-md">
                      Buy ALCI Credits
                    </button>
                    <button className="flex-1 py-4 px-6 bg-white text-[#0B453B] font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                      Sell ALCI Credits
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <form className="space-y-8">
              {/* First Name and Last Name - Two Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[#0B453B] font-semibold text-lg mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#E8F5F2] border-b-2 border-[#0B453B] border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:border-[#3a7d5d] transition-colors duration-300 text-[#0B453B] placeholder-[#0B453B]/60"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-[#0B453B] font-semibold text-lg mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#E8F5F2] border-b-2 border-[#0B453B] border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:border-[#3a7d5d] transition-colors duration-300 text-[#0B453B] placeholder-[#0B453B]/60"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email - Full Width */}
              <div>
                <label className="block text-[#0B453B] font-semibold text-lg mb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#E8F5F2] border-b-2 border-[#0B453B] border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:border-[#3a7d5d] transition-colors duration-300 text-[#0B453B] placeholder-[#0B453B]/60"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Company Name - Full Width */}
              <div>
                <label className="block text-[#0B453B] font-semibold text-lg mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#E8F5F2] border-b-2 border-[#0B453B] border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:border-[#3a7d5d] transition-colors duration-300 text-[#0B453B] placeholder-[#0B453B]/60"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message - Full Width */}
              <div>
                <label className="block text-[#0B453B] font-semibold text-lg mb-3">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-[#E8F5F2] border-b-2 border-[#0B453B] border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:border-[#3a7d5d] transition-colors duration-300 text-[#0B453B] placeholder-[#0B453B]/60 resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B453B] text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-[#1e4632] transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0b453b] to-[#1e4632] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
                  alt="AQUAE.Impact Logo" 
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-[#97edd2]">AQUAE.Impact</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the way in sustainable finance with asset-backed carbon credits 
                that create value for businesses and the environment.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#97edd2] hover:text-[#0b453b] transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#97edd2]">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Resources', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-[#97edd2] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#97edd2]">Contact</h3>
              <div className="space-y-3 text-gray-300">
                <p>info@greencredits.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Green Street<br />Eco City, EC 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 GreenCredits. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
