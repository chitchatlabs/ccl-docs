const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

module.exports = {
  title: "ChitChatLabs",
  tagline: "Turning chats into tech",
  url: "https://docs.chitchatlabs.com", // Your custom domain
  baseUrl: "/", // Set this to "/" for custom domains
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "chitchatlabs", // Your GitHub username or org
  projectName: "ccl-docs", // Your repo name

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/' // Root of the documentation
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "ChitChatLabs Logo",
        src: "img/logo-header.png"
      }
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} ChitChatLabs. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
};