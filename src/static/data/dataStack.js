const icons = {
  row1col2: [
    {
      Icon: 'jQuery',
      id: 1,
      title: 'jQuery',
    },
    {
      Icon: 'Vue',
      id: 2,
      title: 'Vue',
    },
    {
      Icon: 'React',
      id: 3,
      title: 'React',
    },
    {
      Icon: 'Angular',
      id: 4,
      title: 'Angular',
    },
  ],
  row2col2: [
    {
      Icon: 'Laravel',
      id: 1,
      title: 'Laravel',
    },
    {
      Icon: 'Symfony',
      id: 2,
      title: 'Symfony',
    },
    {
      Icon: 'Yii',
      id: 3,
      title: 'Yii',
    },
  ],
  row3col2: [
    {
      Icon: 'Dagger 2',
      id: 1,
      title: 'Dagger 2',
    },
    {
      Icon: 'RxJava 2',
      id: 2,
      title: 'RxJava 2',
    },
    {
      Icon: 'Retrofit',
      id: 3,
      title: 'Retrofit',
    },
    {
      Icon: 'React',
      id: 4,
      title: 'React Native',
    },
  ],
  row1col3: [
    {
      Icon: 'ReactRouter',
      id: 1,
      title: 'React-router',
    },
    {
      Icon: 'Redux',
      id: 2,
      title: 'Redux',
    },
    {
      Icon: 'MobX',
      id: 3,
      title: 'MobX',
    },
    {
      Icon: 'Vuetify',
      id: 4,
      title: 'Vuetify',
    },
    {
      Icon: 'ReduxSaga',
      id: 5,
      title: 'Redux-Saga',
    },
    {
      Icon: 'MaterialUi',
      id: 6,
      title: 'Material-UI',
    },
    {
      Icon: 'NuxtJs',
      id: 7,
      title: 'Nuxt.js',
    },
    {
      Icon: 'NextJs',
      id: 8,
      title: 'Next.js',
    },
    {
      Icon: 'GatsbyJs',
      id: 9,
      title: 'Gatsby.js',
    },
    {
      Icon: 'Gridsome',
      id: 10,
      title: 'Gridsome',
    },
  ],
  row2col3: [
    {
      Icon: 'VirtualBox',
      id: 1,
      title: 'Virtualbox',
    },
    {
      Icon: 'Vagrant',
      id: 2,
      title: 'Vagrant',
    },
    {
      Icon: 'Docker',
      id: 3,
      title: 'Docker',
    },
    {
      Icon: 'GraphQL',
      id: 4,
      title: 'GraphQL',
    },
    {
      Icon: 'LaravelForge',
      id: 5,
      title: 'Laravel forge',
    },
    {
      Icon: 'Codeception',
      id: 6,
      title: 'Codeception',
    },
    {
      Icon: 'RestApi',
      id: 7,
      title: 'REST API',
    },
    {
      Icon: 'Composer',
      id: 8,
      title: 'Composer',
    },
    {
      Icon: 'Jwt',
      id: 9,
      title: 'JWT',
    },
    {
      Icon: 'JsonApi',
      id: 10,
      title: 'JSON API',
    },
    {
      Icon: 'TravisCi',
      id: 11,
      title: 'Travis CI',
    },
    {
      Icon: 'MySQL',
      id: 12,
      title: 'MySQL',
    },
  ],
  row3col3: [
    {
      Icon: 'WebSockets',
      id: 1,
      title: 'WebSockets',
    },
    {
      Icon: 'Nginx',
      id: 2,
      title: 'Nginx',
    },
    {
      Icon: 'LaravelNova',
      id: 3,
      title: ' Laravel nova',
    },
    {
      Icon: 'GitlabCi',
      id: 4,
      title: 'GitLab CI',
    },
    {
      Icon: 'Homestead',
      id: 5,
      title: 'Homestead',
    },
    {
      Icon: 'Apache',
      id: 6,
      title: 'Apache',
    },
    {
      Icon: 'LaravelPassport',
      id: 7,
      title: 'Laravel passport',
    },
    {
      Icon: 'Git',
      id: 8,
      title: 'Git',
    },
    {
      Icon: 'MongoDB',
      id: 9,
      title: 'MongoDB',
    },
    {
      Icon: 'PostgreSQL',
      id: 10,
      title: 'PostgreSQL',
    },
    {
      Icon: 'RatchelPHP',
      id: 11,
      title: 'RatchetPHP',
    },
  ],
};

export const infoArr = {
  'line-one': [
    'от <strong>400</strong> рублей/час',
    '<strong>8</strong> разработчиков',
    '<strong>50</strong> проектов под нда',
    'от <strong>20</strong> часов загрузки',
  ],
  'line-two': [
    'от <strong>600</strong> рублей/час',
    '<strong>5</strong> разработчиков',
    '<strong>50</strong> проектов под нда',
    'от <strong>20</strong> часов загрузки',
  ],
  'line-three': [
    'от <strong>900</strong> рублей/час',
    '<strong>2</strong> разработчика',
    '<strong>50</strong> проектов под нда',
    'от <strong>20</strong> часов загрузки',
  ],
};

export const linesArr = [
  { label: 'Frontend', frameworks: icons.row1col2, technologies: icons.row1col3, info: infoArr['line-one'] },
  { label: 'Backend', frameworks: icons.row2col2, technologies: icons.row2col3, info: infoArr['line-two'] },
  { label: 'Mobile', frameworks: icons.row3col2, technologies: icons.row3col3, info: infoArr['line-three'] },
];
