import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Bisquit Wiki",
  description: "База знаний лучшего хостинга Bisquit.Host",
  themeConfig: {
    logo: '/64.webp',
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
        text: 'Услуги',
        collapsed: false,
        items: [
          { text: 'Выбор тарифа Minecraft', link: '/choose-plan' },
        ]
      },
      {
        text: 'Настройка Сервера',
        collapsed: false,
        items: [
          { text: 'Настройка server.properties', link: '/server-properties' },
        ]
      },
      {
        text: 'Cloudflare',
        collapsed: false,
        items: [
		  { text: 'Перенос домена', link: '/transfer-domain' },
          { text: 'Привязка домена', link: '/connect-domain' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bisquit-Host' }
    ]
  }
})
