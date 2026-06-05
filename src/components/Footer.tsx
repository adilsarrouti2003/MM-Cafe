import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Star, Share2, Compass, ExternalLink } from 'lucide-react';
import { Language, DICTIONARY, REVIEWS } from '../data';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  const mapsUrl = "https://www.google.com/maps/place/Caf%C3%A9+MM/@33.6162892,-7.1309837,15z/data=!4m6!3m5!1s0xda7ab552d1f8d53:0x390f1b4ca2cd932a!8m2!3d33.6162892!4d-7.1309837";

  return (
    <footer id="reviews" className="bg-[#FAF7F2] text-gray-700 border-t border-[#B89020]/15 relative">
      
      {/* Upper Reviews & Map Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Review list teaser */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#B89020] font-mono text-xs tracking-[0.2em] uppercase font-bold">
            ✦ Google Maps 3.7 (35) ✦
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1C1C1C] mt-2">
            {d.reviewTitle}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-sans font-light">
            {d.reviewSubtitle}
          </p>
          <div className="w-12 h-[1px] bg-[#B89020]/45 mx-auto mt-4" />
        </div>

        {/* Outer Section Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Column 1: Testimonial feed */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {REVIEWS.map((rev) => (
                <div 
                  key={rev.id} 
                  className="p-6 bg-white border border-[#B89020]/15 hover:border-[#B89020]/40 rounded-2xl transition-all shadow-[0_15px_35px_rgba(184,144,32,0.02)]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-[#1C1C1C] font-extrabold text-xs sm:text-sm">{rev.author}</h4>
                      <span className="text-[10px] text-gray-400 font-bold block">
                        {language === 'ar' ? rev.roleAr : rev.roleFr}
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 bg-[#B89020]/10 px-2.5 py-1 rounded-full text-[#B89020] text-xs font-mono font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#B89020] stroke-none" />
                      <span>{rev.stars}.0</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed italic font-sans font-light">
                    "{language === 'ar' ? rev.textAr : rev.textFr}"
                  </p>
                  <div className="text-[9px] text-gray-400 text-right mt-2 font-mono font-bold">
                    {language === 'ar' ? rev.dateAr : rev.dateFr}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews CTA */}
            <div className="p-6 bg-white border border-[#B89020]/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left mt-4 shadow-sm">
              <div className={isRtl ? 'sm:text-right' : 'sm:text-left'}>
                <span className="text-black font-bold text-xs block">{isRtl ? 'راضٍ عن خدمتنا؟' : 'Satisfait de notre Café ?'}</span>
                <span className="text-gray-500 text-[10px] font-sans">{isRtl ? 'ادعمنا بتقييمك على خرائط Google' : 'Donnez votre avis sur Google Maps'}</span>
              </div>
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-5 py-3 bg-[#1C1C1C] hover:bg-[#B89020] text-white hover:text-black border border-[#1C1C1C] hover:border-[#B89020] font-bold rounded-full text-xs transition-colors shrink-0 cursor-pointer"
              >
                <span>{d.reviewAddBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Maps Live Embed (Benslimane coordinates) */}
          <div className="lg:col-span-12 xl:col-span-6 bg-white rounded-2xl p-6 border border-[#B89020]/15 flex flex-col justify-between shadow-[0_20px_45px_rgba(184,144,32,0.02)]">
            <div className="w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[#B89020]/15 bg-[#FAF9F6]">
              {/* Google Maps iFrame */}
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

            <div className={`mt-4 grid grid-cols-2 gap-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#B89020]/15 font-sans">
                <span className="text-[#B89020] text-xs font-bold block mb-1">{isRtl ? 'الموقع الجغرافي بنسليمان' : 'Coordonnées GPS'}</span>
                <span className="text-[#1C1C1C] font-mono text-[11px] block font-semibold">33.6162892, -7.1309837</span>
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-[#B89020] text-[10px] underline font-bold flex items-center gap-1 mt-1 font-sans"
                >
                  <span>{isRtl ? 'خرائط جوجل المباشرة' : 'Ouvrir dans Maps'}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#B89020]/15 font-sans">
                <span className="text-[#B89020] text-xs font-bold block mb-1">{isRtl ? 'مستويات الأسعار' : 'Économe & Qualité'}</span>
                <span className="text-[#1C1C1C] font-bold text-[11px] block">1–50 MAD {isRtl ? 'للفرد' : 'par personne'}</span>
                <span className="text-gray-500 text-[10px] block mt-1 leading-normal font-light">{isRtl ? 'أطعمة فاخرة بسعر مناسب' : 'Menu ultra-accessible'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower layout details */}
        <div className={`pt-12 border-t border-[#B89020]/15 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm text-center md:text-left ${isRtl ? 'md:rtl' : ''}`}>
          
          {/* Contact Block */}
          <div className={`space-y-2 flex flex-col items-center ${isRtl ? 'md:items-start' : 'md:items-start font-sans font-light'}`}>
            <div className="flex items-center gap-2 text-[#1C1C1C] font-extrabold uppercase font-sans">
              <Phone className="w-4 h-4 text-[#B89020]" />
              <span>{d.footerCall}</span>
            </div>
            <a href="tel:+212661430040" className="text-gray-600 hover:text-[#B89020] transition-colors font-mono text-sm block font-bold">
              +212 661 43 00 40
            </a>
          </div>

          {/* Address Block */}
          <div className="space-y-2 flex flex-col items-center font-sans font-light">
            <div className="flex items-center gap-2 text-[#1C1C1C] font-extrabold uppercase">
              <MapPin className="w-4 h-4 text-[#B89020]" />
              <span>{d.footerAddress}</span>
            </div>
            <span className="text-gray-600 text-center">
              {d.footerAddressDetails}
            </span>
          </div>

          {/* Hours Block */}
          <div className={`space-y-2 flex flex-col items-center ${isRtl ? 'md:items-start font-sans font-light' : 'md:items-end font-sans font-light'}`}>
            <div className="flex items-center gap-2 text-[#1C1C1C] font-extrabold uppercase">
              <Clock className="w-4 h-4 text-[#B89020]" />
              <span>{d.footerHours}</span>
            </div>
            <span className="text-gray-600 text-center md:text-inherit">
              {d.footerEveryday} : <strong className="text-black font-mono block sm:inline-block font-bold">{isRtl ? 'من 8 صباحاً حتى 23:00' : '08:00 - 23:00'}</strong>
            </span>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="mt-16 pt-8 border-t border-[#B89020]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-550 gap-4 font-mono font-light">
          <span>{d.footerRights}</span>
          <div className="flex gap-4">
            <span className="text-gray-400">ID: JV89+MG Benslimane</span>
            <span>•</span>
            <span className="text-[#B89020] font-bold">{isRtl ? 'بريميوم SSL آمن' : 'Secured SSL'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
