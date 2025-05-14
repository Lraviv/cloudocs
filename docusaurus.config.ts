import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ClouDocs',
  tagline: 'Documentation for Cloud Services',
  favicon: '/img/cloudio-logo.png',
  url: 'https://cloudocs',
  baseUrl: '/',
  organizationName: 'cloudio', 
  projectName: 'cloudocs', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    search: {
      // לאופציות מותאמות אישית כאן
      placeholder: 'חפש...',
      versioned: true, // אם יש לך גרסאות
    },
    navbar: {
      title: 'Cloudocs',
      logo: {
        alt: 'Cloudocs Logo',
        src: 'img/cloudio-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        // הגדרות החיפוש
        hashed: true, // שימור חיפוש עם Hash
        docsRouteBasePath: '/', // אם הדוקומנטציה שלך בשורש
        indexDocs: true, // אינדוקס לדוקומנטציה
        indexPages: true, // אינדוקס לדפים סטטיים
      },
    ],
  ],
  customFields: {
    image: '',
    keywords: [],
  },
};




export default config;
