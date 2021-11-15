module.exports = {
  title: "Kambista",
  description: "Proyecto base de frontend",
  logo : '/favicon.ico',
  extend: '@vuepress/theme-default',
  themeConfig: {
    search: false,
    contributors: false,
    sidebar: [
      {
        text: "Estructura",
        link : '/structure/README.md',
      },
      {
        text: "Componentes",
        isGroup: true,
        children: [
          '/components/BaseCard.md',
          '/components/Button.md',
          '/components/Checkbox.md',
          '/components/Clipboard.md',
          '/components/Dropdown.md',
          '/components/Highlight.md',
          '/components/Input.md',
          '/components/Layouts.md',
          '/components/Loading.md',
          '/components/Modal.md',
          '/components/Radio.md',
          '/components/Select.md',
          '/components/Text.md',
          '/components/Upload.md',
        ],
      },
    ],
  },
};
