import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      "wiki_title": "Astron City Wiki",
      "home_welcome": "Bem-vindo ao banco de dados definitivo do modpack. Navegue pelo menu lateral para explorar as estratégias.",
      "menu_mods": "Biblioteca de Mods",
      "menu_bestiary": "O Grande Bestiário",
      "menu_mobs": "Mobs e Inimigos",
      "menu_dimensions": "Dimensões",
      "menu_tips": "Dicas de Sobrevivência",
      "search_placeholder": "Buscar receita, mob ou item...",
      "tree_view": "Ver Árvore",
      "grid_view": "Ver Grid",
      "btn_language": "English"
    }
  },
  en: {
    translation: {
      "wiki_title": "Astron City Wiki",
      "home_welcome": "Welcome to the definitive modpack database. Use the sidebar to explore strategies.",
      "menu_mods": "Mods Library",
      "menu_bestiary": "The Great Bestiary",
      "menu_mobs": "Mobs & Enemies",
      "menu_dimensions": "Dimensions",
      "menu_tips": "Survival Tips",
      "search_placeholder": "Search recipe, mob or item...",
      "tree_view": "Tree View",
      "grid_view": "Grid View",
      "btn_language": "Português"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
