const { description } = require('../../package')

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/cake/' : '/',
  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CAKE',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/cake/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1E23B9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Kubernetes',
        link: '/kubernetes/',
      }
    ],
    sidebar: {
      '/kubernetes/': [
        {
          title: 'Kubernetes',
          collapsable: true,
          children: [
            '',
            'architecture',
            'pod',
            'pod_spec',
            'volume',
            'networking'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-mermaidjs'
  ]
}
