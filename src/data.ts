import { MenuItem, Review, Language } from './types';
// @ts-ignore
import cafeInteriorBg from './assets/images/cafe_luxe_interior_1780661147103.png';

export type { Language };

export const IMAGES = {
  interior: '/input_file_0.png',
  upstairs: '/input_file_1.png',
  exterior: '/input_file_2.png',
  breakfast: '/input_file_3.png',
  coffee: '/input_file_4.png',
  milkshakes: '/input_file_4.png',
  windowView: '/input_file_6.png',
  waffle: '/input_file_4.png',
  crepe: '/input_file_3.png',
  facade: '/input_file_5.png',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    titleAr: 'الفطور البلدي الفاخر',
    titleFr: 'Petit-Déjeuner Beldi',
    descAr: 'صينية الفطور المغربي الأصيل: براد أتاي، عصير برتقال طبيعي، أومليت طري، خبز ساخن، عسل، زيتون وزيت الزيتون الممتازة كما تظهر في الصورة.',
    descFr: 'Le grand plateau marocain authentique : théière de thé à la menthe, jus d\'orange frais, omelette moelleuse, pain chaud, miel, olives et huile d\'olive extra vierge.',
    price: '39',
    category: 'breakfast',
    image: IMAGES.breakfast,
    popular: true
  },
  {
    id: 'm2',
    titleAr: 'أومليت مغربي بالجبن الخفيفة',
    titleFr: 'Omelette Spéciale Fromage',
    descAr: 'بيض مخفوق ومقلي بعناية مع التوابل المغربية وجبن الغنم اللذيذ مصحوب بخيار طماطم وجبنة دهن الكيري.',
    descFr: 'Œufs brouillés préparés avec des épices fines et du fromage crémeux, accompagnés de tranches de concombre frais et de tomates cerises.',
    price: '22',
    category: 'breakfast',
    image: IMAGES.breakfast
  },
  {
    id: 'm3',
    titleAr: 'قهوة حليب نص-نص مغربية',
    titleFr: 'Café au Lait Nous-Nous',
    descAr: 'القهوة المغربية التقليدية الشهيرة برغوة غنية وحليب ساخن متناسق.',
    descFr: 'Le café traditionnel marocain par excellence, mélangé moitié-moitié avec du lait chaud velouté.',
    price: '15',
    category: 'drinks',
    image: IMAGES.coffee
  },
  {
    id: 'm4',
    titleAr: 'كاباتشينو إيطالي فاخر',
    titleFr: 'Cappuccino Crème',
    descAr: 'قهوة إسبريسو غنية مع الحليب المبخر وطبقة سميكة ورائعة من رغوة الكريمة كما في صورنا الحقيقية.',
    descFr: 'Espresso double premium avec du lait soyeux et une généreuse couche de mousse crémeuse saupoudrée de cacao.',
    price: '25',
    category: 'drinks',
    image: IMAGES.coffee,
    popular: true
  },
  {
    id: 'm5',
    titleAr: 'براد أتاي مغربي بالنعناع والرزة',
    titleFr: 'Thé Marocain Traditionnel',
    descAr: 'شاي أخضر مغربي أصيل مشحر بالنعناع الطازج يقدم بجمالية مغربية تقليدية عريقة.',
    descFr: 'Thé vert infusé à la menthe fraîche du pays, servi de manière traditionnelle avec une mousse parfaite.',
    price: '18',
    category: 'drinks',
    image: IMAGES.breakfast
  },
  {
    id: 'm6',
    titleAr: 'ميلك شيك أفوكادو وأوريو شوكولا رويال',
    titleFr: 'Milkshake Avocat & Oréo Royal',
    descAr: 'عصير الأفوكادو الغني والمغذي ممزوج ومزين بقطع بسكويت أوريو، الشوكولاتة اللذيذة وطبقة كثيفة من الكريمة المخفوقة كما يظهر في صالتنا الراقية.',
    descFr: 'Délice crémeux à l\'avocat frais fusionné avec des brisures d\'Oréo, nappé de chocolat fondu et couronné d\'une onctueuse chantilly.',
    price: '32',
    category: 'desserts',
    image: IMAGES.milkshakes,
    popular: true
  },
  {
    id: 'm7',
    titleAr: 'وافل وكريب الموز ونوتيلا الساخنة',
    titleFr: 'Gaufre & Crêpe Banane Nutella',
    descAr: 'وافل وكريب ذهبي مقرمش مزين بشرائح الموز الطازجة والكريمة الغنية مع صوص شوكولاتة نوتيلا اللذيذة على طبق مقلم.',
    descFr: 'Gaufres et crêpes dorées croustillantes surmontées de rondelles de banane fraîche, crème chantilly et nappées de chocolat Nutella.',
    price: '28',
    category: 'waffles',
    image: IMAGES.waffle
  },
  {
    id: 'm8',
    titleAr: 'مسمن بلدي مغربي مورق بالزبدة والعسل',
    titleFr: 'Msemmen Beldi au Miel',
    descAr: 'قطعتان من رغايف المسمن المغربي الأصيل المورق واللذيذ، يقدم ساخناً مع الزبدة، العسل والجبن وقنينة ماء باردة كما فالصورة.',
    descFr: 'Double portion de feuilletés traditionnels marocains (Msemmen) servis chauds avec du beurre, du miel pur, portions de fromage et eau minérale.',
    price: '12',
    category: 'waffles',
    image: IMAGES.crepe
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Mouaadan Chahi',
    roleAr: 'مرشد محلي (216 تقييم)',
    roleFr: 'Local Guide (216 avis)',
    stars: 5,
    dateAr: 'منذ شهر',
    dateFr: 'Il y a 1 mois',
    textAr: 'مقهى رائع جداً وتصميم داخلي فاخر ومريح! الإضاءة دافئة والكراسي مريحة للغاية ومناسبة للعائلات واللقاءات.',
    textFr: 'Café très élégant avec un design intérieur luxueux et confortable ! L\'éclairage est chaleureux, les chaises sont super confortables, idéales pour les familles.'
  },
  {
    id: 'r2',
    author: 'Sara Benslimane',
    roleAr: 'زبونة دائم',
    roleFr: 'Client Régulier',
    stars: 5,
    dateAr: 'منذ أسبوعين',
    dateFr: 'Il y a 2 semaines',
    textAr: 'أنا أحب فطورهم البلدي وخاصة براد الشاي المنعنع والأومليت الطري المعروض في صورهم. الخدمة سريعة في شمس المدينة بنسليمان.',
    textFr: 'J\'adore leur petit-déjeuner Beldi, en particulier le thé infusé et l\'omelette tendre. Le service est rapide et de qualité à Shams Al Madina, Benslimane.'
  },
  {
    id: 'r3',
    author: 'Youssef Alami',
    roleAr: 'زائر من الدار البيضاء',
    roleFr: 'Visiteur de Casablanca',
    stars: 5,
    dateAr: 'منذ شهر',
    dateFr: 'Il y a un mois',
    textAr: 'عند زيارتي لبنسليمان، هذا المقهى هو محطتي المفضلة. الميلك شيك أوريو والوافل قمة اللذة وأسعاره مناسبة جداً مقارنة بالفخامة والجو الهادئ.',
    textFr: 'Quand je visite Benslimane, ce Café est mon arrêt préféré. Le milkshake Oréo et la gaufre sont un pur délice, et les prix sont très corrects.'
  }
];

export const DICTIONARY = {
  ar: {
    title: 'المقهى الفاخر | بنسليمان',
    navLogo: 'Café',
    navHome: 'الرئيسية',
    navAbout: 'قصتنا',
    navMenu: 'القائمة',
    navReviews: 'آراء زبنائنا',
    navReserve: 'احجز طاولة',
    navAdmin: 'لوحة التحكم',
    
    heroTitle: 'فخامة المذاق واللحظة في قلب بنسليمان',
    heroSubtitle: 'استمتع بتجربة راقية تمزج بين دفء التقاليد المغربية وعصرنة التصاميم الراقية في شمس المدينة.',
    heroCTA: 'استكشف قائمتنا للذهاب',
    heroReserveCTA: 'احجز طاولة الآن',
    
    aboutTitle: 'أجمل تجربة مقهى بمدينة بنسليمان',
    aboutSubtitle: 'أين تجتمع الأناقة واللذة',
    aboutP1: 'يقع مقهانا في حي شمس المدينة الهادئ والراقي ببنسليمان، وهو ليس مجرد مقهى عادي، بل هو وجهة لعشاق الذوق الرفيع. صمم المقهى بديكورات مخملية وألواح خشبية دافئة وإضاءة ذهبية غامرة توفر لك الراحة المطلقة.',
    aboutP2: 'من فطورنا البلدي التقليدي ببراد أتاي المغربي والأومليت الطري، إلى قهوتنا الإيطالية الفاخرة، وميلك شيك الشوكولاتة الغني المزين بالكريمة الطازجة، نحرص على تقديم أطباق مجهزة بأجود المكونات الطازجة وأرقى أساليب الضيافة.',
    aboutMetaHeading: 'فن الضيافة المغربية',
    aboutMeta1: 'مكونات محلية طازجة 100%',
    aboutMeta2: 'بيئة هادئة ومكيفة للعائلات والعمل',
    aboutMeta3: 'فريق عمل محترف يرحب بكم بابتسامة',

    menuTitle: 'تذوق قائمتنا المميزة',
    menuSubtitle: 'فن المذاق المحضر بشغف وبمكونات طازجة لتلبي رغباتكم في أي وقت',
    menuAll: 'الكل',
    menuBreakfast: 'الفطور والوجبات الصباحية',
    menuDrinks: 'القهوة والمشروبات المنعشة',
    menuDesserts: 'ميلك شيك وحلويات فاخرة',
    menuWaffles: 'الوافل والكريب',
    popupPopular: 'الأكثر طلباً',
    currency: 'درهم',
    
    reserveTitle: 'احجز طاولة خاصة بك مجاناً',
    reserveSubtitle: 'اضمن طاولتك المفضلة في أجواء هادئة وراقية بضغطة زر واحدة. سنؤكد حجزك فوراً!',
    reserveFormName: 'اسمك الكامل',
    reserveFormPhone: 'رقم هاتف الواتساب',
    reserveFormGuests: 'عدد الأشخاص',
    reserveFormDate: 'تاريخ الحجز',
    reserveFormTime: 'توقيت الحجز',
    reserveFormNotes: 'ملاحظات خاصة (مثلا: طاولة بجانب النافذة، احتفال بالذكرى...)',
    reserveFormSubmit: 'تأكيد الطلب والحجز',
    reserveSuccess: '🎉 تم إرسال حجزك بنجاح! سيقوم فريقنا بالاتصال بك أو إرسال تأكيد على الواتساب فوراً.',
    reserveSyncing: 'جاري الربط مع Google Sheets وإرسال البيانات...',
    reserveSynced: 'تمت مزامنة الحجز الحقيقي بنجاح لجدول البيانات!',
    reserveSheetHint: 'البيانات تم إرسالها لجدول جوجل شيت برقم الحجز الخاص بك.',

    marketingTitle: 'انضم لنادي VIP والمزايا الخاصة',
    marketingSubtitle: 'سجل بريدك الإلكتروني للحصول على خصم 15% فوري في زيارتك القادمة وأحدث عروضنا اللذيذة!',
    marketingPlaceholder: 'أدخل بريدك الإلكتروني هنا',
    marketingBtn: 'انضمام فوري لـ VIP',
    marketingSuccess: 'أهلاً بك في نادينا! لقد تم تسجيل بريدك الإلكتروني بنجاح، استعرض هذا التأكيد عند الدفع للحصول على خصم 15%!',
    whatsappBtn: 'تواصل معنا على واتساب',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن حجز طاولة أو قائمة اليوم.',
    
    reviewTitle: 'شهادات زبنائنا الأوفياء',
    reviewSubtitle: 'بكل حب استقبلنا أكثر من 35 تقييماً عبر خرائط Google وصنفنا من أرقى مقاهي بنسليمان',
    reviewAddBtn: 'اكتب تقييمك الخاص',
    reviewPlaceholder: 'شاركنا رأيك في هذا المقهى الراقي...',
    reviewSubmit: 'نشر التقييم',

    adminTitle: 'إدارة الحجوزات (المدير)',
    adminCodeLabel: 'أدخل رمز المدير لرؤية الحجوزات الحقيقية',
    adminSubmit: 'دخول الآدمن',
    adminWrongCode: 'رمز مرور غير صحيح!',
    adminActiveReservations: 'قائمة الحجوزات النشطة لـ Café',
    adminSearchPlaceholder: 'ابحث بالاسم أو رقم الهاتف...',
    adminTotal: 'إجمالي الحجوزات',
    adminExportCSV: 'تصدير كـ CSV لـ Excel',
    adminMarkChecked: 'قبول وتأكيد',
    adminMarkCancel: 'إلغاء الحجز',
    adminStatusConfirmed: 'مؤكد',
    adminStatusPending: 'معلق',
    adminStatusCancelled: 'ملغى',
    adminNoReservations: 'لا توجد حجوزات متطابقة حالياً.',

    footerHours: 'ساعات العمل والخدمة',
    footerEveryday: 'مفتوح يومياً',
    footerAddress: 'العنوان الجغرافي',
    footerAddressDetails: 'شارع شمس المدينة، منطقة Benslimane (رمز JV89+MG)',
    footerCall: 'اتصال هاتفي مباشر',
    footerRights: 'جميع الحقوق محفوظة للمقهى ببنسليمان © 2026. تم التطوير بمهارة تامة.'
  },
  fr: {
    title: 'Café | Benslimane Luxe',
    navLogo: 'Café',
    navHome: 'Accueil',
    navAbout: 'Notre Histoire',
    navMenu: 'Menu',
    navReviews: 'Avis',
    navReserve: 'Réservez',
    navAdmin: 'Configuration',
    
    heroTitle: 'L\'Art du Café et du Goût à Benslimane',
    heroSubtitle: 'Plongez dans un havre de paix alliant la chaleur des traditions marocaines au raffinement moderne au cœur de Shams Al Madina.',
    heroCTA: 'Découvrir le Menu',
    heroReserveCTA: 'Réserver une table',
    
    aboutTitle: 'Une Expérience Exceptionnelle à Benslimane',
    aboutSubtitle: 'Le design rencontre la gastronomie authentique',
    aboutP1: 'Niché dans le quartier accueillant et chic de Shams Al Madina à Benslimane, notre café est bien plus qu\'un simple lieu de pause. C\'est une invitation au luxe discret avec ses canapés en velours douillets, ses tons boisés apaisants et ses touches dorées étincelantes sous une lumière tamisée.',
    aboutP2: 'Que ce soit pour notre authentique plateau de petit-déjeuner Beldi avec sa théière fraîche et ses omelette dorées, ou pour savourer notre Cappuccino onctueux préparé par des baristas qualifiés, nous nous engageons à offrir le meilleur de la gastronomie et de l\'accueil marocain.',
    aboutMetaHeading: 'L\'Art de la Convivialité',
    aboutMeta1: 'Ingrédients de première qualité locaux et frais',
    aboutMeta2: 'Espace familial calme, convivial et climatisé',
    aboutMeta3: 'Une équipe dévouée, accueillante et professionnelle',

    menuTitle: 'Explorez Notre Univers Gourmand',
    menuSubtitle: 'Des recettes faites maison avec amour pour éveiller vos papilles à tout moment de la journée',
    menuAll: 'Tous nos articles',
    menuBreakfast: 'Petits-Déjeuners',
    menuDrinks: 'Cafés & Boissons Chaudes',
    menuDesserts: 'Milkshakes & Desserts',
    menuWaffles: 'Crêpes & Gaufres',
    popupPopular: 'Populaire',
    currency: 'MAD',
    
    reserveTitle: 'Réservez votre Table en Ligne',
    reserveSubtitle: 'Agrémentez votre journée en garantissant votre table préférée dans une ambiance luxueuse et détendue. Confirmation instantanée !',
    reserveFormName: 'Nom complet',
    reserveFormPhone: 'Numéro WhatsApp',
    reserveFormGuests: 'Nombre de personnes',
    reserveFormDate: 'Date recommandée',
    reserveFormTime: 'Heure souhaitée',
    reserveFormNotes: 'Demande particulière (ex: près de la fenêtre, anniversaire...)',
    reserveFormSubmit: 'Soumettre la réservation',
    reserveSuccess: '🎉 Votre réservation a été transmise ! Notre équipe vous contactera sous peu par téléphone ou WhatsApp pour confirmer.',
    reserveSyncing: 'Synchronisation avec Google Sheets en cours...',
    reserveSynced: 'Réservation synchronisée en temps réel sur Google Sheets !',
    reserveSheetHint: 'Vos données ont été postées avec succès sur la feuille de calcul du Café.',

    marketingTitle: 'Rejoignez le Club VIP de Café',
    marketingSubtitle: 'Entrez votre e-mail pour recevoir instantanément une remise de -15% sur votre prochaine visite et découvrir nos lancements exclusifs !',
    marketingPlaceholder: 'Votre adresse e-mail',
    marketingBtn: 'Rejoindre le Club',
    marketingSuccess: 'Code VIP activé ! Montrez ce message en caisse lors de votre visite pour obtenir votre réduction de 15%.',
    whatsappBtn: 'Contactez-nous sur WhatsApp',
    whatsappMessage: 'Bonjour, je souhaite réserver une table ou avoir des informations supplémentaires pour aujourd\'hui. Merci !',
    
    reviewTitle: 'Avis de Nos Clients fidèles',
    reviewSubtitle: 'Avec plus de 35 commentaires sincères sur Google Maps, découvrez pourquoi nos clients adorent passer du temps chez nous',
    reviewAddBtn: 'Laisser un avis positif',
    reviewPlaceholder: 'Votre commentaire de satisfaction pour le Café...',
    reviewSubmit: 'Soumettre l\'avis',

    adminTitle: 'Panneau Administratif (Gérant)',
    adminCodeLabel: 'Saisissez le code d\'accès pour gérer les réservations',
    adminSubmit: 'Se connecter',
    adminWrongCode: 'Code incorrect !',
    adminActiveReservations: 'Liste des Réservations Actives du Café',
    adminSearchPlaceholder: 'Rechercher par nom ou téléphone...',
    adminTotal: 'Total Réservations',
    adminExportCSV: 'Exporter en CSV pour Excel',
    adminMarkChecked: 'Confirmer',
    adminMarkCancel: 'Annuler',
    adminStatusConfirmed: 'Confirmé',
    adminStatusPending: 'En attente',
    adminStatusCancelled: 'Annulé',
    adminNoReservations: 'Aucune réservation trouvée.',

    footerHours: 'Horaires d\'Ouverture',
    footerEveryday: 'Tous les jours de la semaine',
    footerAddress: 'Adresse Localisation',
    footerAddressDetails: 'Quartier Shams Al Madina, Benslimane, Maroc (Région JV89+MG)',
    footerCall: 'Ligne Téléphonique Directe',
    footerRights: 'Tous droits réservés au Café Benslimane © 2026. Designé et façonné avec excellence.'
  }
};
