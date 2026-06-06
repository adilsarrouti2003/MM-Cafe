import { motion } from 'motion/react';
import { ChefHat, Coffee, Award, Shield, CheckCircle } from 'lucide-react';
import { Language, DICTIONARY, IMAGES } from '../data';

interface AboutViewProps {
  language: Language;
}

export default function AboutView({ language }: AboutViewProps) {
  const isRtl = language === 'ar';
  const d = DICTIONARY[language];

  return (
    <div className="py-24 sm:py-36 bg-[#FAF7F2] text-[#1C1C1C] relative animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[#B89020] font-mono text-xs uppercase tracking-[0.2em] font-medium">
            ✦ {isRtl ? 'حكايتنا ونقاط قوتنا' : 'Our Exclusive Heritage'} ✦
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#1C1C1C] tracking-tight">
            {isRtl ? 'الأصل، الضيافة والقصة كالمتحف' : 'The Luxury Narrative'}
          </h1>
          <div className="w-12 h-[1px] bg-[#B89020]/35 mx-auto pt-2" />
        </div>

        {/* Cinematic Grid Narrative (Hotel-like style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase text-[#B89020] tracking-widest block font-bold">SHAMS AL MADINA, BENSLIMANE</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1C1C1C] leading-normal">
              {isRtl 
                ? 'ملاذ دافئ مصمم للراحة والهروب من تسارع الحياة اليومية.' 
                : 'A peaceful sanctuary meticulously curated for quiet contemplation.'}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
              {d.aboutP1}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
              {d.aboutP2}
            </p>
          </div>

          <div className="md:col-span-6 relative aspect-[4/3] sm:aspect-square overflow-hidden border border-[#B89020]/20 bg-[#FAF7F2] shadow-2xl rounded-2xl">
            <img 
              src={IMAGES.interior} 
              alt="Heritage Interior" 
              className="w-full h-full object-cover brightness-[0.98] hover:brightness-[1.04] hover:scale-105 transition-all duration-[1000ms]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Culinary Philosophy Cards */}
        <div className="space-y-12">
          <h3 className="text-center font-serif text-xl sm:text-2xl text-[#1C1C1C] font-medium">
            {isRtl ? 'قيمنا وأسس التميز لدينا' : 'Our Foundations of Absolute Luxury'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#B89020]/15 space-y-4 rounded-2xl hover-premium-lift shadow-[0_15px_40px_rgba(184,144,32,0.03)] duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B89020]/10 text-[#B89020] flex items-center justify-center border border-[#B89020]/20">
                <ChefHat className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-serif text-[#1C1C1C] font-semibold text-base">{isRtl ? 'المواد الغذائية النقية' : 'Pristine Local Ingredients'}</h4>
              <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                {isRtl ? 'فطورنا البلدي والمسمن يطهى بالزبدة البلدية الطازجة والعسل الطبيعي وعصير البرتقال المعصور فورا.' : 'Everything from traditional Beldi eggs to homemade crepes is cooked with premium state butter, and handpressed organic citrus.'}
              </p>
            </div>

            <div className="p-8 bg-white border border-[#B89020]/15 space-y-4 rounded-2xl hover-premium-lift shadow-[0_15px_40px_rgba(184,144,32,0.03)] duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B89020]/10 text-[#B89020] flex items-center justify-center border border-[#B89020]/20">
                <Coffee className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-serif text-[#1C1C1C] font-semibold text-base">{isRtl ? 'فن استخلاص الإسبريسو' : 'True Barista Craftsmanship'}</h4>
              <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                {isRtl ? 'حبوب بن فاخرة مستخلصة بأحدث الضغوطات والحرارة المتوازنة لتقدم نكهة شوكولاتيّة عطرية متكاملة.' : 'Our beans are direct-cut from specialty roasters, custom-pounded and pulled under exquisite water telemetry for full aroma.'}
              </p>
            </div>

            <div className="p-8 bg-white border border-[#B89020]/15 space-y-4 rounded-2xl hover-premium-lift shadow-[0_15px_40px_rgba(184,144,32,0.03)] duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B89020]/10 text-[#B89020] flex items-center justify-center border border-[#B89020]/20">
                <Shield className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-serif text-[#1C1C1C] font-semibold text-base">{isRtl ? 'الأجواء العائلية الخاصة' : 'Secluded Family Comfort'}</h4>
              <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                {isRtl ? 'نخصص مساحات وصالونات مريحة توفر الأمان والخصوصية والصوت الهادئ لراحة العائلات.' : 'Catering is prioritized for families looking for safe, soft, pristine spaces with zero external congestion.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
