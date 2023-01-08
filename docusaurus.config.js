const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rúben Rodrigues',
  tagline: 'UI / UX Designer — Full time creative',
  url: 'https://rubro.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rubrodc', 
  projectName: 'rubro', 
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rubrodc/rubro/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/rubrodc/rubro/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
      }
    ],
    'docusaurus-lunr-search',
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mylogo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Digital Garden',
          },
          {
            to: '/resources/intro', 
            position: 'left',
            label: 'Resources',
            activeBaseRegex: `/resources/`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Rúben Rodrigues. Made in Portugal 🇵🇹`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
