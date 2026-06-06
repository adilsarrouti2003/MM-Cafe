import { MenuItem, Review, Language } from './types';

// @ts-ignore
import cafeInteriorBg from './assets/images/cafe_luxe_interior_1780661147103.png';
// @ts-ignore
import logoImg from './assets/images/image_9ae03f.png';
// @ts-ignore
import unnamedImg from './assets/images/unnamed.jpg';
// @ts-ignore
import unnamed1 from './assets/images/unnamed (1).jpg';
// @ts-ignore
import unnamed2 from './assets/images/unnamed (2).jpg';
// @ts-ignore
import unnamed3 from './assets/images/unnamed (3).jpg';
// @ts-ignore
import unnamed4 from './assets/images/unnamed (4).jpg';
// @ts-ignore
import unnamed5 from './assets/images/unnamed (5).jpg';
// @ts-ignore
import unnamed6 from './assets/images/unnamed (6).jpg';
// @ts-ignore
import unnamed7 from './assets/images/unnamed (7).jpg';
// @ts-ignore
import unnamed8 from './assets/images/unnamed (8).jpg';
// @ts-ignore
import unnamed9 from './assets/images/unnamed (9).jpg';
// @ts-ignore
import unnamed10 from './assets/images/unnamed (10).jpg';
// @ts-ignore
import unnamed11 from './assets/images/unnamed (11).jpg';
// @ts-ignore
import unnamed12 from './assets/images/unnamed (12).jpg';
// @ts-ignore
import unnamed13 from './assets/images/unnamed (13).jpg';
// @ts-ignore
import unnamed14 from './assets/images/unnamed (14).jpg';
// @ts-ignore
import unnamed15 from './assets/images/unnamed (15).jpg';
// @ts-ignore
import unnamed16 from './assets/images/unnamed (16).jpg';
// @ts-ignore
import unnamed17 from './assets/images/unnamed (17).jpg';
// @ts-ignore
import unnamed18 from './assets/images/unnamed (18).jpg';
// @ts-ignore
import unnamed19 from './assets/images/unnamed (19).jpg';
// @ts-ignore
import unnamed20 from './assets/images/unnamed (20).jpg';
// @ts-ignore
import unnamed21 from './assets/images/unnamed (21).jpg';

export type { Language };

export const IMAGES = {
  logo: logoImg,
  luxeInterior: cafeInteriorBg,
  interior: unnamed5,           // unnamed (5).jpg is green velvet and yellow armchairs downstairs interior
  upstairs: unnamed3,           // unnamed (3).jpg is seating upstairs next to stairs
  exterior: unnamed10,          // unnamed (10).jpg is cafe exterior facade illuminated at night
  breakfast: unnamed12,         // unnamed (12).jpg is Moroccan Meloui platter with butter/honey/cheese
  coffee: unnamed19,             // cappuccino latte art
  milkshakes: unnamed8,         // unnamed (8).jpg is avocado/gourmet milkshake with cream
  windowView: unnamed21,        // unnamed (21).jpg is espresso next to window plants
  waffle: unnamed15,            // unnamed (15).jpg is crepes with banana and chocolate
  crepe: unnamed15,             // Crepes
  facade: unnamed4,             // unnamed (4).jpg is exterior facade and terrace at night
  pastriesDisplay: unnamed7,    // yellow armchairs seating
  cookies: unnamed9,            // espresso with water
  loungeGreen: unnamed5,        // green velvet chairs
  staircase: unnamed3,          // staircase/upstairs view
  pancakes: unnamed15,          // crepes/pancakes
  frenchFruitTarts: unnamed15,
  traditionalCakes: unnamed17,
  espressoExtracted: unnamed9,
  spanishLatte: unnamed20,
  cozyViewTable: unnamed6,      // glass of Moroccan tea poured high with foam
  sittingAngle: unnamed7,
  harchaPlate: unnamed12,       // Meloui platter
};

// All 22 real photos structured sequentially to be mapped inside our premium gallery
export const GALLERY_PHOTOS_DATA = [
  {
    url: unnamedImg,
    category: 'interior',
    titleAr: 'ردهة المعجنات والشاي الفاخرة',
    titleFr: 'The Interior Seating',
    descAr: 'التقسيم الداخلي للمقهى ببصمته المعمارية الراقية والحديثة مع الإنارة الغامرة والهدوء البديع.',
    descFr: 'Sophisticated interior setting presenting velvet chairs and glowing ceiling contours.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed1,
    category: 'drinks',
    titleAr: 'صينية أتاي مغربي أصيل بالبراد الفضي',
    titleFr: 'Authentic Moroccan Tea Service',
    descAr: 'شاي مغربي منعنع يقدم بالطريقة التقليدية مع براد فضي منقوش وكؤوس مزخرفة على صينية فضية.',
    descFr: 'Traditional Moroccan mint tea served with an ornate silver teapot and patterned glasses on a tray.',
    size: 'col-span-1'
  },
  {
    url: unnamed2,
    category: 'drinks',
    titleAr: 'قائمة العصائر والمشروبات الطازجة',
    titleFr: 'Fresh Juices & Beverages Menu',
    descAr: 'قائمة مطبوعة تضم تشكيلة واسعة من العصائر الطبيعية والمشروبات الباردة الطازجة المحضرة يومياً.',
    descFr: 'Our printed fruit juice menu offering a great selection of fresh, healthy morning drinks.',
    size: 'col-span-1'
  },
  {
    url: unnamed3,
    category: 'interior',
    titleAr: 'جلسات الطابق الثاني الفسيحة والهادئة',
    titleFr: 'Cozy Upstairs Seating Area',
    descAr: 'منطقة جلوس مريحة وعصرية في الطابق العلوي بجانب السلم تتميز بمقاعد صفراء ورمادية أنيقة.',
    descFr: 'Modern yellow and grey seating area located on the quiet and spacious second floor next to the staircase.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed4,
    category: 'exterior',
    titleAr: 'واجهة المقهى والشرفة الخارجية ليلاً',
    titleFr: 'Stunning Exterior Facade at Night',
    descAr: 'إطلالة ليلية ساحرة على الواجهة الخارجية الأنيقة للمقهى والشرفة المطلة على الهواء الطلق.',
    descFr: 'The magnificent illuminated exterior facade and open-air terrace patio of our Café at night.',
    size: 'col-span-1'
  },
  {
    url: unnamed5,
    category: 'interior',
    titleAr: 'الصالون الداخلي بالكراسي المخملية الخضراء',
    titleFr: 'Luxury Green Velvet Lounge',
    descAr: 'تصميم داخلي راقٍ يتميز بكراسي مخملية خضراء مريحة وألوان صفراء مبهجة لجلسات عائلية دافئة.',
    descFr: 'Elegant interior seating zone with plush green velvet armchairs and warm yellow accents.',
    size: 'col-span-1'
  },
  {
    url: unnamed6,
    category: 'drinks',
    titleAr: 'براد الشاي المغربي المنعنع التقليدي',
    titleFr: 'Traditional Moroccan Tea Service',
    descAr: 'كأس من الشاي المغربي العريق يسكب برغوته الغنية مع براد الشاي الفضي والنعناع المنعش.',
    descFr: 'A hot glass of traditional Moroccan tea poured high to create the iconic foam with a silver sugar bowl.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed7,
    category: 'interior',
    titleAr: 'زاوية الجلوس الصفراء الدافئة',
    titleFr: 'Charming Yellow Seating Corner',
    descAr: 'ركن هادئ ومريح يتميز بمقاعد صفراء مبهجة وإضاءة مخفية تناسب العمل أو تبادل أطراف الحديث.',
    descFr: 'Comfortable yellow upholstered armchairs illuminated with subtle warm lighting for co-working or relaxation.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed8,
    category: 'drinks',
    titleAr: 'ميلك شيك الأفوكادو والشوكولاتة الإمبراطوري',
    titleFr: 'Avocado Chocolat Supreme Milkshake',
    descAr: 'أربعة كؤوس طويلة من ميلك شيك الأفوكادو الغني تعلوها جبال من الكريمة المخفوقة ورقائق الأوريو وصوص الشوكولاتة والكراميل.',
    descFr: 'Four tall glasses of creamy avocado milkshake topped with rich whipped cream, Oreo cookies, and chocolate syrup.',
    size: 'col-span-1'
  },
  {
    url: unnamed9,
    category: 'drinks',
    titleAr: 'فنجان الإسبريسو رويال مع الماء الفوار',
    titleFr: 'Espresso Shot with Spring Water',
    descAr: 'فنجان إسبريسو غني برغوة ذهبية يقدم مع قنينة ماء منعشة على طاولاتنا البيضاء الأنيقة.',
    descFr: 'Freshly pulled single shot of rich espresso coffee served with a bottle of mineral spring water.',
    size: 'col-span-1'
  },
  {
    url: unnamed10,
    category: 'exterior',
    titleAr: 'الواجهة الخارجية المبهجة ليلاً لصالون الشاي والمقهى الفاخر',
    titleFr: 'Patisserie & Café Exterior View',
    descAr: 'إطلالة ليلية خلابة للواجهة المضيئة المكونة من طابقين لصالون الحلويات والمقهى الفاخر بمدينة بنسليمان.',
    descFr: 'The eye-catching illuminated two-story modern building facade of our Patisserie & Café at night.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed11,
    category: 'drinks',
    titleAr: 'كاباتشينو الكريمة الكروية الفاخر',
    titleFr: 'Vienna Cappuccino Supreme',
    descAr: 'كوب طويل من حليب القهوة الفاخر المغطى بثقيلة من الكريمة المخفوقة ولمسات صوص الكاكاو الغامق.',
    descFr: 'Creamy hot espresso treat topped with thick whipped cream and artistic sweet chocolate syrup.',
    size: 'col-span-1'
  },
  {
    url: unnamed12,
    category: 'food',
    titleAr: 'مسمن وملوي بلدي مورق بالزبدة والعسل',
    titleFr: 'Moroccan Meloui & Msemmen Platter',
    descAr: 'طبق من المسمن والملوي التقليدي المورق الساخن، يقدم مع الزبدة البلدية، العسل الطبيعي والجبن للأصالة المغربية.',
    descFr: 'Two plates of warm authentic Moroccan puff pastry flatbreads served with natural honey, butter and cheese.',
    size: 'col-span-1'
  },
  {
    url: unnamed13,
    category: 'drinks',
    titleAr: 'جلسة براد الشاي المغربي العريق مع السكرية',
    titleFr: 'Classic Moroccan Mint Tea Set',
    descAr: 'تحضير شاي النعناع الأصيل في براد فضي مغربي منقوش مع كؤوس زجاجية ملونة وسكرية كلاسيكية مع صينية فضية.',
    descFr: 'Beautiful ornate silver Moroccan teapot set alongside matching sugar bowl and traditional glasses.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed14,
    category: 'drinks',
    titleAr: 'الفلكلور المغربي: طقم الشاي البراد الفضي',
    titleFr: 'Moroccan Folklore Teapot Tray',
    descAr: 'براد مغربي عتيق وسكرية فضية فاخرة يجسدان كرم الضيافة وأصالة التقاليد في مقهانا الراقي بـ بنسليمان.',
    descFr: 'A highly detailed silver teapot and sugar bowl set displayed on an authentic silver serving tray.',
    size: 'col-span-1'
  },
  {
    url: unnamed15,
    category: 'pastries',
    titleAr: 'كريب ونوتيلا بالموز والكريمة الطازجة',
    titleFr: 'Sweet Banana & Chocolate Crepes',
    descAr: 'قطعتين من الكريب الذهبي المطوي والمحشو بقطع الموز مع صوص الشوكولاتة وجبال الكريمة الغنية.',
    descFr: 'Delicious folded sweet crepes filled with banana slices, topped with fresh cream and fudge syrup.',
    size: 'col-span-1'
  },
  {
    url: unnamed16,
    category: 'drinks',
    titleAr: 'جلسة القهوة السريعة بالفناء',
    titleFr: 'Quick Espresso Break Desk',
    descAr: 'فنجان إسبريسو مركز مع قنينة ماء طازجة على طاولات الشرفة الخارجية ليوم عمل نشيط.',
    descFr: 'An espresso cup alongside bottled mineral water served on a sleek outdoor patio table.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed17,
    category: 'pastries',
    titleAr: 'حلويات مغربية وعصرية متميزة',
    titleFr: 'Exclusive Morocco & French Pastries',
    descAr: 'تشكيلة رائعة من الحلويات التقليدية والفرنسية الراقية المحضرة بكل حب وشغف.',
    descFr: 'A wonderful selection of traditional Moroccan and fine French pastries made with love.',
    size: 'col-span-1'
  },
  {
    url: unnamed18,
    category: 'drinks',
    titleAr: 'استخلاص الإسبريسو المعزز',
    titleFr: 'Perfect Espresso Extraction',
    descAr: 'استخلاص قهوة إسبريسو غنية ومثالية تحت إشراف باريستا محترف للحصول على نكهة غنية.',
    descFr: 'Freshly extracted rich espresso shot with perfect thick crema under professional supervision.',
    size: 'col-span-1'
  },
  {
    url: unnamed19,
    category: 'drinks',
    titleAr: 'فن رغوة الكابتشينو البديع',
    titleFr: 'Artistic Cappuccino Latte Art',
    descAr: 'كوب من الكابتشينو الساخن مزين برسمة فنية مميزة من الحليب المخفوق.',
    descFr: 'A perfectly crafted warm cup of cappuccino decorated with exquisite milk foam art.',
    size: 'col-span-1 md:col-span-2'
  },
  {
    url: unnamed20,
    category: 'drinks',
    titleAr: 'سبانش لاتيه بارد ومثلج',
    titleFr: 'Chilled Spanish Latte Bottle',
    descAr: 'قنينة زجاجية من السبانش لاتي المبرد مع طبقات متناسقة من القهوة والحليب لمذاق منعش.',
    descFr: 'An eye-catching cold Spanish latte bottle displaying beautiful espresso and sweet milk layers.',
    size: 'col-span-1'
  },
  {
    url: unnamed21,
    category: 'drinks',
    titleAr: 'قهوة الصباح الهادئة بجانب النافذة',
    titleFr: 'Morning Espresso by the Window',
    descAr: 'فنجان قهوة إسبريسو ساخن بجانب النباتات الخضراء اليانعة تحت ضوء النهار المنعش.',
    descFr: 'A relaxing single espresso cup served next to beautiful green window plants under warm sunlight.',
    size: 'col-span-1'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    titleAr: 'الفطور البلدي الفاخر',
    titleFr: 'Petit-Déjeuner Beldi',
    descAr: 'صينية الفطور المغربي الأصيل: براد أتاي، مسمن بلدي مورق، خبز دافئ، زيت زيتون ممتازة، كيري، عسل برتقال ومربى الفراولة اللذيذ.',
    descFr: 'Le grand plateau marocain authentique : théière de thé à la menthe fraîche, msemmen feuilleté, pain chaud, huile d\'olive extra vierge, portions kiri, miel de fleurs et confiture.',
    price: '39',
    category: 'breakfast',
    image: unnamed13,
    popular: true
  },
  {
    id: 'm2',
    titleAr: 'حرشة السميد الساخنة بالزبدة',
    titleFr: 'Harcha Traditionnelle',
    descAr: 'أقراص حرشة السميد المغربية التقليدية المخبوزة بعناية فائقة، تقدم ساخنة مع الزبدة والعسل الطبيعي.',
    descFr: 'Délicieuse galette de semoule marocaine cuite sur plaque, servie chaude accompagnée de beurre fondant et miel pur.',
    price: '15',
    category: 'breakfast',
    image: unnamed12
  },
  {
    id: 'm2a',
    titleAr: 'صحن البانكيك الطري الشافي',
    titleFr: 'Plat de Pancakes Fluffy',
    descAr: 'بانكيك أمريكي خفيف ذي قوام إسفنجي يقدم مع العسل البارد وجبنة دهن وزبدة طرية.',
    descFr: 'Pancakes américains ultra-moelleux cuits minute, dorés à souhait, servis avec du miel sauvage ou de la confiture.',
    price: '22',
    category: 'breakfast',
    image: unnamed15
  },
  {
    id: 'm3',
    titleAr: 'قهوة حليب نص-نص مغربية',
    titleFr: 'Café au Lait Nous-Nous',
    descAr: 'القهوة المغربية التقليدية الشهيرة برغوة غنية وحليب ساخن متناسق.',
    descFr: 'Le café traditionnel marocain par excellence, mélangé moitié-moitié avec du lait chaud velouté.',
    price: '15',
    category: 'drinks',
    image: unnamed21
  },
  {
    id: 'm4',
    titleAr: 'كاباتشينو إيطالي فاخر',
    titleFr: 'Cappuccino Crème Art',
    descAr: 'قهوة إسبريسو غنية مع الحليب المبخر ورسمة الكريمة المخفوقة الرائعة كما تظهر في صورنا الحقيقية.',
    descFr: 'Espresso double premium avec du lait soyeux et une généreuse couche de mousse crémeuse artistique.',
    price: '25',
    category: 'drinks',
    image: unnamed11,
    popular: true
  },
  {
    id: 'm4a',
    titleAr: 'إسبريسو رويال دبل شوت',
    titleFr: 'Espresso Double Crema',
    descAr: 'فنجان قهوة مركز مستخلص بأعلى درجات الفن بإسبريسو مع طبقة كريمة شوكولاتية متينة ورائعة.',
    descFr: 'Expresso serré double extrait avec une pression maîtrisée pour une richesse aromatique incomparable.',
    price: '18',
    category: 'drinks',
    image: unnamed9
  },
  {
    id: 'm4b',
    titleAr: 'سبانش لاتي مثلج بالعبوة',
    titleFr: 'Spanish Latte Premium',
    descAr: 'عبوة زجاجية خاصة مبردة من السبانش لاتي الإسباني الممتاز، قهوة منعشة تناسب حر البهيج بـبنسليمان.',
    descFr: 'Une somptueuse bouteille de Spanish Latte glacé, mélange exquis d\'espresso premium et de laits onctueux.',
    price: '30',
    category: 'drinks',
    image: unnamed20
  },
  {
    id: 'm6',
    titleAr: 'ميلك شيك شوكولا رويال كينج',
    titleFr: 'Milkshake Chocolat Suprême',
    descAr: 'عصير الشوكولاتة الأغنق الممزوج بالحليب الطازج والجيلاتو يقدم بكوب مرتفع تعلوه جبال من الكريمة المخفوقة وصوص فدج.',
    descFr: 'Délice crémeux au chocolat noir fusionné avec notre glace artisanale, nappé de sauce cacao et surmonté de chantilly.',
    price: '32',
    category: 'desserts',
    image: unnamed8,
    popular: true
  },
  {
    id: 'm6a',
    titleAr: 'ماكرون باريس الفاخر',
    titleFr: 'Sélection de Macarons Fins',
    descAr: 'عمر عينيك بقطع الماكرون الفرنسية بألوان البهجة ونكهات الفراولة، الفستق، الليمون والشوكولاتة.',
    descFr: 'Assortiment de véritables macarons parisiens croquants à l\'extérieur et fondants à l\'intérieur.',
    price: '24',
    category: 'desserts',
    image: unnamed7
  },
  {
    id: 'm7',
    titleAr: 'تارت الفواكه الطازجة بالتوت',
    titleFr: 'Tartelette Impériale aux Fruits',
    descAr: 'تارت المقرمشة المحشورة بالكامل بكريمة كستر ومسورة بالتوت الأحمر والكيوي وشرائح الفراولة اللامعة.',
    descFr: 'Tartelette croustillante au beurre, garnie decfameux velouté de crème pâtissière et baies sauvages brillantes.',
    price: '25',
    category: 'desserts',
    image: unnamed16
  },
  {
    id: 'm7a',
    titleAr: 'كيك الشوكولاتة والغاناش البلجيكي',
    titleFr: 'Gâteau Opéra Chocolat belge',
    descAr: 'قطعة كيك غنية بطبقات الإسفنج الرطب والغاناش الذائب مغطاة بطبقة لامعة ومزينة بعشاق الشوكولاتة.',
    descFr: 'Délicieuse part de gâteau au chocolat premium riche en ganache fondante pour les amoureux de douceurs raffinées.',
    price: '28',
    category: 'desserts',
    image: unnamed17
  },
  {
    id: 'm8',
    titleAr: 'مسمن بلدي مغربي مورق بالزبدة',
    titleFr: 'Msemmen Beldi Royal',
    descAr: 'رغايف المسمن المغربي الأصيل المورق واللذيذ الساخن مع الزبدة البلدية، العسل والجبن وقنينة ماء.',
    descFr: 'Moroccan puff fold puff pastries (Msemmen) served warm with real country butter, liquid honey, cheese cups and water.',
    price: '15',
    category: 'waffles',
    image: unnamed12
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
    textFr: 'Café très élégant avec un design intérieur luxeux et confortable ! L\'éclairage est chaleureux, les chaises sont super confortables, idéales pour les familles.'
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
    title: 'صالون الشاي والمقهى الفاخر | بنسليمان',
    navLogo: 'CAFÉ LUXE',
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
    
    aboutTitle: 'أرقى صالون شاي ومقهى فاخر ببنسليمان',
    aboutSubtitle: 'أين تجتمع الأناقة واللذة',
    aboutP1: 'يقع مقهانا وصالون الشاي الفاخر في حي شمس المدينة الهادئ والراقي ببنسليمان، وهو ليس مجرد فضاء عادي، بل هو وجهة لعشاق الذوق الرفيع. صمم المقهى بديكورات مخملية وألواح خشبية دافئة وإضاءة ذهبية غامرة توفر لك الراحة المطلقة.',
    aboutP2: 'من فطورنا البلدي التقليدي ببراد أتاي المغربي والمسمن الساخن المورق بالزبدة، إلى قهوتنا الإيطالية الفاخرة، وميلك شيك الشوكولاتة الغني المزين بالكريمة الطازجة، نحرص على تقديم أطباق مجهزة بأجود المكونات الطازجة وأرقى أساليب الضيافة.',
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
    menuWaffles: 'المسمن والمعجنات البلدية',
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
    title: 'CAFÉ LUXE - Benslimane',
    navLogo: 'CAFÉ LUXE',
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
    
    aboutTitle: 'Salon & Café Luxe - Benslimane',
    aboutSubtitle: 'Le design rencontre la gastronomie authentique',
    aboutP1: 'Niché dans le quartier accueillant et chic de Shams Al Madina à Benslimane, notre salon et café de luxe est bien plus qu\'un simple lieu de pause. C\'est une invitation au luxe discret avec ses canapés en velours douillets, ses tons boisés apaisants et ses touches dorées étincelantes sous une lumière tamisée.',
    aboutP2: 'Que ce soit pour notre authentique plateau de petit-déjeuner Beldi avec sa théière fraîche et nos msemmen feuilletés, ou pour savourer notre Cappuccino onctueux préparé par des baristas qualifiés, nous nous engageons à offrir le meilleur de la gastronomie et de l\'accueil marocain.',
    aboutMetaHeading: 'L\'Art de la Convivialité',
    aboutMeta1: 'Ingrédients de première qualité locaux et frais',
    aboutMeta2: 'Espace familial calme, convivial et climatisé',
    aboutMeta3: 'Une équipe dévouée, accueillante et professionnelle',

    menuTitle: 'Explorez Notre Univers Gourmand',
    menuSubtitle: 'Des recettes faites maison avec amour pour éveiller vos papilles à tout moment de la journée',
    menuAll: 'Tous nos articles',
    menuBreakfast: 'Petits-Déjeuners',
    menuDrinks: 'Cafés & Boissons Chaudes',
    menuDesserts: 'Milkshakes & Pâtisseries fines',
    menuWaffles: 'Msemmen & Feuillettés Beldi',
    popupPopular: 'Populaire',
    currency: 'MAD',
    
    reserveTitle: 'Réservez votre Table en Ligne',
    reserveSubtitle: 'Agrémentez your journée en garantissant votre table préférée dans une ambiance luxueuse et détendue. Confirmation instantanée !',
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
