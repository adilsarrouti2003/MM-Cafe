import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, ZoomIn, X, Utensils, QrCode, Check, Award, Gift } from 'lucide-react';
import { Language, DICTIONARY, MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuViewProps {
  language: Language;
}

export default function MenuView({ language }: MenuViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'breakfast' | 'drinks' | 'desserts' | 'waffles'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loyaltyEmail, setLoyaltyEmail] = useState('');
  const [loyaltySubscribed, setLoyaltySubscribed] = useState(false);
  
  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  const categories = [
    { id: 'all', label: d.menuAll },
    { id: 'breakfast', label: d.menuBreakfast },
    { id: 'drinks', label: d.menuDrinks },
    { id: 'desserts', label: d.menuDesserts },
    { id: 'waffles', label: d.menuWaffles },
  ] as const;

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleLoyaltySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loyaltyEmail) return;
    setLoyaltySubscribed(true);
    // Persist in local storage
    localStorage.setItem('mm_loyalty_vip_subscribed', 'true');
    localStorage.setItem('mm_loyalty_vip_email', loyaltyEmail);
  };

  return (
    <div className="py-24 sm:py-36 bg-[#F5F5DC] text-[#1B4332] relative animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[#1B4332] font-mono text-xs uppercase tracking-[0.2em] font-bold block">
            ✦ {isRtl ? 'قائمة المذاق الراقي بـ بنسليمان' : 'The Culinary Masterpieces'} ✦
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4332] tracking-tight">
            {d.menuTitle}
          </h1>
          <p className="text-[#1B4332]/85 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto font-sans">
            {d.menuSubtitle}
          </p>
          <div className="w-12 h-[1px] bg-[#1B4332]/45 mx-auto pt-2" />
        </div>

        {/* Categories filtration tab */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 text-xs uppercase tracking-[0.1em] font-bold transition-all duration-300 border rounded-full cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                  : 'bg-white text-gray-500 border-[#1B4332]/20 hover:text-[#1B4332] hover:border-[#1B4332]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 1. KEY PRODUCT ITEMS LISTING AS MASTERED ROWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item: MenuItem) => {
            return (
              <div
                key={item.id}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-white border border-[#1B4332]/20 hover:border-[#1B4332]/40 transition-all duration-500 shadow-[0_15px_40px_rgba(27,67,50,0.04)] rounded-3xl hover-premium-lift"
              >
                {/* Visual Frame */}
                <div className="w-full sm:w-32 h-32 aspect-square relative overflow-hidden bg-[#F5F5DC] border border-[#1B4332]/15 shrink-0 rounded-2xl shadow-sm">
                  <img
                    src={item.image}
                    alt={language === 'ar' ? item.titleAr : item.titleFr}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Zoom Action button overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="p-2 bg-black/90 text-[#F5F5DC] border border-[#F5F5DC]/30 hover:bg-[#F5F5DC] hover:text-[#1B4332] transition-all cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {item.popular && (
                    <div className="absolute top-2 left-2 bg-[#1B4332] text-white px-2 py-0.5 text-[7px] font-mono tracking-widest uppercase font-black shadow-md rounded-none">
                      {d.popupPopular}
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="font-serif text-base sm:text-lg text-[#1B4332] font-semibold group-hover:text-[#1b4332]/80 transition-colors">
                        {language === 'ar' ? item.titleAr : item.titleFr}
                      </h3>
                      
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-[#1B4332] font-mono font-bold text-base sm:text-lg">
                          {item.price}
                        </span>
                        <span className="text-[8px] text-gray-400 font-mono tracking-wider uppercase font-black">
                          {d.currency}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#1B4332]/80 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 font-sans">
                      {language === 'ar' ? item.descAr : item.descFr}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-[10px] text-gray-405 font-mono border-t border-[#1B4332]/10 mt-2">
                    <span className="flex items-center gap-1">
                      <Utensils className="w-3 h-3 text-[#1B4332]/65" />
                      <span>{isRtl ? 'تحضير طازج' : 'Artisan prep'}</span>
                    </span>

                    <button
                      onClick={() => {
                        const reserveBtn = document.getElementById('navbar-reserve-btn');
                        if (reserveBtn) reserveBtn.click();
                      }}
                      className="text-[#1B4332] hover:text-[#1B4332]/80 uppercase tracking-wider font-bold cursor-pointer transition-colors duration-250"
                    >
                      {isRtl ? 'احجز الآن' : 'Reserve now'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>di        {/* 2. ADVANCED STREAK: REAL QR-MENU ACCESS CARD */}
        <div className="bg-white border border-[#1B4332]/25 p-8 sm:p-12 relative overflow-hidden rounded-3xl shadow-[0_15px_45px_rgba(27,67,50,0.04)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1B4332]/5 rounded-bl-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/20 rounded-lg">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#1B4332] uppercase tracking-widest block font-black">
                  {isRtl ? 'الخدمة الذاتية السريعة QR CODE' : 'Contactless Table Service Hub'}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1B4332] leading-snug">
                {isRtl 
                  ? 'اطلب مباشرة من طاولتك عبر ميزة الـ QR المدمجة' 
                  : 'Scan and Enjoy Premium Table-Side Self Checkout'}
              </h3>
              
              <p className="text-gray-550 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans font-light">
                {isRtl 
                  ? 'عند حضورك الموقر للمقهى، يمكنك ببساطة فتح كاميرا الهاتف ومسح الشفرة الملصقة في الطاولة لتصفح تفاصيل الوجبات والأسعار، وطلب الخدمة، أو تصفح المزايا دون انتظار.' 
                  : 'Our interactive QR code system is placed directly on every natural wood table. Simply aim your mobile camera to view instant ingredients, ask for servers, or track live loyalty tokens.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 bg-[#F5F5DC] text-[#1B4332] text-center space-y-2 select-none border border-[#1B4332]/25 rounded-2xl shadow-lg">
                <div className="w-28 h-28 mx-auto bg-[#1B4332] flex items-center justify-center p-2 rounded-xl shadow-inner">
                  <span className="text-white text-3xl animate-bounce">☕</span>
                </div>
                <span className="text-[10px] font-mono font-black uppercase text-gray-550 tracking-wider">Shams Al Madina</span>
                <p className="text-xs font-bold text-[#1B4332] border-t border-[#1B4332]/15 pt-2">{isRtl ? 'مسح رمز المقهى' : 'Scan to View Menu'}</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3. COHESIVE ADVANCED FEAT: LOYALTY PRIVILEGE SUBSCRIPTION */}
        <div className="bg-gradient-to-br from-[#1B4332] to-[#1B4332]/95 text-white border border-[#F5F5DC]/25 p-8 sm:p-16 text-center space-y-6 relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F5DC]/5 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5F5DC]/3 rounded-tr-full pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono uppercase text-[#F5F5DC] tracking-[0.2em] font-black block">
              ✦ {isRtl ? 'نادي الـ VIP والمكافآت الفريدة' : 'The Privilege Loyalty Circle'} ✦
            </span>
            
            <h3 className="text-2xl sm:text-4xl font-serif font-light text-white leading-tight">
              {isRtl ? 'هل تريد الحصول على خصم 15% فوري في زيارتك؟' : 'Join Our VIP Circle for 15% Instant Privilege'}
            </h3>
            
            <p className="text-[#F5F5DC]/80 text-xs sm:text-sm leading-relaxed font-sans font-light">
              {isRtl 
                ? 'اشترك اليوم ببريدك الشخصي وسنقوم بتسجيل عضويتك في نظام المقهى الذكي ومكافأة ولائك بهدية ترحيبية فورية تظهر في هاتفك.' 
                : 'Simply enter your primary email. Our secure system will instantly catalog your elite status and secure a 15% discount for your next transaction in Benslimane.'}
            </p>

            {loyaltySubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-[#F5F5DC] border border-[#1B4332] text-center space-y-3 rounded-xl shadow-lg animate-fade-in text-[#1B4332]"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-[#1B4332] font-semibold text-base">
                  {isRtl ? 'مبارك! تم تفعيل بطاقة VIP الخاصة بك' : 'Welcome to the VIP Circle'}
                </h4>
                <p className="text-[#1B4332] font-mono text-xs uppercase tracking-widest font-black">
                  PROMO CODE: MM-LOYALTY-15
                </p>
                <p className="text-gray-500 text-[10px]">
                  {isRtl 
                    ? 'اظهر هذه الصفحة للمشرف أو النادل عند الدفع وسيطبق الخصم فوراً!' 
                    : 'Show this coupon card to your waiter at the checkout to claim your -15% privilege!'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleLoyaltySubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={loyaltyEmail}
                  onChange={(e) => setLoyaltyEmail(e.target.value)}
                  placeholder={isRtl ? 'بريدك الإلكتروني (مثل: user@gmail.com)' : 'Your primary email address'}
                  className="flex-grow bg-white border border-[#F5F5DC]/20 focus:border-[#F5F5DC] outline-none px-4 py-3.5 text-xs sm:text-sm text-black rounded-none transition-all font-sans"
                />
                
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-[#1B4332] hover:bg-[#F5F5DC] font-black uppercase tracking-widest text-xs rounded-none cursor-pointer transition-all border border-white hover:border-[#F5F5DC]"
                >
                  {isRtl ? 'تفعيل العضوية فورا' : 'Join Club'}
                </button>
              </form>
            )}

            <p className="text-[10px] text-[#F5F5DC]/80 font-mono tracking-wider font-light">
              {isRtl 
                ? 'لا نرسل رسائل مزعجة إطلاقاً. خصوصيتك مغلقة ومضمونة بنسبة 100%' 
                : 'Zero spam. Secure database cataloging. Your privacy is prioritized.'}
            </p>

          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[10000] bg-black/98 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="max-w-4xl relative border border-white/10 shadow-2xl bg-[#0A0A0A]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 text-white hover:text-[#F5F5DC] border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage} 
              className="max-w-full max-h-[85vh] object-contain"
              alt="Preview" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

    </div>
  );
}
