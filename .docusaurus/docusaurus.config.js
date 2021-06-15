export default {
  "title": "Photon",
  "tagline": "Lightning fast and portable programming language!",
  "url": "https://photon-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "photon",
  "projectName": "photon",
  "themeConfig": {
    "navbar": {
      "title": "Photon",
      "logo": {
        "alt": "Photon logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Docs",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/HashLDash/Photon",
          "label": "GitHub",
          "position": "left"
        },
        {
          "href": "https://www.patreon.com/hashldash",
          "label": "Patreon",
          "position": "right"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "to": "/blog/welcome",
          "label": "Community",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discussions",
              "href": "https://github.com/HashLDash/Photon/discussions"
            },
            {
              "label": "Discord",
              "href": "https://discord.com/invite/GdgAVEuY92"
            },
            {
              "label": "Youtube Português",
              "href": "https://www.youtube.com/user/11Wills11"
            },
            {
              "label": "Youtube English",
              "href": "https://www.youtube.com/channel/UChE5M9BAsdtlllOpfhIu8Tw"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/HashLDash/Photon"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 My Project, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "B",
        "darkIconStyle": {},
        "lightIcon": "D",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/roberto/Documentos/sites/novo/doc-test/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/roberto/Documentos/sites/novo/doc-test/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};
