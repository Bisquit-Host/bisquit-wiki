import { defineConfig } from 'vitepress'
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/64.webp' }]],
  cleanUrls: true,
  title: "Bisquit Wiki",
  description: "База знаний лучшего хостинга Bisquit.Host",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск"
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      label: "На этой странице",
    },
    logo: '/64.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Bisquit.Host',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Основной сайт', link: 'https://bisquit.host' },
              { text: 'Discord', link: 'https://bisquit.host/discord' },
              { text: 'Telegram', link: 'https://bisquit.host/telegram' },
              { text: 'VK', link: 'https://bisquit.host/vk' }
            ]
          }
        ]
      }
    ],
	docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    sidebar: [
      {
        text: 'Услуги',
        collapsed: false,
        items: [
		  { text: 'ЧАВО', link: '/faq' },
          { text: 'Выбор тарифа Minecraft', link: '/choose-plan' }
        ]
      },
      {
        text: 'Настройка Сервера',
        collapsed: false,
        items: [
		  { text: 'server.properties', link: '/server-properties' },
		  { text: 'Загрузка своего мира', link: '/upload-world' },
		  { text: 'Как подключиться через FileZilla', link: '/filezilla' },
		  { text: 'Ядра', link: '/cores' },
		  { text: 'Установка ядра', link: '/installcore' }
        ]
      },
      {
        text: 'Проблемы',
        collapsed: false,
        items: [
		  { text: 'Большой пинг', link: '/big-ping' },
		  { text: 'EULA', link: '/eula' }
        ]
      },
      {
        text: 'Ошибки',
        collapsed: false,
        items: [
          {
            text: 'Не удалось проверить имя пользователя',
            link: '/onlinemode'
          },
          {
            text: 'getsockopt',
            link: '/getsockopt'
          },
		  {
            text: 'Открытый ключ профиля отсутствует...',
            link: '/enforcesecure'
          }
        ]
      },
      {
        text: 'Cloudflare',
        collapsed: false,
        items: [
		  { text: 'Отключение ECH', link: '/ech' },
		  { text: 'Перенос домена', link: '/transfer-domain' },
          { text: 'Привязка домена', link: '/connect-domain' },
		  { text: 'Подключение онлайн карты к домену', link: '/originrules' }
        ]
      },
      {
        text: 'Cборки/Плагины',
        collapsed: false,
        items: [
          { text: 'Плагины', link: '/plugins' },
          { text: 'Lost Souls', link: '/lostsouls' },
          { text: 'Chunky', link: '/chunky' },
		  { text: 'EnderaBank', link: '/ebank' },
		  { text: 'EnderaPassport', link: '/epassport' },
        ]
	  },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bisquit-Host' }
    ]
  },
    markdown: {
    config: (md) => {
      md.use(lightbox, {});
    },
  }
})