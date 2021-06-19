const locales = [
  'en',
  'es-ES',
  'pt-BR',
];

const localeConfigs = {
  en: {
    label: 'English',
  },
  'es-ES()': {
    label: 'Español(Todavía no funciona)',
  },
  'pt-BR(Não funcionando, ainda)': {
    label: 'Português (Brasil)',
  }, 
};

// Docusaurus 2 i18n config
module.exports = {
  defaultLocale: 'en',
  locales,
  localeConfigs,
};

