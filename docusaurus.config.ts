import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Путеводитель по Мексике',
  tagline: 'Путешествие сквозь время от ковбоев до древних майя',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mexica-travel-guide.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CentOsss', // Usually your GitHub org/user name.
  projectName: 'mexica-travel-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docusaurus_doc',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CentOsss/mexica-travel-guied/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CentOsss/mexica-travel-guied/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Путеводитель по Мексике',
      logo: {
        alt: 'Логотип Путеводителя по Мексике',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Путеводитель',
        },
        {to: '/blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/CentOsss/mexica-travel-guied',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Путеводитель',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'Планирование',
              to: '/docs/tutorial-basics/create-a-document',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/CentOsss/mexica-travel-guied/issues',
            },
            {
              label: 'Email',
              href: 'mailto:i@bashroo.ru',
            },
          ],
        },
        {
          title: 'Больше',
          items: [
            {
              label: 'Блог',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/CentOsss/mexica-travel-guied',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Путеводитель по Мексике. Создано с ❤️ для путешественников.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
