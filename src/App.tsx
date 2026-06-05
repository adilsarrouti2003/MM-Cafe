import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import MenuView from './components/MenuView';
import GalleryView from './components/GalleryView';
import EventsView from './components/EventsView';
import ContactView from './components/ContactView';
import ReservationSection from './components/ReservationSection';
import DashboardAdmin from './components/DashboardAdmin';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { Language } from './data';
import { Reservation } from './types';

const DEFAULT_RESERVATIONS: Reservation[] = [
  {
    id: "MM-7940",
    name: "Mohamed El Alami",
    phone: "0661430040",
    date: "2026-06-08",
    time: "19:30",
    guests: 4,
    notes: "[القسم المحدد: صالون كبار الشخصيات VIP] طاولة هادئة",
    status: "pending",
    createdAt: "04/06/2026 12:00:00"
  },
  {
    id: "MM-4830",
    name: "Hamza Benslimane",
    phone: "0688320491",
    date: "2026-06-09",
    time: "10:30",
    guests: 2,
    notes: "[القسم المحدد: الشرفة الخارجية الخلابة] فطور بلدي مغربي",
    status: "confirmed",
    createdAt: "04/06/2026 12:15:32"
  }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mm_lang');
    return (saved as Language) || 'ar';
  });

  // Use 'home' as initial, matching our new design structure
  const [activeSection, setActiveSection] = useState('home');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  const [scriptUrl, setScriptUrl] = useState<string>(() => {
    return localStorage.getItem('mm_script_url') || 'https://script.google.com/macros/s/AKfycbxeK6kH-7c5JpxvR3wK7p8v6nCq0Xz9vTq05sM/exec';
  });

  const [reservations, setReservations] = useState<Reservation[]>(() => {
    const cached = localStorage.getItem('mm_reservations');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        return DEFAULT_RESERVATIONS;
      }
    }
    return DEFAULT_RESERVATIONS;
  });

  useEffect(() => {
    localStorage.setItem('mm_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('mm_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    localStorage.setItem('mm_script_url', scriptUrl);
  }, [scriptUrl]);

  // Set document attributes for HTML
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', language);
    html.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.title = language === 'ar' ? 'مقهى شمس المدينة | بنسليمان' : 'Café Shams Al Madina - Benslimane';
  }, [language]);

  // Loading timer simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Elegant 2 seconds brand entrance
    return () => clearTimeout(timer);
  }, []);

  const handleNewReservation = (newRes: Reservation) => {
    setReservations(prev => [newRes, ...prev]);
  };

  const handleUpdateStatus = (id: string, status: 'confirmed' | 'cancelled') => {
    setReservations(prev => 
      prev.map(res => res.id === id ? { ...res, status } : res)
    );
  };

  if (loading) {
    return <LoadingScreen />;
  }

  // Router dispatcher
  const renderCurrentView = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HomeView 
            language={language} 
            onPageChange={setActiveSection} 
            onAdminOpen={() => setIsAdminOpen(true)} 
          />
        );
      case 'about':
        return <AboutView language={language} />;
      case 'menu':
        return <MenuView language={language} />;
      case 'gallery':
        return <GalleryView language={language} />;
      case 'events':
        return <EventsView language={language} />;
      case 'reservation':
        return (
          <ReservationSection 
            language={language} 
            onNewReservation={handleNewReservation}
            scriptUrl={scriptUrl}
            setScriptUrl={setScriptUrl}
          />
        );
      case 'contact':
        return <ContactView language={language} />;
      default:
        return (
          <HomeView 
            language={language} 
            onPageChange={setActiveSection} 
            onAdminOpen={() => setIsAdminOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1C1C] font-sans relative antialiased selection:bg-[#B89020]/20 selection:text-black">
      
      {/* Background radial atmosphere lightings */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-[#B89020]/5 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Navigation Header bar */}
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onAdminOpen={() => setIsAdminOpen(true)}
      />

      {/* Primary Dynamic Content Dispatcher */}
      <main className="min-h-[80vh]">
        {renderCurrentView()}
      </main>

      {/* Secret manager and reservations list gate (fully modal) */}
      <DashboardAdmin 
        language={language}
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        reservations={reservations}
        updateStatus={handleUpdateStatus}
      />

      {/* Footer & directions section */}
      <Footer language={language} />

    </div>
  );
}
