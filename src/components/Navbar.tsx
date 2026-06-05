import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Languages, Phone, CalendarRange } from 'lucide-react';
import { Language, DICTIONARY } from '../data';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onAdminOpen: () => void;
}

export default function Navbar({ language, setLanguage, activeSection, setActiveSection, onAdminOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: d.navHome },
    { id: 'about', label: d.navAbout },
    { id: 'menu', label: d.navMenu },
    { id: 'gallery', label: isRtl ? 'المعرض الافتراضي' : 'Vision' },
    { id: 'events', label: isRtl ? 'الفعاليات المباشرة' : 'Elite Events' },
    { id: 'reservation', label: d.navReserve },
    { id: 'contact', label: isRtl ? 'موقعنا الجغرافي' : 'Location' }
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    // Smooth scroll the viewport back to the top when switching subpages for comfortable luxury viewing
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLight = scrolled || activeSection !== 'home';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isLight 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#B89020]/15 py-1.5 shadow-[0_10px_30px_rgba(184,144,32,0.03)] text-[#1C1C1C]' 
          : 'bg-black/20 backdrop-blur-xs border-b border-white/5 py-4 text-white'
      }`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleScrollTo('home')}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#FAF7F2] border border-[#B89020]/30 shadow-[0_0_15px_rgba(223,181,108,0.25)] transition-all duration-300 group-hover:scale-105 shrink-0">
              <img 
                src="/input_file_2.png" 
                alt="Café Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className={`text-xl sm:text-2xl font-black tracking-tight ${
              isLight 
                ? 'bg-gradient-to-r from-black via-black to-[#B89020] bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-white via-white to-[#D4AF37] bg-clip-text text-transparent'
            }`}>
              {d.navLogo}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className={`flex items-center gap-6 lg:gap-8 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              {menuItems.map((item) => (
                <button
                   key={item.id}
                   onClick={() => handleScrollTo(item.id)}
                   className={`relative text-sm font-semibold transition-all duration-300 py-2 hover:text-[#B89020] cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-[#B89020] scale-105' 
                      : isLight 
                        ? 'text-gray-700 hover:text-[#B89020]' 
                        : 'text-gray-300 hover:text-[#B89020]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89020] to-[#ae8238] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Actions: Lang, Direct Call, Admin */}
          <div className="hidden md:flex items-center gap-4">
            {/* Quick Admin Access */}
            <button
              id="navbar-admin-btn"
              onClick={onAdminOpen}
              className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-1.5 border rounded-full cursor-pointer transition-colors ${
                isLight 
                  ? 'text-gray-500 hover:text-[#B89020] border-gray-200 hover:border-[#B89020]' 
                  : 'text-gray-400 hover:text-[#D4AF37] border-white/10 hover:border-[#D4AF37]'
              }`}
            >
              {d.navAdmin}
            </button>

            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium cursor-pointer transition-all duration-350 ${
                isLight 
                  ? 'bg-white border-[#B89020]/20 text-[#B89020] hover:bg-[#B89020] hover:text-white hover:border-transparent' 
                  : 'bg-[#16120b] border-[#B89020]/30 text-[#D4AF37] hover:bg-[#B89020] hover:text-black hover:border-transparent'
              }`}
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'ar' ? 'Français' : 'العربية'}</span>
            </button>

            {/* CTA Call */}
            <a
              id="navbar-reserve-btn"
              href="tel:+212661430040"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#B89020] text-white hover:text-black text-xs sm:text-sm font-bold rounded-full shadow-md transition-all duration-300 ease-out border border-[#1C1C1C] hover:border-[#B89020]"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>+212 661 43 00 40</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              onClick={handleLanguageToggle}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded border text-xs cursor-pointer ${
                isLight 
                  ? 'bg-[#FAF9F6] border-black/10 text-[#B89020]' 
                  : 'bg-[#16120b] border-[#D4AF37]/20 text-[#D4AF37]'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'Fr' : 'عربي'}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded cursor-pointer transition-colors ${
                isLight 
                  ? 'text-black hover:bg-gray-100' 
                  : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden border-t shadow-2xl ${
          isLight 
            ? 'bg-white border-black/10 text-black' 
            : 'bg-[#0a0a0a] border-[#2d2112]/40 text-gray-250'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`block w-full text-center px-4 py-3 rounded-none text-base font-semibold transition-all cursor-pointer ${
                  activeSection === item.id 
                    ? isLight 
                      ? 'text-[#B89020] bg-gray-50' 
                      : 'text-[#D4AF37] bg-white/5' 
                    : isLight 
                      ? 'text-gray-800 hover:bg-gray-50' 
                      : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className={`pt-4 border-t flex flex-col items-center gap-3 px-4 ${
              isLight ? 'border-black/5' : 'border-white/5'
            }`}>
              <a
                href="tel:+212661430040"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#1C1C1C] hover:bg-[#B89020] text-white hover:text-black font-bold rounded-none shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>+212 661 43 00 40</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onAdminOpen();
                }}
                className="text-xs text-gray-500 hover:text-[#B89020] py-2 cursor-pointer font-mono tracking-widest uppercase"
              >
                {d.navAdmin}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
