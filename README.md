# React + Vite

Project VentilationSystems This template provides a minimal setup to get React
working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh
    <!-- запуск проекту -->
    <!-- перед запуском перевірити версію ноди командою в терміналі
    (= nvm list) бо має бути 22 га -->
    <!-- маю активну з зірочкою :
      
  <!-- * 22.22.0 (Currently using 64-bit executable)
         20.20.0
     -->
   <!-- переключаюсь на 22 гу скриптом -->
   <!-- якщо має не 22 гу то переключаюсь через нвм команду:
   nvm install 22.22.0
   nvm use 22.22.0
    -->

# Project Structure (Modern Scalable Architecture)

src/ │ ├── app/ # App-level configuration │ ├── App.jsx │ ├── Providers.jsx #
Router / i18n / Redux / Theme │ └── routes.jsx │ ├── pages/ # Route-level pages
│ ├── HomePage/ │ │ ├── HomePage.jsx │ │ └── HomePage.module.css │ │ │ ├──
AboutUsPage/ │ │ ├── AboutUsPage.jsx │ │ └── AboutUsPage.module.css │ │ │ ├──
CompanyTermsPage/ │ │ ├── CompanyTermsPage.jsx │ │ └──
CompanyTermsPage.module.css │ │ │ ├── VentPageFilters/ │ │ ├──
VentPageFilters.jsx │ │ └── VentPageFilters.module.css │ │ │ └── NotFoundPage/ │
└── NotFoundPage.jsx │ ├── components/ # Reusable UI components │ ├── App/ │ ├──
Layout/ │ ├── Header/ │ ├── Footer/ │ ├── Navigation/ │ │ │ ├── CatalogGallary/
│ ├── FenDetails/ │ ├── Loader/ │ ├── ScrollToTopButton/ │ ├── SearchBoxFiltr/ │
│ │ ├── ConditionsMenu/ │ │ │ ├── ContactMap/ │ │ ├── ContactMap.jsx │ │ └──
ContactMapModal.jsx │ │ │ ├── Feedback/ │ │ ├── FeedbackMenu.jsx │ │ ├──
FeedbackForm.jsx │ │ ├── FeedbackFormPhone.jsx │ │ ├── FeedbackModalPhone.jsx │
│ └── FeedbackEmailModal.jsx │ │ │ └── ModalBasket/ │ ├── redux/ # Global state
management │ ├── store.js │ │ │ ├── campers/ │ │ ├── slice.js │ │ ├──
operations.js │ │ └── selectors.js │ │ │ ├── filters/ │ │ ├── slice.js │ │ └──
selectors.js │ │ │ └── basket/ │ ├── slice.js │ └── selectors.js │ ├──
locales/ # Internationalization │ ├── en/ │ │ └── translation.json │ │ │ ├── it/
│ │ └── translation.json │ │ │ └── pl/ │ └── translation.json │ ├── assets/ #
Static assets │ ├── images/ │ ├── icons/ │ └── fonts/ │ ├── hooks/ # Custom
React hooks │ ├── utils/ # Helper functions │ ├── constants/ # Global constants
│ ├── styles/ # Global styles │ ├── variables.css │ ├── reset.css │ └──
globals.css │ └── main.jsx # Application entry point

# стуркутра папок та фалів проекту

VentilationSystems/ ├── public/ ├── src/ ├── scripts/

# стуркутра фалів для скачування юзеру собі на компютер

/public /pdfs turbomax-9000.pdf industrial-vent-500.pdf axial-pro-300.pdf

<!-- added lenguage translate -->

public/locales/ ├── en/ │ └── common.json ← SOURCE OF TRUTH ├── it/ │ └──
common.json ← AUTO-GENERATED

## стуркутра start comand

-`npm run lint` end after -`npm run build`

<!-- if wont translate in the tarminal up start: npm run translate:it
 -->
<!-- Якщо не білдиться видаляю кеш -->
<!-- # видаляємо кеші
rm -rf node_modules
rm -rf dist
rm -rf .vite -->
<!-- потім новий інсталл = npm install-->
<!-- потім перевірка = npm audit fix
 -->

# стуркутра всього проекту (сучасний підхід)

<!-- SEO -->

 <!-- ПОВНА, еталонна SEO-та UI/UX-коректна структура всієї сторінки з максимальною семантикою HTML5, без div-сміття, з усіма базовими типами списків, кнопками, формами, навігацією, ARIA, так як це правильно читають браузери, Google, Lighthouse, screen readers. -->
 <!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- SEO -->
  <title>Заголовок сторінки | Бренд</title>
  <meta name="description" content="Короткий SEO-опис сторінки до 160 символів." />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:title" content="Заголовок сторінки" />
  <meta property="og:description" content="Опис сторінки для соцмереж" />
  <meta property="og:type" content="website" />

</head>
<body>

  <!-- SKIP LINK (a11y must-have) -->

<a href="#main-content">Перейти до основного контенту</a> // // Пояснення під
капотом

// TileLayer — компонент з react-leaflet, що підключає тайловий шар карти
(мозаїку з маленьких зображень — «тайлів»). Саме цей шар показує карту (дороги,
рельєф і т.д.).

// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Це шаблон URL для
тайлів:

// {z} — zoom level (0 — світ, 1..n — детальніше)

// {x}, {y} — координати тайла в тайловій системі

// {s} — subdomain (зазвичай a, b, c) — браузер одночасно робить кілька
паралельних запитів, тому субдомени прискорюють підвантаження. // OpenStreetMap
офіційний тайл-сервер підтримує a, b, c.

// attribution="&copy; OpenStreetMap" // Пара метаданих, яка відображається у
лівому/правому нижньому куті карти — обов’язкова для більшості публічних
тайл-провайдерів (OSM вимагає коректного атрибуту). Можна використовувати HTML,
наприклад:

<!-- ✅ BEST PRACTICE РІШЕННЯ пр закритті модалок -->
<!-- const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    navigate("/"); // ⬅️ ПЕРЕХІД НА HOME
  }; -->

  <!-- в налаштуваннях шаблону EmailJS 👍
Потрібно додати поле телефону в самому email-template.

Що саме треба зробити в EmailJS
1️⃣ Зайди в EmailJS Dashboard

👉 https://dashboard.emailjs.com/

2️⃣ Відкрий Email Templates

Email Templates → обери свій template
(той, ID якого = VITE_EMAILJS_TEMPLATE_ID)

3️⃣ Відредагуй тіло листа (Email Content)

У полі Email Body або Content додай змінну телефону: -->

<!-- розміри екранів -->
<!-- Дуже маленькі Смартфони/Ретіна екрани = 220 * 480 -треба робити для Ретіна екранів з більшою щільністю типу Айфон->
<!-- Стандартні Смартфони = 360 * 896 -->
<!-- Стандартні Планшети = 720 * 1279 -->
<!-- Велтикі Планшети = 1280 * 1439 -(13-14 дюймів)->
<!-- Стандартні та великі Десктопи = 1440 * 2000 -->

<!-- Базові медіа запити для адаптації -->
<!-- @media (min-width: 220px) and (max-width: 479px) {}   /*малі мобільні та ретина екрани*/
@media (min-width: 480px) and (max-width: 767px) {} /* великі мобільні */
@media (min-width: 768px) and (max-width: 991px) {} /* малі планшети */
@media (min-width: 992px) and (max-width: 1279px) {} /* планшети */
 -->

# в випадку якщо додав нові елементи і якщо хочу оновити переклади запускаю команди (прописані в скриптах)

- `npm run translate:it`
- `npm run translate:pl`
