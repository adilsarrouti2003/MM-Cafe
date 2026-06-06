import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChefHat, 
  Coffee, 
  Award, 
  Shield, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  Users, 
  Briefcase, 
  BookOpen, 
  MapPin, 
  Compass, 
  ChevronDown,
  HelpCircle,
  Gem,
  Smile
} from 'lucide-react';
import { Language, DICTIONARY, IMAGES } from '../data';

interface AboutViewProps {
  language: Language;
}

export default function AboutView({ language }: AboutViewProps) {
  const isRtl = language === 'ar';
  const d = DICTIONARY[language];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const BRAND_STORIES = {
    ar: {
      tag: "حكايتنا وفلسفتنا",
      title: "أكثر من مجرد وجهة...",
      subtitle: "مساحة تعيش فيها أجمل لحظات يومك",
      p1: "في قلب مدينة بنسليمان، يوجد مكان صُمم ليكون أكثر من فضاء للجلوس أو الاستراحة. Dream Coffee تجربة متكاملة تجمع بين الراحة، الأناقة، الضيافة الراقية، والأجواء التي تجعل كل لحظة أكثر قيمة.",
      p2: "سواء كنت تبحث عن مكان هادئ للتركيز، لقاء مميز مع الأصدقاء، مساحة مريحة للعائلة، أو بيئة مناسبة للاجتماعات والعمل والدراسة، ستجد هنا كل ما تحتاجه في أجواء صُممت بعناية لتلائم مختلف أنماط الحياة.",
      
      inspirationTitle: "حيث يلتقي الهدوء بالإلهام",
      inspirationDesc: "كل زاوية داخل Dream Coffee صُممت لتمنحك شعوراً بالراحة منذ اللحظة الأولى. إضاءة متوازنة، تصميم عصري أنيق، تفاصيل دافئة، أجواء هادئة، ومساحات مريحة تجعل المكان مثالياً للتركيز أو الاسترخاء أو قضاء وقت ممتع مع الأشخاص الذين يهمونك. هنا لا يتعلق الأمر بالمكان فقط، بل بالشعور الذي يرافقك أثناء وجودك فيه.",
      
      forEveryoneTitle: "مساحة للجميع",
      forEveryoneSubtitle: "يرحب Dream Coffee بجميع الفئات والأذواق ويقدم خدمات تناسب نمط حياتهم:",
      
      hoursTitle: "تجربة مختلفة في كل ساعة من اليوم",
      hoursSubtitle: "فضاء يتغير إيقاعه ليمنحك التجربة المثالية دائماً:",
      
      designTitle: "التصميم الذي يترك انطباعاً لا يُنسى",
      designSubtitle: "تم تطوير Dream Coffee ليكون فضاءً يجمع بين الأناقة والراحة. كل عنصر داخل المكان تم اختياره بعناية لفائدة زوارنا الكرام:",
      
      qualityTitle: "الجودة في كل التفاصيل",
      qualitySubtitle: "نؤمن أن التميز لا يأتي بالصدفة، لذا نعمل باستمرار على تطوير التجربة من خلال أدق التفاصيل.",
      
      whyUsTitle: "لماذا يختارنا الزوار؟",
      whyUsSubtitle: "لأنهم يجدون في ملاذنا قيماً استثنائية تفوق التوقعات:",
      
      locationTitle: "موقع استراتيجي في قلب بنسليمان",
      locationDesc: "يقع Dream Coffee في موقع مميز يسهل الوصول إليه من مختلف أحياء المدينة ليكون ملتقى دائماً لمختلف الفئات.",
    },
    fr: {
      tag: "NOTRE HISTOIRE & PHILOSOPHIE",
      title: "Plus qu’une simple destination...",
      subtitle: "Vivez vos plus beaux moments au quotidien",
      p1: "Au cœur de Benslimane, nous avons façonné un espace pensé pour être bien plus qu'un simple café de passage. Dream Coffee est une expérience globale alliant confort absolu, haute élégance, tact féminin raffiné et hospitalité authentique.",
      p2: "Que vous cherchiez un coin studieux pour recharger votre créativité, un point de ralliement chaleureux en famille ou entre amis, ou un environnement modulable propice aux affaires, notre café s'adapte à tous vos styles de vie.",
      
      inspirationTitle: "Où le calme rencontre l'inspiration",
      inspirationDesc: "Chaque recoin de Dream Coffee est conçu pour vous bercer dès le premier instant. Une acoustique feutrée, des lumières tamisées, des accents d'ébénisterie authentique et des plantes verdoyantes créent le sanctuaire parfait pour travailler, lire ou partager avec les personnes qui comptent. L'expérience transcende le lieu : c'est un pur état d'esprit.",
      
      forEveryoneTitle: "Un Espace Dédié à Tous",
      forEveryoneSubtitle: "Dream Coffee accueille chaleureusement chacune et chacun d'entre vous :",
      
      hoursTitle: "Une Expérience Unique à Chaque Heure",
      hoursSubtitle: "Le rythme de notre espace épouse délicatement l'évolution de votre journée :",
      
      designTitle: "Un Design Mémorable, Des Lignes Inspirantes",
      designSubtitle: "Dream Coffee est une ode au design contemporain et chaleureux. Chaque élément architectural a été soigneusement sélectionné pour vous émerveiller :",
      
      qualityTitle: "Le Souci de Chaque Détail",
      qualitySubtitle: "L'excellence n'est jamais le fruit du hasard. Nous renouvelons sans cesse notre promesse de perfection à travers une attention totale.",
      
      whyUsTitle: "Pourquoi Nos Visiteurs Nous Choisissent-Ils ?",
      whyUsSubtitle: "Parce qu'ils recherchent une signature d'exception absente des adresses traditionnelles :",
      
      locationTitle: "Un Emplacement Stratégique à Benslimane",
      locationDesc: "Idéalement implanté, Dream Coffee offre un accès rapide et instinctif de toutes les avenues de la ville pour vous accueillir en tout confort.",
    }
  };

  const story = BRAND_STORIES[language];

  const forEveryoneCards = [
    {
      icon: Briefcase,
      titleAr: "للمهنيين ورواد الأعمال",
      titleFr: "Professionnels & Entrepreneurs",
      descAr: "بيئة مريحة للاجتماعات، التخطيط، العمل عن بعد، وإنجاز المهام اليومية في أجواء هادئة ومنظمة.",
      descFr: "Un cadre studieux et structuré pour vos dossiers, réunions, séances de brainstorming et télétravail serein."
    },
    {
      icon: BookOpen,
      titleAr: "للطلاب والباحثين",
      titleFr: "Étudiants & Chercheurs",
      descAr: "مساحة مناسبة للتركيز، الدراسة، القراءة، وإنجاز المشاريع الأكاديمية بنشاط.",
      descFr: "Le calme absolu combiné à notre Wi-Fi fibre haut débit pour se focaliser sur vos lectures et révisions."
    },
    {
      icon: Users,
      titleAr: "للعائلات",
      titleFr: "Familles",
      descAr: "جلسات مريحة وأجواء مناسبة لقضاء أوقات ممتعة مع العائلة والأطفال بكل أمان وخصوصية.",
      descFr: "Un accueil sécurisé pour cocooner et partager de fiers moments avec vos proches."
    },
    {
      icon: Smile,
      titleAr: "للأصدقاء",
      titleFr: "Ami(e)s",
      descAr: "مكان مثالي للقاءات اليومية وصناعة الذكريات الجميلة بجانب المشروبات اللذيذة.",
      descFr: "Le repaire rêvé pour de longues discussions, des éclats de rire et des souvenirs merveilleux."
    }
  ];

  const dailySchedule = [
    {
      time: "08:00 - 12:00",
      titleAr: "صباح مليء بالطاقة",
      titleFr: "Matinée Énergétique",
      descAr: "بداية هادئة ومنظمة ليوم ناجح مع فطورنا البلدي الساخن وطلات مشمسة.",
      descFr: "Une aube paisible et ordonnée pour réveiller vos ambitions avec un café d'arôme royal et des toasts chauds."
    },
    {
      time: "12:00 - 17:00",
      titleAr: "فترة الظهيرة والعمل",
      titleFr: "Après-Midi Productif",
      descAr: "مساحة مثالية للراحة أو اللقاءات المهنية والاجتماعية في فضاء تكييفه ممتاز.",
      descFr: "Le repaire parfait pour une pause réparatrice ou un rendez-vous d'affaires dans un confort rafraîchissant."
    },
    {
      time: "17:00 - 21:00",
      titleAr: "أمسيات مميزة هادئة",
      titleFr: "Soirées Raffinées",
      descAr: "أجواء دافئة وموسيقى خفيفة تساعد على الاسترخاء والاستمتاع بالوقت والطلبات اللذيذة.",
      descFr: "Une ambiance tamisée rythmée par un jazz feutré pour suspendre le cours du temps."
    },
    {
      time: "21:00 - 23:30",
      titleAr: "نهاية يوم مثالية هادئة",
      titleFr: "L'Échappée du Soir",
      descAr: "مكان يمنحك فرصة للهروب من ضغوط الحياة اليومية واستعادة توازنك النفسي.",
      descFr: "Une parenthèse chaleureuse loin du tumulte extérieur pour calmer l'esprit et savourer l'instant présent."
    }
  ];

  const designFeatures = [
    { titleAr: "تفاصيل معمارية عصرية", titleFr: "Détails architecturaux contemporains d'ébénisterie." },
    { titleAr: "ألوان دافئة ومريحة مريحة للعينين", titleFr: "Palette de tonalités feutrées, naturelles et reposantes." },
    { titleAr: "جلسات متنوعة ومقاعد فخمة تناسب مختلف الاحتياجات", titleFr: "Fauteuils et salons configurés pour le travail ou la détente." },
    { titleAr: "فضاءات مفتوحة، تهوية مثالية ونقاوة مستمرة", titleFr: "Espaces spacieux au flux d'air régulé et atmosphère saine." },
    { titleAr: "بيئة بصرية جذابة لمحبي التصوير وصناعة المحتوى", titleFr: "Décors hautement esthétiques pour inspirer les créateurs d'images." }
  ];

  const qualityItems = [
    { titleAr: "تحسين جودة الخدمة بشكل مستمر ومحترف", titleFr: "Perfectionnement constant et rigoureux des standards de service." },
    { titleAr: "توفير بيئة نظيفة ومريحة دائمًا", titleFr: "Climat d'une propreté étincelante et d'un ordre absolu." },
    { titleAr: "الاهتمام بأدق التفاصيل لتقديم روعة الطعام", titleFr: "Minutie chirurgicale de la sélection des tasses à l'assiette." },
    { titleAr: "الاستماع لملاحظات الزوار والاهتمام لآرائهم", titleFr: "Écoute bienveillante et prioritaire de chacun de vos retours." },
    { titleAr: "تطوير التجربة بشكل مستمر لتفوق التوقعات", titleFr: "Rénovation créative de l'expérience sensorielle de notre carte." }
  ];

  const whyUsItems = [
    { titleAr: "الراحة المطلقة وجلسات الأخشاب والكتان", titleFr: "Confort impérial des assises et du mobilier soigné." },
    { titleAr: "الهدوء والسكينة بعيدًا عن الضوضاء", titleFr: "Un calme envoûtant pour se ressourcer en toute tranquillité." },
    { titleAr: "الجودة العالية في المكونات والقهوة", titleFr: "Des matières premières nobles et des cafés d'exception." },
    { titleAr: "الأجواء الراقية والإنارة الخفيفة", titleFr: "Esthétique distinguée gérée avec délicatesse." },
    { titleAr: "سهولة الوصول وباركينغ فسيح ومريح في شمس المدينة", titleFr: "Accessibilité immédiate de l'avenue et stationnement aisé." },
    { titleAr: "حسن الاستقبال والابتسامة الصادقة من بواب البداية حتى الوداع", titleFr: "Hospitalité fervente et attentionnée dès le pas de la porte." }
  ];

  const faqs = [
    {
      qAr: "أين يقع Dream Coffee في بنسليمان؟",
      qFr: "Où se situe exactement le Dream Coffee à Benslimane ?",
      aAr: "يقع Dream Coffee في غولف شمس المدينة بمدينة بنسليمان بالمغرب. وهو موقع مميز وهادئ يسهل الوصول إليه وتتوفر به مواقف واسعة للسيارات.",
      aFr: "Dream Coffee est idéalement implanté au cœur du célèbre Golf Shams Al Madina à Benslimane, Maroc. Un quartier de standing, calme et pourvu de vastes places de stationnement sécurisées."
    },
    {
      qAr: "هل Dream Coffee مناسب للعمل والدراسة؟",
      qFr: "Est-ce un endroit adapté pour le travail ou l'étude ?",
      aAr: "نعم، بكل تأكيد. لقد صممنا المكان خصيصًا ليوفر أجواءً هادئة ومريحة، كما نوفر خدمة إنترنت سريعة وطاولات مريحة مزودة بمخارج طاقة مناسبة للطلاب والمهنيين ورواد الأعمال.",
      aFr: "Absolument. Nous l'avons configuré comme un espace hybride idéal : silence relatif, lumière idéale pour l'écran, prises électriques d'accès aisé et une connexion Wi-Fi fibre à haut débit."
    },
    {
      qAr: "هل Dream Coffee مناسب للعائلات؟",
      qFr: "Le café accueille-t-il les familles ?",
      aAr: "نعم، يرحب المقهى بالعائلات ويوفر جلسات مريحة وتاريخية مغرقة بالدفء تتسع للجميع للتمتع بخصوصية تامة مع الأطفال في أجواء راقية ومحترمة.",
      aFr: "Tout à fait ! Nos espaces intérieurs et notre terrasse accueillent confortablement les familles de toutes tailles dans une ambiance chaleureuse, propice au partage et rigoureusement sécurisée."
    },
    {
      qAr: "هل يمكن الوصول بسهولة إلى Dream Coffee؟",
      qFr: "L'accès au Dream Coffee est-il simple d'accès ?",
      aAr: "نعم، يقع المقهى بموقع استراتيجي على شارع رئيسي مريح بمدينة بنسليمان، وتوفر لافتاته الكبيرة وصولاً سهلاً ومباشراً من كافة الاتجاهات.",
      aFr: "Oui, notre localisation stratégique à l'entrée du Golf Shams Al Madina nous rend accessible en quelques minutes en voiture ou taxi de n'importe quel point de Benslimane."
    },
    {
      qAr: "ما هي ساعات العمل؟",
      qFr: "Quels sont vos horaires d'ouverture et de service ?",
      aAr: "يسعدنا استقبالكم يومياً طيلة أيام الأسبوع طيلة فترات الصباح والمساء، حيث تظل أبوابنا ومطابخنا مفتوحة دائماً حتى الساعة 23:30 ليلاً.",
      aFr: "Nous vous accueillons avec joie tous les jours de la semaine sans exception, de bon matin jusqu'à notre fermeture tardive à 23h30 du soir."
    }
  ];

  return (
    <div className="py-24 sm:py-36 bg-[#F5F5DC] text-[#1B4332] relative animate-fade-in font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Intro Header & Cinematic Presentation */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[#1B4332] font-mono text-xs uppercase tracking-[0.25em] font-bold block">
            ✦ {story.tag} ✦
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4332] tracking-tight leading-tight">
            {story.title}
          </h1>
          <p className="text-[#1B4332] font-serif text-lg sm:text-2xl font-light italic opacity-90">
            "{story.subtitle}"
          </p>
          <div className="w-16 h-[1.5px] bg-[#1B4332]/35 mx-auto mt-4" />
        </div>

        {/* Story details grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase text-[#1B4332] tracking-widest block font-bold text-[#1B4332]/80">DREAM COFFEE BENSLIMANE</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1B4332] leading-normal font-semibold">
              {isRtl 
                ? 'في قلب مدينة بنسليمان، يوجد مكان صُمم ليكون مساحة لعيش أجمل اللحظات.'
                : 'A peaceful haven designed on top principles of contemporary lifestyle guidelines.'}
            </h2>
            <p className="text-[#1B4332]/85 text-xs sm:text-sm font-light leading-relaxed">
              {story.p1}
            </p>
            <p className="text-[#1B4332]/85 text-xs sm:text-sm font-light leading-relaxed font-semibold">
              {story.p2}
            </p>
          </div>

          <div className="md:col-span-6 relative aspect-[5/4] overflow-hidden border border-[#1B4332]/25 bg-white shadow-2xl rounded-2xl">
            <img 
              src={IMAGES.interior} 
              alt="Dream Coffee Luxe Interior Space" 
              className="w-full h-full object-cover brightness-[0.98] hover:brightness-[1.04] hover:scale-105 transition-all duration-[1200ms]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Section: Quietness & Inspiration */}
        <section className="bg-white border border-[#1B4332]/15 rounded-3xl p-8 sm:p-14 space-y-8 shadow-[0_15px_40px_rgba(27,67,50,0.02)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#1B4332]/5 via-transparent to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#1B4332]/10">
              <img 
                src={IMAGES.windowView} 
                alt="Quiet and inspiring tables" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#1B4332] font-mono text-[10px] uppercase tracking-wider block font-bold">✦ {story.inspirationTitle} ✦</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1B4332] font-semibold">
                {isRtl ? 'حيث يلتقي الهدوء بالإلهام' : 'Where Peace Awakens Innovation'}
              </h3>
              <p className="text-[#1B4332]/80 text-xs sm:text-sm leading-relaxed font-light">
                {story.inspirationDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Section: For Everyone Cards */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#1B4332] font-mono text-xs uppercase tracking-widest block font-bold">✦ {story.forEveryoneTitle} ✦</span>
            <p className="text-[#1B4332]/80 text-xs sm:text-sm leading-relaxed font-light">
              {story.forEveryoneSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {forEveryoneCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white border border-[#1B4332]/15 p-6 rounded-2xl space-y-4 shadow-[0_10px_30px_rgba(27,67,50,0.02)]">
                  <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1B4332]">{isRtl ? card.titleAr : card.titleFr}</h4>
                  <p className="text-[#1B4332]/75 text-xs font-light leading-relaxed">{isRtl ? card.descAr : card.descFr}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Hour by Hour Timeline */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#1B4332] font-mono text-xs uppercase tracking-widest block font-bold">✦ {story.hoursTitle} ✦</span>
            <p className="text-[#1B4332]/70 text-xs sm:text-sm leading-relaxed">
              {story.hoursSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dailySchedule.map((sched, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-b from-white to-[#F5F5DC] border border-[#1B4332]/15 p-6 rounded-2xl space-y-4 relative overflow-hidden animate-fade-in"
              >
                <div className="absolute top-2 right-2 text-[10px] font-mono text-[#1B4332]/30 font-bold">
                  0{idx + 1}
                </div>
                <div className="font-mono text-[10px] font-bold text-white bg-[#1B4332] rounded px-2.5 py-0.5 inline-block">
                  {sched.time}
                </div>
                <h4 className="font-serif text-sm font-semibold text-[#1B4332] pt-2">
                  {isRtl ? sched.titleAr : sched.titleFr}
                </h4>
                <p className="text-[#1B4332]/80 text-[11px] sm:text-xs leading-relaxed font-light">
                  {isRtl ? sched.descAr : sched.descFr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Design Features & Why Choose Us (Side-by-side bento block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Design elements */}
          <div className="lg:col-span-6 bg-white border border-[#1B4332]/15 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-[#1B4332] font-mono text-[10px] uppercase tracking-wider block font-bold">✦ {isRtl ? 'الأناقة المستدامة' : 'Aesthetic Geometry'} ✦</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1B4332] font-semibold">{story.designTitle}</h3>
              <p className="text-[#1B4332]/70 text-xs font-light">{story.designSubtitle}</p>
            </div>
            
            <div className="space-y-3 font-sans">
              {designFeatures.map((item, index) => (
                <div key={index} className="flex gap-3 items-start text-xs text-[#1B4332]/85 font-light">
                  <CheckCircle className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <span>{isRtl ? item.titleAr : item.titleFr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose us */}
          <div className="lg:col-span-6 bg-white border border-[#1B4332]/25 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-[#1B4332] font-mono text-[10px] uppercase tracking-wider block font-bold">✦ {isRtl ? 'رأينا وهويتنا' : 'Our Unshakable Values'} ✦</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1B4332] font-semibold">{story.whyUsTitle}</h3>
              <p className="text-[#1B4332]/70 text-xs font-light">{story.whyUsSubtitle}</p>
            </div>
            
            <div className="space-y-3">
              {whyUsItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-start text-xs text-[#1B4332]/85 font-light">
                  <Sparkles className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <span>{isRtl ? item.titleAr : item.titleFr}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section: Quality details block */}
        <section className="bg-white border border-[#1B4332]/15 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center justify-between">
            <div className="space-y-2 max-w-lg">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1B4332] font-semibold">{story.qualityTitle}</h3>
              <p className="text-[#1B4332]/70 text-xs sm:text-sm font-light">{story.qualitySubtitle}</p>
            </div>
            <div className="flex items-center gap-4 border-l border-r border-[#1B4332]/15 px-6 shrink-0 py-2">
              <div className="text-center">
                <span className="text-2xl font-serif font-bold text-[#1B4332] block">100%</span>
                <span className="text-[#1B4332]/70 text-[10px] uppercase font-mono tracking-widest">{isRtl ? 'جودة وراحة' : 'Pure Quality'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-[#1B4332]/10">
            {qualityItems.map((item, index) => (
              <div key={index} className="p-4 bg-[#F5F5DC]/40 rounded-xl border border-[#1B4332]/10 flex flex-col justify-between">
                <div className="w-6 h-6 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center text-[10px] font-bold mb-3">
                  ✓
                </div>
                <span className="text-[#1B4332] text-[11px] sm:text-xs leading-relaxed font-semibold">
                  {isRtl ? item.titleAr : item.titleFr}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQ Accordion */}
        <section id="faq" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#1B4332] font-mono text-xs uppercase tracking-[0.2em] block font-bold">
              ✦ {isRtl ? 'أسئلة شائعة (للسيو)' : 'Frequently Asked Questions'} ✦
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1B4332]">
              {isRtl ? 'هل لديك أي استفسار آخر؟' : 'Frequently Asked Questions'}
            </h2>
            <div className="w-12 h-[1px] bg-[#1B4332]/35 mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-[#1B4332]/15 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-[#1B4332] gap-4 cursor-pointer hover:bg-[#F5F5DC]/50 transition-colors duration-250"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#1B4332] shrink-0" />
                      <h4 className={`text-xs sm:text-sm font-semibold transition-colors duration-250 ${isRtl ? 'text-right font-sans' : 'text-left font-serif'} ${isOpen ? 'text-[#1B4332]' : 'text-[#1B4332]'}`}>
                        {isRtl ? faq.qAr : faq.qFr}
                      </h4>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#1B4332] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-48 border-t border-[#1B4332]/10' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 bg-[#F5F5DC]/30 text-[#1B4332]/90 text-xs sm:text-sm font-light leading-relaxed">
                      {isRtl ? faq.aAr : faq.aFr}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Community & Invitation block */}
        <section className="bg-gradient-to-br from-[#1B4332] to-[#1B4332]/90 text-white p-8 sm:p-14 overflow-hidden border border-[#F5F5DC]/20 rounded-3xl text-center relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[#F5F5DC] font-mono text-[10px] uppercase tracking-[0.25em] font-extrabold block">
              ⚜ {isRtl ? 'انضم إلى مجتمع DREAM COFFEE' : 'DREAM COFFEE COMMUNITY'} ⚜
            </span>
            <h3 className="font-serif text-xl sm:text-3xl text-white font-light">
              {isRtl ? 'آلاف اللحظات الجميلة تبدأ من مكان واحد.' : 'Thousands of beautiful loops stem from a single place.'}
            </h3>
            <p className="text-[#F5F5DC]/80 text-xs sm:text-sm font-light leading-relaxed">
              {isRtl 
                ? 'فضاء يجمع بين الراحة، الإلهام، التواصل، والإبداع. مكان يمكن أن تبدأ فيه فكرة جديدة، لقاء مهم، ذكرى جميلة، أو حتى لحظة هدوء تستحقها وتجربها يومياً.'
                : 'A carefully tailored geometry combining supreme relaxation, high sparks of inspiration, private networks, and absolute digital workflows. Start your novel ideas and sweet memories with daily luxury decor.'}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
