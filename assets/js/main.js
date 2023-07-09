document.addEventListener('DOMContentLoaded', function() {

// Start Burger menu

document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
  document.querySelector('body').classList.toggle('body_open');
})
document.querySelector('.nav').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
  document.querySelector('body').classList.toggle('body_open');
})

// End Burger menu

// Start language

const allLangs = ['ru','ua','en','de'];
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'de';
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

const homeTexts = {
  "header_cv": {
    ru: "Резюме",
    ua: "Резюме",
    en: "CV",
    de: "Lebenslauf",
  },
  "menu_header_profile": {
    ru: "Профиль",
    ua: "Профіль",
    en: "Profile",
    de: "Profil",
  },
  "menu_header_about_me": {
    ru: "Обо мне",
    ua: "Про мене",
    en: "About Me",
    de: "Über mich",
  },
  "menu_header_skills": {
    ru: "Навыки",
    ua: "Навички",
    en: "Skills",
    de: "Fähigkeiten",
  },
  "menu_header_code": {
    ru: "Код",
    ua: "Код",
    en: "Code",
    de: "Code",
  },
  "menu_header_education": {
    ru: "Образование",
    ua: "Освіта",
    en: "Education",
    de: "Ausbildung",
  },
  "menu_header_projects": {
    ru: "Проекты",
    ua: "Проекти",
    en: "Projects",
    de: "Projekte",
  },
  "menu_header_languages": {
    ru: "Языки",
    ua: "Мови",
    en: "Languages",
    de: "Sprachen",
  },
  "menu_header_contacts": {
    ru: "Контакты",
    ua: "Контакти",
    en: "Contacts",
    de: "Kontakte",
  },
  "home_lang-select": {
    ru: "RU",
    ua: "UA",
    en: "EN",
    de: "DE",
  },
  
  "home_h1_section-title": {
    ru: "Луговой Назарий",
    ua: "Луговий Назарій",
    en: "Luhovyi Nazarii",
    de: "Luhovyi Nazarii",
  },
  "profession": {
    ru: "Младший Front End Разработчик",
    ua: "Молодший фронтенд розробник",
    en: "Junior Front End Developer",
    de: "Junior Frontend-Entwickler",
  },
  "about_me": {
    ru: "Обо мне",
    ua: "Про мене",
    en: "About Me",
    de: "Über mich",
  },
  "about_me_content": {
    ru: 'С 2007 по 2022 год руководил сервисным центром по ремонту мобильных телефонов. Создал и развил сайт своей компании <a href="https://gsmrepair.com.ua" target="_blank">gsmrepair.com.ua</a>. Теперь я хочу улучшить свои навыки в разработке Front-End, для общих и собственных проектов.',
    ua: 'З 2007 по 2022 рік я керував сервісним центром з ремонту мобільних телефонів. Створив і розвинув сайт своєї компанії <a href="https://gsmrepair.com.ua" target="_blank">gsmrepair.com.ua</a>. Тепер я хочу вдосконалити свої навички у Front-End розробці для загальних і власних проектів.',
    en: 'From 2007 to 2022, I was in charge of a mobile phone repair service center. Created and developed the website of his company <a href="https://gsmrepair.com.ua" target="_blank">gsmrepair.com.ua</a> . Now I want to improve my skills in Front-End development, for general and my own projects.',
    de: 'Von 2007 bis 2022 leitete ich ein Servicecenter für Handyreparaturen. Erstellt und entwickelt die Website seiner Firma <a href="https://gsmrepair.com.ua" target="_blank">gsmrepair.com.ua</a>. Jetzt möchte ich meine Fähigkeiten in der Front-End-Entwicklung verbessern, für allgemeine und meine eigenen Projekte.',
  },
  "skills": {
    ru: "Навыки",
    ua: "Навички",
    en: "Skills",
    de: "Fähigkeiten",
  },
  "example_code": {
    ru: "Пример кода",
    ua: "Приклад коду",
    en: "Example Code",
    de: "Beispielcode",
  },
  "education": {
    ru: "Образование",
    ua: "Освіта",
    en: "Education",
    de: "Ausbildung",
  },
  "university": {
    ru: '<b>Университет:</b> «Харьковский политехнический институт», присвоена квалификация: диплом специалиста, предметная область программы «Менеджмент организаций и управление»',
    ua: '<b>Університет:</b> «Харківський політехнічний інститут», здобуто кваліфікацію «Спеціаліст», предметна галузь програми «Менеджмент організацій та управління»',
    en: '<b>University:</b> “Kharkiv Polytechnic Institute”, obtained qualification: Specialist Degree, Program Subject Area “Management of organizations and administration”',
    de: '<b>Universität:</b> „Polytechnisches Institut Charkiw“, erworbene Qualifikation: Fachdiplom, Studienfachbereich „Management von Organisationen und Verwaltung“',
  },
  "courses": {
    ru: 'Курсы:',
    ua: 'Курси:',
    en: 'Courses:',
    de: 'Kurse:',
  },
  "projects": {
    ru: 'Проекты (Опыт)',
    ua: 'Проекти (Досвід)',
    en: 'Projects (Experience)',
    de: 'Projekte (Erfahrung)',
  },
  "projects_content": {
    ru: '<a href="https://gsmrepair.com.ua" target="_blank" >gsmrepair.com.ua</a> Создал и поддерживал 2007 - 2022',
    ua: '<a href="https://gsmrepair.com.ua" target="_blank" >gsmrepair.com.ua</a> Створив та підтримував 2007 - 2022',
    en: '<a href="https://gsmrepair.com.ua" target="_blank" >gsmrepair.com.ua</a> Сreated and worked 2007 - 2022',
    de: '<a href="https://gsmrepair.com.ua" target="_blank" >gsmrepair.com.ua</a> Erstellt und gepflegt 2007 - 2022',
  },
  "languages": {
    ru: 'Языки',
    ua: 'Мови',
    en: 'Languages',
    de: 'Sprachen',
  },
  "english": {
    ru: 'Английский: A1',
    ua: 'Англійська: A1',
    en: 'English: A1',
    de: 'Englisch: A1',
  },
  "german": {
    ru: 'Немецкий: A2',
    ua: 'Німецький: A2',
    en: 'German: A2',
    de: 'Deutsch: A2',
  },
  "russian_ukrainian": {
    ru: 'Русский и украинский: носитель языка',
    ua: 'Українська та російська мова: носій мови',
    en: 'Russian and Ukrainian: native speaker',
    de: 'Russisch und Ukrainisch: Muttersprachler',
  },
  "contacts": {
    ru: 'Контакты',
    ua: 'Контакти',
    en: 'Contacts',
    de: 'Kontakte',
  },
  "phone": {
    ru: 'Телефон:',
    ua: 'Телефон:',
    en: 'Phone:',
    de: 'Telefon:',
  },
  "location": {
    ru: '<b>Расположение:</b> Нойбург 86633, Германия',
    ua: '<b>Місцезнаходження:</b> Нойбург 86633, Німеччина',
    en: '<b>Location:</b> Neuburg 86633, Germany',
    de: '<b>Standort:</b> Neuburg 86633, Deutschland',
  },
  "by_luhovyi_nazarii": {
    ru: 'Луговой Назарий',
    ua: 'Луговий Назарій',
    en: 'by Luhovyi Nazarii',
    de: 'von Luhovyi Nazarii',
  },
};

const homeFlag = {
  "home_lang-select-flag": {
    ru: 'background-image: url("assets/img/ru.jpg");',
    ua: 'background-image: url("assets/img/ua.jpg");',
    en: 'background-image: url("assets/img/usa.jpg");',
    de: 'background-image: url("assets/img/de.jpg");',
  },
};

/* const anotherTexts = {
  "another_h1_section-title": {
    ru: "Луговой Назарий aRu",
    ua: "Луговий Назарій aUa",
    en: "Luhovyi Nazarii aEn",
    de: "Luhovyi Nazarii aDe",
  },
}; */

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentText = homeTexts;
      break;
    case "/another_page.html":
      currentText = anotherTexts;
      break;

    default:
      currentText = homeTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    // const elem1 = document.querySelector('.flag_img');
    if(elem){
      //elem.textContent
      elem.innerHTML = currentText[key][currentLang];
    }
  }  
}
changeLang();

function changeFlag() {
  for (const key in homeFlag) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    const elem1 = document.querySelector('.flag_img');
    if(elem){
      elem1.style.cssText = homeFlag[key][currentLang];
    }
  }  
}
changeFlag();

langButtons.forEach((btn)=>{
  btn.addEventListener('click',(event)=>{
    currentLang = event.target.dataset.btn;
    localStorage.setItem('language', event.target.dataset.btn)
    resetActiveClass(langButtons, 'lang-btn-active');
    btn.classList.add('lang-btn-active');
    changeLang();
    changeFlag();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach(elem=>{
    elem.classList.remove(activeClass)
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "ru":
      document.querySelector('[data-btn="ru"]').classList.add('lang-btn-active');
      break;
    case "en":
      document.querySelector('[data-btn="en"]').classList.add('lang-btn-active');
      break;
    case "ua":
      document.querySelector('[data-btn="ua"]').classList.add('lang-btn-active');
      break;
    case "de":
      document.querySelector('[data-btn="de"]').classList.add('lang-btn-active');
      break;  
    default:
      document.querySelector('[data-btn="de"]').classList.add('lang-btn-active');
      break;
  }
}
checkActiveLangButton();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0,2).toLocaleLowerCase();
  const result = allLangs.some(elem=>{
    return elem === navLang;
  })

  if(result){
    return navLang
  }
}

// End language
// Start language select

const menuRoot = document.querySelector('.container-lang-select');
document.addEventListener('mousedown', (e) => {
   if (! menuRoot.contains(e.target)) {
    document.querySelector('.container-lang-select').classList.remove('is-active');
   }
})

document.querySelector('.container-lang-select-header').addEventListener('click', function () {
  document.querySelector('.container-lang-select').classList.toggle('is-active');
})

document.querySelector('.container-lang-select-body').addEventListener('click', function () {
  document.querySelector('.container-lang-select').classList.toggle('is-active');
})

// End language select
// Start Fixed Header

window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if(window.pageYOffset > 80) {
    header.classList.add('header_fixed');
    header.classList.add('header_animation');
  } else {
    header.classList.remove('header_fixed');
  };
};

// End Fixed Header
// Start this year

let today = new Date();
let year = today.getFullYear();
document.querySelector(`[data-lang=this_year]`).innerHTML = year;

// End this year

})