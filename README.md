# Fotoqraf Portfolio — React + Vite

Moda və reklam fotoqrafı üçün tək səhifəlik portfolio saytı.
**React 19 + Vite + Framer Motion + React Router** üzərində qurulub, bütün mətnlər Azərbaycan dilindədir.

---

## Tez başlanğıc

```bash
npm install     # yalnız bir dəfə
npm run dev     # http://localhost:5173
```

| Əmr | Nə edir |
| --- | --- |
| `npm run dev` | Dev server — kod dəyişikliyi dərhal brauzerdə görünür |
| `npm run build` | Prodakşn üçün `dist/` qovluğunu yaradır |
| `npm run preview` | Hazır `dist/`-i lokal serverdə açır |
| `npm run lint` | Kod yoxlaması (oxlint) |

> `dist/index.html`-i birbaşa cüt-klikləmək işləmir — brauzerin təhlükəsizlik
> qaydalarına görə kiçik bir server lazımdır (`npm run preview`).

---

## Nəyi haradan dəyişmək

| İstədiyiniz | Fayl |
| --- | --- |
| Ad, telefon/WhatsApp, e-poçt, sosial linklər | `src/data/site.js` |
| Layihələr, xidmətlər, FAQ, xronologiya, avadanlıq | `src/data/projects.js` |
| Foto və videolar | `public/media/` |
| Loqo | `src/assets/logo.js` (SVG path) + `public/logo.svg`, `public/favicon.svg` |
| Rənglər, şrift, ölçülər | `src/index.css` (yuxarıdakı `:root` bloku) |
| Səhifə başlığı, SEO təsviri, paylaşım kartı | `index.html` |

### Yeni layihə əlavə etmək

1. Foto/videoları `public/media/` qovluğuna atın.
2. `src/data/projects.js`-də `projects` massivinə yeni obyekt əlavə edin.
3. `media` sahəsində path-ları `"./media/fayl-adi.jpg"` formatında yazın.

`media` sahəsində **null** qalan hər şey saytda **ümumiyyətlə göstərilmir** —
boş boz qutular çıxmır. Şəkil əlavə edən kimi həmin bölmə avtomatik qayıdır.

```js
media: {
  card: "./media/yeni-card.jpg",   // portfolio kartı
  cardRatio: "2x3",                // 2x3 | 3x4 | 16x9 | 9x16 | 1x1 | 21x9
  hero: "./media/yeni-hero.jpg",   // layihə səhifəsinin böyük şəkli
  heroRatio: "2x3",
  heroVideo: null,                 // video varsa: "./media/yeni.mp4" (hero-nu əvəz edir)
  overview: null,
  process: [null, null],           // proses kadrları
  gallery: [null, null, null, null, null, null],
}
```

### Layihə mövzuları (accent rəngi)

Hər layihənin `theme` sahəsi var. Fon və mətn hər səhifədə eyni qalır —
yalnız vurğu rəngi dəyişir. Hazır variantlar `src/index.css`-in yuxarısındadır:
`sage` (yaşıllıq), `mist` (neytral/şəhər), `gold` (qızıl saat), `clay` (torpaq tonları).

---

## GitHub Pages-ə yerləşdirmə

Layihə Pages üçün onsuz da düzgün konfiqurasiya olunub — **heç nə dəyişmək lazım deyil**:

- `vite.config.js` → `base: './'` — bütün fayl yolları nisbidir, ona görə sayt
  həm `istifadeci.github.io`, həm də `istifadeci.github.io/repo-adi/` ünvanında işləyir.
- `src/main.jsx` → **HashRouter** — ünvanlar `#/projects/...` formatındadır.
  Bu, Pages-in 404 problemini aradan qaldırır (server-side rewrite tələb etmir).

### Variant A — GitHub Actions (tövsiyə olunur)

`.github/workflows/deploy.yml` faylı yaradın:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Sonra GitHub-da: **Settings → Pages → Source: GitHub Actions**.
Bundan sonra `main`-ə hər push avtomatik olaraq build olub yayımlanacaq.

### Variant B — `dist/` qovluğunu əl ilə yükləmək

`npm run build` işə salıb yaranan `dist/` qovluğunun **içindəkiləri**
`gh-pages` branch-ına (və ya Pages üçün seçdiyiniz qovluğa) atın.

Bu üsuldan istifadə edirsinizsə, `.gitignore`-a `dist/` **əlavə etməyin** —
qovluq repo-da qalmalıdır.

---

## Struktur

```
public/
  media/                 ← foto və videolar
  logo.svg, favicon.svg  ← loqo (imza)
src/
  assets/logo.js         ← loqonun SVG path-ı
  data/
    site.js              ← əlaqə məlumatları, ad, sosial linklər
    projects.js          ← layihələr, xidmətlər, FAQ, xronologiya
  components/            ← Header, Logo, Cursor, PageTransition, ProjectCard, ...
  pages/                 ← Home, Projects, CaseStudy
  index.css              ← dizayn sistemi (rənglər, tipoqrafiya, komponentlər)
```

## Effektlər

- **Preloader** — açılışda loqo, sonra navbardakı yerinə keçir
- **Navbar intro** — loqo ortadan sola sürüşür, menyu ardınca görünür
- **Səhifə keçidi** — tək "pərdə" animasiyası; layihəyə keçəndə işin adı görünür
- **Custom cursor** — spring fizikası, kartların üzərində "Bax" yazısı ilə genişlənir
- **Scroll-reveal + stagger**, magnetik düymələr, kinetik başlıqlar, animasiyalı FAQ

`prefers-reduced-motion` seçimi aktiv olan istifadəçilərdə animasiyalar avtomatik sadələşir.

## Şrift qeydi

Başlıqlar **Space Grotesk**, mətn **Inter** — hər ikisi Azərbaycan əlifbasını
(`ə Ə ı İ ğ Ğ ş Ş ç Ç ö Ö ü Ü`) tam dəstəkləyir.
Şrift dəyişdirmək istəsəniz, seçdiyiniz fontda **`ə` və `Ə` glifinin olduğuna**
mütləq əmin olun — bir çox populyar font (məsələn Sora, Outfit, Figtree, Syne)
bu hərfləri daşımır və başlıqlar pozulur.
