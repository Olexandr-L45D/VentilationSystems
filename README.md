# React + Vite

Project VentilationSystems This template provides a minimal setup to get React
working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

# стуркутра папок та фалів проекту

VentilationSystems/ ├── public/ ├── src/ ├── scripts/ 👈 СТВОРИ ├── package.json

# стуркутра фалів для скачування юзеру собі на компютер

/public /pdfs turbomax-9000.pdf industrial-vent-500.pdf axial-pro-300.pdf

<!-- added lenguage translate -->

public/locales/ ├── en/ │ └── common.json ← SOURCE OF TRUTH ├── it/ │ └──
common.json ← AUTO-GENERATED

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

src/ │ ├── app/ # App-level логіка (entry point) │ ├── App.tsx │ ├──
Providers.tsx # Context / Theme / i18n / Router │ └── routes.tsx │ ├── pages/ #
Сторінки (route-level) │ ├── Home/ │ │ ├── Home.page.tsx │ │ └── Home.module.css
│ ├── Home/ │ │ ├── Home.page.tsx │ │ └── Home.module.css │ ├── Home/ │ │ ├──
Home.page.tsx │ │ └── Home.module.css │ ├── Home/ │ │ ├── Home.page.tsx │ │ └──
Home.module.css │ ├── Home/ │ │ ├── Home.page.tsx │ │ └── Home.module.css │ ├──
Home/ │ │ ├── Home.page.tsx │ │ └── Home.module.css │ ├── Profile/ │ └──
NotFound/ │ ├── widgets/ # Великі UI-блоки (sections) │ ├── Header/ │ │ ├──
Header.tsx │ │ └── Header.module.css │ ├── Footer/ │ ├── Sidebar/ │ └── Modal/ │
├── features/ # Бізнес-логіка / сценарії │ ├── Auth/ │ │ ├── LoginForm.tsx │ │
└── auth.model.ts │ ├── Search/ │ └── ThemeToggle/ │ ├── entities/ # Сутності
(domain) │ ├── User/ │ │ ├── UserCard.tsx │ │ └── user.types.ts │ ├── Product/ │
├── shared/ # Повторно використовуване │ ├── ui/ # Дрібні UI-компоненти │ │ ├──
Button/ │ │ ├── Input/ │ │ ├── Icon/ │ │ └── Typography/ │ ├── hooks/ │ ├──
utils/ │ ├── constants/ │ └── styles/ │ ├── variables.css │ ├── reset.css │ └──
globals.css │ └── index.tsx

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

<a href="#main-content">Перейти до основного контенту</a>

  <!-- ================= HEADER ================= -->
  <header>
    <div>
      <a href="/" aria-label="Головна сторінка">
        <img src="/logo.svg" alt="Назва бренду" />
      </a>
    </div>

    <nav aria-label="Основна навігація">
      <ul>
        <li><a href="/">Головна</a></li>
        <li><a href="/services">Послуги</a></li>
        <li><a href="/blog">Блог</a></li>
        <li><a href="/contacts">Контакти</a></li>
      </ul>
    </nav>

    <div>
      <button type="button">Увійти</button>
    </div>

  </header>

  <!-- ================= MAIN ================= -->
  <main id="main-content">

    <!-- H1 ТІЛЬКИ ОДИН -->
    <h1>Головний заголовок сторінки</h1>

    <!-- ===== HERO SECTION ===== -->
    <section aria-labelledby="hero-title">
      <h2 id="hero-title">Ключова пропозиція</h2>

      <p>
        Короткий опис основної цінності продукту або сервісу.
      </p>

      <ul>
        <li>Перевага №1</li>
        <li>Перевага №2</li>
        <li>Перевага №3</li>
      </ul>

      <button type="button">Почати</button>
      <a href="/details">Детальніше</a>
    </section>

    <!-- ===== FEATURES ===== -->
    <section aria-labelledby="features-title">
      <h2 id="features-title">Можливості</h2>

      <article>
        <h3>Функція 1</h3>
        <p>Опис функції</p>
      </article>

      <article>
        <h3>Функція 2</h3>
        <p>Опис функції</p>
      </article>

      <article>
        <h3>Функція 3</h3>
        <p>Опис функції</p>
      </article>
    </section>

    <!-- ===== CONTENT WITH LISTS ===== -->
    <section aria-labelledby="lists-title">
      <h2 id="lists-title">Приклади списків</h2>

      <!-- Маркований -->
      <ul>
        <li>Елемент списку</li>
        <li>Елемент списку</li>
      </ul>

      <!-- Нумерований -->
      <ol>
        <li>Крок перший</li>
        <li>Крок другий</li>
      </ol>

      <!-- Описовий -->
      <dl>
        <dt>Термін</dt>
        <dd>Пояснення терміну</dd>
      </dl>
    </section>

    <!-- ===== MEDIA ===== -->
    <section aria-labelledby="media-title">
      <h2 id="media-title">Медіа</h2>

      <figure>
        <img src="/image.jpg" alt="Опис зображення" />
        <figcaption>Пояснення до зображення</figcaption>
      </figure>

      <video controls>
        <source src="/video.mp4" type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>
    </section>

    <!-- ===== FORM ===== -->
    <section aria-labelledby="form-title">
      <h2 id="form-title">Форма зворотного звʼязку</h2>

      <form>
        <fieldset>
          <legend>Ваші дані</legend>

          <label for="name">Імʼя</label>
          <input id="name" name="name" type="text" required />

          <label for="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label for="message">Повідомлення</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Надіслати</button>
        </fieldset>
      </form>
    </section>

    <!-- ===== ASIDE ===== -->
    <aside aria-labelledby="aside-title">
      <h2 id="aside-title">Додаткова інформація</h2>

      <nav aria-label="Додаткові посилання">
        <ul>
          <li><a href="#">Посилання 1</a></li>
          <li><a href="#">Посилання 2</a></li>
        </ul>
      </nav>
    </aside>

  </main>

  <!-- ================= FOOTER ================= -->
  <footer>
    <nav aria-label="Футер навігація">
      <ul>
        <li><a href="/privacy">Політика конфіденційності</a></li>
        <li><a href="/terms">Умови використання</a></li>
      </ul>
    </nav>

    <address>
      <p>Контакти:</p>
      <a href="mailto:info@example.com">info@example.com</a>
    </address>

    <p>© 2025 Назва компанії</p>

  </footer>

</body>
</html>
