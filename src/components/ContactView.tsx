import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Star } from 'lucide-react';
import { Language, DICTIONARY } from '../data';

interface ContactViewProps {
  language: Language;
}

export default function ContactView({ language }: ContactViewProps) {
  const isRtl = language === 'ar';
  const d = DICTIONARY[language];

  const mapsUrl = "https://www.google.com/maps/place/Caf%C3%A9+MM/@33.6162892,-7.1309837,15z/data=!4m6!3m5!1s0xda7ab552d1f8d53:0x390f1b4ca2cd932a!8m2!3d33.6162892!4d-7.1309837";
  const waUrl = `https://wa.me/212661430040?text=${encodeURIComponent(d.whatsappMessage)}`;

  return (
    <div className="py-24 sm:py-36 bg-[#FAF7F2] text-[#1C1C1C] relative animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[#B89020] font-mono text-xs uppercase tracking-[0.2em] font-bold block">
            ✦ {isRtl ? 'تفاصيل الاتصال والوصول الجغرافي' : 'Location & Navigation Hub'} ✦
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#1C1C1C] tracking-tight">
            {isRtl ? 'يسعدنا دائماً استقبال حضوركم' : 'Get in Touch'}
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-light font-sans">
            {isRtl ? 'تجدون شروحات تفصيلية للموقع ساعات الخدمة ونظام الدعم السريع عبر الواتساب.' : 'Find our official location details, opening hours, and direct concierge chat link.'}
          </p>
          <div className="w-12 h-[1px] bg-[#B89020]/35 mx-auto pt-2" />
        </div>

        {/* Outer Section Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info & Quick Action Channels */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 flex flex-col justify-between">
            <div className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="p-6 bg-white border border-[#B89020]/15 space-y-3 rounded-2xl shadow-[0_15px_35px_rgba(184,144,32,0.02)]">
                <div className="flex items-center gap-3 text-black font-extrabold uppercase text-xs font-mono">
                  <Phone className="w-4 h-4 text-[#B89020]" />
                  <span>{d.footerCall}</span>
                </div>
                <a href="tel:+212661430040" className="text-xl text-[#B89020] hover:text-[#1C1C1C] transition-colors font-mono font-bold block">
                  +212 661 43 00 40
                </a>
                <p className="text-gray-500 text-xs font-light font-sans">
                  {isRtl ? 'اتصال مباشر فوري مع موثق الحجوزات لتأكيد منسق.' : 'Direct voice line to our reservations manager.'}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#B89020]/15 space-y-3 rounded-2xl shadow-[0_15px_35px_rgba(184,144,32,0.02)]">
                <div className="flex items-center gap-3 text-black font-extrabold uppercase text-xs font-mono">
                  <MapPin className="w-4 h-4 text-[#B89020]" />
                  <span>{d.footerAddress}</span>
                </div>
                <span className="text-black text-sm font-medium block">
                  {d.footerAddressDetails}
                </span>
                <span className="text-gray-500 text-xs font-light block font-sans">
                  {isRtl ? 'حي شمس المدينة، Benslimane (رمز JV89+MG)' : 'Shams Al Madina development, Benslimane, Morocco.'}
                </span>
              </div>

              <div className="p-6 bg-white border border-[#B89020]/15 space-y-3 rounded-2xl shadow-[0_15px_35px_rgba(184,144,32,0.02)]">
                <div className="flex items-center gap-3 text-[#1C1C1C] font-extrabold uppercase text-xs font-mono">
                  <Clock className="w-4 h-4 text-[#B89020]" />
                  <span>{d.footerHours}</span>
                </div>
                <span className="text-black text-sm font-semibold block">
                  {d.footerEveryday}
                </span>
                <span className="text-[#B89020] font-mono text-sm block font-bold">
                  {isRtl ? 'من 08:00 صباحاً حتى 23:00 مساءً' : 'Daily from 08:00 to 23:00'}
                </span>
              </div>
            </div>

            {/* High Class Dedicated WhatsApp Concierge */}
            <div className="p-6 bg-[#FCFAF5] border border-[#B89020]/25 flex flex-col md:flex-row items-center justify-between gap-4 rounded-3xl shadow-md">
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <span className="text-black font-black text-xs block">{isRtl ? 'تواصل معي مباشرة على WhatsApp' : 'Direct WhatsApp Concierge'}</span>
                <span className="text-gray-500 text-[10px] font-sans">{isRtl ? 'تنسيق الحجوزات والاستفسارات بشكل سريع' : 'Get answers in secondary moments'}</span>
              </div>
              
              <a 
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-full text-xs tracking-widest uppercase transition-colors shrink-0 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>{isRtl ? 'واتساب المقهى الفوري' : 'WhatsApp Support'}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Large Map Embed and Pricing Guide */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-[#B89020]/15 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(184,144,32,0.02)] rounded-3xl">
            <div className="w-full h-[320px] sm:h-[450px] overflow-hidden border border-[#B89020]/15 bg-white rounded-2xl shadow-inner">
              <iframe 
                title="Café Benslimane Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.463375373322!2d-7.133172384794273!3d33.61628918072702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ab552d1f8d53%3A0x390f1b4ca2cd932a!2sCaf%C3%A9%20MM!5e0!3m2!1sfr!2sma!4v1717511200000!5m2!1sfr!2sma" 
                width="100%" 
                height="100%"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="p-4 bg-[#FAF7F2] border border-[#B89020]/15 rounded-xl">
                <span className="text-[#B89020] text-xs font-bold block mb-1">{isRtl ? 'موقع خرائط Google' : 'GPS Coordinates'}</span>
                <span className="text-[#1C1C1C] font-mono text-[11px] block font-semibold">33.6162892, -7.1309837</span>
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-[#B89020] text-[10px] underline font-bold flex items-center gap-1 mt-1.5 font-sans"
                >
                  <span>{isRtl ? 'ملاحة خرائط Google لـ Benslimane' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#B89020]/15 rounded-xl font-sans">
                <span className="text-[#B89020] text-xs font-bold block mb-1">{isRtl ? 'دليل نفقات المقهى' : 'Pricing & Standard Tier'}</span>
                <span className="text-[11px] block font-bold text-[#1C1C1C]">15 – 50 MAD {isRtl ? 'للفرد' : 'per individual'}</span>
                <span className="text-gray-500 text-[10px] block mt-1 leading-normal font-light">{isRtl ? 'وجبات فاخرة ومشروبات بأسعار تنافسية جد ميسرة كلياً' : 'Premium luxury accessible for everyone'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
