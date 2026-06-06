import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarRange, Music, Sparkles, Award, Star, Check, Gift } from 'lucide-react';
import { Language, DICTIONARY } from '../data';

interface EventsViewProps {
  language: Language;
}

export default function EventsView({ language }: EventsViewProps) {
  const isRtl = language === 'ar';
  const d = DICTIONARY[language];
  const [activeTab, setActiveTab] = useState<'all' | 'music' | 'tastings'>('all');
  const [claimEmail, setClaimEmail] = useState('');
  const [claimedCode, setClaimedCode] = useState<string | null>(null);

  const events = [
    {
      id: 1,
      titleAr: 'سحر الموسيقى التقليدية (آلة العود حي المباشر)',
      titleFr: 'Soirées Acoustiques (Oud Live Sessions)',
      dateAr: 'كل جمعة وسبت (ابتداء من 19:30)',
      dateFr: 'Chaque Vendredi & Samedi dès 19h30',
      descAr: 'استمع إلى أرق النغمات والتقاسيم العربية على العود برفقة كبار العازفين المحليين خلال وجبة المساء الراقية.',
      descFr: 'Lounge night with pristine live acoustic tunes played by local Moroccan masters while enjoying desserts.',
      type: 'music',
      time: '19:30 - 22:30',
      costAr: 'دخول مجاني بالطلب',
      costFr: 'Entrée Libre / Consommation'
    },
    {
      id: 2,
      titleAr: 'شاي الأصيل والحلويات المغربية الفاخرة رويال',
      titleFr: 'Moroccan Royal High-Tea Gathering',
      dateAr: 'يومياً (من 16:00 حتى 19:00)',
      dateFr: 'Tous les après-midis de 16h00 à 19h00',
      descAr: 'براد شاي أصيل مشحر مع باقة مجهزة بعناية من حلويات اللوز التقليدية والمسمن المورق بالزبدة واللوز والعسل المثالي.',
      descFr: 'A pristine selection of custom Moroccan mint tea served with artisanal almond pastries and traditional sweets.',
      type: 'tastings',
      time: '16:00 - 19:00',
      costAr: 'دخول مجاني بالطلب',
      costFr: 'Entrée Libre / Consommation'
    }
  ];

  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(e => e.type === activeTab);

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimEmail) return;
    // Generate code
    const generated = "MM-VIP-" + Math.floor(1000 + Math.random() * 9000);
    setClaimedCode(generated);
  };

  return (
    <div className="py-24 sm:py-36 bg-[#F5F5DC] text-[#1B4332] relative animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[#1B4332] font-mono text-xs uppercase tracking-[0.2em] font-medium">
            ✦ {isRtl ? 'فعاليات لربط مجتمعنا الفاخر' : 'Exclusive Communal Rendezvous'} ✦
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4332] tracking-tight">
            {isRtl ? 'الفعاليات والأمسيات الثقافية' : 'Events & Privileges'}
          </h1>
          <p className="text-[#1B4332]/85 text-xs sm:text-sm font-light leading-relaxed font-sans">
            {isRtl ? 'تجربة مقهى بنسليمان تتخطى حدود الوجبة إلى بناء أجمل الذكريات الفنية والأدابة العائلية.' : 'Experiencing life together through cultural notes, acoustic afternoons, and family gatherings.'}
          </p>
          <div className="w-12 h-[1px] bg-[#1B4332]/35 mx-auto pt-2" />
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all cursor-pointer ${
              activeTab === 'all' ? 'bg-[#1B4332] text-white border-[#1B4332]' : 'bg-white text-[#1B4332]/70 border-[#1B4332]/20 hover:text-[#1B4332]'
            }`}
          >
            {isRtl ? 'الكل' : 'All Events'}
          </button>
          
          <button
            onClick={() => setActiveTab('music')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all cursor-pointer ${
              activeTab === 'music' ? 'bg-[#1B4332] text-white border-[#1B4332]' : 'bg-white text-[#1B4332]/70 border-[#1B4332]/20 hover:text-[#1B4332]'
            }`}
          >
            {isRtl ? 'أمسيات العود' : 'Live Oud'}
          </button>

          <button
            onClick={() => setActiveTab('tastings')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all cursor-pointer ${
              activeTab === 'tastings' ? 'bg-[#1B4332] text-white border-[#1B4332]' : 'bg-white text-[#1B4332]/70 border-[#1B4332]/20 hover:text-[#1B4332]'
            }`}
          >
            {isRtl ? 'جلسات الشاي' : 'High Tea'}
          </button>
        </div>

        {/* Events listing */}
        <div className="space-y-8">
          {filteredEvents.map(e => (
            <div 
              key={e.id}
              className="bg-white border border-[#1B4332]/15 p-6 sm:p-10 flex flex-col md:flex-row justify-between gap-8 hover-premium-lift shadow-[0_15px_40px_rgba(27,67,50,0.03)] rounded-2xl duration-300"
            >
              <div className="space-y-4 max-w-2xl text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1B4332] animate-pulse" />
                  <span className="text-xs font-mono text-[#1B4332] tracking-widest uppercase">{isRtl ? e.dateAr : e.dateFr}</span>
                </div>

                <h3 className="font-serif text-lg sm:text-2xl text-[#1B4332] font-semibold">
                  {isRtl ? e.titleAr : e.titleFr}
                </h3>

                <p className="text-[#1B4332]/85 text-xs sm:text-sm font-light leading-relaxed font-sans">
                  {isRtl ? e.descAr : e.descFr}
                </p>
              </div>

              <div className="md:border-l md:border-[#1B4332]/10 md:pl-8 flex flex-col justify-center shrink-0 space-y-2 text-left md:w-56">
                <div className="text-xs text-gray-400 font-mono">
                  <span>{isRtl ? 'التوقيت اليومي:' : 'Daily Schedule:'}</span>
                  <span className="block text-[#1B4332] font-semibold mt-0.5">{e.time}</span>
                </div>

                <div className="text-xs text-gray-400 font-mono pt-3 border-t border-[#1B4332]/10">
                  <span>{isRtl ? 'تكلفة الدخول والحضور:' : 'Admission & Fees:'}</span>
                  <span className="block text-[#1B4332] font-bold mt-0.5">{isRtl ? e.costAr : e.costFr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Membership Benefits (Teaser generator) */}
        <div className="bg-white border border-[#1B4332]/20 p-8 sm:p-12 text-center rounded-2xl space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1B4332]/5 rounded-bl-full pointer-events-none" />
          <Award className="w-10 h-10 text-[#1B4332] mx-auto animate-pulse" />
          
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-xl sm:text-3xl font-serif text-[#1B4332] font-semibold">{isRtl ? 'بطاقة الامتياز الرقمية لتخفيض شمس المدينة' : 'Claim Your Premium Guest Card'}</h3>
            <p className="text-[#1B4332]/85 text-xs sm:text-sm font-light font-sans">
              {isRtl 
                ? 'عند مسح بريدك الإلكتروني هنا، سنمنحك كود عضوية مميز فوري لتخفيض 15% على كل طلبات الفطور والحلويات بمقهانا كخطوة اهتمام أولى بنا.' 
                : 'Instantly generate an elite passcode credentials to receive 15% discount for your regular morning coffee tables of Benslimane.'}
            </p>
          </div>

          {claimedCode ? (
            <div className="p-6 bg-[#F5F5DC] border border-[#1B4332] rounded-xl max-w-sm mx-auto space-y-3 shadow-md relative z-10 animate-fade-in text-[#1B4332]">
              <span className="text-[10px] text-gray-550 font-mono block tracking-widest uppercase font-bold">YOUR VIP PASSCODE</span>
              <p className="text-[#1B4332] text-3xl font-mono font-black tracking-widest">{claimedCode}</p>
              <span className="text-xs text-emerald-600 font-bold block">{isRtl ? '✓ كود آمن ونشط جاهز للاستخدام' : '✓ Active Member Key Secured'}</span>
              <p className="text-gray-550 text-[10px] leading-relaxed font-light">
                {isRtl ? 'اظهر هذا الكود الفريد من هاتفك أثناء الفوترة بقسم النقدية للاستمتاع فوراً بخصم 15%.' : 'Take a screenshot of this page or show it to our cashier to instantly claim 15% loyalty fee discount.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleClaimSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
              <input 
                type="email" 
                required
                value={claimEmail}
                onChange={(e) => setClaimEmail(e.target.value)}
                placeholder={isRtl ? 'أدخل بريدك الإلكتروني لتوليد الكود' : 'Type your primary email'}
                className="flex-grow bg-white border border-[#1B4332]/25 px-4 py-3 text-sm text-black focus:border-[#1B4332] outline-none rounded-none transition-all"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#1B4332] text-white hover:bg-[#1B4332]/95 font-semibold uppercase tracking-widest font-mono text-xs rounded-none border border-[#1B4332] cursor-pointer transition-all shrink-0"
              >
                {isRtl ? 'توليد الكود الفوري' : 'Generate Code'}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
