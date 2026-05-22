const STOP_WORDS = new Set([
  'а',
  'без',
  'бы',
  'в',
  'вам',
  'вас',
  'ваш',
  'ваша',
  'ваше',
  'ваши',
  'во',
  'все',
  'для',
  'до',
  'его',
  'ее',
  'если',
  'же',
  'за',
  'и',
  'или',
  'из',
  'как',
  'когда',
  'на',
  'над',
  'не',
  'но',
  'о',
  'об',
  'от',
  'по',
  'под',
  'при',
  'с',
  'со',
  'так',
  'то',
  'у',
  'уже',
  'что',
  'чтобы',
  'это',
  'этот',
  'the',
  'a',
  'an',
  'and',
  'for',
  'from',
  'how',
  'in',
  'is',
  'of',
  'on',
  'or',
  'to',
  'with'
])

const TERM_ALIASES: Record<string, string[]> = {
  authme: ['авторизация', 'логин', 'пиратка', 'пиратский'],
  bbr: ['пинг', 'задержка', 'tcp', 'сеть'],
  bluemap: ['карта', 'динамическая', 'вебкарта', 'map'],
  bukkit: ['плагин', 'plugins'],
  cloudflare: ['dns', 'домен', 'зона', 'cf'],
  curseforge: ['моды', 'сборка', 'modpack'],
  datapack: ['датапак', 'дата-пак', 'datapacks'],
  datapacks: ['датапак', 'дата-пак', 'datapack'],
  dns: ['домен', 'cloudflare', 'srv', 'record', 'запись'],
  eula: ['лицензия', 'соглашение', 'eula.txt'],
  fabric: ['моды', 'modloader', 'модлоадер'],
  filezilla: ['ftp', 'sftp', 'файлы', 'файловый'],
  forge: ['моды', 'modloader', 'модлоадер'],
  geyser: ['bedrock', 'бедрок', 'телефон', 'консоль'],
  ip: ['айпи', 'адрес', 'address'],
  java: ['minecraft', 'майнкрафт'],
  minecraft: ['майнкрафт', 'mc', 'мс'],
  mod: ['мод', 'моды'],
  modpack: ['сборка', 'модпак', 'моды'],
  modrinth: ['моды', 'плагины', 'datapack'],
  paper: ['ядро', 'server.jar', 'серверное'],
  plasmovoice: ['plasmo', 'voice', 'voicechat', 'голосовой', 'войс', 'микрофон'],
  plugin: ['плагин', 'плагины', 'plugins'],
  plugins: ['плагин', 'плагины', 'plugin'],
  port: ['порт', 'порты', 'udp', 'tcp'],
  purpur: ['ядро', 'paper', 'spigot'],
  resourcepack: ['ресурспак', 'ресурс-пак', 'рп', 'текстурпак', 'текстуры'],
  server: ['сервер', 'хостинг', 'server.jar'],
  simplevoicechat: ['simple', 'voice', 'voicechat', 'голосовой', 'войс', 'микрофон'],
  spark: ['tps', 'mspt', 'профайлер', 'профилировщик', 'лаги', 'производительность'],
  spigot: ['ядро', 'bukkit', 'плагины'],
  srv: ['dns', 'домен', 'порт', 'record'],
  tcp: ['сеть', 'порт', 'bbr'],
  tps: ['лаги', 'производительность', 'spark', 'тик'],
  udp: ['порт', 'voicechat', 'голосовой'],
  velocity: ['proxy', 'прокси', 'bungeecord'],
  voice: ['voicechat', 'голосовой', 'войс', 'plasmovoice', 'simplevoicechat'],
  voicechat: ['voice', 'голосовой', 'войс', 'plasmovoice', 'simplevoicechat'],
  world: ['мир', 'карта', 'saves'],
  айпи: ['ip', 'адрес'],
  авторизация: ['authme', 'логин', 'пиратка', 'online-mode'],
  бедрок: ['bedrock', 'geyser'],
  вебкарта: ['map', 'карта', 'bluemap', 'dynmap'],
  войс: ['voice', 'voicechat', 'голосовой', 'plasmovoice', 'simplevoicechat'],
  голос: ['voice', 'voicechat', 'голосовой'],
  голосовой: ['voice', 'voicechat', 'войс', 'plasmovoice', 'simplevoicechat'],
  дата: ['datapack', 'datapacks'],
  датапак: ['datapack', 'datapacks', 'дата-пак'],
  домен: ['domain', 'dns', 'cloudflare', 'srv'],
  задержка: ['пинг', 'ping', 'bbr'],
  карта: ['map', 'world', 'мир', 'bluemap', 'dynmap'],
  лаги: ['spark', 'tps', 'mspt', 'производительность', 'оптимизация'],
  лицензия: ['eula', 'online-mode'],
  майнкрафт: ['minecraft', 'mc', 'мс'],
  мир: ['world', 'saves', 'карта'],
  мод: ['mod', 'mods', 'forge', 'fabric'],
  моды: ['mods', 'modpack', 'forge', 'fabric'],
  пинг: ['ping', 'задержка', 'bbr', 'spark'],
  пиратка: ['online-mode', 'authme', 'лицензия', 'неудачная', 'проверка'],
  плагин: ['plugin', 'plugins', 'bukkit', 'spigot', 'paper'],
  плагины: ['plugin', 'plugins', 'bukkit', 'spigot', 'paper'],
  порт: ['port', 'ports', 'udp', 'tcp'],
  порты: ['port', 'ports', 'udp', 'tcp'],
  производительность: ['optimization', 'spark', 'tps', 'mspt', 'лаги'],
  прокси: ['proxy', 'velocity', 'bungeecord'],
  ресурспак: ['resourcepack', 'resource-pack', 'рп', 'текстурпак'],
  сборка: ['modpack', 'mods', 'моды'],
  сервер: ['server', 'minecraft', 'хостинг'],
  сеть: ['network', 'tcp', 'udp', 'bbr', 'пинг'],
  текстурпак: ['resourcepack', 'ресурспак', 'resource-pack'],
  хостинг: ['hosting', 'server', 'сервер'],
  чанки: ['chunks', 'chunky', 'прогрузка'],
  ядро: ['paper', 'spigot', 'purpur', 'forge', 'server.jar']
}

const CYRILLIC_ENDINGS = [
  'иями',
  'ями',
  'ами',
  'ого',
  'ему',
  'ыми',
  'ими',
  'ией',
  'иях',
  'ьям',
  'ью',
  'ов',
  'ев',
  'ам',
  'ям',
  'ом',
  'ем',
  'ах',
  'ях',
  'ые',
  'ие',
  'ый',
  'ий',
  'ой',
  'ая',
  'яя',
  'ую',
  'юю',
  'а',
  'я',
  'ы',
  'и',
  'е',
  'у',
  'ю'
]

const TOKEN_RE = /[\p{L}\p{N}]+(?:[._:+#/-][\p{L}\p{N}]+)*/gu

export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFKC')
    .replace(/ё/g, 'е')
    .replace(/Ё/g, 'Е')
    .replace(/[‐‑‒–—−]/g, '-')
    .replace(/[“”«»]/g, '"')
    .replace(/[’`]/g, "'")
    .toLocaleLowerCase('ru-RU')
}

export function tokenizeSearchText(value: string): string[] {
  const tokens = new Set<string>()

  for (const rawToken of value.match(TOKEN_RE) ?? []) {
    const camelSplit = rawToken.replace(/([\p{Ll}\d])(\p{Lu})/gu, '$1 $2')
    for (const token of [rawToken, ...camelSplit.split(/\s+/)]) {
      const normalized = normalizeSearchText(token).trim()
      if (!normalized) continue

      tokens.add(normalized)

      if (/[._:+#/-]/.test(normalized)) {
        tokens.add(normalized.replace(/[._:+#/-]+/g, ''))
        for (const part of normalized.split(/[._:+#/-]+/)) {
          if (part) tokens.add(part)
        }
      }
    }
  }

  return [...tokens]
}

export function processSearchTerm(term: string): string | string[] | null {
  const normalized = normalizeSearchText(term).trim()
  if (!normalized || STOP_WORDS.has(normalized)) return null
  if (normalized.length < 2 && !/^\d+$/.test(normalized)) return null

  const terms = new Set<string>([normalized])

  if (/[._:+#/-]/.test(normalized)) {
    terms.add(normalized.replace(/[._:+#/-]+/g, ''))
  }

  for (const variant of getRussianStemVariants(normalized)) {
    terms.add(variant)
  }

  for (const alias of TERM_ALIASES[normalized] ?? []) {
    for (const token of tokenizeSearchText(alias)) {
      const processed = processSearchTermWithoutAliases(token)
      if (processed) terms.add(processed)
    }
  }

  return [...terms]
}

export function getUsefulQueryTerms(query: string): string[] {
  const terms = new Set<string>()

  for (const token of tokenizeSearchText(query)) {
    const processed = processSearchTerm(token)
    const values = Array.isArray(processed) ? processed : processed ? [processed] : []
    for (const value of values) {
      if (value.length >= 3 || /^[\d.]+$/.test(value)) terms.add(value)
    }
  }

  return [...terms]
}

function processSearchTermWithoutAliases(term: string): string | null {
  const normalized = normalizeSearchText(term).trim()
  if (!normalized || STOP_WORDS.has(normalized)) return null
  if (normalized.length < 2 && !/^\d+$/.test(normalized)) return null
  return normalized
}

function getRussianStemVariants(term: string): string[] {
  if (!/[а-я]/.test(term) || term.length < 6) return []

  const variants: string[] = []
  for (const ending of CYRILLIC_ENDINGS) {
    if (!term.endsWith(ending)) continue

    const stem = term.slice(0, -ending.length)
    if (stem.length >= 4) variants.push(stem)
    break
  }

  return variants
}
