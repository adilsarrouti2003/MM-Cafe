import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, Compass, Music, Flame, Award, Eye, X, Filter } from 'lucide-react';
import { Language, IMAGES, DICTIONARY, GALLERY_PHOTOS_DATA } from '../data';

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

  // Gallery categorization state
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'exterior' | 'food' | 'pastries' | 'drinks'>('all');

  const categories = [
    { id: 'all', labelAr: 'كل الصور ✦', labelFr: 'Tout Explorer' },
    { id: 'interior', labelAr: 'الصالون الداخلي والديكور', labelFr: 'Salons & Intérieur' },
    { id: 'exterior', labelAr: 'الواجهة والفناء الخارجي', labelFr: 'Extérieur & Terrasse' },
    { id: 'food', labelAr: 'المأكولات والفطور البلدي', labelFr: 'Plats & Petit-Déjeuner' },
    { id: 'pastries', labelAr: 'الحلويات الفرنسية والكيك', labelFr: 'Pâtisseries fines' },
    { id: 'drinks', labelAr: 'القهوة والمشروبات المنعشة', labelFr: 'Boissons & Cafés' },
  ] as const;

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS_DATA
    : GALLERY_PHOTOS_DATA.filter(photo => photo.category === activeCategory);

  const hotspots = [
    {
      id: 'espresso-bar',
      left: '25%',
      top: '40%',
      titleAr: 'ركن الإسبريسو الذهبي',
      titleFr: 'Bar à Espresso d\'Élite',
      descAr: 'حيث تصنع المعجزات وتستخلص قطرات الذهب الإيطالية بأعرق الضغوطات والحرارة المتوازنة.',
      descFr: 'Lieu d\'extraction magique de nos blends d\'exception par nos baristas dévoués.'
    },
    {
      id: 'vip-lounge',
      left: '52%',
      top: '55%',
      titleAr: 'الصالون المخملي الأنيق',
      titleFr: 'Salon Privé & Cuir',
      descAr: 'لمن يبحث عن الهدوء والخصوصية المطلقة للقاءات العمل أو العائلية الفاخرة.',
      descFr: 'Une zone isolée avec canapés douillets pour vos rendez-vous privés et collaboratifs.'
    },
    {
      id: 'terrace',
      left: '80%',
      top: '35%',
      titleAr: 'شرفة شمس المدينة الخلابة',
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
            <span>{isRtl ? 'معرض الأجواء الحقيقي المعقم' : 'The Authentic Showcase'}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight leading-tight text-[#1C1C1C]">
            {isRtl ? 'الألبوم الرسمي للمقهى' : 'The Visual Immersion'}
          </h1>
          <p className="text-gray-550 text-xs sm:text-sm font-light font-sans leading-relaxed">
            {isRtl 
              ? 'تصفح كل أركان المقهى الفاخر، صالون الطابق الثاني المريح، المخبزة وصور الوجبات والقهوة المجهزة حياً في بنسليمان شمس المدينة.' 
              : 'Real authentic photography taken directly within our luxurious double-decker space.'}
          </p>
          <div className="w-12 h-[1px] bg-[#B89020]/35 mx-auto pt-2" />
        </div>

        {/* 1. INTERACTIVE 360° VIRTUAL INTERIOR TOUR */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#B89020] font-mono text-xs uppercase tracking-[0.25em] block font-bold">
              ✦ {isRtl ? 'رحلة استكشافية افتراضية' : 'Spatial Panoramic' } ✦
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1C1C]">
              {isRtl ? 'جولة تفاعلية بـ 360° درجة' : 'Interactive 360° Virtual Interior Tour'}
            </h3>
            <p className="text-xs text-gray-500 font-light font-sans max-w-sm mx-auto">
              {isRtl 
                ? 'اسحب بواسطة الفأرة أو إصبعك لليمين واليسار لمعاينة تفاصيل الديكور والجلسات الحقيقية.' 
                : 'Slide the tracking bar or drag the landscape image to look around our majestic space.'}
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
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.15)), url(${IMAGES.interior})`,
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

        {/* 2. DYNAMIC PHOTOS GRID SYSTEM WITH ADVANCED CATEGORY TABS */}
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase text-[#B89020] tracking-widest block font-medium">✦ {isRtl ? 'فرز وتصفية التفاصيل' : 'Filter Our Universe'} ✦</span>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1C1C]">{isRtl ? 'عدسة السحر والواقع من الداخل والخارج' : 'The Curated Collections'}</h3>
            </div>
            
            {/* Elegant category filter pillbar */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-wider font-bold transition-all duration-300 border rounded-full cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-md'
                      : 'bg-white text-gray-500 border-[#B89020]/20 hover:text-[#B89020] hover:border-[#B89020]'
                  }`}
                >
                  {isRtl ? cat.labelAr : cat.labelFr}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[340px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.url}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedImage(photo.url)}
                  className={`${photo.size} relative overflow-hidden group cursor-pointer border border-[#B89020]/15 bg-neutral-100 rounded-3xl shadow-xl hover-premium-lift`}
                >
                  <img 
                    src={photo.url} 
                    alt={photo.titleFr} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 filter brightness-[0.93] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 bg-[#B89020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    <div className="space-y-1.5 text-left">
                      <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block font-black">
                        {isRtl ? 'عرض الصورة الحقيقية' : 'Authentic Capture'}
                      </span>
                      <p className="text-xs sm:text-sm font-serif font-medium text-white">{isRtl ? photo.titleAr : photo.titleFr}</p>
                      <p className="text-[10px] text-gray-400 font-sans font-light leading-relaxed hidden sm:block max-w-[90%]">
                        {isRtl ? photo.descAr : photo.descFr}
                      </p>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#B89020] group-hover:text-black group-hover:border-transparent transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
          <div className="absolute top-6 right-6 text-white font-mono text-xs tracking-widest bg-black/50 px-4 py-2 uppercase border border-white/10 select-none">
            {isRtl ? 'إغلاق × ' : 'Close ×'}
          </div>
        </div>
      )}

    </section>
  );
}
