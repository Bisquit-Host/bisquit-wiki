import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Bisquit Wiki",
  description: "База знаний лучшего хостинга Bisquit.Host",
  themeConfig: {
    logo: '/assets/64.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: 'Bisquit.Host',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Основной сайт', link: 'https://bisquit.host' },
              { text: 'Discord', link: 'https://bisquit.host/discord' },
              { text: 'Вконтакте', link: 'https://bisquit.host/vk' },
              { text: 'Telegram', link: 'https://bisquit.host/telegram' },
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Жирный хрыч',
        collapsed: false,
        items: [
          { text: 'PlasmoVoice', link: '/plasmo-voice' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bisquit-Host' }
    ]
  }
})
