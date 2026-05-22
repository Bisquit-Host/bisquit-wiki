export const SECTION_LABELS: Record<string, string> = {
  cloudflare: 'Cloudflare',
  errors: 'Ошибки',
  issues: 'Проблемы',
  'modpacks-plugins': 'Сборки/Плагины',
  'server-configuration': 'Настройка сервера',
  services: 'Услуги'
}

export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  '/cloudflare/': [
    'cloudflare',
    'dns',
    'домен',
    'запись',
    'srv',
    'a record',
    'поддомен'
  ],
  '/errors/': [
    'ошибка',
    'исправить',
    'не работает',
    'minecraft',
    'майнкрафт',
    'подключение'
  ],
  '/issues/': ['проблема', 'ошибка', 'minecraft', 'майнкрафт', 'сервер'],
  '/modpacks-plugins/': [
    'моды',
    'плагины',
    'сборки',
    'plugin',
    'modpack',
    'minecraft'
  ],
  '/server-configuration/': [
    'настройка',
    'сервер',
    'minecraft',
    'майнкрафт',
    'хостинг',
    'панель'
  ],
  '/services/': ['услуги', 'тариф', 'панель', 'биллинг', 'хостинг', 'аккаунт']
}

export const PAGE_KEYWORDS: Record<string, string[]> = {
  '/cloudflare/connect-domain': [
    'ip',
    'айпи',
    'адрес',
    'srv',
    'a record',
    'minecraft tcp',
    'подключение по домену',
    'join'
  ],
  '/cloudflare/ech': [
    'encrypted client hello',
    'ech',
    'api',
    'роскомнадзор',
    'https dns',
    'google dns',
    'zone id',
    'global api key'
  ],
  '/cloudflare/originrules': [
    'origin rules',
    'динамическая карта',
    'веб карта',
    'bluemap',
    'dynmap',
    'squaremap',
    'веб сервер'
  ],
  '/cloudflare/transfer-domain': [
    'перенос домена',
    'dns серверы',
    'nameserver',
    'reg.ru',
    'регистратор'
  ],
  '/errors/enforcesecure': [
    'enforce-secure-profile',
    'secure profile',
    'ключ профиля',
    'открытый ключ',
    'no chat reports',
    'antipopup',
    'пиратка'
  ],
  '/errors/getsockopt': [
    'getsockopt',
    'connection timed out',
    'таймаут',
    'безопасность windows',
    'брандмауэр',
    'подключиться'
  ],
  '/errors/onlinemode': [
    'online-mode',
    'online mode',
    'не удалось проверить имя пользователя',
    'пиратка',
    'лицензия',
    'authme',
    'авторизация'
  ],
  '/issues/big-ping': [
    'пинг',
    'ping',
    'задержка',
    'лаги',
    'соединение',
    'провайдер',
    'игроки'
  ],
  '/issues/eula': ['eula.txt', 'eula=true', 'лицензия', 'соглашение', 'запуск'],
  '/modpacks-plugins/chunky': [
    'chunky',
    'чанки',
    'прогрузка',
    'pregen',
    'генерация мира',
    'chunk'
  ],
  '/modpacks-plugins/datapacks': [
    'datapack',
    'датапак',
    'дата пак',
    'world/datapacks',
    'reload',
    'minecraft'
  ],
  '/modpacks-plugins/ebank': [
    'enderabank',
    'банк',
    'экономика',
    'деньги',
    'счета',
    'транзакции',
    'плейсхолдеры'
  ],
  '/modpacks-plugins/epassport': [
    'enderapassport',
    'паспорт',
    'анкета',
    'команды',
    'права',
    'конфиг'
  ],
  '/modpacks-plugins/kingdom-of-might-and-magic': [
    'kingdom of might and magic',
    'komam',
    'сборка',
    'модпак'
  ],
  '/modpacks-plugins/lostsouls': [
    'lost souls',
    'сборка',
    'модпак',
    'curseforge',
    'клиентская сборка'
  ],
  '/modpacks-plugins/plasmovoice': [
    'plasmovoice',
    'plasmo voice',
    'голосовой чат',
    'voice chat',
    'udp',
    'config.toml',
    'микрофон'
  ],
  '/modpacks-plugins/plasmovoice-proxy': [
    'plasmovoice proxy',
    'velocity',
    'bungeecord',
    'forwarding secret',
    'udp',
    'host',
    'прокси',
    'голосовой чат'
  ],
  '/modpacks-plugins/plugins': [
    'плагины',
    'authme',
    'geyser',
    'floodgate',
    'viaversion',
    'luckperms',
    'worldedit',
    'worldguard'
  ],
  '/modpacks-plugins/simplevoicechat': [
    'simple voice chat',
    'simplevoicechat',
    'voicechat',
    'голосовой чат',
    'udp',
    'voicechat-server.properties',
    'микрофон'
  ],
  '/modpacks-plugins/spark': [
    'spark',
    'tps',
    'mspt',
    'profiler',
    'профилировщик',
    'tickmonitor',
    'lag spike',
    'лаги'
  ],
  '/server-configuration/basic-optimization': [
    'оптимизация',
    'tps',
    'mspt',
    'paper',
    'purpur',
    'spigot',
    'bukkit',
    'чанки',
    'мобы',
    'hopper',
    'redstone'
  ],
  '/server-configuration/bbr': [
    'bbr',
    'tcp',
    'ping',
    'пинг',
    'задержка',
    'linux',
    'sysctl',
    'cubic'
  ],
  '/server-configuration/filezilla': [
    'filezilla',
    'ftp',
    'sftp',
    'файлы',
    'подключиться',
    'файловый менеджер'
  ],
  '/server-configuration/install-rp': [
    'resource pack',
    'resource-pack',
    'ресурспак',
    'ресурс пак',
    'текстурпак',
    'sha-1',
    'server.properties'
  ],
  '/server-configuration/installcore': [
    'ядро',
    'server.jar',
    'paper',
    'purpur',
    'spigot',
    'forge',
    'fabric',
    'установка ядра'
  ],
  '/server-configuration/port-allocation': [
    'порт',
    'порты',
    'udp',
    'tcp',
    'voice chat',
    'geyser',
    'bedrock',
    'minecraft java'
  ],
  '/server-configuration/server-properties': [
    'server.properties',
    'online-mode',
    'server-port',
    'motd',
    'view-distance',
    'simulation-distance',
    'resource-pack',
    'difficulty'
  ],
  '/server-configuration/serverjars': [
    'ядра',
    'paper',
    'purpur',
    'spigot',
    'forge',
    'fabric',
    'neoforge',
    'velocity',
    'bungeecord',
    'mohist'
  ],
  '/server-configuration/upload-world': [
    'мир',
    'world',
    'saves',
    'загрузить карту',
    'перенести мир',
    'minecraft saves'
  ],
  '/services/choose-plan': [
    'тариф',
    'план',
    'ram',
    'озу',
    'ядра',
    'слоты',
    'minecraft',
    'цена'
  ],
  '/services/faq': [
    'faq',
    'чаво',
    'discord',
    'роль клиента',
    'no account matching those credentials',
    'язык панели',
    'отмена',
    'возврат'
  ]
}
