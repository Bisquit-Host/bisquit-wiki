---
sidebar: auto
---

# Отключение Encrypted Client Hello (ECH) на бесплатном тарифе Cloudflare через API

:::info Зачем отключать ECH?
Роскомнадзор заблокировал технологию Encrypted Client Hello (ECH), что вызвало проблемы для пользователей Cloudflare в России. Более того, Cloudflare принудительно активировал эту технологию для всех пользователей, включая тех, кто находится на бесплатном тарифе. В этом гайде мы разберем как отключить ECH для вашего домена через Cloudflare API
::: 

## Шаг 1: Проверка включения ECH

Прежде чем отключать ECH, проверьте, включен ли он для вашего домена. Это можно сделать с помощью запроса к Google Public DNS:

1. Перейдите по следующей ссылке, заменив `[ВАШ_ДОМЕН]` на имя вашего домена:
   ```
   https://dns.google/resolve?name=[ВАШ_ДОМЕН]&type=HTTPS
   ```
2. Если в результатах видно, что ECH активен, переходите к следующему шагу

## Шаг 2: Получение данных для Cloudflare API

Для взаимодействия с API вам понадобятся два ключевых элемента:

### Global API Key

1. Перейдите на эту страницу [Cloudflare](https://dash.cloudflare.com/profile/api-tokens).
2. Найдите раздел с вашим **Global API Key** и скопируйте ключ

### Zone ID

1. Зайдите в панель управления вашим доменом в Cloudflare.
2. Прокрутите страницу вниз и скопируйте значение **Zone ID**.

## Шаг 3: Отключение ECH через Cloudflare API

### Использование команды `curl`

Для отключения ECH выполните следующую команду в терминале, заменив `{ID_ZONE}`, `{ACCOUNT_EMAIL}` и `{GLOBAL_API_KEY}` на ваши данные:

```bash
curl -X PATCH "https://api.cloudflare.com/client/v4/zones/{ID_ZONE}/settings/ech" \
     -H "X-Auth-Email: {ACCOUNT_EMAIL}" \
     -H "X-Auth-Key: {GLOBAL_API_KEY}" \
     -H "Content-Type:application/json" --data '{"id":"ech","value":"off"}'
```

### Использование Postman

Вы можете выполнить этот запрос через Postman, следуя инструкциям:

1. Выберите метод **PATCH** и укажите URL:
   ```
   https://api.cloudflare.com/client/v4/zones/{ID_ZONE}/settings/ech
   ```

2. В разделе **Headers** добавьте следующие поля:
   - `X-Auth-Email`: ваш email-адрес Cloudflare
   - `X-Auth-Key`: ваш Global API Key
   - `Content-Type`: `application/json`

3. В разделе **Body** выберите **raw** и введите следующий JSON:
   ```json
   {
     "id": "ech",
     "value": "off"
   }
   ```
## В случае с платным тарифом

Если вы используете платный тариф Cloudflare, отключить ECH можно через интерфейс панели управления:

1. Перейдите в раздел **SSL/TLS**

2. Откройте вкладку **Edge Certificates**

3. Найдите настройку **Encrypted ClientHello (ECH)** и установите значение **Disabled**