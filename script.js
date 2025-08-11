const translations = {
  en: {
    title: "Boost Your Business with SEO & Marketing",
    subtitle: "We create stunning websites and drive traffic with Google & Yandex Ads",
    cta: "Get Started",
    servicesTitle: "Our Services",
    pricingText: "Starting from $199 — Pay securely via Stripe",
    payNow: "Pay Now"
  },
  ru: {
    title: "Продвигайте бизнес с помощью SEO и маркетинга",
    subtitle: "Создаём стильные сайты и приводим клиентов через рекламу Google и Яндекс",
    cta: "Начать",
    servicesTitle: "Наши услуги",
    pricingText: "От $199 — безопасная оплата через Stripe",
    payNow: "Оплатить"
  },
  ua: {
    title: "Розвивайте бізнес за допомогою SEO та маркетингу",
    subtitle: "Створюємо стильні сайти та приводимо клієнтів через рекламу Google і Яндекс",
    cta: "Почати",
    servicesTitle: "Наші послуги",
    pricingText: "Від $199 — безпечна оплата через Stripe",
    payNow: "Сплатити"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelector('h1').textContent = t.title;
  document.querySelector('.hero p').textContent = t.subtitle;
  document.querySelector('.cta-btn').textContent = t.cta;
  document.querySelector('#services h2').textContent = t.servicesTitle;
  document.querySelector('#pricing p').textContent = t.pricingText;
  document.querySelector('#pricing .cta-btn').textContent = t.payNow;

  localStorage.setItem('preferredLanguage', lang);

  // Обновляем флаг
  const flagMap = {
    en: '🇬🇧',
    ru: '🇷🇺',
    ua: '🇺🇦'
  };
  document.getElementById('current-language').textContent = flagMap[lang];
}


// При загрузке страницы — применяем сохранённый язык
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);
});
