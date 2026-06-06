import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Gift, MessageCircle, Percent, ShieldCheck, Zap } from 'lucide-react';
import { Language, DICTIONARY } from '../data';

interface MarketingSectionProps {
  language: Language;
}

export default function MarketingSection({ language }: MarketingSectionProps) {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  
  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  const handleVIPRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSignedUp(true);
    setEmail('');
  };

  const handleWhatsAppChat = () => {
    const encodedMsg = encodeURIComponent(d.whatsappMessage);
    const whatsappUrl = `https://wa.me/212638309081?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-transparent text-gray-200 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Section 1: Lead Magnet (Join Private Club) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-brand-card to-[#281b12]/90 border border-gold-prime/20 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] glow-gold">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#cda052]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cda052]/10 text-[#cda052] font-mono text-xs font-bold uppercase">
                <Percent className="w-3.5 h-3.5" />
                <span>{isRtl ? 'عرض حصري ومحدود' : 'Offre Exclusive'}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
                  {d.marketingTitle}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {d.marketingSubtitle}
                </p>
              </div>

              {signedUp ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-[#cda052]/10 border border-[#cda052]/40 rounded-2xl space-y-3"
                >
                  <div className="flex items-center gap-3 text-[#cda052]">
                    <Gift className="w-6 h-6 animate-bounce" />
                    <span className="font-extrabold text-base sm:text-lg">
                      {isRtl ? 'مبروك! كود خصمك المالي هو: MMVIP15' : 'Code Réduction : MMVIP15'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {d.marketingSuccess}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleVIPRegister} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={d.marketingPlaceholder}
                    className="w-full bg-[#181818] border border-[#2d2112]/55 focus:border-[#cda052] rounded-xl px-4 py-3.5 text-sm text-white outline-none"
                  />
                  <button
                    type="submit"
                    className="sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#cda052] to-[#b48737] hover:from-[#f3cc8c] hover:to-[#cda052] text-black font-extrabold rounded-xl shadow-lg hover:shadow-[#cda052]/20 transition-all duration-300 text-sm cursor-pointer"
                  >
                    <span>{d.marketingBtn}</span>
                    <Send className="w-4 h-4 shrink-0" />
                  </button>
                </form>
              )}

              {/* Trust Signal markers */}
              <div className="pt-4 border-t border-[#2d2112]/20 flex flex-wrap gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#cda052]" />
                  <span>{isRtl ? 'حماية تامة من الرسائل المزعجة' : 'Pas de spam, désabonnement 1 clic'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#cda052]" />
                  <span>{isRtl ? 'استرداد فوري في المطعم' : 'Valable immédiatement sur place'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Hot Marketing Trigger (WhatsApp direct chat / support) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className={`space-y-4 ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white">
                {isRtl ? 'تحتاج لمساعدة أو تفضل الطلب عبر الهاتف؟' : "Besoin d'aide ou commande par téléphone ?"}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {isRtl 
                  ? 'يرحب فريق خدمة زبناء مقهى إم إم باتصالاتكم ورسائلكم للاستفسارات عن بوفيه فطور، أو توقيت المبارات، أو كعكات أعياد الميلاد الخاصة بكم.' 
                  : "Notre service client réceptif et attentionné gère vos requêtes, anniversaires, matchs de football en direct ou tout autre événement en un instant."}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppChat}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl shadow-[0_10px_20px_-10px_rgba(16,185,129,0.4)] cursor-pointer transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 stroke-[2.5]" />
              <span className="text-sm sm:text-base">{d.whatsappBtn}</span>
            </motion.button>

            <div className="pt-4 flex justify-center lg:justify-start gap-4 text-xs text-gray-500 font-mono">
              <span>{isRtl ? 'الهاتف: 0661430040' : 'Tél: 06 61 43 00 40'}</span>
              <span>•</span>
              <span>{isRtl ? 'موقع: بنسليمان' : 'Lieu: Benslimane'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
