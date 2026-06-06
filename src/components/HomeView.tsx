import { motion } from 'motion/react';
import { Calendar, ArrowDown, Sparkles, Compass, Music, Flame, Award, Star, ArrowRight, Eye } from 'lucide-react';
import { Language, DICTIONARY, IMAGES, REVIEWS, MENU_ITEMS } from '../data';

interface HomeViewProps {
  language: Language;
  onPageChange: (page: string) => void;
  onAdminOpen: () => void;
}

export default function HomeView({ language, onPageChange, onAdminOpen }: HomeViewProps) {
  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  // Signature Hero Products (exactly 3 as specified)
  const signatureItems = MENU_ITEMS.filter(item => item.popular).slice(0, 3);

  const experiencePrinciples = [
    {
      icon: Compass,
      titleAr: 'الجو العام الدافئ',
      titleFr: 'The Warm Atmosphere',
      descAr: 'هدوء مخملي، تكييف متكامل، وإضاءة دافئة مصممة خصيصاً لراحتك المطلقة.',
      descFr: 'Premium climate control, velvet seating, and cozy warm light designed for absolute serenity.'
    },
    {
      icon: Music,
      titleAr: 'رونق السمعيات الكلاسيكية',
      titleFr: 'The Acoustic Curation',
      descAr: 'سيمفونيات جاز هادئة ونغمات كلاسيكية تذوب بلطف مع أحاديثك الهامسة.',
      descFr: 'Soothing lo-fi tracks and live ambient jazz that blend seamlessly with low whispers.'
    },
    {
      icon: Flame,
      titleAr: 'عصرنة الديكور والأخشاب',
      titleFr: 'The Handcrafted Design',
      descAr: 'مصمم بأخشاب بلوط عريقة، وتفاصيل برونزية تمنح الفضاء طاقة الفخامة.',
      descFr: 'Indulge in premium polished oak woods, custom metals, and spatial golden design.'
    },
    {
      icon: Award,
      titleAr: 'الضيافة الفندقية العريقة',
      titleFr: 'Hospitality Refined',
      descAr: 'طاقم ضيافة محترف يرحب بالضيوف بابتسامة دافئة وخدمة سريعة لا نظير لها.',
      descFr: 'Highly trained staff dedicated to hospitality, responding elegantly to every gesture.'
    }
  ];

  return (
    <div className="space-y-0 text-[#1C1C1C] animate-fade-in bg-[#FAF7F2]">
      
      {/* 1. HERO SECTION WITH REAL PREMIUM CAFE EMBLEMATIC IMAGE */}
      <section className="relative h-screen min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 select-none">
          <img
            src={IMAGES.luxeInterior}
            alt="Luxury Cafe Interior Premium View"
            className="w-full h-full object-cover scale-[1.02] filter brightness-[0.52] contrast-[1.03] transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/30 to-black/75 z-10 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Subtle Elegance badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[#D4AF37] font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] mx-auto shadow-2xl">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-ping" />
              <span>{isRtl ? 'وجهة النخبة ببنسليمان' : 'A Refined Destination'}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-light tracking-tight leading-[1.1] text-white">
              {isRtl ? (
                <span>
                  تناغم الفخامة <span className="text-[#D4AF37] italic font-serif block sm:inline-block">والمذاق</span>
                </span>
              ) : (
                <span>
                  Timeless Elegance <span className="text-[#D4AF37] italic font-serif block sm:inline-block">In Every Sip</span>
                </span>
              )}
            </h1>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-300 font-mono tracking-[0.3em] uppercase leading-relaxed">
              {isRtl ? 'أكثر من مجرد مقهى.. وجهتكم الأرقى بمدينة بنسليمان' : 'Exceptional Coffee, Warm Hospitality, Timeless Comfort'}
            </p>

            {/* ONLY ONE LUXURY CTA BUTTON */}
            <div className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(212, 175, 55, 0.45)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPageChange('reservation')}
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#be8e3a] text-black font-bold uppercase tracking-[0.15em] text-xs sm:text-sm cursor-pointer border border-[#D4AF37] rounded-none hover:brightness-110 transition-all duration-300 shadow-xl"
              >
                <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
                <span>{isRtl ? 'احجز طاولة الآن' : 'Reserve a Table'}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll helper */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-all duration-300"
          onClick={() => {
            const el = document.getElementById('discover');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">{isRtl ? 'اكتشف التجربة' : 'The Experience'}</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section id="discover" className="py-24 sm:py-36 bg-[#FAF7F2] relative">
        {/* Subtle decorative gold dots */}
        <div className="absolute top-12 left-10 w-24 h-24 bg-gradient-to-br from-[#B89020]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-12 right-10 w-32 h-32 bg-gradient-to-tr from-[#B89020]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <span className="text-[#B89020] font-mono text-xs uppercase tracking-[0.3em] block font-bold">
              ✦ {isRtl ? 'الفلسفة والنهج' : 'The Creed'} ✦
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1C1C] leading-snug">
              {isRtl ? (
                <div className="space-y-4">
                  <span className="block text-gray-400 font-light text-2xl sm:text-3xl">{isRtl ? 'ملاذٌ آسر حيث الفخامة تولد من جديد' : 'A refined sanctuary...'}</span>
                  <span className="block text-[#B89020] italic font-serif font-semibold">{isRtl ? 'تلتقي الضيافة الراقية بمذاقات بنسليمان الأصيلة.' : 'Where hospitality conforms to luxury'}</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <span className="block text-gray-400 font-light text-2xl sm:text-3xl">A refined destination where</span>
                  <span className="block text-[#B89020] italic font-serif font-semibold">exceptional coffee, warm hospitality,</span>
                  <span className="block text-[#1C1C1C]">and timeless elegance come together.</span>
                </div>
              )}
            </h2>
            <div className="w-16 h-[1.5px] bg-[#B89020]/35 mx-auto mt-6" />
          </div>

          {/* Grid Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiencePrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-white border border-[#B89020]/15 p-8 flex flex-col justify-between rounded-xl hover-premium-lift shadow-[0_15px_40px_rgba(184,144,32,0.03)]"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#B89020]/10 border border-[#B89020]/30 shadow-[0_4px_15px_rgba(184,144,32,0.12)] flex items-center justify-center text-[#B89020] mb-6">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif text-[#1C1C1C] font-semibold tracking-tight">
                      {isRtl ? principle.titleAr : principle.titleFr}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {isRtl ? principle.descAr : principle.descFr}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 360 virtual tour button tease */}
          <div className="text-center pt-4">
            <button
              onClick={() => onPageChange('gallery')}
              className="inline-flex items-center gap-2 text-[#B89020] hover:text-[#1C1C1C] font-mono text-xs uppercase tracking-widest border-b border-[#B89020]/40 pb-1 cursor-pointer transition-all duration-300 font-bold"
            >
              <span>{isRtl ? 'استمتع بجولة افتراضية بـ 360° درجة' : 'Take a 360° Virtual Tour'}</span>
              <ArrowRight className="w-4 h-4 ml-1 animate-pulse" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. SIGNATURE PRODUCTS ROW (Only 3 Hero items) */}
      <section className="py-24 sm:py-36 bg-[#FCFAF5] border-y border-[#B89020]/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B89020]/2 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <div className="space-y-2">
              <span className="text-[#B89020] font-mono text-xs uppercase tracking-widest block font-bold">
                ✧ {isRtl ? 'المجموعة الكلاسيكية الفاخرة' : 'The Signature Collection'} ✧
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1C1C1C] tracking-tight">
                {isRtl ? 'الإصدارات الخاصة الأكثر طلباً' : 'The Masterpiece Delicacies'}
              </h2>
            </div>
            
            <button
              onClick={() => onPageChange('menu')}
              className="group text-sm font-mono uppercase text-[#B89020] hover:text-[#1C1C1C] tracking-widest transition-all cursor-pointer flex items-center gap-1 font-bold"
            >
              <span>{isRtl ? 'تصفح قائمة الطعام الكاملة ←' : 'Explore Complete Menu →'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-[#B89020]/15 group hover:border-[#B89020]/35 transition-all duration-500 overflow-hidden shadow-[0_15px_40px_rgba(184,144,32,0.035)] rounded-2xl hover-premium-lift flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#FAF7F2] border-b border-[#B89020]/10">
                    <img 
                      src={item.image} 
                      alt={item.titleFr}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#B89020] text-white text-[9px] font-mono tracking-widest uppercase font-black px-3 py-1 border border-[#B89020] shadow-md rounded-none">
                      {d.popupPopular}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="font-serif text-lg sm:text-xl text-[#1C1C1C] font-semibold group-hover:text-[#B89020] transition-colors duration-350">
                        {isRtl ? item.titleAr : item.titleFr}
                      </h3>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-[#B89020] font-mono font-bold text-xl">{item.price}</span>
                        <span className="text-[9px] text-gray-550 font-bold tracking-wider font-mono uppercase">{d.currency}</span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                      {isRtl ? item.descAr : item.descFr}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => onPageChange('reservation')}
                    className="w-full py-3 border border-[#B89020]/30 hover:bg-[#B89020] text-[#B89020] hover:text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-350 rounded-none cursor-pointer"
                  >
                    {isRtl ? 'احجز للتذوق' : 'Book a Taste'}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. GALLERY PREVIEW */}
      <section className="py-24 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#B89020] tracking-[0.2em] block font-bold">✦ {isRtl ? 'لقطات من الواقع' : 'Aesthetic Frames'} ✦</span>
              <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1C1C]">{isRtl ? 'ألبوم التفاصيل الراقية' : 'The Visual Immersion'}</h3>
            </div>

            <button
              onClick={() => onPageChange('gallery')}
              className="px-6 py-3 border border-[#B89020]/30 hover:bg-[#B89020] hover:text-white text-xs font-mono uppercase tracking-widest text-[#B89020] transition-all cursor-pointer rounded-none font-bold"
            >
              {isRtl ? 'معرض الصور بالكامل' : 'Discover Visual Gallery'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="aspect-[16/10] overflow-hidden border border-[#B89020]/15 rounded-2xl relative group cursor-pointer shadow-lg" onClick={() => onPageChange('gallery')}>
              <img src={IMAGES.interior} className="w-full h-full object-cover brightness-[0.98] group-hover:scale-105 group-hover:brightness-105 transition-all duration-[1000ms]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500" />
            </div>
            <div className="aspect-[16/10] overflow-hidden border border-[#B89020]/15 rounded-2xl relative group cursor-pointer shadow-lg" onClick={() => onPageChange('gallery')}>
              <img src={IMAGES.breakfast} className="w-full h-full object-cover brightness-[0.98] group-hover:scale-105 group-hover:brightness-105 transition-all duration-[1000ms]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500" />
            </div>
            <div className="aspect-[16/10] overflow-hidden border border-[#B89020]/15 rounded-2xl relative group cursor-pointer shadow-lg" onClick={() => onPageChange('gallery')}>
              <img src={IMAGES.windowView} className="w-full h-full object-cover brightness-[0.98] group-hover:scale-105 group-hover:brightness-105 transition-all duration-[1000ms]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* 5. GUEST REVIEWS TESTIMONIES TEASER */}
      <section className="py-24 sm:py-36 bg-[#FCFAF5] border-t border-[#B89020]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase text-[#B89020] tracking-widest block font-bold">✦ {isRtl ? 'آراء في الصميم' : 'Guest Testimonies'} ✦</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1C1C1C]">{isRtl ? 'ماذا يقول عنّا الذواقة' : 'Sincere Commendations'}</h2>
            <div className="w-12 h-[1px] bg-[#B89020]/35 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div 
                key={rev.id}
                className="p-6 sm:p-8 bg-white border border-[#B89020]/15 relative flex flex-col justify-between shadow-[0_15px_40px_rgba(184,144,32,0.03)] rounded-2xl hover-premium-lift duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#B89020] mb-4">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B89020]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed font-sans font-light">
                    "{language === 'ar' ? rev.textAr : rev.textFr}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#B89020]/10 flex justify-between items-baseline">
                  <div>
                    <h4 className="text-[#1C1C1C] text-xs font-bold">{rev.author}</h4>
                    <span className="text-[9px] text-gray-400 font-mono tracking-wider block mt-0.5">
                      {language === 'ar' ? rev.roleAr : rev.roleFr}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onPageChange('contact')}
              className="inline-flex items-center gap-2 text-[#B89020] hover:text-[#1C1C1C] font-mono text-xs uppercase tracking-widest border-b border-[#B89020]/40 pb-0.5 cursor-pointer font-bold transition-all"
            >
              <span>{isRtl ? 'موقعنا الجغرافي وقنوات التواصل' : 'Location & Booking Channels'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 6. EXCLUSIVE RESERVATION CTA */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] text-center relative overflow-hidden">
        
        {/* Absolute radial gold glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          {/* Black VIP Invitation card frame */}
          <div className="bg-gradient-to-br from-[#1C1B19] to-[#0E0D0C] text-white p-12 sm:p-20 rounded-3xl border border-[#B89020]/30 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89020]/5 rounded-bl-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B89020]/3 rounded-tr-full pointer-events-none -z-10" />

            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.3em] font-black block">
              ⚜ {isRtl ? 'انضم لزبائننا الأفاضل' : 'Private Hostry Invitation'} ⚜
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-light leading-tight">
              {isRtl ? 'تفضّل بضمان مكانك الاستثنائي اليوم' : 'Reserve Your Desired Table'}
            </h2>
            
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 font-light leading-relaxed font-sans">
              {isRtl 
                ? 'احجز طاولة مطلة على الشارع، أو صالون عائلي خاص، أو جناح كبار الشخصيات VIP وسنهيئ الفضاء لعنايتك الاستثنائية.' 
                : 'Choose the terrace view, window lounge or private room. Confirmation is instantly pushed to our hosteliers.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(212,175,55,0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPageChange('reservation')}
                className="px-10 py-5 bg-[#D4AF37] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer rounded-none border border-[#D4AF37] hover:border-white shadow-xl"
              >
                {isRtl ? 'بدء الحجز الفوري المستقل' : 'Begin Your Experience'}
              </motion.button>
              
              <button 
                onClick={() => {
                  window.open(`https://wa.me/212661430040?text=${encodeURIComponent(isRtl ? 'مرحباً، أريد حجز طاولة خاصة في المقهى الفاخر ببنسليمان' : 'Hello, I want to reserve a private table at the Luxury Cafe Benslimane')}`);
                }}
                className="px-10 py-5 bg-transparent hover:bg-white/5 text-white/90 hover:text-white border border-white/20 hover:border-[#D4AF37] font-mono text-xs uppercase tracking-[0.2em] transition-all cursor-pointer rounded-none"
              >
                {isRtl ? 'دردشة فورية مخصصة' : 'Direct Concierge Chat'}
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
