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
		  { text: 'ЧАВО', link: '/services/faq' },
          { text: 'Выбор тарифа Minecraft', link: '/services/choose-plan' }
        ]
      },
      {
        text: 'Настройка Сервера',
        collapsed: false,
        items: [
		  { text: 'server.properties', link: '/server-configuration/server-properties' },
		  { text: 'Установка ресурспака', link: '/server-configuration/install-rp' },
		  { text: 'Загрузка своего мира', link: '/server-configuration/upload-world' },
		  { text: 'Как подключиться через FileZilla', link: '/server-configuration/filezilla' },
		  { text: 'Ядра', link: '/server-configuration/serverjars' },
		  { text: 'Установка ядра', link: '/server-configuration/installcore' },
		  { text: 'Базовая оптимизация', link: '/server-configuration/basic-optimization' }
        ]
      },
      {
        text: 'Проблемы',
        collapsed: false,
        items: [
		  { text: 'Большой пинг', link: '/issues/big-ping' },
		  { text: 'EULA', link: '/issues/eula' }
        ]
      },
      {
        text: 'Ошибки',
        collapsed: false,
        items: [
          {
            text: 'Не удалось проверить имя пользователя',
            link: '/errors/onlinemode'
          },
          {
            text: 'getsockopt',
            link: '/errors/getsockopt'
          },
		  {
            text: 'Открытый ключ профиля отсутствует...',
            link: '/errors/enforcesecure'
          }
        ]
      },
      {
        text: 'Cloudflare',
        collapsed: false,
        items: [
		  { text: 'Отключение ECH', link: '/cloudflare/ech' },
		  { text: 'Перенос домена', link: '/cloudflare/transfer-domain' },
          { text: 'Привязка домена', link: '/cloudflare/connect-domain' },
		  { text: 'Подключение онлайн карты к домену', link: '/cloudflare/originrules' }
        ]
      },
      {
        text: 'Cборки/Плагины',
        collapsed: false,
        items: [
          { text: 'Плагины', link: '/modpacks-plugins/plugins' },
		  { text: 'Датапаки', link: '/modpacks-plugins/datapacks' },
		  { text: 'Spark', link: '/modpacks-plugins/spark' },
		  { text: 'PlasmoVoice', link: '/modpacks-plugins/plasmovoice' },
          { text: 'SimpleVoiceChat', link: '/modpacks-plugins/simplevoicechat' },
          { text: 'Lost Souls', link: '/modpacks-plugins/lostsouls' },
          { text: 'Chunky', link: '/modpacks-plugins/chunky' },
		  { text: 'EnderaBank', link: '/modpacks-plugins/ebank' },
		  { text: 'EnderaPassport', link: '/modpacks-plugins/epassport' },
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