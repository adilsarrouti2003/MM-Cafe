import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2, Compass, Music, Flame, Award, Eye, X } from 'lucide-react';
import { Language, IMAGES, DICTIONARY } from '../data';

interface GalleryViewProps {
  language: Language;
}

export default function GalleryView({ language }: GalleryViewProps) {
  const isRtl = language === 'ar';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Interactive 360 Virtual Tour States
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [panOffset, setPanOffset] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const photos = [
    {
      url: IMAGES.interior,
      tag: isRtl ? 'الصالون المخملي والداخلي الدافئ' : 'Elegant Velvet Garden Lounge',
      descAr: 'صالونات مجهزة بوثير الكراسي بأعلى جودة مع إضاءة خافتة وديكور مستوحى من الطبيعة للاسترخاء.',
      descFr: 'Premium green velvet lounge chairs paired with calming natural decors under soft ceilings.',
      size: 'col-span-1 md:col-span-2'
    },
    {
      url: IMAGES.upstairs,
      tag: isRtl ? 'الطابق العلوي والأعمدة اللامعة' : 'Upstairs Seating Deck',
      descAr: 'المقاعد المريحة في الطابق العلوي مع السلم المضاء بمصابيح Led والأعمدة الذهبية الفاخرة.',
      descFr: 'Spacious second floor containing premium comfortable armchairs and gorgeous glowing columns.',
      size: 'col-span-1'
    },
    {
      url: IMAGES.exterior,
      tag: isRtl ? 'واجهة المقهى البديعة في الليل' : 'Double-Floor Night Glow',
      descAr: 'أضواء ذهبية لافتة تنير طابقي المقهى في شمس المدينة بنسليمان.',
      descFr: 'Our spectacular double-decker external facade glowing proudly under the Benslimane night sky.',
      size: 'col-span-1'
    },
    {
      url: IMAGES.breakfast,
      tag: isRtl ? 'فطور المسمن البلدي الأصيل' : 'Authentic Msemmen Plate',
      descAr: 'مسمن مغربي ساخن ومورق يقدم مع العسل والجبن وقنينة ماء منعشة لشحن طاقتكم.',
      descFr: 'Crispy warm Moroccan puff pastry served with condiments and chilled spring water.',
      size: 'col-span-1 md:col-span-2'
    },
    {
      url: IMAGES.coffee,
      tag: isRtl ? 'الميلك شيك والقهوة المثلجة اللذيذة' : 'Artistic Whipped Cappuccino',
      descAr: 'كوب قهوتنا الغني المزركش بالكريمة الطازجة المخفوقة وسكوب الكاكاو صوص الشوكولا.',
      descFr: 'Indulgent espresso double shot topped with rich whipped cream swirl and dark chocolate drizzle.',
      size: 'col-span-1'
    },
    {
      url: IMAGES.facade,
      tag: isRtl ? 'تفاصيل المخبزة والحلويات الراقية' : 'The Sweet Treat Boutique',
      descAr: 'واجهة صالون الشاي والحلويات "Patisserie MM" الراقية لاستقبال زوارنا ليلاً ونهاراً.',
      descFr: 'Authentic display and beautiful seating arrangements outside our premium pastry store.',
      size: 'col-span-1'
    },
    {
      url: IMAGES.windowView,
      tag: isRtl ? 'ركن الإسبريسو والهدوء المطلق' : 'Minimalist Window Espresso',
      descAr: 'قهوة ممتازة معدة بإتقان بجانب نبتة البونساي الأنيقة في شقتنا الهادئة كلياً.',
      descFr: 'Artisanal espresso shot pulled and served elegantly at the window-side table.',
      size: 'col-span-1 md:col-span-2'
    }
  ];

  const hotspots = [
    {
      id: 'espresso-bar',
      left: '25%',
      top: '40%',
      titleAr: 'ركن الإسبريسو الذهبي',
      titleFr: 'Bar à Espresso d\'Élite',
      descAr: 'حيث تصنع المعجزات وتستخلص قطرات الذهب الإيطالية بأحدث الآلات السويسرية المتطورة.',
      descFr: 'Lieu d\'extraction magique de nos blends d\'exception par nos baristas dévoués.'
    },
    {
      id: 'vip-lounge',
      left: '52%',
      top: '55%',
      titleAr: 'الصالون المخملي VIP',
      titleFr: 'Salon Privé & Cuir',
      descAr: 'لمن يبحث عن الهدوء والخصوصية المطلقة للقاءات العمل أو العائلية الفاخرة.',
      descFr: 'Une zone isolée avec canapés douillets pour vos rendez-vous privés et collaboratifs.'
    },
    {
      id: 'terrace',
      left: '80%',
      top: '35%',
      titleAr: 'شرفة شمس المدينة',
      titleFr: 'Grande Terrasse Extérieure',
      descAr: 'جلسات خارجية مفتوحة ومشرقة تطل على نسمات بنسليمان العليلة.',
      descFr: 'Profitez de la brise légère et du soleil brillant de Benslimane en plein air.'
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - (panOffset * 4));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const offset = (x - startX) / 4;
    setPanOffset(Math.max(10, Math.min(90, offset)));
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 sm:py-36 bg-[#FAF7F2] text-[#1C1C1C] relative animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Dynamic Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B89020]/10 border border-[#B89020]/20 text-[#B89020] font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{isRtl ? 'معرض الأجواء الحقيقي' : 'The Visual Showcase'}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight leading-tight text-[#1C1C1C]">
            {isRtl ? 'المعرض الرقمي والافتراضي' : 'The Visual Immersion'}
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-light font-sans">
            {isRtl ? 'صور حقيقية التقطت بعناية لأرجاء وسلع المقهى الفاخر في بنسليمان.' : 'Real authentic photography taken directly within our luxurious space.'}
          </p>
          <div className="w-12 h-[1px] bg-[#B89020]/35 mx-auto pt-2" />
        </div>

        {/* 1. INTERACTIVE 360° VIRTUAL INTERIOR TOUR */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#B89020] font-mono text-xs uppercase tracking-[0.25em] block font-bold">
              ✦ {isRtl ? 'أبعاد حرة تفاعلية' : 'Panoramic Explorer'} ✦
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1C1C]">
              {isRtl ? 'جولة افتراضية بـ 360° درجة' : 'Interactive 360° Virtual Tour'}
            </h3>
            <p className="text-xs text-gray-500 font-light font-sans">
              {isRtl 
                ? 'اسحب بإصبعك أو الماوس لمعاينة التفاصيل والزوايا والأركان المفضلة.' 
                : 'Slide the control stick or drag the canvas left and right to gaze around our spatial architecture.'}
            </p>
          </div>

          <div className="relative w-full h-[350px] sm:h-[480px] overflow-hidden rounded-3xl border border-[#B89020]/20 bg-neutral-100 select-none shadow-2xl">
            <div 
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="absolute inset-y-0 h-full w-[250%] transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1)), url(${IMAGES.interior})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateX(-${panOffset * 1.5}%)`
              }}
            >
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute pointer-events-auto"
                  style={{ left: spot.left, top: spot.top }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                    }}
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeHotspot === spot.id ? 'bg-[#B89020] text-black shadow-md border border-[#B89020]' : 'bg-black/85 text-[#D4AF37] border border-[#D4AF37]/40 shadow-lg'
                    }`}
                  >
                    <Eye className="w-5 h-5" />
                    <span className="absolute inset-0 rounded-full bg-[#B89020]/20 animate-ping -z-10" />
                  </button>

                  {activeHotspot === spot.id && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 p-5 bg-white/95 border border-[#B89020]/45 shadow-2xl backdrop-blur-md text-black z-50 text-left rounded-2xl animate-fade-in font-sans">
                      <h4 className="font-serif text-[#B89020] text-xs sm:text-sm font-semibold mb-1">
                        {isRtl ? spot.titleAr : spot.titleFr}
                      </h4>
                      <p className="text-gray-750 text-xs leading-relaxed font-light text-gray-800">
                        {isRtl ? spot.descAr : spot.descFr}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-5 py-3 flex items-center gap-3 border border-[#B89020]/20 rounded-full max-w-sm w-full sm:w-[260px] shadow-lg">
              <span className="text-[10px] font-mono text-gray-600 font-bold">0°</span>
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={panOffset} 
                onChange={(e) => setPanOffset(Number(e.target.value))}
                className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#B89020]" 
              />
              <span className="text-[10px] font-mono text-gray-600 font-bold">360°</span>
            </div>
          </div>
        </div>

        {/* 2. DYNAMIC PHOTOS GRID SYSTEM */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-[#B89020] tracking-widest block font-medium">✦ {isRtl ? 'زوايا تفصيلية' : 'Fine Details'} ✦</span>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1C1C]">{isRtl ? 'تفاصيل المذاق والفضاء بالعدسة' : 'Panoramic High-Res Gallery'}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[340px]">
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(photo.url)}
                className={`${photo.size} relative overflow-hidden group cursor-pointer border border-[#B89020]/15 bg-neutral-100 rounded-3xl shadow-xl hover-premium-lift transition-all duration-500`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.tag} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
                <div className="absolute inset-0 bg-[#B89020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="space-y-1 text-left">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block font-bold">
                      {isRtl ? 'عدسة المقهى الفاخر' : 'Premium Capture'}
                    </span>
                    <p className="text-xs sm:text-sm font-serif font-medium text-white">{photo.tag}</p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#B89020] group-hover:text-black group-hover:border-transparent transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal preview */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[10000] bg-black/98 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="max-w-4xl max-h-[85vh] overflow-hidden relative border border-white/10 shadow-2xl bg-[#0A0A0A]">
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[85vh] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-6 right-6 text-white font-mono text-xs tracking-widest bg-black/50 px-3 py-1.5 uppercase border border-white/10 select-none">
            {isRtl ? 'إغلاق ×' : 'Close ×'}
          </div>
        </div>
      )}

    </section>
  );
}
