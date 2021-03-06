export const dataCareerVacances = {
  backend: {
    header: 'backend',
    title:
      'Мы ищем самостоятельных разработчиков с опытом работы на коммерческих проектах. Разрабатывая IT-решения, мы стараемся использовать самые современные технологии проектирования -  пишем бек на основе PHP-фреймворков (Laravel, Symfony, Yii2).',
    junior: {
      header: 'junior',
      subtitle: 'backend',
      titleDemand: [
        'Опыт коммерческой разработки от 1 года',
        'Уверенное владение PHP, MySQL/PostgreSQL',
        'Понимание устройства как серверной, так и клиентской части',
        'Навыки работы с Apache/Nginx и unix-системами',
        'Умение тестировать свой код',
      ],
      titleConditions: [
        'Оплата труда от 40 000 до N',
        'Гибкое начало рабочего дня, график 5/2',
        'Менторинг со стороны разработчиков уровня middle, senior',
        'Работа в офисе, в Железнодорожном районе города Ульяновска',
        'Интересные проекты, связанные с разными областями жизни',
      ],
      key: 3,
    },
    middle: {
      header: 'middle',
      subtitle: 'backend',
      titleDemand: [
        'Опыт коммерческой разработки от 2 лет',
        'Умение проектировать архитектуры приложений и структур баз данных',
        'Уверенное владение PHP, MySQL/PostgreSQL',
        'Навыки работы с Apache/Nginx и unix-системами',
        'Желание тестировать свой код',
      ],
      titleConditions: [
        'Оплата труда от 60 000 до N',
        'Гибкое начало рабочего дня, график 5/2',
        'Работа в офисе, в Железнодорожном районе города Ульяновска',
        'Интересные проекты, связанные с разными областями жизни',
      ],
      key: 4,
    },
    intern: {
      header: 'intern',
      subtitle: 'backend',
      titleCapabilities: [
        'Старт карьеры в IT',
        'Бесплатное обучение',
        'Оборудование для работы',
        'Личный ментор',
      ],
      key: 1,
    },
  },
  frontend: {
    header: 'frontend',
    title:
      'Мы постоянно нуждаемся во Frontend-разработчиках, умеющих и любящих верстать и разрабатывать на JS. Предлагая решать нетривиальные задачи, мы одновременно предлагаем комфортные условия труда, при которых развитие не только возможно, но и обязательно.',
    junior: {
      header: 'junior',
      subtitle: 'frontend',
      titleDemand: [
        'Опыт коммерческой разработки на React.js/Vue.js от 1 года',
        'Понимание компонентного подхода и методологии BEM',
        'Опыт написания SSR приложений',
        'Умение тестировать свой код',
        'Знание синтаксиса ES6+',
      ],
      titleConditions: [
        'Оплата труда от 40 000 до N',
        'Гибкое начало рабочего дня, график 5/2',
        'Менторинг со стороны разработчиков уровня middle, senior',
        'Работа в офисе, в Железнодорожном районе города Ульяновска',
        'Интересные проекты, связанные с разными областями жизни',
      ],
      key: 5,
    },
    middle: {
      header: 'middle',
      subtitle: 'frontend',
      titleDemand: [
        'Опыт коммерческой разработки на React.js/Vue.js от 2 лет',
        'Понимание компонентного подхода и методологии BEM',
        'Опыт написания SSR приложений',
        'Желание тестировать свой код',
        'Знание синтаксиса ES6+',
      ],
      titleConditions: [
        'Оплата труда от 60 000 до N',
        'Гибкое начало рабочего дня, график 5/2',
        'Работа в офисе, в Железнодорожном районе города Ульяновска',
        'Интересные проекты, связанные с разными областями жизни',
      ],
      key: 6,
    },
    intern: {
      header: 'intern',
      subtitle: 'FRONTEND',
      titleCapabilities: [
        'Старт карьеры в IT',
        'Бесплатное обучение',
        'Оборудование для работы',
        'Личный ментор',
      ],
      key: 2,
    },
  },
};

export const dataCareerSidebar = [
  {
    header: 'ГОРЯЩИЕ ВАКАНСИИ',
    subtitle: 'ПОДРОБНЕЕ НА hh',
    close: false,
    keys: [1, 2],
    content: [
      {
        title: 'intern',
        subtitle: 'backend',
        sum: 'доход от 15 000 ₽',
        key: 1,
      },
      {
        title: 'intern',
        subtitle: 'frontend',
        sum: 'доход от 15 000 ₽',
        key: 2,
      },
    ],
  },
  {
    header: 'backend',
    subtitle: 'СЕРВЕРНАЯ ЧАСТЬ',
    close: false,
    keys: [3, 4],
    content: [
      {
        title: 'junior',
        subtitle: 'backend',
        sum: 'доход от 40 000 ₽',
        key: 3,
      },
      {
        title: 'middle',
        subtitle: 'backend',
        sum: 'доход от 60 000 ₽',
        key: 4,
      },
    ],
  },
  {
    header: 'frontend',
    subtitle: 'ПОЛЬЗОВАТЕЛЬСКАЯ ЧАСТЬ',
    close: false,
    keys: [5, 6],
    content: [
      {
        title: 'junior',
        subtitle: 'frontend',
        sum: 'доход от 40 000 ₽',
        key: 5,
      },
      {
        title: 'middle',
        subtitle: 'frontend',
        sum: 'доход от 60 000 ₽',
        key: 6,
      },
    ],
  },
  {
    header: 'HR',
    subtitle: 'HEADHUNTER',
    close: true,
    keys: [7],
  },
  {
    header: 'SALES',
    subtitle: 'ОТДЕЛ ПРОДАЖ',
    close: true,
    keys: [8],
  },
  {
    header: 'WEB-DESIGN',
    subtitle: 'UI/UX',
    close: true,
    keys: [9],
  },
];
