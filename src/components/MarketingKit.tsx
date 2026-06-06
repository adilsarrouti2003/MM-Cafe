import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Pause, RotateCcw, Sparkles, MapPin, Star, Video, Flame, 
  Tv, MessageSquare, Percent, Eye, Coffee, Gift, Copy, Check, Users, UsersRound, Share2, Smartphone
} from 'lucide-react';
import { Language, IMAGES, DICTIONARY } from '../data';

interface MarketingKitProps {
  language: Language;
}

interface ScriptScene {
  timeStart: number;
  timeEnd: number;
  textAr: string;
  textFr: string;
  visualAr: string;
  visualFr: string;
  image: string;
}

const SCRIPT_SCENES: ScriptScene[] = [
  {
    timeStart: 0,
    timeEnd: 5,
    textAr: "كتقلب على بلاصة تهرب فيها من الضوضاء وتركز على خدمتك أو قرايتك؟",
    textFr: "Vous cherchez un endroit pour échapper au bruit et vous concentrer sur vos études ou votre travail ?",
    visualAr: "🎥 لقطة بانورامية هادئة لزبون يركز في حاسوبه بجانب النافذة الواسعة المضيئة.",
    visualFr: "🎥 Plan panoramique calme d'un client concentré sur son ordinateur près de la grande fenêtre lumineuse.",
    image: IMAGES.windowView
  },
  {
    timeStart: 5,
    timeEnd: 10,
    textAr: "مرحبا بيك في مقهانا الراقي ☕.",
    textFr: "Bienvenue dans notre café d'exception ☕.",
    visualAr: "🎥 لقطة مقربة ساحرة لفنجان قهوة كابتشينو ساخن يتصاعد منه البخار مع رغوة ذهبية إبداعية.",
    visualFr: "🎥 Plan serré magnifique sur notre cappuccino crémeux fumant avec un latte art doré.",
    image: IMAGES.coffee
  },
  {
    timeStart: 10,
    timeEnd: 16,
    textAr: "واي فاي سريع، جو هادئ، قهوة بجودة عالية، وخدمة كتخليك تحس براسك مرحب بيك.",
    textFr: "Wifi haut débit, ambiance sereine, café d'exception et un service chaleureux où vous êtes roi.",
    visualAr: "🎥 لقطات سريعة وديناميكية: إدخال رمز الواي فاي، الابتسامة الترحيبية للندلاء، وتوصيل فطور مغربي بلدي.",
    visualFr: "🎥 Séquences rapides : mot de passe Wifi rapide, sourire des serveurs attentionnés et livraison d'un petit-déjeuner Beldi.",
    image: IMAGES.breakfast
  },
  {
    timeStart: 16,
    timeEnd: 23,
    textAr: "سواء جيتي تخدم، تقرا، أو غير ترتاح مع صحابك، هنا غتلقى الجو لي كاتقلب عليه.",
    textFr: "Que vous veniez pour travailler, réviser ou simplement décompresser avec vos proches, vous trouverez l'ambiance idéale.",
    visualAr: "🎥 لقطة لمجموعة أصدقاء يتقاسمون كريب الشوكولاتة والضحك، في زوايا مخملية أنيقة.",
    visualFr: "🎥 Plan de groupe d'amis partageant des crêpes et gaufres au chocolat, riant ensemble dans nos salons en velours.",
    image: IMAGES.crepe
  },
  {
    timeStart: 23,
    timeEnd: 30,
    textAr: "زورنا اليوم وخلي أول فنجان يحكم. ☕✨",
    textFr: "Rendez-nous visite aujourd'hui, et laissez votre première tasse en témoigner. ☕✨",
    visualAr: "🎥 لقطة للعلامة التجارية الفاخرة للقهوة مع الديكور الراقي وعنوان موقعنا بنسليمان لشمس المدينة.",
    visualFr: "🎥 Gros plan du logo élégant du Café, décorations raffinées et adresse géographique de Shams Al Madina à Benslimane.",
    image: IMAGES.interior
  }
];

export default function MarketingKit({ language }: MarketingKitProps) {
  const isRtl = language === 'ar';
  const d = DICTIONARY[language];

  // Video script simulation state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Attraction offer simulator state
  const [selectedOffer, setSelectedOffer] = useState<'bogo' | 'student'>('bogo');
  const [qty, setQty] = useState(2);
  const [itemType, setItemType] = useState<'coffee' | 'breakfast' | 'dessert'>('coffee');
  
  // WhatsApp Broadcast state
  const [selectedTemplate, setSelectedTemplate] = useState<number>(0);
  const [wasCopied, setWasCopied] = useState(false);

  // Micro-Influencers state
  const [influencerCount, setInfluencerCount] = useState(5);

  // Simulated ratings/review helper
  const [simulatedRating, setSimulatedRating] = useState(5);
  const [hasRated, setHasRated] = useState(false);

  // Video Script Simulation effect
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const nextVal = prev + 0.5;
          if (nextVal >= 30) {
            setIsPlaying(false);
            return 30;
          }
          return nextVal;
        });
      }, 500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // Sync active scene index based on simulated current time
  useEffect(() => {
    const matchedIndex = SCRIPT_SCENES.findIndex(
      scene => currentTime >= scene.timeStart && currentTime < scene.timeEnd
    );
    if (matchedIndex !== -1) {
      setActiveSceneIndex(matchedIndex);
    }
  }, [currentTime]);

  const activeScene = SCRIPT_SCENES[activeSceneIndex] || SCRIPT_SCENES[0];

  const handlePlayPause = () => {
    if (currentTime >= 30) {
      setCurrentTime(0);
      setActiveSceneIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleResetScript = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveSceneIndex(0);
  };

  // Attraction Offer Calculator prices
  const getItemPrice = () => {
    if (itemType === 'coffee') return 25; // Cappuccino
    if (itemType === 'breakfast') return 39; // Beldi
    return 32; // Oreo Milkshake
  };

  const getItemName = () => {
    if (itemType === 'coffee') return isRtl ? 'كابوتشينو فاخر' : 'Cappuccino Crème';
    if (itemType === 'breakfast') return isRtl ? 'الفطور البلدي' : 'Petit-Déjeuner Beldi';
    return isRtl ? 'ميلك شيك أوريو' : 'Milkshake Oréo';
  };

  const calculateOffer = () => {
    const singlePrice = getItemPrice();
    const originalTotal = singlePrice * qty;
    let finalTotal = originalTotal;
    let saved = 0;

    if (selectedOffer === 'bogo') {
      // "Buy one get second half price". Pairs get 50% discount on 2nd item
      const numPairs = Math.floor(qty / 2);
      saved = numPairs * (singlePrice * 0.5);
      finalTotal = originalTotal - saved;
    } else {
      // "Student discount": 20% flat discount
      saved = originalTotal * 0.2;
      finalTotal = originalTotal - saved;
    }

    return {
      originalTotal,
      finalTotal,
      saved
    };
  };

  const { originalTotal, finalTotal, saved } = calculateOffer();

  // WhatsApp broadcast drafts
  const broadcastTemplates = [
    {
      titleAr: "📢 عرض اليوم الثاني بنصف الثمن",
      titleFr: "📢 Offre BOGO 2ème à -50%",
      textAr: `🌟 عرض خاص وحصري من مقهى دريم كوفي بنسليمان! ☕🍳\n\nاشري قهوتك المفضلة أو الفطور البلدي الممتاز وخذ الثاني بنصف الثمن! 😍\nنشط عرضك الآن بزيارتنا في غولف شمس المدينة.\n\n📞 للاستفسار والحجز السريع: +212638309081\n📍 الموقع: غولف شمس المدينة، بنسليمان`,
      textFr: `🌟 Offre Exclusive chez Dream Coffee à Benslimane ! ☕🍳\n\nCommandez votre boisson préférée ou notre authentique petit-déjeuner Beldi, et obtenez le deuxième à MOITIÉ PRIX ! 😍\nProfitez-en en nous rendant visite dès aujourd'hui.\n\n📞 Infos & Réservations : +212638309081\n📍 Adresse : Golf chamss lmadina, Ben Slimane 13000`
    },
    {
      titleAr: "📚 تخفيض الطلبة والتركيز -20%",
      titleFr: "📚 Spécial Étudiants -20% Focus",
      textAr: `🎓 محتاج بلاصة هادئة وبدون إزعاج لمراجعة دروسك؟ 🧠📖\n\nدريم كوفي في بنسليمان كيرحب بالطلبة! استمتع بوي-فاي مجاني وسريع، هدوء مطلق، وخصم 20% فوري على جميع مشروباتنا وحلوياتنا الرائعة! 🎉\n\n📍 زورنا اليوم: غولف شمس المدينة، بنسليمان`,
      textFr: `🎓 Besoin d'un espace calme pour réviser ou travailler sereinement ? 🧠📖\n\nDream Coffee à Benslimane vous chouchoute ! Profitez d'un WIFI haut débit gratuit, d'une ambiance zen et d'une RÉDUCTION DE 20% immédiate sur toutes les boissons et douceurs sur présentation de votre carte étudiant ! 🎉\n\n📍 Adresse : Golf chamss lmadina, Ben Slimane 13000`
    },
    {
      titleAr: "⚽ استمتع بمشاهدة المبارات بالجو المثالي",
      titleFr: "⚽ Match Live dans une Ambiance de Feu",
      textAr: `🏆 كلاسيكو حماسي ومباريات قوية مباشرة بأحدث الشاشات والجو الحماسي الأنيق! 📺🔥\n\nاحجز طاولتك مع صحابك في مقهى دريم كوفي وعيش المتعة الحقيقية مع أحسن خدمة ومشروبات باردة دافئة على ذوقك.\n\n📞 لحجز طاولتك مجاناً فوراً قبل النفاذ: +212638309081`,
      textFr: `🏆 Ne ratez plus aucun grand match ! Vivez l'ambiance des grands soirs sur nos écrans géant avec vos amis à Dream Coffee ! 📺🔥\n\nService impeccable, canapés confortables et boissons fraîches/chaudes d'exception.\n\n📞 Réservez gratuitement votre table avant le coup d'envoi : +212638309081`
    }
  ];

  const handleCopyBroadcast = () => {
    const textToCopy = isRtl ? broadcastTemplates[selectedTemplate].textAr : broadcastTemplates[selectedTemplate].textFr;
    navigator.clipboard.writeText(textToCopy);
    setWasCopied(true);
    setTimeout(() => setWasCopied(false), 2000);
  };

  return (
    <section id="marketing-kit" className="relative py-20 bg-transparent border-t border-brand-border/60 overflow-hidden">
      {/* Decorative side blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#cda052]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#cda052]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#cda052]/10 border border-[#cda052]/30 text-[#cda052] font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4.5 h-4.5 animate-pulse" />
            <span>{isRtl ? 'لوحة ترويج شمس المدينة' : 'Marketing Center'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {isRtl ? 'صندوق الأدوات التسويقية للمقهى 🚀' : 'Kit Marketing du Café 🚀'}
          </h2>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            {isRtl 
              ? 'نهج فريد يدمج بين العروض الاستثنائية للطلبة والمشتركين، ترويج خرائط Google، وتوليد حملات رسائل WhatsApp الذكية لجلب الزبائن.'
              : 'Une approche intégrée alliant offres exclusives, référencement Google Maps et diffusion de campagnes WhatsApp de choc.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#cda052] to-transparent mx-auto mt-2" />
        </div>

        {/* MAIN ROW layout */}
        <div className="max-w-4xl mx-auto space-y-8">

          {/* ================= STRATEGIC BENTO GRID OF CAMPAIGN WEAPONS ================= */}
          <div className="space-y-6">

            {/* Grid structure for strategies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Attraction Offers & Interactive Price Calculator */}
              <div className="bg-brand-card border border-brand-border rounded-3xl p-5 hover:border-gold-prime/40 transition-all flex flex-col justify-between space-y-4 shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
                <div className="space-y-2">
                  <div className="p-2.5 bg-amber-500/10 text-[#cda052] rounded-xl w-fit">
                    <Percent className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-extrabold text-sm sm:text-base">
                    {isRtl ? '🎁 العروض الجاذبة والاستثنائية' : '🎁 Offres d\'Attraction Actives'}
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    {isRtl ? 'خطة "اشري واحدا وخذ الثاني بنصف الثمن" وتخفيض الطلبة لزيادة الإقبال.' : 'Simuler des offres BOGO ou étudiants pour tester la rentabilité.'}
                  </p>
                </div>

                {/* Live Small Calculator inside Bento Card */}
                <div className="bg-black/60 p-3.5 rounded-2xl border border-neutral-800 space-y-3">
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => setSelectedOffer('bogo')}
                      className={`flex-grow py-1 px-2 rounded-lg text-[9px] font-extrabold transition-all ${
                        selectedOffer === 'bogo' ? 'bg-[#cda052] text-black' : 'bg-neutral-900 text-gray-400'
                      }`}
                    >
                      {isRtl ? 'الثاني بنصف الثمن' : 'BOGO -50%'}
                    </button>
                    <button
                      onClick={() => setSelectedOffer('student')}
                      className={`flex-grow py-1 px-2 rounded-lg text-[9px] font-extrabold transition-all ${
                        selectedOffer === 'student' ? 'bg-[#cda052] text-black' : 'bg-neutral-900 text-gray-400'
                      }`}
                    >
                      {isRtl ? 'خصم الطلبة -20%' : 'Étudiants -20%'}
                    </button>
                  </div>

                  {/* Pick item */}
                  <div className="grid grid-cols-3 gap-1.5 text-[9px] font-bold">
                    <button 
                      onClick={() => setItemType('coffee')}
                      className={`p-1.5 rounded-md border ${itemType === 'coffee' ? 'border-[#cda052]/40 bg-amber-500/5 text-[#cda052]' : 'border-neutral-800 text-gray-400'}`}
                    >
                      {isRtl ? 'قهوة' : 'Café'}
                    </button>
                    <button 
                      onClick={() => setItemType('breakfast')}
                      className={`p-1.5 rounded-md border ${itemType === 'breakfast' ? 'border-[#cda052]/40 bg-amber-500/5 text-[#cda052]' : 'border-neutral-800 text-gray-400'}`}
                    >
                      {isRtl ? 'فطور بيـلدي' : 'Beldi'}
                    </button>
                    <button 
                      onClick={() => setItemType('dessert')}
                      className={`p-1.5 rounded-md border ${itemType === 'dessert' ? 'border-[#cda052]/40 bg-amber-500/5 text-[#cda052]' : 'border-neutral-800 text-gray-400'}`}
                    >
                      {isRtl ? 'ميلك شيك' : 'Oreo'}
                    </button>
                  </div>

                  {/* Qty controller */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>{isRtl ? 'العدد :' : 'Quantité :'}</span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        className="w-5 h-5 bg-neutral-900 hover:bg-neutral-800 rounded flex items-center justify-center font-bold text-white border border-neutral-800 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-mono font-bold text-white text-xs">{qty}</span>
                      <button 
                        onClick={() => setQty(Math.min(10, qty + 1))}
                        className="w-5 h-5 bg-neutral-900 hover:bg-neutral-800 rounded flex items-center justify-center font-bold text-white border border-neutral-800 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Calculation Report */}
                  <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-[11px] font-mono">
                    <div className="text-left">
                      <span className="text-gray-500 block text-[9px] line-through">{originalTotal} MAD</span>
                      <span className="text-[#cda052] font-black">{finalTotal} MAD</span>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded text-[9px] font-bold">
                      {isRtl ? 'وفرت ' : 'Économisé '} {saved} MAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Google Maps Domination Booster */}
              <div className="bg-brand-card border border-brand-border rounded-3xl p-5 hover:border-gold-prime/40 transition-all flex flex-col justify-between space-y-4 shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
                <div className="space-y-2">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-extrabold text-sm sm:text-base">
                    {isRtl ? '📍 تقييمات خرائط Google' : '📍 Visibilité Google Maps'}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {isRtl 
                      ? 'السر لتصدر نتائج البحث ببنسليمان. اطلب فوراً تقييمات بوفيدباك حقيقي عبر رمز كود QR سريع.'
                      : 'Stimulez les avis positifs pour grimper au sommet des classements de recherche de restaurants.'}
                  </p>
                </div>

                {/* Rating component game */}
                <div className="bg-neutral-950 p-3 rounded-2xl border border-neutral-800 text-center space-y-2">
                  <span className="text-[10px] text-gray-500 block font-bold uppercase">
                    {isRtl ? 'جرب تقييم المقهى بنجمة :' : 'Simuler un avis :'}
                  </span>
                  
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(starIdx => (
                      <button
                        key={starIdx}
                        onClick={() => {
                          setSimulatedRating(starIdx);
                          setHasRated(true);
                        }}
                        className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star 
                          className={`w-5 h-5 ${
                            starIdx <= simulatedRating ? 'fill-amber-400' : 'text-neutral-700'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {hasRated ? (
                      <motion.p 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[10px] text-emerald-400 font-bold"
                      >
                        🎉 {isRtl ? 'شكراً لتقييمك الرائع 5/5 في بنسليمان!' : 'Merci ! Avis enregistré sur Maps.'}
                      </motion.p>
                    ) : (
                      <p className="text-[9px] text-gray-500 font-medium">
                        {isRtl ? 'اضغط لتقييم تجربة المقهى الآن' : 'Sélectionnez des étoiles'}
                      </p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* FULL WIDTH CARD: WhatsApp Broadcast list (collecting client contacts & sending campaign) */}
            <div className="bg-brand-card border border-brand-border rounded-3xl p-6 hover:border-gold-prime/40 transition-all space-y-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-500/15 text-emerald-400 rounded-lg">
                      <Smartphone className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-white font-extrabold text-sm sm:text-base">
                      {isRtl ? '💬 مولد رسائل WhatsApp Broadcast الفعالة' : '💬 Campagnes WhatsApp Broadcast Directes'}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400">
                    {isRtl 
                      ? 'اختر العرض وانسخ النص الترويجي لإرساله للمشتركين لزيادة مبيعات مقهى إم إم في ثوانٍ!' 
                      : 'Choisissez un modèle et copiez le message prêt à diffuser pour doper vos visites.'}
                  </p>
                </div>
              </div>

              {/* Broadcast templates selector tab */}
              <div className="flex gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
                {broadcastTemplates.map((tpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedTemplate(idx);
                      setWasCopied(false);
                    }}
                    className={`px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      selectedTemplate === idx
                        ? 'bg-[#cda052] text-black shadow-lg shadow-[#cda052]/10'
                        : 'bg-neutral-900 text-gray-400 hover:text-white'
                    }`}
                  >
                    {isRtl ? tpl.titleAr : tpl.titleFr}
                  </button>
                ))}
              </div>

              {/* Message Draft Viewer */}
              <div className="relative bg-neutral-950 p-4 rounded-2xl border border-neutral-900 group">
                <p className="text-[11px] sm:text-xs text-gray-300 whitespace-pre-line font-medium leading-relaxed max-h-40 overflow-y-auto">
                  {isRtl ? broadcastTemplates[selectedTemplate].textAr : broadcastTemplates[selectedTemplate].textFr}
                </p>

                {/* Copy button */}
                <button
                  onClick={handleCopyBroadcast}
                  className="absolute bottom-3 top-3 right-3 shrink-0 flex flex-col justify-center items-center gap-1 bg-[#cda052]/10 hover:bg-[#cda052]/20 text-[#cda052] px-3.5 rounded-xl border border-[#cda052]/30 transition-all text-xs font-bold font-mono cursor-pointer"
                >
                  {wasCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[8px] text-emerald-400">{isRtl ? 'تم النسخ' : 'Copié'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[8px]">{isRtl ? 'نسخ النص' : 'Copier'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
