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
