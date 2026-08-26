// Bütün mətnlər və layihə məlumatları burada saxlanılır.
// Yeni foto/video əlavə etmək üçün: hər layihənin "media" obyektindəki path-ları
// dəyişin (fayllar /public/media qovluğuna qoyulur, path "./media/..." kimi yazılır).
// Media sahəsi boş (null) qalarsa, həmin bölmə saytda ÜMUMİYYƏTLƏ göstərilmir —
// yəni boş boz qutular çıxmır. Şəkil əlavə edən kimi bölmə avtomatik geri qayıdır.

export const projects = [
  {
    slug: "meshe-notlari",
    title: "Meşə Notları",
    theme: "sage",
    category: "Portret Fotoqrafiyası, Editorial",
    headline: "Yaşıllıqda Sadə Zəriflik",
    client: "Şəxsi Layihə",
    year: "2026",
    servicesShort: "Portret Çəkilişi, Kreativ Rejissorluq",
    overview:
      "Təbii işıqda, yaşıl bitki örtüyü fonunda sadə və zərif bir portret editorialı. Minimal stil seçildi ki, diqqət tam modelin öz təbii gözəlliyinə yönəlsin.",
    overviewQuote: "Ən yaxşı fon təbiətin özüdür.",
    scopeTags: ["Portret Çəkilişi", "Təbii İşıq", "Stil İdarəetməsi"],
    objectiveTitle: "Sadəliklə güclü təsir yaratmaq",
    objectiveText:
      "Minimal rekvizit və təbii mühitdən istifadə edərək, modelin öz xarakterini və gözəlliyini ön plana çıxarmaq məqsədi güdüldü.",
    goalTitle: "Zamansız bir portret",
    goalText:
      "Keçici trendlərdən uzaq, klassik zəriflik hədəflənən bu çəkilişdə işıq və kompozisiya əsas fokus nöqtəsi oldu.",
    audience:
      "Təbii, zərif və minimal portret üslubu axtaran müştərilər üçün nümunə ola bilər.",
    processText:
      "Günün yumşaq işıq saatlarında, kölgəli yaşıllıq arasında sərbəst və spontan pozalarla qısa bir seriya çəkildi.",
    directionTitle: "Təbii, isti işıq notu",
    directionText:
      "Yaşıl fon və isti dəri tonlarının təbii kontrastı ilə sakit, orqanik bir əhval-ruhiyyə qorunub saxlanıldı.",
    tag: "Portret, Editorial",
    media: {
      card: "./media/meshe-notlari-card.jpg",
      cardRatio: "2x3",
      hero: "./media/meshe-notlari-hero.jpg",
      heroRatio: "2x3",
      heroVideo: null,
      overview: null,
      process: [null, null],
      gallery: [null, null, null, null, null, null],
    },
  },
  {
    slug: "sheher-notlari",
    title: "Şəhər Notları",
    theme: "mist",
    category: "Küçə Modası, Editorial",
    headline: "Şəhərin Ritmində Stil",
    client: "Şəxsi Layihə",
    year: "2026",
    servicesShort: "Küçə Modası Çəkilişi",
    overview:
      "Şəhərin sadə, geometrik arxitekturası fonunda gündəlik, lakin zövqlü bir kombinasiya təqdim edildi. Mürəkkəb dekordan uzaq, minimal bir vizual dil hədəflənirdi.",
    overviewQuote: "Şəhər öz ritmi ilə fon olur.",
    scopeTags: ["Küçə Modası", "Minimal Kompozisiya", "Təbii Poza"],
    objectiveTitle: "Gündəlik şıklığı göstərmək",
    objectiveText:
      "Şəhərin sadə divar səthlərini fon kimi istifadə edərək, gündəlik geyimi zövqlü və müasir bir tərzdə təqdim etmək məqsədi güdüldü.",
    goalTitle: "Sərbəst, spontan hiss",
    goalText:
      "Post edilməmiş, təbii bir an hissi yaratmaq üçün model sərbəst şəkildə hərəkət etməyə təşviq edildi.",
    audience:
      "Gündəlik, minimal və şəhər üslublu moda çəkilişi axtaran müştərilər üçün nümunədir.",
    processText:
      "Şəhərin sadə, geometrik divar səthləri fon seçilərək, təbii işıqla sürətli və spontan bir seriya çəkildi.",
    directionTitle: "Minimal, boz-tonlu şəhər notu",
    directionText:
      "Neytral boz fon üzərində ağ və qara kontrastı ilə sakit, lakin müasir bir vizual dil qorunub saxlanıldı.",
    tag: "Küçə Modası",
    media: {
      card: "./media/sheher-notlari-card.jpg",
      cardRatio: "2x3",
      hero: "./media/sheher-notlari-hero.jpg",
      heroRatio: "2x3",
      heroVideo: null,
      overview: null,
      process: [null, null],
      gallery: [null, null, null, null, null, null],
    },
  },
  {
    slug: "qizil-saat",
    title: "Qızıl Saat",
    theme: "gold",
    category: "Toy & Event Editorial, Video",
    headline: "Qızıl İşıqda Bir Editorial",
    client: "Editorial Çəkiliş",
    year: "2026",
    servicesShort: "Video Çəkilişi, Kreativ Rejissorluq",
    overview:
      "Günəşin batma vaxtı, gölün kənarında ağ don ilə çəkilmiş bir hərəkətli editorial. Statik kadrdan fərqli olaraq, işığın və hərəkətin öz axarında canlandırılması hədəflənirdi.",
    overviewQuote: "Qızıl işıq hər kadrı zərifləşdirir.",
    scopeTags: ["Video Çəkilişi", "Açıq Hava", "Qızıl Saat İşıqlandırması"],
    objectiveTitle: "Hərəkəti kadrla tutmaq",
    objectiveText:
      "Donun və saçın küləkdə hərəkətini, işığın dəqiqələr içində dəyişməsini videoda canlı şəkildə göstərmək məqsədi güdüldü.",
    goalTitle: "Emosional, kinematik bir an",
    goalText:
      "Qısa formatlı, lakin güclü bir vizual hekayə yaradaraq sosial media və portfolio üçün material əldə etmək hədəflənirdi.",
    audience:
      "Toy, nişan və ya event üçün kinematik video editorial axtaran cütlüklər və brendlər üçün nümunədir.",
    processText:
      "Günəşin batma vaxtı, gölün kənarında təbii işıqdan maksimum istifadə edərək bir neçə fərqli poza və hərəkət ardıcıllığı çəkildi.",
    directionTitle: "İsti, qızıl saat notu",
    directionText:
      "Günəşin aşağı bucaqlı işığının yaratdığı təbii qızılı ton, çəkilişin bütün kadrlarında qorunub saxlanıldı.",
    tag: "Video, Editorial",
    media: {
      card: "./media/qizil-saat-card.jpg",
      cardRatio: "9x16",
      hero: null,
      heroVideo: "./media/qizil-saat.mp4",
      overview: null,
      process: [null, null],
      gallery: [null, null, null, null, null, null],
    },
  },
  {
    slug: "stil-detallari",
    title: "Stil Detalları",
    theme: "clay",
    category: "Lifestyle, Reels",
    headline: "Gündəlik Stilin Detalları",
    client: "Şəxsi Layihə",
    year: "2026",
    servicesShort: "Reels Çəkilişi, Kreativ Rejissorluq",
    overview:
      "Gündəlik, lakin zövqlü bir outfit təqdimatı — geniş köynək, mini yubka və aksesuar detalları qısa, dinamik reels formatında birləşdirildi.",
    overviewQuote: "Detallar bütöv hekayəni tamamlayır.",
    scopeTags: ["Reels Çəkilişi", "Stil Təqdimatı", "Detal Kadrları"],
    objectiveTitle: "Outfiti dinamik təqdim etmək",
    objectiveText:
      "Statik kadr əvəzinə, hərəkət və detal kadrlarının birləşməsi ilə outfitin bütün elementlərini göstərmək məqsədi güdüldü.",
    goalTitle: "Sosial media üçün cəlbedici format",
    goalText:
      "Qısa, axıcı bir reels videosu ilə auditoriyanın diqqətini ilk saniyələrdə cəlb etmək hədəflənirdi.",
    audience:
      "Sosial media üçün lifestyle və moda reels-i axtaran şəxsi brendlər və məzmun yaradıcıları üçün nümunədir.",
    processText:
      "Aksesuar və geyim detalları yaxın planla, ümumi görünüş isə geniş kadrla çəkilərək bir ardıcıllıqda birləşdirildi.",
    directionTitle: "İsti, torpaq-tonlu notlar",
    directionText:
      "Taxta qapı fonu və geyimin torpaq tonları ilə rahat, gündəlik bir əhval-ruhiyyə qorunub saxlanıldı.",
    tag: "Lifestyle, Reels",
    media: {
      card: "./media/stil-detallari-card.jpg",
      cardRatio: "9x16",
      hero: null,
      heroVideo: "./media/stil-detallari.mp4",
      overview: null,
      process: [null, null],
      gallery: [null, null, null, null, null, null],
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};


export const services = [
  { n: "01", title: "Moda Çəkilişi", text: "Kolleksiya, lookbook və editorial çəkilişlər — konsepsiyadan son kadra qədər tam idarəetmə." },
  { n: "02", title: "Reklam & Kommersiya Çəkilişi", text: "Brend kampaniyaları, məhsul fotoqrafiyası və sosial media üçün vizual məzmun." },
  { n: "03", title: "Kreativ Rejissorluq", text: "Mood board, işıqlandırma sxemi və vizual konsepsiyanın hazırlanması." },
  { n: "04", title: "Retuş & Rəng Korreksiyası", text: "Hər kadrın son görünüşünü brendin vizual dilinə uyğun cilalayıram." },
  { n: "05", title: "Video / Reels Çəkilişi", text: "Sosial media üçün qısa, dinamik video məzmun — çəkiliş kadrının arxa planı da daxil." },
  { n: "06", title: "Studiya & Prodakşn Dəstəyi", text: "İşıq, fon və komanda daxil olmaqla tam prodakşn həlli." },
];

export const faqs = [
  { q: "Çəkiliş üçün necə sifariş verə bilərəm?", a: "Yuxarıdakı 'Çəkiliş Sifariş Et' düyməsi vasitəsilə mənimlə əlaqə saxlaya bilərsiniz — layihənizi qısaca izah edin, 24 saat ərzində geri dönüş edirəm." },
  { q: "Qiymətlər necə formalaşır?", a: "Qiymət çəkilişin növünə, müddətinə və lokasiyaya görə dəyişir. Layihənizin təfərrüatlarını öyrəndikdən sonra fərdi təklif hazırlayıram." },
  { q: "Çəkiliş orta hesabla nə qədər vaxt aparır?", a: "Kiçik kommersiya çəkilişləri 2-3 saat, tam kampaniya və lookbook layihələri isə bir tam gün çəkə bilər." },
  { q: "Stilist, vizajist və ya model təmin edirsiniz?", a: "Bəli, tələb olunduqda etibarlı tərəfdaşlar şəbəkəm vasitəsilə tam komanda təşkil edə bilərəm." },
  { q: "Neçə kadr təhvil verilir və nə vaxt?", a: "Layihənin həcmindən asılı olaraq seçilmiş və retuş edilmiş kadrlar adətən 5-10 iş günü ərzində təhvil verilir." },
  { q: "Studiyada, yoxsa açıq məkanda çəkiliş edirsiniz?", a: "Hər ikisi mümkündür — layihənin konsepsiyasına uyğun ən münasib məkanı birlikdə müəyyən edirik." },
  { q: "Hazır kadrların istifadə hüquqları necədir?", a: "Kommersiya istifadəsi üçün lisenziya şərtləri müqavilədə aydın şəkildə göstərilir — bu barədə əvvəlcədən razılaşırıq." },
];

export const timeline = [
  { year: "2021", title: "Fotoqrafiyaya başlanğıc", text: "Portret və küçə fotoqrafiyası ilə ilk addımlar, öz vizual dilimin formalaşması." },
  { year: "2023", title: "Moda & Reklam sahəsinə keçid", text: "İlk kommersiya kampaniyaları, brendlərlə ilk əməkdaşlıqlar." },
  { year: "2025 — indi", title: "Müstəqil Fotoqraf / Kreativ Rejissor", text: "Moda və reklam çəkilişlərinə fokuslanaraq öz üslubumu qururam." },
];

// Avadanlıq lenti — istifadə etmək istəmirsinizsə massivi boş qoyun: []
export const tools = ["Canon EOS R5", "Sony A7 IV", "Profoto B10", "Capture One", "Adobe Lightroom", "Adobe Photoshop", "DaVinci Resolve"];
