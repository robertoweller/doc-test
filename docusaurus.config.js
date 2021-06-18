/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Photon',
  tagline: 'Lightning fast and portable programming language!',
  url: 'https://photon-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'photon', // Usually your GitHub org/user name.
  projectName: 'photon', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Photon',
      logo: {
        alt: 'Photon logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
	{
          href: 'https://github.com/HashLDash/Photon',
          label: 'GitHub',
          position: 'left',
        },
	{href: 'https://www.patreon.com/hashldash', label: 'Patreon', position: 'right'},
        {to: '/blog', label: 'Blog', position: 'right'},
	{to: 'docs/vlog', label: 'Vlog', position: 'right'},
        {to: '/blog/welcome', label: 'Community', position: 'right'},
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
              label: 'Discussions',
              href: 'https://github.com/HashLDash/Photon/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/GdgAVEuY92',
            },
            {
              label: 'Youtube Português',
	      href: 'https://www.youtube.com/user/11Wills11',
            },
            {
              label: 'Youtube English',
              href: 'https://www.youtube.com/channel/UChE5M9BAsdtlllOpfhIu8Tw',
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
              href: 'https://github.com/HashLDash/Photon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/robertoweller/doc-test/edit/master',
        },
        blog: {
          showReadingTime: true,
          // My  repo
          editUrl:
            'https://github.com/robertoweller/doc-test/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
