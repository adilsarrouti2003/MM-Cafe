import { MenuItem, Review, Language } from './types';

// Import real local images
import logoImg from './assets/images/dream_coffee_logo_official_1780763561713.png';
import unnamedImg from './assets/images/unnamed.jpg';
import unnamedPng from './assets/images/unnamed.png';
import unnamed1Img from './assets/images/unnamed_1.jpg';
import unnamed1Png from './assets/images/unnamed_1.png';
import unnamed2Img from './assets/images/unnamed_2.jpg';
import unnamed3Img from './assets/images/unnamed_3.jpg';
import unnamed4Img from './assets/images/unnamed_4.jpg';
import unnamed5Img from './assets/images/unnamed_5.jpg';
import unnamed6Img from './assets/images/unnamed_6.jpg';
import unnamed7Img from './assets/images/unnamed_7.jpg';
import baristaBackImg from './assets/images/pngtree-coffee-shop-barista-coffee-cup-work-professional-image_15740425.jpg';

export type { Language };

export const IMAGES = {
  logo: logoImg,
  heroCustomBarista: baristaBackImg,
  luxeInterior: unnamed5Img, // Clean wooden/green interior space
  interior: unnamed7Img, // Quiet co-working workspace with coffee and tables
  upstairs: unnamed3Img, // Seating area next to stairs
  exterior: unnamed4Img, // Beautiful exterior terrace with city view at night
  breakfast: unnamed1Img, // Traditional Morocco tea and service on tray
  coffee: unnamed6Img, // Moroccan mint tea cups and teapot
  milkshakes: unnamedPng, // Premium dessert milkshakes
  windowView: unnamed7Img, // Table by plants
  waffle: unnamedImg, // Waffles / Crepes
  crepe: unnamedImg,
  facade: unnamed4Img, // Exterior facade at night
  pastriesDisplay: unnamed1Png, // Pastry display / dessert
  cookies: unnamedImg,
  loungeGreen: unnamed5Img,
  staircase: unnamed3Img,
  pancakes: unnamedImg,
  frenchFruitTarts: unnamed1Png,
  traditionalCakes: unnamed1Img,
  espressoExtracted: unnamed2Img,
  spanishLatte: unnamed6Img,
  cozyViewTable: unnamed7Img,
  sittingAngle: unnamed3Img,
  harchaPlate: unnamed1Img,
};

export const GALLERY_PHOTOS_DATA = [
  {
    url: unnamed5Img,
    category: 'interior',
    titleAr: 'التقسيمات الداخلية والراحة المطلقة',
    titleFr: 'Atmosphère Chaleureuse & Intérieure',
    descAr: 'تصميم داخلي راقٍ يعبر عن الدفء وتفاصيل الأثاث الخشبي والإنارة الخفيفة المناسبة للدراسة والعمل.',
    descFr: 'Un cadre soigné, rehaussé par des matériaux nobles et un éclairage tamisé, propice à la détente et au travail.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed1Img,
    category: 'drinks',
    titleAr: 'براد أتاي المغربي الأصيل بالنعناع',
    titleFr: 'Service de Thé Marocain Authentique',
    descAr: 'جلسة مغربية لا تكتمل إلا ببراد أتاي منعنع ومنعش يصب برغوة غنية ترحيباً بكم.',
    descFr: 'L\'emblématique thé marocain à la menthe fraîche, servi dans le respect le plus pur des traditions.',
    size: 'col-span-1'
  },
  {
    url: unnamed6Img,
    category: 'drinks',
    titleAr: 'فن الاستضافة وكؤوس الشاي الفاخرة',
    titleFr: 'Thé Traditionnel aux Herbes',
    descAr: 'الخدمة المغربية والقهوة لدينا يحرص عليها باريستا محترفون ليقدموا لك كوباً غنياً بالمذاق الرائع.',
    descFr: 'Nos boissons chaudes sont préparées avec passion pour vous garantir un arôme inoubliable.',
    size: 'col-span-1'
  },
  {
    url: unnamed7Img,
    category: 'interior',
    titleAr: 'الزاوية المثالية للعمل والتركيز',
    titleFr: 'Espace de Co-working Parfait',
    descAr: 'فضاء مجهز بخدمة الويفي السريع والطاولات المريحة لتوفر لرواد الأعمال والطلبة البيئة المناسبة للإنتاج والتركيز.',
    descFr: 'Un agencement calme, doté d\'une connexion Wi-Fi haute vitesse pour vos sessions de révision ou réunions.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed4Img,
    category: 'exterior',
    titleAr: 'الشرفة الخارجية على الهواء الطلق',
    titleFr: 'Terrasse Extérieure Panoramique',
    descAr: 'استرخ في شرفتنا الجميلة والمطلة على مدينة بنسليمان واستمتع بنسمات الشمس اللطيفة.',
    descFr: 'Profitez d\'un moment mémorable en plein air dans notre terrasse unique au cœur de la ville.',
    size: 'col-span-1'
  },
  {
    url: unnamed2Img,
    category: 'food',
    titleAr: 'وجبة فطور متكاملة ولذيذة',
    titleFr: 'Petit-Déjeuner Copieux',
    descAr: 'من الحلويات الطازجة والخبز الساخن إلى المسمن والحرشة، فطور يعطيك الطاقة الكافية لبدء يومك بهمة.',
    descFr: 'Une sélection festive de pains thermiques, pâtisseries croustillantes locales et boissons fruitées.',
    size: 'col-span-1'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    titleAr: 'الفطور المغربي البلدي',
    titleFr: 'Petit-Déjeuner Beldi Marocain',
    descAr: 'صينية الفطور الأصيل: براد أتاي مغربي ساخن بالنعناع، مسمن بلدي مورق، حرشة ساخنة بالزبـدة، عسل طبيعي، زيت زيتون ممتازة وحلوى طرية.',
    descFr: 'Plateau traditionnel complet : théière de thé à la menthe infuse, msemmen, harcha dorée, morceaux de beurre, miel pur et huile d\'olive fine.',
    price: '35',
    category: 'breakfast',
    image: unnamed1Img,
    popular: true
  },
  {
    id: 'm2',
    titleAr: 'حرشة السميد الساخنة بالزبدة',
    titleFr: 'Harcha Traditionnelle',
    descAr: 'أقراص حرشة مغربية بنكهة السميد الأصيلة المخبوزة بعناية فائقة، تقدم مع الزبدة والعسل الطبيعي.',
    descFr: 'Délicieuse galette de semoule marocaine cuite minute, servie avec sa touche fondante de miel frais.',
    price: '15',
    category: 'breakfast',
    image: unnamedImg
  }   ,
  {
    id: 'm3',
    titleAr: 'كاباتشينو دريم الكريمي الفاخر',
    titleFr: 'Cappuccino Dream Velouté',
    descAr: 'قهوة إسبريسو مزدوجة مركزة، حليب طازج مبخر برغوة في غاية النعومة، مزينة بمسحوق الكاكاو الداكن ورسمة باريستا كلاسيكية.',
    descFr: 'Onctueuse crème de lait soyeux mariée à notre expresso fraîchement extrait pour un plaisir total.',
    price: '25',
    category: 'drinks',
    image: unnamed6Img,
    popular: true
  },
  {
    id: 'm4',
    titleAr: 'قهوة حليب نص-نص مغربية',
    titleFr: 'Café Nous-Nous Marocain',
    descAr: 'القهوة المغربية المحبوبة بخلطة متوازنة تماماً بين الإسبريسو القوي والحليب الساخن الكثيف.',
    descFr: 'Le café typiquement marocain, associant l\'intensité de l\'expresso à la douceur du lait chaud mousseux.',
    price: '15',
    category: 'drinks',
    image: unnamed2Img
  },
  {
    id: 'm5',
    titleAr: 'إسبريسو رويال مركز دبل شوت',
    titleFr: 'Espresso Double Crema',
    descAr: 'فنجان قهوة مركز وغني للغاية بطعم متوازن ومركّز مائة بالمائة من حبوب البن المحمصة الطازجة.',
    descFr: 'Un double expresso corsé au goût riche et équilibré, doté d\'une magnifique crème veloutée dorée.',
    price: '18',
    category: 'drinks',
    image: unnamed2Img
  },
  {
    id: 'm6',
    titleAr: 'ميلك شيك الأفوكادو والشوكولاته الملكي',
    titleFr: 'Milkshake Royal Avocat & Chocolat',
    descAr: 'عصير الأفوكادو الفاخر ممزوج بالجيلاتو والحليب الطازج، مغطى بطبقة رائعة من الكريمة المخفوقة وصوص الشوكولاتة البلجيكية.',
    descFr: 'Une boisson signature glacée à l\'avocat frais et crème glacée, rehaussée de chantilly et d\'un trait de cacao suisse.',
    price: '32',
    category: 'desserts',
    image: unnamedPng,
    popular: true
  },
  {
    id: 'm7',
    titleAr: 'تارت الفواكه الطازجة بالتوت البري',
    titleFr: 'Tartelette Impériale aux Fruits',
    descAr: 'تارت المقرمشة المحشورة بالكامل بكريمة كستر ومسورة بالتوت الأحمر والكيوي وشرائح الفراولة اللامعة.',
    descFr: 'Tartelette croustillante au beurre, garnie de fameux velouté de crème pâtissière et baies sauvages brillantes.',
    price: '25',
    category: 'desserts',
    image: unnamed1Png
  },
  {
    id: 'm8',
    titleAr: 'مسمن بلدي مغربي مورق وساخن',
    titleFr: 'Msemmen Feuilleté Traditionnel',
    descAr: 'أقراص المسمن المغربي المورق الساخن، يقدم مع زبدة طازجة وعسل برتقال نقي للتحلية الصباحية.',
    descFr: 'Fines crêpes feuilletées de tradition, préparées au beurre et servies tièdes dorées à souhait.',
    price: '15',
    category: 'waffles',
    image: unnamed1Img
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Younesse Reddad',
    roleAr: 'مرشد محلي خرائط Google',
    roleFr: 'Local Guide Google Maps',
    stars: 5,
    dateAr: 'منذ ٣ أشهر',
    dateFr: 'Il y a 3 mois',
    textAr: 'اكتشاف رائع جداً! الفضاء دافئ ومثالي للعمل والتركيز. قهوة اللاتيه كريمية وسلسة للغابة وطاقم العمل يرحب بك بابتسامة دافئة. حتماً سأعود مجدداً!',
    textFr: 'Superbe découverte ! Le cadre est chaleureux et parfait pour travailler. Le latte est crémeux et le personnel très accueillant, je reviendrai. Terrasse idéale !'
  },
  {
    id: 'r2',
    author: 'Khangui Soukaina',
    roleAr: 'زبون دائم مميز',
    roleFr: 'Client Régulier',
    stars: 5,
    dateAr: 'منذ ٣ أشهر',
    dateFr: 'Il y a 3 mois',
    textAr: 'أفضل مكان لتناول وجبة فطور الصباح الهادئة ببنسليمان بمكونات ممتازة وخدمة في منتهى الاحتراف واللطف وتقديم ممتاز للأطباق والمشروبات.',
    textFr: 'Excellent endroit pour le petit-déjeuner. Service rapide et agréable. Mets de qualité supérieure, je recommande chaudement Dream Coffee !'
  },
  {
    id: 'r3',
    author: 'Sara Shams',
    roleAr: 'مرشدة محلية',
    roleFr: 'Avis Google Maps',
    stars: 5,
    dateAr: 'منذ أسبوعين',
    dateFr: 'Il y a 2 semaines',
    textAr: 'شرفة رائعة جداً في غولف شمس المدينة تتيح لك قضاء أجمل اللحظات العائلية بجانب كوب من المشروب المنعش أو قهوة الصباح البهية.',
    textFr: 'Une terrasse parfaite pour observer les environs avec un grand choix de desserts délicieux et de jus pressés !'
  }
];

export const DICTIONARY = {
  ar: {
    title: 'مقهى دريم كوفي الفاخر | بنسليمان شمس المدينة',
    navLogo: 'DREAM COFFEE',
    navHome: 'الرئيسية',
    navAbout: 'قصتنا',
    navMenu: 'القائمة',
    navReviews: 'آراء زبنائنا',
    navReserve: 'احجز طاولة',
    navAdmin: 'لوحة التحكم',
    
    heroTitle: 'أرقى تجربة قهوة ومذاق في قلب بنسليمان',
    heroSubtitle: 'اهرب من الروتين اليومي وعش لحظاتك معنا بمقهى دريم كوفي في شمس المدينة. نرحب بكم في بيئة هادئة ودافئة تدار بلمسة نسائية راقية وكرم ضيافة مميز.',
    heroCTA: 'استكشف قائمتنا للذهاب',
    heroReserveCTA: 'احجز طاولة الآن',
    
    aboutTitle: 'قصتنا في Dream Coffee بنسليمان',
    aboutSubtitle: 'حيث التفاصيل ترسم الفرح والراحة',
    aboutP1: 'يقع مقهى دريم كوفي في بلاتوه غولف شمس المدينة الراقي بمدينة بنسليمان، وهو فضاء استثنائي تم تصميمه بعناية فائقة ليكون أكثر من مجرد مقهى عادي. تجمع الديكورات الدافئة المكسوة بالأخشاب الطبيعية والإضاءة الهادئة لتمنحك ملاذاً في غاية الراحة.',
    aboutP2: 'مقهانا يدار بلمسة نسائية راقية تحرص على تقديم أرقى التفاصيل للترحيب بكم. من فطورنا البلدي التقليدي ببراد أتاي المغربي الساخن والمسمن والحرشة الطازجة، لقهوتنا الإيطالية المستخلصة بكريمة ممتازة وفطائرنا وحلوياتنا الفاخرة، يضمن لكم طاقمنا خدمة سريعة وراقية تليق بكم.',
    aboutMetaHeading: 'فن الاستضافة الدافئة',
    aboutMeta1: 'خدمة سريعة في منتهى اللطف والدقة',
    aboutMeta2: 'فضاء داخلي هادئ مريح للعمل واللقاءات العائلية',
    aboutMeta3: 'شرفة خارجية رائعة تطل على جمال شمس المدينة',
    
    menuTitle: 'قائمة Dream Coffee اللذيذة',
    menuSubtitle: 'تشكيلة غنية محضرة بكل شغف لتناسب مذاقكم الرفيع في الصباح والمساء',
    menuAll: 'الكل',
    menuBreakfast: 'الأطباق والفطور الصباحي',
    menuDrinks: 'القهوة والمشروبات المنعشة',
    menuDesserts: 'الحلويات وعصائر الجيلاتو',
    menuWaffles: 'المسمن والبلدي المغربي',
    popupPopular: 'الأكثر طلباً ✨',
    currency: 'درهم',
    
    reserveTitle: 'احجز طاولتك المفضلة مجاناً',
    reserveSubtitle: 'اضمن مكانك الهادئ والمفضل للدراسة، العمل، أو جلسة عائلية دافئة. سنؤكد حجزك فورا عبر الواتساب!',
    reserveFormName: 'اسمك الكامل',
    reserveFormPhone: 'رقم هاتفك للاتصال',
    reserveFormGuests: 'عدد زبنائنا الكرام',
    reserveFormDate: 'تاريخ حجز الطاولة',
    reserveFormTime: 'توقيت حضوركم وتألقكم',
    reserveFormNotes: 'أي طلبات خاصة يسعدنا تلبيتها (طاولة للعمل واللابتوب، بجانب النافذة، احتفال خاص...)',
    reserveFormSubmit: 'تأكيد الحجز والتواصل',
    reserveSuccess: '🎉 تم إرسال طلب حجزك بنجاح! سيتم التواصل معك أو توجيهك فوراً لتأكيد حجزك عبر الواتساب لضمان راحتكم.',
    reserveSyncing: 'جاري تسجيل حجزك ومزامنته بـ Google Sheets...',
    reserveSynced: 'تم الحفظ والمزامنة الحية لجدول الحجوزات بنجاح!',
    reserveSheetHint: 'لقد تم إدراج الطلب في سجلات نظام الحجوزات لمتابعة طلبكم.',
    
    marketingTitle: 'ادخل نادي الزبناء الأوفياء VIP',
    marketingSubtitle: 'سجل بريدك الإلكتروني للحصول على كود خصم -15% فوري لزيارتك القادمة بمقهى دريم كوفي والاستفادة من عروضنا الخاصة!',
    marketingPlaceholder: 'أدخل بريدك الإلكتروني هنا',
    marketingBtn: 'اشترك في قائمة VIP للخصومات',
    marketingSuccess: 'تهانينا الحارة! تم تسجيلك بنجاح في نادي دريم كوفي الأوفياء، أظهر هذا التأكيد عند الدفع لتحصل على خصم 15% فورا بزيارتك القادمة!',
    whatsappBtn: 'تواصل مباشر بالواتساب',
    whatsappMessage: 'مرحباً دريم كوفي بنسليمان، أريد الاستفسار عن حجز طاولة أو قائمة اليوم.',
    
    reviewTitle: 'أصداء وآراء زبنائنا على Google Maps',
    reviewSubtitle: 'نسعد بخدمتكم وتدوين مراجعاتكم بمتوسط تقييم 5.0 كاملات تفتخر بها عائلتنا بـ Benslimane',
    reviewAddBtn: 'اكتب تقييمك الخاص',
    reviewPlaceholder: 'يسعدنا أن تنير عقولنا برأيك الجميل حول قهوتك وتجربتك معنا اليوم...',
    reviewSubmit: 'نشر مراجعتك فوراً',
    
    adminTitle: 'لوحة التحكم والمدير',
    adminCodeLabel: 'يرجى إدخال رمز الوصول لإدارة الحجوزات وقبول الطلبات',
    adminSubmit: 'تسجيل الدخول الآمن',
    adminWrongCode: 'رمز وصول خاطئ! حاول مجدداً.',
    adminActiveReservations: 'الحجوزات والطلبات النشطة لـ Dream Coffee',
    adminSearchPlaceholder: 'ابحث بالاسم، التاريخ، أو الهاتف...',
    adminTotal: 'مجموع الحجوزات المسجلة',
    adminExportCSV: 'تنزيل الحجوزات كـ Excel (CSV)',
    adminMarkChecked: 'الموافقة والقبول',
    adminMarkCancel: 'إلغاء الحجز',
    adminStatusConfirmed: 'مقبول ومؤكد',
    adminStatusPending: 'معلق ومراجع',
    adminStatusCancelled: 'تم الإلغاء',
    adminNoReservations: 'لا توجد طلبات جارية متطابقة.',
    
    footerHours: 'ساعات الخدمة والاستقبال',
    footerEveryday: 'مفتوح يومياً حتى الساعة 23:30',
    footerAddress: 'موقعنا الجغرافي الراقي',
    footerAddressDetails: 'غولف شمس المدينة، بنسليمان 13000، المغرب',
    footerCall: 'اتصال هاتفي سريع ومباشر',
    footerRights: 'جميع الحقوق محفوظة لمقهى Dream Coffee Benslimane © 2026. تم التصميم باحترافية كاملة.'
  },
  fr: {
    title: 'Dream Coffee Benslimane | Café Chaleureux & Espace Travail',
    navLogo: 'DREAM COFFEE',
    navHome: 'Accueil',
    navAbout: 'Notre Histoire',
    navMenu: 'Menu',
    navReviews: 'Avis Clients',
    navReserve: 'Réserver une table',
    navAdmin: 'Administration',
    
    heroTitle: 'L\'expérience ultime du café à Benslimane',
    heroSubtitle: 'Plongez dans un havre de paix géré avec un professionnalisme méticuleux et des touches délicates. Un cadre chaleureux combiné à un goût royal aux portes de Shams Al Madina.',
    heroCTA: 'Parcourir nos Délices',
    heroReserveCTA: 'Réserver ma Table',
    
    aboutTitle: 'L\'Histoire de Dream Coffee',
    aboutSubtitle: 'Le confort absolu pour étudier, travailler & se détendre',
    aboutP1: 'Idéalement implanté sur la zone prestigieuse de Golf Shams Al Madina à Ben Slimane, Dream Coffee est un café et salon de thé se distinguant par son identité gérée par une femme, incarnant le charme discret et une hospitalité attentionnée incomparable.',
    aboutP2: 'Chaque détail est peaufiné pour enrichir vos moments, que ce soit à travers une connexion Internet à haut débit, des canapés moelleux et accueillants, notre fameux double expresso à la crème dorée, ou notre plat complet de petit-déjeuner Beldi de tradition marocaine. Nous garantissons un accueil et service mémorables.',
    aboutMetaHeading: 'L\'Excellence Culinaire & Convivialité',
    aboutMeta1: 'Service rapide, prévenant et d\'un grand dynamisme',
    aboutMeta2: 'Espace cozy idéal pour étudier et travailler d\'ordinateur',
    aboutMeta3: 'Une terrasse spacieuse dominant le paysage urbain de la ville',
    
    menuTitle: 'Explorez Les Délices de Dream Coffee',
    menuSubtitle: 'Des mets frais faits maison à savourer seul ou en famille sous les étoiles de Benslimane',
    menuAll: 'Tout le Menu',
    menuBreakfast: 'Petits-Déjeuners Authentiques',
    menuDrinks: 'Cafés d\'Origine & Cocktails Frais',
    menuDesserts: 'Pâtisseries & Milkshakes Élite',
    menuWaffles: 'Crêpes, Waffles & Finesse Beldi',
    popupPopular: 'Recommandé ✨',
    currency: 'MAD',
    
    reserveTitle: 'Réservez votre Table en Un Clic',
    reserveSubtitle: 'Bénéficiez instantanément d\'une place réservée et sereine pour travailler ou passer d\'excellents moments.',
    reserveFormName: 'Votre nom complet',
    reserveFormPhone: 'Votre numéro de contact',
    reserveFormGuests: 'Nombre de convives',
    reserveFormDate: 'Date d\'arrivée',
    reserveFormTime: 'Heure souhaitée d\'arrivée',
    reserveFormNotes: 'Demandes particulières (Table de travail avec prise, anniversaire, terrasse...)',
    reserveFormSubmit: 'Soumettre ma demande rapidement',
    reserveSuccess: '🎉 Demande de réservation transmise avec brio ! Vous allez également recevoir un texte pré-rempli à nous envoyer sur WhatsApp pour confirmation directe.',
    reserveSyncing: 'Enregistrement de vos coordonnées sur Google Sheets...',
    reserveSynced: 'Coordonnées synchronisées avec succès !',
    reserveSheetHint: 'Votre code de réservation unique a été injecté dans la base informatique de notre gérant.',
    
    marketingTitle: 'Rejoignez Notre Club VIP',
    marketingSubtitle: 'Recevez instantanément un bon promotionnel exclusif de -15% applicable sur l\'ensemble du menu lors de votre prochaine escale mémorable chez Dream Coffee.',
    marketingPlaceholder: 'Inscrivez votre e-mail ici',
    marketingBtn: 'S\'abonner & recevoir mes 15%',
    marketingSuccess: 'Bienvenue au club ! Présentez cet écran à notre équipe en caisse pour obtenir 15% de bienvenue lors de votre commande.',
    whatsappBtn: 'WhatsApp Chat Direct',
    whatsappMessage: 'Bonjour Dream Coffee Benslimane, je souhaite réserver une table ou m\'informer sur les suggestions du jour. Merci !',
    
    reviewTitle: 'Avis Élogieux sur Google Maps',
    reviewSubtitle: 'Reconnus parmi les adresses incontournables à Ben Slimane avec une note globale de 5.0 étoiles sur nos avis réels',
    reviewAddBtn: 'Déposer mon avis Google',
    reviewPlaceholder: 'Rédigez d\'avis sincère sur notre café crémeux et notre univers soigné...',
    reviewSubmit: 'Publier mon commentaire',
    
    adminTitle: 'Administration & Hub Gérant',
    adminCodeLabel: 'Saisissez le code secret pour accéder au registre informatique des tables réservées',
    adminSubmit: 'Se connecter à l\'espace',
    adminWrongCode: 'Code d\'authentification incorrect. Réessayez.',
    adminActiveReservations: 'Toutes les Réservations de Dream Coffee',
    adminSearchPlaceholder: 'Filtrer par nom, portable ou date...',
    adminTotal: 'Volume total des tables réservées',
    adminExportCSV: 'Télécharger le registre en CSV (Excel)',
    adminMarkChecked: 'Accepter',
    adminMarkCancel: 'Annuler',
    adminStatusConfirmed: 'Accepté / Validé',
    adminStatusPending: 'En attente',
    adminStatusCancelled: 'Réfuté / Annulé',
    adminNoReservations: 'Aucune réservation correspondante n\'est disponible.',
    
    footerHours: 'Heures d\'Ouverture & Hospitalité',
    footerEveryday: 'Ouvert tous les jours jusqu\'à 23h30',
    footerAddress: 'Adresse Géographique Établie',
    footerAddressDetails: 'Golf chamss lmadina, Ben Slimane 13000, Maroc',
    footerCall: 'Notre Ligne Directe Unique',
    footerRights: 'Tous droits réservés à Dream Coffee Benslimane © 2026. Réalisé avec fierté.'
  }
};
